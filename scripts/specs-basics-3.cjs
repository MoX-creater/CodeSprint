const { buildFn, add } = require("./generate-challenges.cjs");

// ---- arrays ----
add("basics/arrays", buildFn({
  id: "push-to-array", title: "Add an item to the end of an array", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(arr, item)` that adds `item` to the end of `arr` using `.push()` and returns the modified array.",
  starter: "function solve(arr, item) {\n  \n}",
  ref: (arr, item) => { arr.push(item); return arr; },
  argsList: [[[1, 2], 3], [[], "a"]],
}));
add("basics/arrays", buildFn({
  id: "pop-from-array", title: "Remove the last item from an array", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(arr)` that removes and returns the last element of `arr`, using `.pop()`.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => arr.pop(),
  argsList: [[[1, 2, 3]], [["a", "b"]]],
}));
add("basics/arrays", buildFn({
  id: "first-element", title: "Get the first element", difficulty: "Easy", minutes: 1,
  prompt: "Write a function `solve(arr)` that returns the first element of `arr`.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => arr[0],
  argsList: [[[1, 2, 3]], [["x"]]],
}));
add("basics/arrays", buildFn({
  id: "last-element", title: "Get the last element", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(arr)` that returns the last element of `arr`, without using a hardcoded index.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => arr[arr.length - 1],
  argsList: [[[1, 2, 3]], [["x", "y"]]],
}));
add("basics/arrays", buildFn({
  id: "includes-check", title: "Check if an array contains a value", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(arr, value)` that returns `true` if `arr` contains `value`, using `.includes()`.",
  starter: "function solve(arr, value) {\n  \n}",
  ref: (arr, value) => arr.includes(value),
  argsList: [[[1, 2, 3], 2], [["a", "b"], "z"]],
}));
add("basics/arrays", buildFn({
  id: "index-of-value", title: "Find the index of a value", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(arr, value)` that returns the index of the first occurrence of `value` in `arr`, or `-1` if not found.",
  starter: "function solve(arr, value) {\n  \n}",
  ref: (arr, value) => arr.indexOf(value),
  argsList: [[[10, 20, 30], 20], [[1, 2, 3], 9]],
}));
add("basics/arrays", buildFn({
  id: "slice-array", title: "Get a portion of an array", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(arr, start, end)` that returns the elements of `arr` from `start` up to (not including) `end`, using `.slice()`.",
  starter: "function solve(arr, start, end) {\n  \n}",
  ref: (arr, start, end) => arr.slice(start, end),
  argsList: [[[1, 2, 3, 4, 5], 1, 3], [["a", "b", "c"], 0, 2]],
}));
add("basics/arrays", buildFn({
  id: "concat-arrays", title: "Combine two arrays", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(a, b)` that returns a new array combining all elements of `a` followed by all elements of `b`.",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => a.concat(b),
  argsList: [[[1, 2], [3, 4]], [[], [1]]],
}));
add("basics/arrays", buildFn({
  id: "array-average", title: "Compute the average of an array", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(arr)` that returns the average of the numbers in `arr`. Return 0 for an empty array.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => (arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0),
  argsList: [[[2, 4, 6]], [[10]], [[]]],
}));
add("basics/arrays", buildFn({
  id: "reverse-array", title: "Reverse an array", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(arr)` that returns a new array with the elements of `arr` in reverse order (don't mutate the original).",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => [...arr].reverse(),
  argsList: [[[1, 2, 3]], [["a", "b", "c"]]],
}));
add("basics/arrays", buildFn({
  id: "array-min", title: "Find the smallest number", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(arr)` that returns the smallest number in `arr`.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => Math.min(...arr),
  argsList: [[[5, 2, 8, 1]], [[-3, -1, -7]]],
}));
add("basics/arrays", buildFn({
  id: "array-sort-numbers", title: "Sort an array of numbers ascending", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(arr)` that returns a new array with the numbers in `arr` sorted from smallest to largest. (Remember: `.sort()` sorts as strings by default — pass a compare function.)",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => [...arr].sort((a, b) => a - b),
  argsList: [[[3, 1, 4, 1, 5]], [[10, 2, 33]]],
}));
add("basics/arrays", buildFn({
  id: "array-is-empty", title: "Check if an array is empty", difficulty: "Easy", minutes: 1,
  prompt: "Write a function `solve(arr)` that returns `true` if `arr` has no elements.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => arr.length === 0,
  argsList: [[[]], [[1]]],
}));

// ---- objects ----
add("basics/objects", buildFn({
  id: "add-property", title: "Add a new property to an object", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(obj, key, value)` that adds `key: value` to `obj` and returns the object.",
  starter: "function solve(obj, key, value) {\n  \n}",
  ref: (obj, key, value) => { obj[key] = value; return obj; },
  argsList: [[{ a: 1 }, "b", 2], [{}, "x", "y"]],
}));
add("basics/objects", buildFn({
  id: "delete-property", title: "Remove a property from an object", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(obj, key)` that removes `key` from `obj` using the `delete` operator, and returns the object.",
  starter: "function solve(obj, key) {\n  \n}",
  ref: (obj, key) => { delete obj[key]; return obj; },
  argsList: [[{ a: 1, b: 2 }, "a"], [{ x: 1 }, "y"]],
}));
add("basics/objects", buildFn({
  id: "object-spread", title: "Copy an object with the spread operator", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(obj, extra)` that returns a NEW object containing all of `obj`'s properties plus all of `extra`'s properties, using `{ ...obj, ...extra }`.",
  starter: "function solve(obj, extra) {\n  \n}",
  ref: (obj, extra) => ({ ...obj, ...extra }),
  argsList: [[{ a: 1 }, { b: 2 }], [{ x: 1 }, { x: 2 }]],
}));
add("basics/objects", buildFn({
  id: "destructure-object", title: "Destructure two properties", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(obj)` that destructures `name` and `age` out of `obj` and returns them as the array `[name, age]`.",
  starter: "function solve(obj) {\n  \n}",
  ref: (obj) => { const { name, age } = obj; return [name, age]; },
  argsList: [[{ name: "Ada", age: 30, extra: true }]],
}));
add("basics/objects", buildFn({
  id: "nested-property-access", title: "Access a nested property", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(obj)` that returns `obj.address.city`, or `undefined` if that path doesn't fully exist (use optional chaining `?.`).",
  starter: "function solve(obj) {\n  \n}",
  ref: (obj) => obj.address?.city,
  argsList: [[{ address: { city: "Delhi" } }], [{}]],
}));
add("basics/objects", buildFn({
  id: "object-entries-loop", title: "Build a string from object entries", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(obj)` that returns a string listing each key-value pair as `'key=value'`, joined by commas, in insertion order. Use `Object.entries()`.",
  starter: "function solve(obj) {\n  \n}",
  ref: (obj) => Object.entries(obj).map(([k, v]) => `${k}=${v}`).join(","),
  argsList: [[{ a: 1, b: 2 }], [{ x: "y" }]],
}));
add("basics/objects", buildFn({
  id: "shallow-clone", title: "Shallow clone an object", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(obj)` that returns a shallow copy of `obj` (a new object with the same top-level properties), using `Object.assign()` or spread.",
  starter: "function solve(obj) {\n  \n}",
  ref: (obj) => ({ ...obj }),
  argsList: [[{ a: 1, b: 2 }]],
}));
add("basics/objects", buildFn({
  id: "object-from-entries", title: "Build an object from an array of pairs", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(pairs)` that converts an array of `[key, value]` pairs into an object, using `Object.fromEntries()`.",
  starter: "function solve(pairs) {\n  \n}",
  ref: (pairs) => Object.fromEntries(pairs),
  argsList: [[[["a", 1], ["b", 2]]], [[["x", "y"]]]],
}));

// ---- loops ----
add("basics/loops", buildFn({
  id: "while-loop-sum", title: "Sum with a while loop", difficulty: "Easy", minutes: 3,
  prompt: "Write a function `solve(n)` that returns the sum of 1 to `n` using a `while` loop instead of `for`.",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => { let sum = 0, i = 1; while (i <= n) { sum += i; i++; } return sum; },
  argsList: [[5], [10], [1]],
}));
add("basics/loops", buildFn({
  id: "countdown-array", title: "Build a countdown array with a loop", difficulty: "Easy", minutes: 3,
  prompt: "Write a function `solve(n)` that returns an array counting DOWN from `n` to 1, using a loop (not recursion).",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => { const out = []; for (let i = n; i >= 1; i--) out.push(i); return out; },
  argsList: [[5], [1], [3]],
}));
add("basics/loops", buildFn({
  id: "break-on-target", title: "Stop a loop early with break", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(arr, target)` that loops through `arr` and returns the index of the first occurrence of `target`, stopping the loop early with `break` once found. Return `-1` if not found.",
  starter: "function solve(arr, target) {\n  \n}",
  ref: (arr, target) => {
    let idx = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) { idx = i; break; }
    }
    return idx;
  },
  argsList: [[[5, 3, 8, 3], 3], [[1, 2, 3], 9]],
}));
add("basics/loops", buildFn({
  id: "skip-with-continue", title: "Skip values with continue", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(arr)` that returns a new array of only the positive numbers from `arr`, using a loop with `continue` to skip non-positive values.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => {
    const out = [];
    for (const n of arr) {
      if (n <= 0) continue;
      out.push(n);
    }
    return out;
  },
  argsList: [[[-2, 5, 0, 8, -1]], [[1, 2, 3]]],
}));
add("basics/loops", buildFn({
  id: "nested-loop-grid", title: "Build coordinate pairs with a nested loop", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(rows, cols)` that returns an array of `[row, col]` pairs for every cell in a grid of size `rows` x `cols`, using a nested loop, in row-major order.",
  starter: "function solve(rows, cols) {\n  \n}",
  ref: (rows, cols) => {
    const out = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        out.push([r, c]);
      }
    }
    return out;
  },
  argsList: [[2, 2], [1, 3]],
}));
add("basics/loops", buildFn({
  id: "multiplication-table-row", title: "Generate a multiplication table row", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(n, upTo)` that returns an array of the multiples of `n` from `n*1` to `n*upTo`, using a loop.",
  starter: "function solve(n, upTo) {\n  \n}",
  ref: (n, upTo) => { const out = []; for (let i = 1; i <= upTo; i++) out.push(n * i); return out; },
  argsList: [[3, 5], [7, 3]],
}));
add("basics/loops", buildFn({
  id: "do-while-at-least-once", title: "Run a loop body at least once", difficulty: "Hard", minutes: 4,
  prompt: "Write a function `solve(n)` that uses a `do...while` loop to build an array of numbers from 1 up to `n` — even if `n` is 0 or negative, the loop body should run once, so the result always has at least one element.",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => { const out = []; let i = 1; do { out.push(i); i++; } while (i <= n); return out; },
  argsList: [[3], [0], [-2]],
}));

module.exports = {};
