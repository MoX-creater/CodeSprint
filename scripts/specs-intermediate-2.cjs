const { buildFn, add } = require("./generate-challenges.cjs");

// ---- async ----
add("intermediate/async", buildFn({
  id: "async-try-catch", title: "Handle a rejected promise", difficulty: "Hard", minutes: 6,
  prompt: "Write an async function `solve(shouldFail)` that, if `shouldFail` is `true`, awaits `Promise.reject('failed')` inside a `try/catch` and returns the string `'caught: failed'`; otherwise it returns `'ok'`.",
  starter: "async function solve(shouldFail) {\n  \n}",
  ref: async (shouldFail) => {
    if (shouldFail) {
      try {
        await Promise.reject("failed");
      } catch (e) {
        return "caught: " + e;
      }
    }
    return "ok";
  },
  argsList: [[true], [false]],
}));
add("intermediate/async", buildFn({
  id: "async-sequential-sum", title: "Await promises one after another", difficulty: "Hard", minutes: 6,
  prompt: "Write an async function `solve(nums)` that awaits `Promise.resolve(n)` for each number in `nums`, ONE AT A TIME (sequentially, not in parallel), summing the results as it goes. Return the total.",
  starter: "async function solve(nums) {\n  \n}",
  ref: async (nums) => {
    let total = 0;
    for (const n of nums) {
      total += await Promise.resolve(n);
    }
    return total;
  },
  argsList: [[[1, 2, 3]], [[10]]],
}));
add("intermediate/async", buildFn({
  id: "async-map", title: "Map over an array with async operations", difficulty: "Hard", minutes: 6,
  prompt: "Write an async function `solve(nums)` that returns a new array where each number has been asynchronously doubled — map each number through an async doubling function, and await all the results with `Promise.all`.",
  starter: "async function solve(nums) {\n  \n}",
  ref: async (nums) => {
    const double = async (n) => n * 2;
    return Promise.all(nums.map(double));
  },
  argsList: [[[1, 2, 3]], [[]]],
}));
add("intermediate/async", buildFn({
  id: "promise-race-fastest", title: "Get the first settled promise", difficulty: "Medium", minutes: 4,
  prompt: "Write an async function `solve(a, b)` that returns whichever of `Promise.resolve(a)` or `Promise.resolve(b)` settles first, using `Promise.race()`. (With already-resolved promises, the first one passed wins.)",
  starter: "async function solve(a, b) {\n  \n}",
  ref: async (a, b) => Promise.race([Promise.resolve(a), Promise.resolve(b)]),
  argsList: [[1, 2], ["first", "second"]],
}));
add("intermediate/async", buildFn({
  id: "async-error-propagation", title: "Let an async function's rejection propagate", difficulty: "Medium", minutes: 4,
  prompt: "Write an async function `solve(n)` that returns `n * 2` if `n` is a number, otherwise throws an Error with message `'not a number'`. Since the tests only check successful cases here, just handle the numeric path correctly.",
  starter: "async function solve(n) {\n  \n}",
  ref: async (n) => {
    if (typeof n !== "number") throw new Error("not a number");
    return n * 2;
  },
  argsList: [[5], [10]],
}));

module.exports = {};
