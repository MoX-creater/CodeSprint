const { buildFn, add } = require("./generate-challenges.cjs");

// ---- array-methods ----
add("intermediate/array-methods", buildFn({
  id: "map-to-length", title: "Map strings to their lengths", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(words)` that returns an array of the length of each word, using `.map()`.",
  starter: "function solve(words) {\n  \n}",
  ref: (words) => words.map((w) => w.length),
  argsList: [[["a", "bb", "ccc"]], [["hello", "hi"]]],
}));
add("intermediate/array-methods", buildFn({
  id: "reduce-to-sum", title: "Sum an array with reduce", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(arr)` that returns the sum of `arr` using `.reduce()`.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => arr.reduce((a, b) => a + b, 0),
  argsList: [[[1, 2, 3, 4]], [[]]],
}));
add("intermediate/array-methods", buildFn({
  id: "find-first-match", title: "Find the first matching element", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(arr, min)` that returns the first number in `arr` greater than `min`, using `.find()`. Return `undefined` if none match.",
  starter: "function solve(arr, min) {\n  \n}",
  ref: (arr, min) => arr.find((n) => n > min),
  argsList: [[[1, 5, 10, 15], 8], [[1, 2], 10]],
}));
add("intermediate/array-methods", buildFn({
  id: "find-index-match", title: "Find the index of a matching element", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(arr, min)` that returns the index of the first number greater than `min`, using `.findIndex()`.",
  starter: "function solve(arr, min) {\n  \n}",
  ref: (arr, min) => arr.findIndex((n) => n > min),
  argsList: [[[1, 5, 10], 4], [[1, 2], 10]],
}));
add("intermediate/array-methods", buildFn({
  id: "every-positive", title: "Check if every number is positive", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(arr)` that returns `true` if every number in `arr` is positive, using `.every()`.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => arr.every((n) => n > 0),
  argsList: [[[1, 2, 3]], [[1, -2, 3]]],
}));
add("intermediate/array-methods", buildFn({
  id: "some-negative", title: "Check if any number is negative", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(arr)` that returns `true` if at least one number in `arr` is negative, using `.some()`.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => arr.some((n) => n < 0),
  argsList: [[[1, -2, 3]], [[1, 2, 3]]],
}));
add("intermediate/array-methods", buildFn({
  id: "sort-by-property", title: "Sort an array of objects by a property", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(people)` that returns `people` sorted by their `age` property, ascending, using `.sort()` with a compare function.",
  starter: "function solve(people) {\n  \n}",
  ref: (people) => [...people].sort((a, b) => a.age - b.age),
  argsList: [[[{ name: "A", age: 30 }, { name: "B", age: 20 }]]],
}));
add("intermediate/array-methods", buildFn({
  id: "map-filter-chain", title: "Chain map and filter", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(arr)` that returns the squares of only the even numbers in `arr`, chaining `.filter()` and `.map()`.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => arr.filter((n) => n % 2 === 0).map((n) => n * n),
  argsList: [[[1, 2, 3, 4, 5, 6]], [[1, 3, 5]]],
}));
add("intermediate/array-methods", buildFn({
  id: "reduce-to-object", title: "Turn an array into a lookup object with reduce", difficulty: "Hard", minutes: 6,
  prompt: "Write a function `solve(people)` that reduces an array of `{ id, name }` objects into a single object mapping each `id` to its `name`.",
  starter: "function solve(people) {\n  \n}",
  ref: (people) => people.reduce((acc, p) => { acc[p.id] = p.name; return acc; }, {}),
  argsList: [[[{ id: 1, name: "Ada" }, { id: 2, name: "Sam" }]]],
}));
add("intermediate/array-methods", buildFn({
  id: "array-from-range", title: "Generate a range with Array.from", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(n)` that returns an array `[0, 1, 2, ..., n-1]` using `Array.from()` (not a loop).",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => Array.from({ length: n }, (_, i) => i),
  argsList: [[5], [0], [3]],
}));

// ---- objects-2 ----
add("intermediate/objects-2", buildFn({
  id: "object-entries-to-map", title: "Double every value in an object", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(obj)` that returns a new object with the same keys but every value doubled, using `Object.entries()` and `Object.fromEntries()`.",
  starter: "function solve(obj) {\n  \n}",
  ref: (obj) => Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v * 2])),
  argsList: [[{ a: 1, b: 2 }], [{ x: 5 }]],
}));
add("intermediate/objects-2", buildFn({
  id: "filter-object-keys", title: "Filter an object's keys", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(obj, keys)` that returns a new object containing only the properties of `obj` whose keys appear in the `keys` array.",
  starter: "function solve(obj, keys) {\n  \n}",
  ref: (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => keys.includes(k))),
  argsList: [[{ a: 1, b: 2, c: 3 }, ["a", "c"]]],
}));
add("intermediate/objects-2", buildFn({
  id: "object-freeze-check", title: "Check if an object is frozen", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(obj)` that freezes `obj` with `Object.freeze()` and returns whether it's now frozen, using `Object.isFrozen()`.",
  starter: "function solve(obj) {\n  \n}",
  ref: (obj) => { Object.freeze(obj); return Object.isFrozen(obj); },
  argsList: [[{ a: 1 }]],
}));
add("intermediate/objects-2", buildFn({
  id: "computed-property-names", title: "Build an object with a computed key", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(key, value)` that returns an object where the property name is the VALUE of `key` (a computed property name), mapped to `value`.",
  starter: "function solve(key, value) {\n  \n}",
  ref: (key, value) => ({ [key]: value }),
  argsList: [["name", "Ada"], ["id", 5]],
}));
add("intermediate/objects-2", buildFn({
  id: "object-values-sum", title: "Sum all numeric values in an object", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(obj)` that returns the sum of all values in `obj`, using `Object.values()`.",
  starter: "function solve(obj) {\n  \n}",
  ref: (obj) => Object.values(obj).reduce((a, b) => a + b, 0),
  argsList: [[{ a: 1, b: 2, c: 3 }], [{}]],
}));
add("intermediate/objects-2", buildFn({
  id: "rename-key", title: "Rename a key in an object", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(obj, oldKey, newKey)` that returns a new object with `oldKey` renamed to `newKey`, preserving its value and all other keys.",
  starter: "function solve(obj, oldKey, newKey) {\n  \n}",
  ref: (obj, oldKey, newKey) => {
    const { [oldKey]: value, ...rest } = obj;
    return { ...rest, [newKey]: value };
  },
  argsList: [[{ a: 1, b: 2 }, "a", "z"]],
}));

// ---- scope ----
add("intermediate/scope", buildFn({
  id: "iife-basic", title: "Use an IIFE to create private scope", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(n)` that uses an Immediately Invoked Function Expression `(function(){...})()` internally to compute and return `n * n`, demonstrating that the IIFE's variables don't leak out.",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => (function (x) { const result = x * x; return result; })(n),
  argsList: [[4], [7]],
}));
add("intermediate/scope", buildFn({
  id: "private-counter-object", title: "Build a private counter object", difficulty: "Hard", minutes: 6,
  prompt: "Write a function `solve()` that returns an object with two methods: `increment()` (adds 1 to a hidden counter, returns nothing) and `getCount()` (returns the current count). The counter variable must not be accessible from outside.",
  starter: "function solve() {\n  \n}",
  custom: [
    {
      expected: 3,
      run: (solve) => {
        const counter = solve();
        counter.increment();
        counter.increment();
        counter.increment();
        return counter.getCount();
      },
    },
    {
      expected: 0,
      run: (solve) => solve().getCount(),
    },
  ],
}));
add("intermediate/scope", buildFn({
  id: "global-vs-local", title: "Local variables shadow global ones", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve()` that declares a local variable `x = 'local'` inside the function (even if a global `x` exists elsewhere) and returns it, demonstrating that the local declaration takes precedence within the function's scope.",
  starter: "function solve() {\n  \n}",
  ref: () => { const x = "local"; return x; },
  argsList: [[]],
}));

// ---- functions-2 ----
add("intermediate/functions-2", buildFn({
  id: "arrow-vs-function-this", title: "Return values from an array of arrow functions", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(nums)` that returns a new array where each number is passed through the arrow function `n => n % 2 === 0 ? 'even' : 'odd'`.",
  starter: "function solve(nums) {\n  \n}",
  ref: (nums) => nums.map((n) => (n % 2 === 0 ? "even" : "odd")),
  argsList: [[[1, 2, 3, 4]]],
}));
add("intermediate/functions-2", buildFn({
  id: "curry-add", title: "Curry a two-argument function", difficulty: "Hard", minutes: 6,
  prompt: "Write a function `solve(a)` that returns a function which takes `b` and returns `a + b` (a curried adder). Return the result of calling `solve(3)(4)`.",
  starter: "function solve(a) {\n  return function(b) {\n    \n  };\n}",
  custom: [
    { expected: 7, run: (solve) => solve(3)(4) },
    { expected: 10, run: (solve) => solve(5)(5) },
  ],
}));
add("intermediate/functions-2", buildFn({
  id: "compose-two-functions", title: "Compose two functions", difficulty: "Hard", minutes: 6,
  prompt: "Write a function `solve(f, g, x)` that returns `f(g(x))` — apply `g` first, then `f` to the result.",
  starter: "function solve(f, g, x) {\n  \n}",
  ref: (f, g, x) => f(g(x)),
  argsList: [[(n) => n + 1, (n) => n * 2, 5]],
}));
add("intermediate/functions-2", buildFn({
  id: "default-and-rest-combo", title: "Combine default and rest parameters", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(prefix = '>', ...items)` that returns an array where each item is prefixed: `prefix + item`.",
  starter: "function solve(prefix = '>', ...items) {\n  \n}",
  ref: (prefix = ">", ...items) => items.map((i) => prefix + i),
  argsList: [["-", "a", "b"], [undefined, "x"]],
}));

// ---- classes ----
add("intermediate/classes", buildFn({
  id: "class-with-method", title: "Class with a simple method", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(w, h)` that defines a class `Box` with a constructor taking `width` and `height`, and a method `perimeter()` returning `2 * (width + height)`. Return the result of `.perimeter()`.",
  starter: "function solve(w, h) {\n  \n}",
  ref: (w, h) => { class Box { constructor(width, height) { this.width = width; this.height = height; } perimeter() { return 2 * (this.width + this.height); } } return new Box(w, h).perimeter(); },
  argsList: [[3, 4], [10, 2]],
}));
add("intermediate/classes", buildFn({
  id: "class-private-field", title: "Use a private class field", difficulty: "Hard", minutes: 6,
  prompt: "Write a function `solve(balance)` that defines a class `Account` with a private field `#balance` initialized from the constructor, and a method `getBalance()` that returns it. Return the result of calling `.getBalance()` on a new instance.",
  starter: "function solve(balance) {\n  \n}",
  ref: (balance) => { class Account { #balance; constructor(b) { this.#balance = b; } getBalance() { return this.#balance; } } return new Account(balance).getBalance(); },
  argsList: [[100], [0]],
}));

module.exports = {};
