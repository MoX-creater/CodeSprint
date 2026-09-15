const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

function j(v) { return JSON.stringify(v); }

// ---------- fn-kind spec helper ----------
// spec: { id, title, difficulty, minutes, prompt, starter, ref, argsList }
function buildFn(spec) {
  let tests;
  if (spec.custom) {
    // custom: array of { run: (solveFn) => result, expected }
    tests = spec.custom.map((c) => ({ args: [], run: c.run, expected: c.expected }));
  } else {
    tests = spec.argsList.map((args) => ({ args, expected: spec.ref(...args) }));
  }
  return {
    id: spec.id,
    title: spec.title,
    difficulty: spec.difficulty,
    minutes: spec.minutes,
    kind: "fn",
    prompt: spec.prompt,
    starter: spec.starter,
    tests,
  };
}

// ---------- domRead-kind spec helper (verified via jsdom) ----------
function buildDomRead(spec) {
  const dom = new JSDOM("<!doctype html><html><body></body></html>");
  const document = dom.window.document;
  const container = document.createElement("div");
  container.innerHTML = spec.setupHTML || "";
  const expected = spec.ref(container, dom.window);
  return {
    id: spec.id,
    title: spec.title,
    difficulty: spec.difficulty,
    minutes: spec.minutes,
    kind: "domRead",
    setupHTML: spec.setupHTML,
    prompt: spec.prompt,
    starter: spec.starter,
    tests: [{ expected }],
  };
}

// ---------- domMutate-kind spec helper (self-verified via jsdom) ----------
// Runs `modelCode` (a correct solution) against a jsdom container, then
// asserts every test's check(container) returns true — catching broken
// challenges (bad setupHTML, buggy check function, etc.) at generation time.
function buildDomMutate(spec) {
  const dom = new JSDOM("<!doctype html><html><body></body></html>");
  const document = dom.window.document;
  const container = document.createElement("div");
  container.innerHTML = spec.setupHTML || "";

  // The real runtime (src/lib/runner.js, in the browser) only passes
  // `container` into the Function and relies on `document`/global DOM
  // constructors being ambient globals. Mirror that here so the model
  // code — which also only receives `container` — behaves the same way.
  const prevDocument = global.document;
  global.document = document;
  try {
    // eslint-disable-next-line no-new-func
    const runStatements = new Function("container", spec.modelCode);
    runStatements(container);
    for (const t of spec.tests) {
      const passed = t.check(container);
      if (!passed) {
        throw new Error(`[buildDomMutate] "${spec.id}" model solution failed its own check: ${t.description}`);
      }
    }
  } finally {
    global.document = prevDocument;
  }

  return {
    id: spec.id,
    title: spec.title,
    difficulty: spec.difficulty,
    minutes: spec.minutes,
    kind: "domMutate",
    setupHTML: spec.setupHTML,
    prompt: spec.prompt,
    starter: spec.starter,
    tests: spec.tests.map((t) => ({ description: t.description, check: t.check })),
  };
}

const out = {};
function add(key, challenge) {
  if (!out[key]) out[key] = [];
  out[key].push(challenge);
}

async function resolveAll(obj) {
  for (const key of Object.keys(obj)) {
    for (const challenge of obj[key]) {
      for (const test of challenge.tests) {
        if (test.expected instanceof Promise) {
          test.expected = await test.expected;
        }
      }
    }
  }
}

function serialize(value, indent = 0) {
  const pad = "  ".repeat(indent);
  const pad1 = "  ".repeat(indent + 1);

  if (typeof value === "function") {
    return value.toString();
  }
  if (value === undefined) return "undefined";
  if (typeof value === "number") {
    if (Number.isNaN(value)) return "NaN";
    if (value === Infinity) return "Infinity";
    if (value === -Infinity) return "-Infinity";
    return String(value);
  }
  if (typeof value === "string" || typeof value === "boolean" || value === null) {
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const items = value.map((v) => pad1 + serialize(v, indent + 1));
    return "[\n" + items.join(",\n") + "\n" + pad + "]";
  }
  if (typeof value === "object") {
    const keys = Object.keys(value);
    if (keys.length === 0) return "{}";
    const items = keys.map((k) => {
      const keyStr = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
      return pad1 + keyStr + ": " + serialize(value[k], indent + 1);
    });
    return "{\n" + items.join(",\n") + "\n" + pad + "}";
  }
  return "null";
}

module.exports = { j, buildFn, buildDomRead, buildDomMutate, out, add, resolveAll, serialize, fs, path };
