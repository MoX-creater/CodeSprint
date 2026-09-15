const { buildFn, add } = require("./generate-challenges.cjs");

// ---- fundamentals (mixed / classic interview problems) ----
add("practice/fundamentals", buildFn({
  id: "two-sum", title: "Two Sum", difficulty: "Hard", minutes: 8,
  prompt: "Write a function `solve(nums, target)` that returns the indices `[i, j]` of the two numbers in `nums` that add up to `target` (assume exactly one solution exists, and you can't use the same element twice).",
  starter: "function solve(nums, target) {\n  \n}",
  ref: (nums, target) => {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
      const need = target - nums[i];
      if (seen.has(need)) return [seen.get(need), i];
      seen.set(nums[i], i);
    }
    return [];
  },
  argsList: [[[2, 7, 11, 15], 9], [[3, 2, 4], 6]],
}));
add("practice/fundamentals", buildFn({
  id: "is-anagram", title: "Check if two strings are anagrams", difficulty: "Medium", minutes: 5,
  prompt: "Write a function `solve(a, b)` that returns `true` if `a` and `b` are anagrams of each other (same letters, same counts, order doesn't matter). Ignore case.",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => {
    const norm = (s) => s.toLowerCase().split("").sort().join("");
    return norm(a) === norm(b);
  },
  argsList: [["listen", "silent"], ["hello", "world"], ["Dormitory", "dirtyroom"]],
}));
add("practice/fundamentals", buildFn({
  id: "valid-parentheses", title: "Check for balanced parentheses", difficulty: "Hard", minutes: 7,
  prompt: "Write a function `solve(str)` that returns `true` if every `(`, `[`, and `{` in `str` has a correctly matching, correctly ordered closing bracket.",
  starter: "function solve(str) {\n  \n}",
  ref: (str) => {
    const pairs = { ")": "(", "]": "[", "}": "{" };
    const stack = [];
    for (const ch of str) {
      if (ch === "(" || ch === "[" || ch === "{") stack.push(ch);
      else if (ch in pairs) {
        if (stack.pop() !== pairs[ch]) return false;
      }
    }
    return stack.length === 0;
  },
  argsList: [["()[]{}"], ["(]"], ["{[()]}"], ["(("]],
}));
add("practice/fundamentals", buildFn({
  id: "fizzbuzz-array", title: "FizzBuzz as an array", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(n)` that returns an array of the FizzBuzz sequence from 1 to `n`: multiples of 3 → 'Fizz', of 5 → 'Buzz', of both → 'FizzBuzz', otherwise the number.",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => Array.from({ length: n }, (_, i) => { const x = i + 1; if (x % 15 === 0) return "FizzBuzz"; if (x % 3 === 0) return "Fizz"; if (x % 5 === 0) return "Buzz"; return x; }),
  argsList: [[15], [5]],
}));
add("practice/fundamentals", buildFn({
  id: "gcd-two-numbers", title: "Greatest common divisor", difficulty: "Medium", minutes: 5,
  prompt: "Write a function `solve(a, b)` that returns the greatest common divisor of `a` and `b`, using the Euclidean algorithm.",
  starter: "function solve(a, b) {\n  \n}",
  ref: function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); },
  argsList: [[48, 18], [17, 5], [100, 75]],
}));
add("practice/fundamentals", buildFn({
  id: "lcm-two-numbers", title: "Least common multiple", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(a, b)` that returns the least common multiple of `a` and `b`.",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => { const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y)); return (a * b) / gcd(a, b); },
  argsList: [[4, 6], [3, 5]],
}));
add("practice/fundamentals", buildFn({
  id: "binary-search", title: "Binary search a sorted array", difficulty: "Hard", minutes: 8,
  prompt: "Write a function `solve(arr, target)` that returns the index of `target` in the SORTED array `arr` using binary search (not a linear scan), or `-1` if not found.",
  starter: "function solve(arr, target) {\n  \n}",
  ref: (arr, target) => {
    let lo = 0, hi = arr.length - 1;
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (arr[mid] === target) return mid;
      if (arr[mid] < target) lo = mid + 1;
      else hi = mid - 1;
    }
    return -1;
  },
  argsList: [[[1, 3, 5, 7, 9, 11], 7], [[1, 2, 3], 5]],
}));
add("practice/fundamentals", buildFn({
  id: "bubble-sort", title: "Implement bubble sort", difficulty: "Hard", minutes: 8,
  prompt: "Write a function `solve(arr)` that sorts `arr` ascending using bubble sort (repeatedly swap adjacent out-of-order elements) and returns the sorted array. Don't just call `.sort()`.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => {
    const a = [...arr];
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length - i - 1; j++) {
        if (a[j] > a[j + 1]) [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
    return a;
  },
  argsList: [[[5, 2, 9, 1, 5]], [[3, 1, 2]]],
}));
add("practice/fundamentals", buildFn({
  id: "string-compression", title: "Compress a string with run-length encoding", difficulty: "Hard", minutes: 7,
  prompt: "Write a function `solve(str)` that compresses runs of repeated characters as `char+count`, e.g. `'aaabbc'` → `'a3b2c1'`.",
  starter: "function solve(str) {\n  \n}",
  ref: (str) => {
    let out = "";
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (j < str.length && str[j] === str[i]) j++;
      out += str[i] + (j - i);
      i = j;
    }
    return out;
  },
  argsList: [["aaabbc"], ["abcd"], ["zzzz"]],
}));
add("practice/fundamentals", buildFn({
  id: "max-subarray-sum", title: "Maximum subarray sum (Kadane's algorithm)", difficulty: "Hard", minutes: 8,
  prompt: "Write a function `solve(arr)` that returns the largest possible sum of a CONTIGUOUS subarray of `arr`.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => {
    let maxSoFar = arr[0], maxHere = arr[0];
    for (let i = 1; i < arr.length; i++) {
      maxHere = Math.max(arr[i], maxHere + arr[i]);
      maxSoFar = Math.max(maxSoFar, maxHere);
    }
    return maxSoFar;
  },
  argsList: [[[-2, 1, -3, 4, -1, 2, 1, -5, 4]], [[1, 2, 3, -2]]],
}));
add("practice/fundamentals", buildFn({
  id: "fibonacci-iterative", title: "Nth Fibonacci number, iteratively", difficulty: "Medium", minutes: 5,
  prompt: "Write a function `solve(n)` that returns the nth Fibonacci number using a LOOP (not recursion) — important for performance on larger `n`.",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => { let a = 0, b = 1; for (let i = 0; i < n; i++) [a, b] = [b, a + b]; return a; },
  argsList: [[0], [1], [10], [20]],
}));
add("practice/fundamentals", buildFn({
  id: "reverse-integer", title: "Reverse the digits of an integer", difficulty: "Medium", minutes: 5,
  prompt: "Write a function `solve(n)` that reverses the digits of `n`, preserving the sign (e.g. `-123` → `-321`).",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => { const sign = n < 0 ? -1 : 1; return sign * Number(String(Math.abs(n)).split("").reverse().join("")); },
  argsList: [[123], [-456], [100]],
}));

