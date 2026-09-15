const { buildFn, add } = require("./generate-challenges.cjs");

// ---- variables ----
add("basics/variables", buildFn({
  id: "let-vs-const-array", title: "Mutate an array declared with const", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(arr, item)` that pushes `item` onto a `const`-declared array `arr` (legal — `const` only locks the variable binding, not the array's contents) and returns the array's new length.",
  starter: "function solve(arr, item) {\n  \n}",
  ref: (arr, item) => { arr.push(item); return arr.length; },
  argsList: [[[1, 2], 3], [[], "a"]],
}));
add("basics/variables", buildFn({
  id: "destructure-swap-array", title: "Swap two array elements with destructuring", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(arr, i, j)` that swaps the elements at indices `i` and `j` using array destructuring (`[arr[i], arr[j]] = [arr[j], arr[i]]`), and returns the array.",
  starter: "function solve(arr, i, j) {\n  \n}",
  ref: (arr, i, j) => { [arr[i], arr[j]] = [arr[j], arr[i]]; return arr; },
  argsList: [[[1, 2, 3], 0, 2], [["a", "b"], 0, 1]],
}));
add("basics/variables", buildFn({
  id: "typeof-various", title: "Identify a value's type", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(value)` that returns the result of `typeof value`.",
  starter: "function solve(value) {\n  \n}",
  ref: (value) => typeof value,
  argsList: [[[1, 2]], [{}], [() => {}], [undefined]],
}));

// ---- booleans ----
add("basics/booleans", buildFn({
  id: "not-not-coerce", title: "Coerce a value to boolean with double negation", difficulty: "Medium", minutes: 2,
  prompt: "Write a function `solve(value)` that returns `value` converted to a strict boolean using `!!value`.",
  starter: "function solve(value) {\n  \n}",
  ref: (value) => !!value,
  argsList: [["hello"], [0], [null], [42]],
}));
add("basics/booleans", buildFn({
  id: "is-empty-string", title: "Check for an empty string", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(str)` that returns `true` if `str` has zero length.",
  starter: "function solve(str) {\n  \n}",
  ref: (str) => str.length === 0,
  argsList: [[""], ["a"]],
}));
add("basics/booleans", buildFn({
  id: "compare-strings-boolean", title: "Compare two strings for equality", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(a, b)` that returns `true` if the two strings are exactly equal.",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => a === b,
  argsList: [["cat", "cat"], ["cat", "dog"]],
}));

// ---- operators ----
add("basics/operators", buildFn({
  id: "average-of-two", title: "Average two numbers", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(a, b)` that returns the average of `a` and `b`.",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => (a + b) / 2,
  argsList: [[4, 8], [1, 2]],
}));
add("basics/operators", buildFn({
  id: "percentage-of", title: "Calculate a percentage", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(part, total)` that returns what percentage `part` is of `total`, as a number (e.g. `solve(25, 200)` → `12.5`).",
  starter: "function solve(part, total) {\n  \n}",
  ref: (part, total) => (part / total) * 100,
  argsList: [[25, 200], [1, 4]],
}));
add("basics/operators", buildFn({
  id: "spread-into-max", title: "Spread an array into Math.max", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(arr)` that returns the largest number in `arr`, spreading it into `Math.max(...arr)`.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => Math.max(...arr),
  argsList: [[[3, 7, 1]], [[10]]],
}));

// ---- strings ----
add("basics/strings", buildFn({
  id: "char-at-method", title: "Get a character with charAt", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(str, i)` that returns the character at index `i` using `.charAt()`.",
  starter: "function solve(str, i) {\n  \n}",
  ref: (str, i) => str.charAt(i),
  argsList: [["hello", 1], ["js", 5]],
}));
add("basics/strings", buildFn({
  id: "string-concat-plus", title: "Concatenate strings with +", difficulty: "Easy", minutes: 1,
  prompt: "Write a function `solve(a, b)` that returns `a` and `b` concatenated with the `+` operator.",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => a + b,
  argsList: [["foo", "bar"], ["1", "2"]],
}));
add("basics/strings", buildFn({
  id: "array-to-string", title: "Convert an array to a comma-separated string", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(arr)` that converts `arr` to a string with `.toString()` (elements comma-separated).",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => arr.toString(),
  argsList: [[[1, 2, 3]], [["a", "b"]]],
}));
add("basics/strings", buildFn({
  id: "last-n-characters", title: "Get the last N characters of a string", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(str, n)` that returns the last `n` characters of `str`.",
  starter: "function solve(str, n) {\n  \n}",
  ref: (str, n) => str.slice(-n),
  argsList: [["javascript", 3], ["hi", 5]],
}));

// ---- conditionals ----
add("basics/conditionals", buildFn({
  id: "sign-of-number", title: "Determine the sign of a number", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(n)` that returns `'positive'`, `'negative'`, or `'zero'`.",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => (n > 0 ? "positive" : n < 0 ? "negative" : "zero"),
  argsList: [[5], [-5], [0]],
}));
add("basics/conditionals", buildFn({
  id: "password-strength", title: "Rate a password's length", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(password)` that returns `'weak'` if length < 6, `'medium'` if < 10, otherwise `'strong'`.",
  starter: "function solve(password) {\n  \n}",
  ref: (p) => (p.length < 6 ? "weak" : p.length < 10 ? "medium" : "strong"),
  argsList: [["abc"], ["abcdefg"], ["abcdefghijk"]],
}));
add("basics/conditionals", buildFn({
  id: "vote-eligibility", title: "Check voting eligibility", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(age, isCitizen)` that returns `true` only if `age >= 18` AND `isCitizen` is `true`.",
  starter: "function solve(age, isCitizen) {\n  \n}",
  ref: (age, isCitizen) => age >= 18 && isCitizen,
  argsList: [[20, true], [15, true], [30, false]],
}));

