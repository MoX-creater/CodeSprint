// Runs user-submitted code against a challenge's test cases.
//
// kind: "fn"        solve(...args) -> value, compared to `expected`
//                     (or test.run(solveFn) for cases that need to call the
//                     returned value, e.g. closures)
// kind: "domRead"   solve(container, ...args) -> value, compared to `expected`.
//                     `container` is a fresh detached <div> built from the
//                     challenge's setupHTML for every test.
// kind: "domMutate" plain statements (not a function) run with `container`
//                     already in scope; each test's check(container) decides
//                     pass/fail.
//
// All execution happens inside a Function constructor scope — it's the
// person's own code, run against their own test cases, never sent anywhere.

function deepEqual(a, b) {
  if (Object.is(a, b)) return true;
  if (typeof a !== typeof b) return false;
  if (a === null || b === null) return false;
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    if (a.length !== b.length) return false;
    return a.every((v, i) => deepEqual(v, b[i]));
  }
  if (typeof a === "object") {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    return aKeys.every((k) => deepEqual(a[k], b[k]));
  }
  return a === b;
}

function formatValue(v) {
  if (v === undefined) return "undefined";
  if (typeof v === "function") return "ƒ (function)";
  try {
    return JSON.stringify(v);
  } catch {
    return String(v);
  }
}

function formatArgs(args) {
  return args.map(formatValue).join(", ");
}

function buildContainer(setupHTML) {
  const el = document.createElement("div");
  if (setupHTML) el.innerHTML = setupHTML;
  return el;
}

async function runFn(userCode, challenge) {
  let solveFn;
  try {
    // eslint-disable-next-line no-new-func
    const factory = new Function(`${userCode}\nreturn typeof solve === "function" ? solve : undefined;`);
    solveFn = factory();
  } catch (err) {
    return { passed: false, compileError: err.message, results: [] };
  }

  if (typeof solveFn !== "function") {
    return {
      passed: false,
      compileError: "No function named `solve` was found. Make sure you define `function solve(...) { ... }`.",
      results: [],
    };
  }

  const results = [];
  for (let i = 0; i < challenge.tests.length; i++) {
    const test = challenge.tests[i];
    try {
      const actual = test.run ? await test.run(solveFn) : await solveFn(...test.args);
      const pass = deepEqual(actual, test.expected);
      results.push({
        index: i,
        pass,
        label: test.args ? `solve(${formatArgs(test.args)})` : `solve()`,
        expectedDisplay: formatValue(test.expected),
        actualDisplay: formatValue(actual),
        error: null,
      });
    } catch (err) {
      results.push({
        index: i,
        pass: false,
        label: test.args ? `solve(${formatArgs(test.args)})` : `solve()`,
        expectedDisplay: formatValue(test.expected),
        actualDisplay: "—",
        error: err.message,
      });
    }
  }

  return { passed: results.every((r) => r.pass), compileError: null, results };
}

async function runDomRead(userCode, challenge) {
  let solveFn;
  try {
    // eslint-disable-next-line no-new-func
    const factory = new Function(`${userCode}\nreturn typeof solve === "function" ? solve : undefined;`);
    solveFn = factory();
  } catch (err) {
    return { passed: false, compileError: err.message, results: [] };
  }

  if (typeof solveFn !== "function") {
    return {
      passed: false,
      compileError: "No function named `solve` was found. Make sure you define `function solve(container) { ... }`.",
      results: [],
    };
  }

  const results = [];
  for (let i = 0; i < challenge.tests.length; i++) {
    const test = challenge.tests[i];
    const container = buildContainer(challenge.setupHTML);
    try {
      const extra = test.args || [];
      const actual = await solveFn(container, ...extra);
      const pass = deepEqual(actual, test.expected);
      results.push({
        index: i,
        pass,
        label: "solve(container)",
        expectedDisplay: formatValue(test.expected),
        actualDisplay: formatValue(actual),
        error: null,
      });
    } catch (err) {
      results.push({
        index: i,
        pass: false,
        label: "solve(container)",
        expectedDisplay: formatValue(test.expected),
        actualDisplay: "—",
        error: err.message,
      });
    }
  }

  return { passed: results.every((r) => r.pass), compileError: null, results };
}

async function runDomMutate(userCode, challenge) {
  const results = [];
  for (let i = 0; i < challenge.tests.length; i++) {
    const test = challenge.tests[i];
    const container = buildContainer(challenge.setupHTML);
    try {
      // eslint-disable-next-line no-new-func
      const runStatements = new Function("container", userCode);
      runStatements(container);
      const pass = !!(await test.check(container));
      results.push({
        index: i,
        pass,
        label: test.description,
        expectedDisplay: null,
        actualDisplay: null,
        error: null,
      });
    } catch (err) {
      return {
        passed: false,
        compileError: err.message,
        results: [],
      };
    }
  }
  return { passed: results.every((r) => r.pass), compileError: null, results };
}

export async function runChallenge(userCode, challenge) {
  if (challenge.kind === "domRead") return runDomRead(userCode, challenge);
  if (challenge.kind === "domMutate") return runDomMutate(userCode, challenge);
  return runFn(userCode, challenge);
}

export { formatArgs, formatValue };
