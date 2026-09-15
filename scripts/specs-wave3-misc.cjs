const { buildFn, add } = require("./generate-challenges.cjs");

// ---- intermediate/classes ----
add("intermediate/classes", buildFn({
  id: "class-static-counter", title: "Track instances with a static property", difficulty: "Hard", minutes: 6,
  prompt: "Write a function `solve(count)` that defines a class `Widget` with a static property `total` (starting at 0), incremented in the constructor every time a new instance is created. Create `count` instances and return `Widget.total`.",
  starter: "function solve(count) {\n  \n}",
  ref: (count) => {
    class Widget {
      static total = 0;
      constructor() { Widget.total++; }
    }
    for (let i = 0; i < count; i++) new Widget();
    return Widget.total;
  },
  argsList: [[3], [0], [5]],
}));
add("intermediate/classes", buildFn({
  id: "class-getter-setter", title: "Use a getter and setter together", difficulty: "Hard", minutes: 6,
  prompt: "Write a function `solve(celsius)` that defines a class `Temperature` with a `celsius` field, a getter `fahrenheit` returning `celsius * 9/5 + 32`, and a setter `fahrenheit` that updates `celsius` accordingly. Return the getter's value for the given `celsius`.",
  starter: "function solve(celsius) {\n  \n}",
  ref: (celsius) => {
    class Temperature {
      constructor(c) { this.celsius = c; }
      get fahrenheit() { return this.celsius * 9 / 5 + 32; }
      set fahrenheit(f) { this.celsius = (f - 32) * 5 / 9; }
    }
    return new Temperature(celsius).fahrenheit;
  },
  argsList: [[0], [100], [20]],
}));

// ---- intermediate/functions-2 ----
add("intermediate/functions-2", buildFn({
  id: "once-function", title: "Make a function that only runs once", difficulty: "Hard", minutes: 6,
  prompt: "Write a function `solve(fn)` that returns a wrapped version of `fn` which only actually calls `fn` the FIRST time it's invoked; every call after that returns the same cached result without calling `fn` again.",
  starter: "function solve(fn) {\n  \n}",
  custom: [
    {
      expected: [5, 5, 5],
      run: (solve) => {
        let calls = 0;
        const fn = () => { calls++; return 5; };
        const once = solve(fn);
        const results = [once(), once(), once()];
        if (calls !== 1) throw new Error(`expected fn to be called once, was called ${calls} times`);
        return results;
      },
    },
  ],
}));
add("intermediate/functions-2", buildFn({
  id: "pipe-functions", title: "Pipe an array of functions together", difficulty: "Hard", minutes: 6,
  prompt: "Write a function `solve(fns, initial)` that applies each function in `fns` to `initial`, left to right (the output of one becomes the input of the next), and returns the final result.",
  starter: "function solve(fns, initial) {\n  \n}",
  ref: (fns, initial) => fns.reduce((acc, fn) => fn(acc), initial),
  argsList: [[[(n) => n + 1, (n) => n * 2, (n) => n - 3], 5]],
}));

// ---- intermediate/scope ----
add("intermediate/scope", buildFn({
  id: "hoisting-var-vs-let", title: "Understand var hoisting", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve()` that returns the value logged by referencing a `var x` BEFORE its declaration line (var declarations are hoisted, so this returns `undefined` rather than throwing).",
  starter: "function solve() {\n  \n}",
  ref: () => { const result = typeof x; var x = 5; return result; },
  argsList: [[]],
}));

// ---- intermediate/objects-2 ----
add("intermediate/objects-2", buildFn({
  id: "object-has-own-vs-in", title: "Distinguish own vs inherited properties", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(obj, key)` that returns `true` only if `key` is an OWN property of `obj` (not inherited from its prototype chain), using `Object.hasOwn()` or `.hasOwnProperty()`.",
  starter: "function solve(obj, key) {\n  \n}",
  ref: (obj, key) => Object.hasOwn(obj, key),
  argsList: [[{ a: 1 }, "a"], [{ a: 1 }, "toString"]],
}));

