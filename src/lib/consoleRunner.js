// Executes a lesson code snippet and captures console.log output, so
// "Run Code" slides show real, live results instead of hardcoded text.
export function runWithConsole(code) {
  const logs = [];
  const original = console.log;
  console.log = (...args) => {
    logs.push(
      args
        .map((a) => {
          if (typeof a === "string") return a;
          try {
            return JSON.stringify(a);
          } catch {
            return String(a);
          }
        })
        .join(" ")
    );
  };
  let error = null;
  try {
    // eslint-disable-next-line no-new-func
    const fn = new Function(code);
    fn();
  } catch (err) {
    error = err.message;
  } finally {
    console.log = original;
  }
  return { logs, error };
}
