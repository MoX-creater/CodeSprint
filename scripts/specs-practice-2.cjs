const { buildFn, add } = require("./generate-challenges.cjs");

// ---- fundamentals ----
add("practice/fundamentals", buildFn({
  id: "selection-sort", title: "Implement selection sort", difficulty: "Hard", minutes: 8,
  prompt: "Write a function `solve(arr)` that sorts `arr` ascending using selection sort (repeatedly find the minimum of the unsorted portion and swap it into place). Don't use `.sort()`.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => {
    const a = [...arr];
    for (let i = 0; i < a.length; i++) {
      let minIdx = i;
      for (let j = i + 1; j < a.length; j++) if (a[j] < a[minIdx]) minIdx = j;
      [a[i], a[minIdx]] = [a[minIdx], a[i]];
    }
    return a;
  },
  argsList: [[[5, 2, 9, 1]], [[3, 1, 2]]],
}));
add("practice/fundamentals", buildFn({
  id: "linear-search", title: "Implement linear search", difficulty: "Easy", minutes: 3,
  prompt: "Write a function `solve(arr, target)` that returns the index of `target` in `arr` by checking each element in order, or `-1` if not found.",
  starter: "function solve(arr, target) {\n  \n}",
  ref: (arr, target) => arr.indexOf(target),
  argsList: [[[4, 2, 7, 1], 7], [[1, 2, 3], 9]],
}));
add("practice/fundamentals", buildFn({
  id: "first-non-repeating-char", title: "Find the first non-repeating character", difficulty: "Hard", minutes: 7,
  prompt: "Write a function `solve(str)` that returns the first character in `str` that doesn't repeat anywhere else in the string, or `null` if every character repeats.",
  starter: "function solve(str) {\n  \n}",
  ref: (str) => {
    for (const ch of str) {
      if (str.indexOf(ch) === str.lastIndexOf(ch)) return ch;
    }
    return null;
  },
  argsList: [["swiss"], ["aabbcc"], ["hello"]],
}));
add("practice/fundamentals", buildFn({
  id: "power-of-two-check", title: "Check if a number is a power of two", difficulty: "Hard", minutes: 6,
  prompt: "Write a function `solve(n)` that returns `true` if `n` is a power of 2 (1, 2, 4, 8, 16...).",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => n > 0 && (n & (n - 1)) === 0,
  argsList: [[16], [18], [1], [0]],
}));
add("practice/fundamentals", buildFn({
  id: "digit-sum", title: "Sum the digits of a number", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(n)` that returns the sum of the digits of the non-negative integer `n`.",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => String(n).split("").reduce((sum, d) => sum + Number(d), 0),
  argsList: [[12345], [0], [999]],
}));
add("practice/fundamentals", buildFn({
  id: "caesar-cipher", title: "Caesar cipher encoder", difficulty: "Hard", minutes: 8,
  prompt: "Write a function `solve(str, shift)` that shifts every lowercase letter in `str` forward by `shift` positions in the alphabet (wrapping z → a), leaving non-letters unchanged.",
  starter: "function solve(str, shift) {\n  \n}",
  ref: (str, shift) => str.split("").map((ch) => {
    if (ch < "a" || ch > "z") return ch;
    const code = ((ch.charCodeAt(0) - 97 + shift) % 26 + 26) % 26;
    return String.fromCharCode(code + 97);
  }).join(""),
  argsList: [["abc", 1], ["xyz", 3], ["hello world", 5]],
}));

// ---- practice-arrays ----
add("practice/practice-arrays", buildFn({
  id: "array-shuffle-check-length", title: "Merge two sorted arrays", difficulty: "Hard", minutes: 7,
  prompt: "Write a function `solve(a, b)` that merges two already-sorted arrays `a` and `b` into a single sorted array, without using `.sort()`.",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => {
    const out = [];
    let i = 0, j = 0;
    while (i < a.length && j < b.length) {
      if (a[i] <= b[j]) out.push(a[i++]); else out.push(b[j++]);
    }
    return out.concat(a.slice(i)).concat(b.slice(j));
  },
  argsList: [[[1, 3, 5], [2, 4, 6]], [[1, 2], [3, 4]]],
}));
add("practice/practice-arrays", buildFn({
  id: "count-occurrences-in-array", title: "Count occurrences of a value", difficulty: "Easy", minutes: 3,
  prompt: "Write a function `solve(arr, value)` that returns how many times `value` appears in `arr`.",
  starter: "function solve(arr, value) {\n  \n}",
  ref: (arr, value) => arr.filter((v) => v === value).length,
  argsList: [[[1, 2, 2, 3, 2], 2], [["a", "b"], "z"]],
}));
add("practice/practice-arrays", buildFn({
  id: "array-first-repeated-element", title: "Find the first repeated element", difficulty: "Hard", minutes: 6,
  prompt: "Write a function `solve(arr)` that returns the first element that appears more than once (scanning left to right), or `null` if there are no repeats.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => {
    const seen = new Set();
    for (const v of arr) { if (seen.has(v)) return v; seen.add(v); }
    return null;
  },
  argsList: [[[2, 5, 1, 2, 5]], [[1, 2, 3]]],
}));

// ---- practice-objects ----
add("practice/practice-objects", buildFn({
  id: "object-array-max-by-key", title: "Find the object with the max value for a key", difficulty: "Medium", minutes: 5,
  prompt: "Write a function `solve(items, key)` that returns the whole object from `items` with the largest `item[key]` value.",
  starter: "function solve(items, key) {\n  \n}",
  ref: (items, key) => items.reduce((best, item) => (item[key] > best[key] ? item : best)),
  argsList: [[[{ name: "a", score: 3 }, { name: "b", score: 9 }, { name: "c", score: 5 }], "score"]],
}));
add("practice/practice-objects", buildFn({
  id: "objects-equal-shallow", title: "Shallow-compare two objects", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(a, b)` that returns `true` if `a` and `b` have exactly the same keys and the same top-level values (shallow comparison, not deep).",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => {
    const aKeys = Object.keys(a), bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    return aKeys.every((k) => a[k] === b[k]);
  },
  argsList: [[{ a: 1, b: 2 }, { a: 1, b: 2 }], [{ a: 1 }, { a: 2 }]],
}));