// ---- practice/fundamentals ----
add("practice/fundamentals", buildFn({
  id: "merge-intervals", title: "Merge overlapping intervals", difficulty: "Hard", minutes: 8,
  prompt: "Write a function `solve(intervals)` that merges all overlapping `[start, end]` intervals and returns the merged list, sorted by start.",
  starter: "function solve(intervals) {\n  \n}",
  ref: (intervals) => {
    const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
    const out = [];
    for (const [s, e] of sorted) {
      if (out.length && s <= out[out.length - 1][1]) {
        out[out.length - 1][1] = Math.max(out[out.length - 1][1], e);
      } else {
        out.push([s, e]);
      }
    }
    return out;
  },
  argsList: [[[[1, 3], [2, 6], [8, 10], [15, 18]]], [[[1, 4], [4, 5]]]],
}));
add("practice/fundamentals", buildFn({
  id: "roman-to-integer", title: "Convert Roman numerals to an integer", difficulty: "Hard", minutes: 8,
  prompt: "Write a function `solve(roman)` that converts a Roman numeral string (using I, V, X, L, C, D, M) to its integer value.",
  starter: "function solve(roman) {\n  \n}",
  ref: (roman) => {
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;
    for (let i = 0; i < roman.length; i++) {
      const cur = map[roman[i]], next = map[roman[i + 1]];
      if (next && cur < next) total -= cur; else total += cur;
    }
    return total;
  },
  argsList: [["III"], ["IV"], ["IX"], ["LVIII"], ["MCMXCIV"]],
}));

// ---- practice/practice-arrays ----
add("practice/practice-arrays", buildFn({
  id: "kth-largest-element", title: "Find the kth largest element", difficulty: "Hard", minutes: 6,
  prompt: "Write a function `solve(arr, k)` that returns the kth largest element in `arr` (k=1 means the largest).",
  starter: "function solve(arr, k) {\n  \n}",
  ref: (arr, k) => [...arr].sort((a, b) => b - a)[k - 1],
  argsList: [[[3, 2, 1, 5, 6, 4], 2], [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4]],
}));

// ---- practice/practice-objects ----
add("practice/practice-objects", buildFn({
  id: "count-nested-object-keys", title: "Count all keys, including nested ones", difficulty: "Hard", minutes: 6,
  prompt: "Write a function `solve(obj)` that recursively counts every key in `obj`, including keys inside nested objects (but not inside arrays).",
  starter: "function solve(obj) {\n  \n}",
  ref: function countKeys(obj) {
    let count = 0;
    for (const [, v] of Object.entries(obj)) {
      count++;
      if (v && typeof v === "object" && !Array.isArray(v)) count += countKeys(v);
    }
    return count;
  },
  argsList: [[{ a: 1, b: { c: 2, d: 3 } }], [{ x: { y: { z: 1 } } }]],
}));

// ---- practice/sets ----
add("practice/sets", buildFn({
  id: "jaccard-similarity", title: "Compute Jaccard similarity of two sets", difficulty: "Hard", minutes: 7,
  prompt: "Write a function `solve(a, b)` that returns the Jaccard similarity of arrays `a` and `b` — the size of their intersection divided by the size of their union — as a number.",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => {
    const setA = new Set(a), setB = new Set(b);
    const intersection = [...setA].filter((x) => setB.has(x));
    const union = new Set([...a, ...b]);
    return intersection.length / union.size;
  },
  argsList: [[[1, 2, 3], [2, 3, 4]], [[1, 2], [1, 2]]],
}));

// ---- practice/dates ----
add("practice/dates", buildFn({
  id: "compare-two-dates", title: "Compare two dates", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(dateA, dateB)` that returns `-1` if `dateA` is earlier, `1` if later, or `0` if the same day.",
  starter: "function solve(dateA, dateB) {\n  \n}",
  ref: (dateA, dateB) => {
    const a = new Date(dateA).getTime(), b = new Date(dateB).getTime();
    return a < b ? -1 : a > b ? 1 : 0;
  },
  argsList: [["2024-01-01", "2024-01-02"], ["2024-05-05", "2024-05-05"], ["2024-06-01", "2024-01-01"]],
}));

module.exports = {};