// ---- practice-arrays ----
add("practice/practice-arrays", buildFn({
  id: "rotate-array", title: "Rotate an array to the right", difficulty: "Hard", minutes: 6,
  prompt: "Write a function `solve(arr, k)` that rotates `arr` to the right by `k` positions and returns the new array.",
  starter: "function solve(arr, k) {\n  \n}",
  ref: (arr, k) => { const n = arr.length; const shift = ((k % n) + n) % n; return [...arr.slice(n - shift), ...arr.slice(0, n - shift)]; },
  argsList: [[[1, 2, 3, 4, 5], 2], [[1, 2, 3], 1]],
}));
add("practice/practice-arrays", buildFn({
  id: "find-missing-number", title: "Find the missing number", difficulty: "Hard", minutes: 6,
  prompt: "Write a function `solve(nums)` that, given an array containing `n` distinct numbers from `0` to `n` with exactly one missing, returns the missing number.",
  starter: "function solve(nums) {\n  \n}",
  ref: (nums) => { const n = nums.length; const total = (n * (n + 1)) / 2; return total - nums.reduce((a, b) => a + b, 0); },
  argsList: [[[3, 0, 1]], [[0, 1]], [[9, 6, 4, 2, 3, 5, 7, 0, 1]]],
}));
add("practice/practice-arrays", buildFn({
  id: "move-zeroes", title: "Move all zeroes to the end", difficulty: "Medium", minutes: 5,
  prompt: "Write a function `solve(arr)` that moves all `0`s in `arr` to the end while keeping the relative order of the other elements, returning the new array.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => { const nonZero = arr.filter((n) => n !== 0); const zeros = arr.filter((n) => n === 0); return [...nonZero, ...zeros]; },
  argsList: [[[0, 1, 0, 3, 12]], [[1, 2, 3]]],
}));
add("practice/practice-arrays", buildFn({
  id: "array-intersection-count", title: "Count common elements between arrays", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(a, b)` that returns how many elements appear in BOTH `a` and `b` (counting duplicates up to the minimum count in each).",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => {
    const bCopy = [...b];
    let count = 0;
    for (const x of a) {
      const idx = bCopy.indexOf(x);
      if (idx !== -1) { count++; bCopy.splice(idx, 1); }
    }
    return count;
  },
  argsList: [[[1, 2, 2, 1], [2, 2]], [[4, 9, 5], [9, 4, 9, 8, 4]]],
}));
add("practice/practice-arrays", buildFn({
  id: "second-largest", title: "Find the second largest number", difficulty: "Medium", minutes: 5,
  prompt: "Write a function `solve(arr)` that returns the second largest DISTINCT number in `arr`.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => { const unique = [...new Set(arr)].sort((a, b) => b - a); return unique[1]; },
  argsList: [[[5, 2, 9, 9, 3]], [[1, 1, 2]]],
}));
add("practice/practice-arrays", buildFn({
  id: "array-to-frequency-map", title: "Build a frequency map from an array", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(arr)` that returns an object mapping each unique value in `arr` to how many times it appears.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => arr.reduce((acc, v) => { acc[v] = (acc[v] || 0) + 1; return acc; }, {}),
  argsList: [[["a", "b", "a", "c", "b", "a"]], [[1, 1, 2]]],
}));
add("practice/practice-arrays", buildFn({
  id: "is-sorted-check", title: "Check if an array is sorted", difficulty: "Easy", minutes: 3,
  prompt: "Write a function `solve(arr)` that returns `true` if `arr` is sorted in non-decreasing order.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => arr.every((v, i) => i === 0 || arr[i - 1] <= v),
  argsList: [[[1, 2, 3]], [[3, 1, 2]], [[]]],
}));
add("practice/practice-arrays", buildFn({
  id: "array-intersection-unique", title: "Transpose a matrix", difficulty: "Hard", minutes: 7,
  prompt: "Write a function `solve(matrix)` that returns the transpose of a 2D array (rows become columns).",
  starter: "function solve(matrix) {\n  \n}",
  ref: (matrix) => matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex])),
  argsList: [[[[1, 2, 3], [4, 5, 6]]], [[[1, 2], [3, 4]]]],
}));

