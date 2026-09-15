const { buildFn, add } = require("./generate-challenges.cjs");

// ---- array-methods ----
add("intermediate/array-methods", buildFn({
  id: "flat-map-example", title: "Map and flatten in one step", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(sentences)` that takes an array of sentences and returns a single flat array of all their words, using `.flatMap()`.",
  starter: "function solve(sentences) {\n  \n}",
  ref: (sentences) => sentences.flatMap((s) => s.split(" ")),
  argsList: [[["hello world", "foo bar"]], [["one"]]],
}));
add("intermediate/array-methods", buildFn({
  id: "array-some-vs-every", title: "Combine some and every", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(arr)` that returns `'all positive'` if every number is positive, `'mixed'` if some but not all are positive, or `'none positive'` if none are.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => {
    if (arr.every((n) => n > 0)) return "all positive";
    if (arr.some((n) => n > 0)) return "mixed";
    return "none positive";
  },
  argsList: [[[1, 2, 3]], [[1, -2, 3]], [[-1, -2]]],
}));
add("intermediate/array-methods", buildFn({
  id: "reduce-right-example", title: "Reduce from the right", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(arr)` that concatenates the strings in `arr` from right to left, using `.reduceRight()`.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => arr.reduceRight((acc, s) => acc + s, ""),
  argsList: [[["a", "b", "c"]], [["x"]]],
}));
add("intermediate/array-methods", buildFn({
  id: "map-with-index", title: "Use the index argument in map", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(arr)` that returns a new array where each element is `value + index` (using the second argument `.map()` provides).",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => arr.map((v, i) => v + i),
  argsList: [[[10, 10, 10]], [[0, 0, 0, 0]]],
}));

// ---- objects-2 ----
add("intermediate/objects-2", buildFn({
  id: "group-objects-by-key", title: "Group an array of objects by a property", difficulty: "Hard", minutes: 6,
  prompt: "Write a function `solve(items)` that groups an array of `{ category, name }` objects into an object keyed by `category`, each mapping to an array of names.",
  starter: "function solve(items) {\n  \n}",
  ref: (items) => items.reduce((acc, item) => { (acc[item.category] ??= []).push(item.name); return acc; }, {}),
  argsList: [[[{ category: "fruit", name: "apple" }, { category: "veg", name: "carrot" }, { category: "fruit", name: "banana" }]]],
}));
add("intermediate/objects-2", buildFn({
  id: "object-assign-multi", title: "Merge multiple objects with Object.assign", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(a, b, c)` that merges three objects into a new one using `Object.assign({}, a, b, c)`, with later objects winning conflicts.",
  starter: "function solve(a, b, c) {\n  \n}",
  ref: (a, b, c) => Object.assign({}, a, b, c),
  argsList: [[{ x: 1 }, { y: 2 }, { x: 3 }]],
}));

// ---- scope ----
add("intermediate/scope", buildFn({
  id: "let-loop-closures-array", title: "Closures inside a for-of loop", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(names)` that returns an array of functions, one per name in `names`; calling the function at index `i` should return `'Hi, ' + names[i]`.",
  starter: "function solve(names) {\n  \n}",
  custom: [
    {
      expected: ["Hi, Ada", "Hi, Sam"],
      run: (solve) => {
        const fns = solve(["Ada", "Sam"]);
        return fns.map((f) => f());
      },
    },
  ],
}));
add("intermediate/scope", buildFn({
  id: "module-pattern-basic", title: "Build a simple module with a public API", difficulty: "Hard", minutes: 6,
  prompt: "Write a function `solve(initial)` that returns an object with `get()` (returns the current value) and `set(v)` (updates it) methods, using a closure over a variable initialized to `initial`.",
  starter: "function solve(initial) {\n  \n}",
  custom: [
    {
      expected: [1, 5],
      run: (solve) => {
        const mod = solve(1);
        const before = mod.get();
        mod.set(5);
        return [before, mod.get()];
      },
    },
  ],
}));

// ---- functions-2 ----
add("intermediate/functions-2", buildFn({
  id: "partial-application", title: "Partially apply a function", difficulty: "Hard", minutes: 6,
  prompt: "Write a function `solve(fn, ...presetArgs)` that returns a new function which, when called with more arguments, calls `fn` with `presetArgs` followed by the new arguments.",
  starter: "function solve(fn, ...presetArgs) {\n  \n}",
  custom: [
    {
      expected: 6,
      run: (solve) => {
        const add3 = (a, b, c) => a + b + c;
        const addTo1 = solve(add3, 1);
        return addTo1(2, 3);
      },
    },
  ],
}));
add("intermediate/functions-2", buildFn({
  id: "arrow-implicit-return-object", title: "Return an object literal with shorthand properties", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve(name, age)` that returns `{ name, age }` using object shorthand property names.",
  starter: "function solve(name, age) {\n  \n}",
  ref: (name, age) => ({ name, age }),
  argsList: [["Ada", 30], ["Sam", 5]],
}));

// ---- async ----
add("intermediate/async", buildFn({
  id: "delay-then-resolve", title: "Simulate a delayed API call", difficulty: "Medium", minutes: 4,
  prompt: "Write an async function `solve(value)` that awaits `new Promise(resolve => resolve(value))` and returns the resolved value (simulating an API response).",
  starter: "async function solve(value) {\n  \n}",
  ref: async (value) => new Promise((resolve) => resolve(value)),
  argsList: [["data"], [42]],
}));
add("intermediate/async", buildFn({
  id: "async-filter", title: "Filter an array using async checks", difficulty: "Hard", minutes: 6,
  prompt: "Write an async function `solve(nums)` that returns only the even numbers from `nums`, checking each one with an async predicate (`await Promise.resolve(n % 2 === 0)`) and using `Promise.all` to gather the checks before filtering.",
  starter: "async function solve(nums) {\n  \n}",
  ref: async (nums) => {
    const checks = await Promise.all(nums.map((n) => Promise.resolve(n % 2 === 0)));
    return nums.filter((_, i) => checks[i]);
  },
  argsList: [[[1, 2, 3, 4, 5]], [[1, 3, 5]]],
}));

// ---- classes ----
add("intermediate/classes", buildFn({
  id: "class-toString-override", title: "Override toString on a class", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(name, price)` that defines a class `Product` with a `toString()` method returning `` `${name}: $${price}` ``. Return the result of using template-literal string coercion on a new instance.",
  starter: "function solve(name, price) {\n  \n}",
  ref: (name, price) => {
    class Product {
      constructor(name, price) { this.name = name; this.price = price; }
      toString() { return `${this.name}: $${this.price}`; }
    }
    return `${new Product(name, price)}`;
  },
  argsList: [["Pen", 2], ["Book", 15]],
}));
add("intermediate/classes", buildFn({
  id: "class-instanceof-check", title: "Check inheritance with instanceof", difficulty: "Medium", minutes: 4,
  prompt: "Write a function `solve()` that defines a class `Animal` and a subclass `Cat extends Animal`, creates a new `Cat`, and returns `true` if it's an instance of BOTH `Cat` and `Animal`, using `instanceof`.",
  starter: "function solve() {\n  \n}",
  ref: () => { class Animal {} class Cat extends Animal {} const c = new Cat(); return c instanceof Cat && c instanceof Animal; },
  argsList: [[]],
}));

module.exports = {};