// ---- dates ----
add("practice/dates", buildFn({
  id: "age-from-birthdate", title: "Calculate age from a birth year", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(birthYear, currentYear)` that returns how many years old someone born in `birthYear` would be in `currentYear`.",
  starter: "function solve(birthYear, currentYear) {\n  \n}",
  ref: (birthYear, currentYear) => currentYear - birthYear,
  argsList: [[1995, 2024], [2000, 2024]],
}));
add("practice/dates", buildFn({
  id: "days-in-month", title: "Get the number of days in a month", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(year, month)` (month is 1-12) that returns how many days are in that month of that year, accounting for leap years.",
  starter: "function solve(year, month) {\n  \n}",
  ref: (year, month) => new Date(Date.UTC(year, month, 0)).getUTCDate(),
  argsList: [[2024, 2], [2023, 2], [2024, 4]],
}));

// ---- sets ----
add("practice/sets", buildFn({
  id: "has-duplicates", title: "Check if an array has any duplicates", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(arr)` that returns `true` if `arr` contains any duplicate values, using `Set`.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => new Set(arr).size !== arr.length,
  argsList: [[[1, 2, 3]], [[1, 2, 2]]],
}));
add("practice/sets", buildFn({
  id: "set-add-multiple", title: "Add several values to a Set", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(values)` that adds every value from the array `values` into a new `Set` and returns its final `.size`.",
  starter: "function solve(values) {\n  \n}",
  ref: (values) => { const s = new Set(); values.forEach((v) => s.add(v)); return s.size; },
  argsList: [[[1, 1, 2, 3]], [["a", "a", "a"]]],
}));

module.exports = {};