// ---- functions-1 ----
add("basics/functions-1", buildFn({
  id: "absolute-value", title: "Return the absolute value", difficulty: "Easy", minutes: 1,
  prompt: "Write a function `solve(n)` that returns the absolute value of `n`.",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => Math.abs(n),
  argsList: [[-5], [5], [0]],
}));
add("basics/functions-1", buildFn({
  id: "is-multiple-of", title: "Check if a number is a multiple of another", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(n, factor)` that returns `true` if `n` is a multiple of `factor`.",
  starter: "function solve(n, factor) {\n  \n}",
  ref: (n, factor) => n % factor === 0,
  argsList: [[10, 5], [10, 3]],
}));
add("basics/functions-1", buildFn({
  id: "clamp-number", title: "Clamp a number within a range", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(n, min, max)` that returns `n`, but clamped so it's never below `min` or above `max`.",
  starter: "function solve(n, min, max) {\n  \n}",
  ref: (n, min, max) => Math.min(Math.max(n, min), max),
  argsList: [[15, 0, 10], [-5, 0, 10], [5, 0, 10]],
}));

// ---- arrays ----
add("basics/arrays", buildFn({
  id: "unshift-to-array", title: "Add an item to the start of an array", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(arr, item)` that adds `item` to the START of `arr` using `.unshift()` and returns the array.",
  starter: "function solve(arr, item) {\n  \n}",
  ref: (arr, item) => { arr.unshift(item); return arr; },
  argsList: [[[2, 3], 1], [[], "a"]],
}));
add("basics/arrays", buildFn({
  id: "array-fill", title: "Create an array filled with a value", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(value, length)` that returns a new array of `length` elements, all set to `value`, using `.fill()`.",
  starter: "function solve(value, length) {\n  \n}",
  ref: (value, length) => new Array(length).fill(value),
  argsList: [[0, 3], ["x", 2]],
}));
add("basics/arrays", buildFn({
  id: "array-every-length-check", title: "Check every string meets a minimum length", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(words, minLen)` that returns `true` if every word in `words` has length >= `minLen`.",
  starter: "function solve(words, minLen) {\n  \n}",
  ref: (words, minLen) => words.every((w) => w.length >= minLen),
  argsList: [[["cat", "dog"], 3], [["cat", "a"], 2]],
}));

// ---- objects ----
add("basics/objects", buildFn({
  id: "object-key-list", title: "Get all keys of an object", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(obj)` that returns an array of `obj`'s own keys, using `Object.keys()`.",
  starter: "function solve(obj) {\n  \n}",
  ref: (obj) => Object.keys(obj),
  argsList: [[{ a: 1, b: 2 }], [{}]],
}));
add("basics/objects", buildFn({
  id: "objects-are-references", title: "Objects are compared by reference", difficulty: "Hard", minutes: 4,
  prompt: "Write a function `solve(obj)` that returns `true` if `obj === { ...obj }` would be `false` — i.e. demonstrate that two object literals with identical contents are never `===` unless they're the same reference. Just return `obj === { ...obj }` directly.",
  starter: "function solve(obj) {\n  \n}",
  ref: (obj) => obj === { ...obj },
  argsList: [[{ a: 1 }], [{}]],
}));

// ---- loops ----
add("basics/loops", buildFn({
  id: "loop-over-object-keys", title: "Loop over an object with for...in", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(obj)` that returns the sum of all values in `obj`, iterating with a `for...in` loop.",
  starter: "function solve(obj) {\n  \n}",
  ref: (obj) => { let sum = 0; for (const key in obj) sum += obj[key]; return sum; },
  argsList: [[{ a: 1, b: 2, c: 3 }], [{}]],
}));
add("basics/loops", buildFn({
  id: "loop-over-array-for-of", title: "Loop over an array with for...of", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(arr)` that returns the sum of `arr`, iterating with a `for...of` loop.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => { let sum = 0; for (const n of arr) sum += n; return sum; },
  argsList: [[[1, 2, 3]], [[]]],
}));
add("basics/loops", buildFn({
  id: "count-loop-iterations", title: "Count how many times a loop runs", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(n)` that counts how many numbers from 1 to `n` are divisible by 3, using a loop.",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => { let count = 0; for (let i = 1; i <= n; i++) if (i % 3 === 0) count++; return count; },
  argsList: [[10], [3], [1]],
}));

module.exports = {};