// ---- practice-objects ----
add("practice/practice-objects", buildFn({
  id: "count-property-types", title: "Count objects by a shared property value", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(items, key)` that returns an object counting how many items share each value of `key`.",
  starter: "function solve(items, key) {\n  \n}",
  ref: (items, key) => items.reduce((acc, item) => { const v = item[key]; acc[v] = (acc[v] || 0) + 1; return acc; }, {}),
  argsList: [[[{ type: "a" }, { type: "b" }, { type: "a" }], "type"]],
}));
add("practice/practice-objects", buildFn({
  id: "object-array-sum-by-key", title: "Sum a numeric field across an array of objects", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(items, key)` that returns the sum of `item[key]` for every item in `items`.",
  starter: "function solve(items, key) {\n  \n}",
  ref: (items, key) => items.reduce((sum, item) => sum + item[key], 0),
  argsList: [[[{ price: 10 }, { price: 20 }, { price: 5 }], "price"]],
}));
add("practice/practice-objects", buildFn({
  id: "pick-keys", title: "Pick a subset of keys", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(obj, keys)` that returns a new object with only the given `keys` from `obj` (ignore keys that don't exist).",
  starter: "function solve(obj, keys) {\n  \n}",
  ref: (obj, keys) => keys.reduce((acc, k) => { if (k in obj) acc[k] = obj[k]; return acc; }, {}),
  argsList: [[{ a: 1, b: 2, c: 3 }, ["a", "c"]]],
}));
add("practice/practice-objects", buildFn({
  id: "omit-keys", title: "Omit a subset of keys", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(obj, keys)` that returns a new object with all of `obj`'s properties EXCEPT the given `keys`.",
  starter: "function solve(obj, keys) {\n  \n}",
  ref: (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k))),
  argsList: [[{ a: 1, b: 2, c: 3 }, ["b"]]],
}));
add("practice/practice-objects", buildFn({
  id: "flatten-object-keys", title: "Flatten a nested object's keys", difficulty: "Hard", minutes: 7,
  prompt: "Write a function `solve(obj)` that flattens a nested object into a single-level object with dot-separated keys, e.g. `{ a: { b: 1 } }` → `{ 'a.b': 1 }`.",
  starter: "function solve(obj) {\n  \n}",
  ref: function flatten(obj, prefix = "") {
    let out = {};
    for (const [k, v] of Object.entries(obj)) {
      const key = prefix ? prefix + "." + k : k;
      if (v && typeof v === "object" && !Array.isArray(v)) {
        Object.assign(out, flatten(v, key));
      } else {
        out[key] = v;
      }
    }
    return out;
  },
  argsList: [[{ a: { b: 1, c: 2 }, d: 3 }]],
}));

