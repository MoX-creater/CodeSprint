// Runs a short read-only code snippet (used in lessons) and captures
// console.log output as an array of printed lines, the same way the
// JS console would render each argument.

function stringifyLogArg(v) {
  if (typeof v === "string") return v;
  if (v === undefined) return "undefined";
  try {
    return JSON.stringify(v);
  } catch {
    return String(v);
  }
}

export function runSnippet(code) {
  const lines = [];
  const fakeConsole = {
    log: (...args) => lines.push(args.map(stringifyLogArg).join(" ")),
  };
  try {
    // eslint-disable-next-line no-new-func
    const fn = new Function("console", code);
    fn(fakeConsole);
    return { ok: true, lines };
  } catch (err) {
    return { ok: false, lines, error: err.message };
  }
}