// ---- dates ----
add("practice/dates", buildFn({
  id: "get-month-name", title: "Get the month name from a date", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(isoString)` that returns the full month name (e.g. `'June'`) for a date string like `'2024-06-15'`.",
  starter: "function solve(isoString) {\n  \n}",
  ref: (isoString) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[new Date(isoString + "T00:00:00Z").getUTCMonth()];
  },
  argsList: [["2024-06-15"], ["1999-01-01"], ["2020-12-25"]],
}));
add("practice/dates", buildFn({
  id: "day-of-week", title: "Get the day of the week", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(isoString)` that returns the day of the week (0 = Sunday ... 6 = Saturday) for the given date string.",
  starter: "function solve(isoString) {\n  \n}",
  ref: (isoString) => new Date(isoString + "T00:00:00Z").getUTCDay(),
  argsList: [["2024-06-15"], ["2024-01-01"]],
}));
add("practice/dates", buildFn({
  id: "is-weekend", title: "Check if a date falls on a weekend", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(isoString)` that returns `true` if the date falls on a Saturday or Sunday.",
  starter: "function solve(isoString) {\n  \n}",
  ref: (isoString) => { const d = new Date(isoString + "T00:00:00Z").getUTCDay(); return d === 0 || d === 6; },
  argsList: [["2024-06-15"], ["2024-06-17"]],
}));
add("practice/dates", buildFn({
  id: "add-days-to-date", title: "Add days to a date", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(isoString, days)` that returns a new date string (`YYYY-MM-DD`) that is `days` days after `isoString`.",
  starter: "function solve(isoString, days) {\n  \n}",
  ref: (isoString, days) => {
    const d = new Date(isoString + "T00:00:00Z");
    d.setUTCDate(d.getUTCDate() + days);
    return d.toISOString().slice(0, 10);
  },
  argsList: [["2024-01-01", 10], ["2024-01-30", 5]],
}));
add("practice/dates", buildFn({
  id: "format-date-readable", title: "Format a date in a readable way", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(isoString)` that returns a date string formatted as `'June 15, 2024'` for input `'2024-06-15'`.",
  starter: "function solve(isoString) {\n  \n}",
  ref: (isoString) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date(isoString + "T00:00:00Z");
    return `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
  },
  argsList: [["2024-06-15"], ["1999-01-05"]],
}));

// ---- sets ----
add("practice/sets", buildFn({
  id: "is-subset", title: "Check if one array is a subset of another", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(a, b)` that returns `true` if every element of `a` also appears in `b`, using a `Set`.",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => { const setB = new Set(b); return a.every((v) => setB.has(v)); },
  argsList: [[[1, 2], [1, 2, 3]], [[1, 4], [1, 2, 3]]],
}));
add("practice/sets", buildFn({
  id: "union-of-sets", title: "Union of two arrays", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(a, b)` that returns an array of all unique values present in `a` OR `b`, using `Set`.",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => [...new Set([...a, ...b])],
  argsList: [[[1, 2], [2, 3]], [[1], [2]]],
}));
add("practice/sets", buildFn({
  id: "remove-set-item", title: "Remove an item from a Set", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(arr, item)` that builds a `Set` from `arr`, removes `item` from it with `.delete()`, and returns the remaining values as an array.",
  starter: "function solve(arr, item) {\n  \n}",
  ref: (arr, item) => { const s = new Set(arr); s.delete(item); return [...s]; },
  argsList: [[[1, 2, 3], 2], [["a", "b"], "z"]],
}));
add("practice/sets", buildFn({
  id: "set-to-sorted-array", title: "Convert a Set to a sorted array", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(arr)` that removes duplicates from `arr` using `Set` and returns the unique values sorted ascending.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => [...new Set(arr)].sort((a, b) => a - b),
  argsList: [[[3, 1, 2, 1, 3]], [[5, 5, 5]]],
}));
add("practice/sets", buildFn({
  id: "is-superset", title: "Check if a Set is a superset of another", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(superArr, subArr)` that returns `true` if every element of `subArr` is contained in `superArr` (treating both as sets of unique values).",
  starter: "function solve(superArr, subArr) {\n  \n}",
  ref: (superArr, subArr) => { const superSet = new Set(superArr); return subArr.every((v) => superSet.has(v)); },
  argsList: [[[1, 2, 3, 4], [2, 4]], [[1, 2], [1, 2, 3]]],
}));

module.exports = {};
