// Data model:
// sections[] -> { slug, title, blurb, accent, subcategories[] }
// subcategories[] -> { slug, title, blurb, challenges[] }
// challenges[] -> { id, title, difficulty, minutes, kind, prompt, ... }
//
// kind: "fn"        solve(...args) returns a value, compared to `expected`
//       "domRead"   solve(container, ...args) returns a value — container is
//                    a real DOM node built from `setupHTML` for each test
//       "domMutate" plain statements run with `container` in scope; each
//                    test's `check(container)` decides pass/fail

import { lessons } from "./lessons";
import { moreChallenges } from "./moreChallenges";

export const sections = [
  {
    slug: "basics",
    title: "JavaScript Basics",
    blurb: "Beginner-friendly exercises — learn JavaScript from scratch.",
    accent: "#5B8DEF",
    subcategories: [
      {
        slug: "variables",
        title: "Variables",
        blurb: "The basics of declaring and assigning values to variables.",
        challenges: [
          {
            id: "sum-two",
            title: "Sum two numbers",
            difficulty: "Easy",
            minutes: 2,
            kind: "fn",
            prompt: "Write a function `solve(a, b)` that returns the sum of `a` and `b`.",
            starter: "function solve(a, b) {\n  \n}",
            tests: [
              { args: [2, 3], expected: 5 },
              { args: [-1, 1], expected: 0 },
              { args: [10, 15], expected: 25 },
            ],
          },
          {
            id: "type-of",
            title: "Get the type of a value",
            difficulty: "Easy",
            minutes: 2,
            kind: "fn",
            prompt: "Write a function `solve(value)` that returns the JavaScript type of `value` as a string, using `typeof`.",
            starter: "function solve(value) {\n  \n}",
            tests: [
              { args: [42], expected: "number" },
              { args: ["hi"], expected: "string" },
              { args: [true], expected: "boolean" },
            ],
          },
        ],
      },
      {
        slug: "booleans",
        title: "Booleans",
        blurb: "True/false logic — the first step toward real programming.",
        challenges: [
          {
            id: "strict-equal",
            title: "Strict equality check",
            difficulty: "Easy",
            minutes: 2,
            kind: "fn",
            prompt: "Write a function `solve(a, b)` that returns `true` if `a` and `b` are strictly equal (same value AND type), otherwise `false`.",
            starter: "function solve(a, b) {\n  \n}",
            tests: [
              { args: [5, "5"], expected: false },
              { args: [5, 5], expected: true },
              { args: [null, undefined], expected: false },
            ],
          },
          {
            id: "is-even",
            title: "Check if a number is even",
            difficulty: "Easy",
            minutes: 2,
            kind: "fn",
            prompt: "Write a function `solve(n)` that returns `true` if `n` is even, `false` otherwise.",
            starter: "function solve(n) {\n  \n}",
            tests: [
              { args: [4], expected: true },
              { args: [7], expected: false },
              { args: [0], expected: true },
            ],
          },
        ],
      },
      {
        slug: "operators",
        title: "Operators",
        blurb: "Calculate with JavaScript values, or compare them using operators.",
        challenges: [
          {
            id: "round-two",
            title: "Round to 2 decimal places",
            difficulty: "Medium",
            minutes: 3,
            kind: "fn",
            prompt: "Write a function `solve(n)` that rounds `n` to 2 decimal places and returns it as a number.",
            starter: "function solve(n) {\n  \n}",
            tests: [
              { args: [3.14159], expected: 3.14 },
              { args: [1.005], expected: 1 },
              { args: [2.5], expected: 2.5 },
            ],
          },
          {
            id: "is-divisible",
            title: "Check divisibility",
            difficulty: "Easy",
            minutes: 2,
            kind: "fn",
            prompt: "Write a function `solve(n, divisor)` that returns `true` if `n` is evenly divisible by `divisor`, using the modulo operator.",
            starter: "function solve(n, divisor) {\n  \n}",
            tests: [
              { args: [10, 5], expected: true },
              { args: [10, 3], expected: false },
              { args: [9, 3], expected: true },
            ],
          },
        ],
      },
      {
        slug: "strings",
        title: "Strings",
        blurb: "Declare and manipulate string variables, and combine multiple strings into one.",
        challenges: [
          {
            id: "nth-char",
            title: "Get the nth character",
            difficulty: "Easy",
            minutes: 2,
            kind: "fn",
            prompt: "Write a function `solve(str, n)` that returns the character at index `n` of `str`.",
            starter: "function solve(str, n) {\n  \n}",
            tests: [
              { args: ["hello", 1], expected: "e" },
              { args: ["javascript", 0], expected: "j" },
              { args: ["abc", 2], expected: "c" },
            ],
          },
          {
            id: "reverse-string",
            title: "Reverse a string",
            difficulty: "Easy",
            minutes: 3,
            kind: "fn",
            prompt: "Write a function `solve(str)` that returns `str` reversed.",
            starter: "function solve(str) {\n  \n}",
            tests: [
              { args: ["hello"], expected: "olleh" },
              { args: ["JS"], expected: "SJ" },
              { args: [""], expected: "" },
            ],
          },
          {
            id: "most-frequent-char",
            title: "Find the most frequent character",
            difficulty: "Hard",
            minutes: 6,
            kind: "fn",
            prompt:
              "Write a function `solve(str)` that returns the character that appears most often in `str` (lowercase letters only, ignore spaces). If there's a tie, return whichever ties for first appears earliest in the string.",
            starter: "function solve(str) {\n  \n}",
            tests: [
              { args: ["mississippi"], expected: "i" },
              { args: ["banana"], expected: "a" },
              { args: ["abcabc"], expected: "a" },
            ],
          },
        ],
      },
      {
        slug: "conditionals",
        title: "Conditionals",
        blurb: "Control the flow of your programs and make decisions with if and else.",
        challenges: [
          {
            id: "fizzbuzz",
            title: "FizzBuzz",
            difficulty: "Medium",
            minutes: 4,
            kind: "fn",
            prompt: "Write a function `solve(n)` that returns 'Fizz' if `n` is divisible by 3, 'Buzz' if divisible by 5, 'FizzBuzz' if divisible by both, otherwise the number itself.",
            starter: "function solve(n) {\n  \n}",
            tests: [
              { args: [3], expected: "Fizz" },
              { args: [5], expected: "Buzz" },
              { args: [15], expected: "FizzBuzz" },
              { args: [7], expected: 7 },
            ],
          },
          {
            id: "grade-classifier",
            title: "Classify a grade",
            difficulty: "Medium",
            minutes: 3,
            kind: "fn",
            prompt: "Write a function `solve(score)` that returns 'A' for 90+, 'B' for 80-89, 'C' for 70-79, otherwise 'F'.",
            starter: "function solve(score) {\n  \n}",
            tests: [
              { args: [95], expected: "A" },
              { args: [82], expected: "B" },
              { args: [71], expected: "C" },
              { args: [40], expected: "F" },
            ],
          },
        ],
      },
      {
        slug: "functions-1",
        title: "Functions I",
        blurb: "The fundamental concepts and syntax of functions — define, call, and pass arguments.",
        challenges: [
          {
            id: "square-number",
            title: "Square a number",
            difficulty: "Easy",
            minutes: 2,
            kind: "fn",
            prompt: "Write a function `solve(n)` that returns `n` multiplied by itself.",
            starter: "function solve(n) {\n  \n}",
            tests: [
              { args: [4], expected: 16 },
              { args: [-3], expected: 9 },
              { args: [0], expected: 0 },
            ],
          },
          {
            id: "greet-user",
            title: "Return a greeting",
            difficulty: "Easy",
            minutes: 2,
            kind: "fn",
            prompt: "Write a function `solve(name)` that returns the string `'Hello, ' + name + '!'`.",
            starter: "function solve(name) {\n  \n}",
            tests: [
              { args: ["Ada"], expected: "Hello, Ada!" },
              { args: ["Sam"], expected: "Hello, Sam!" },
            ],
          },
        ],
      },
      {
        slug: "arrays",
        title: "Arrays",
        blurb: "The basics of working with arrays — creating, accessing, and modifying elements.",
        challenges: [
          {
            id: "nth-element",
            title: "Get the nth element of an array",
            difficulty: "Easy",
            minutes: 2,
            kind: "fn",
            prompt: "Write a function `solve(arr, n)` that returns the element at index `n`.",
            starter: "function solve(arr, n) {\n  \n}",
            tests: [
              { args: [[1, 2, 3], 1], expected: 2 },
              { args: [["a", "b", "c"], 0], expected: "a" },
              { args: [[10, 20, 30], 2], expected: 30 },
            ],
          },
          {
            id: "sum-array",
            title: "Sum all elements",
            difficulty: "Easy",
            minutes: 3,
            kind: "fn",
            prompt: "Write a function `solve(arr)` that returns the sum of all numbers in `arr`.",
            starter: "function solve(arr) {\n  \n}",
            tests: [
              { args: [[1, 2, 3]], expected: 6 },
              { args: [[10, -5, 5]], expected: 10 },
              { args: [[]], expected: 0 },
            ],
          },
        ],
      },
      {
        slug: "objects",
        title: "Objects",
        blurb: "Access object properties, and create and modify objects.",
        challenges: [
          {
            id: "get-property",
            title: "Read a property",
            difficulty: "Easy",
            minutes: 2,
            kind: "fn",
            prompt: "Write a function `solve(obj, key)` that returns the value at `obj[key]`.",
            starter: "function solve(obj, key) {\n  \n}",
            tests: [
              { args: [{ name: "Ada" }, "name"], expected: "Ada" },
              { args: [{ a: 1, b: 2 }, "b"], expected: 2 },
              { args: [{}, "missing"], expected: undefined },
            ],
          },
          {
            id: "merge-objects",
            title: "Merge two objects",
            difficulty: "Easy",
            minutes: 3,
            kind: "fn",
            prompt: "Write a function `solve(a, b)` that returns a new object combining `a` and `b`, where `b`'s properties win on conflicts.",
            starter: "function solve(a, b) {\n  \n}",
            tests: [
              { args: [{ x: 1 }, { y: 2 }], expected: { x: 1, y: 2 } },
              { args: [{ x: 1 }, { x: 2 }], expected: { x: 2 } },
            ],
          },
          {
            id: "deep-equal",
            title: "Deeply compare two objects",
            difficulty: "Hard",
            minutes: 7,
            kind: "fn",
            prompt:
              "Write a function `solve(a, b)` that returns `true` if `a` and `b` have the same structure and values, checking nested objects recursively (not just `===`, which only compares references).",
            starter: "function solve(a, b) {\n  \n}",
            tests: [
              { args: [{ x: { y: 1 } }, { x: { y: 1 } }], expected: true },
              { args: [{ x: { y: 1 } }, { x: { y: 2 } }], expected: false },
              { args: [{ a: 1, b: 2 }, { a: 1, b: 2 }], expected: true },
            ],
          },
        ],
      },
      {
        slug: "loops",
        title: "Loops",
        blurb: "Using for and while loops, and controlling flow with break and continue.",
        challenges: [
          {
            id: "sum-to-n",
            title: "Sum numbers from 1 to n",
            difficulty: "Easy",
            minutes: 3,
            kind: "fn",
            prompt: "Write a function `solve(n)` that returns the sum of all integers from 1 to `n` using a loop.",
            starter: "function solve(n) {\n  \n}",
            tests: [
              { args: [5], expected: 15 },
              { args: [1], expected: 1 },
              { args: [10], expected: 55 },
            ],
          },
          {
            id: "count-vowels",
            title: "Count vowels in a string",
            difficulty: "Medium",
            minutes: 3,
            kind: "fn",
            prompt: "Write a function `solve(str)` that returns the number of vowels (a, e, i, o, u) in `str`.",
            starter: "function solve(str) {\n  \n}",
            tests: [
              { args: ["hello"], expected: 2 },
              { args: ["javascript"], expected: 3 },
              { args: ["xyz"], expected: 0 },
            ],
          },
          {
            id: "is-prime",
            title: "Check if a number is prime",
            difficulty: "Hard",
            minutes: 5,
            kind: "fn",
            prompt:
              "Write a function `solve(n)` that returns `true` if `n` is a prime number (greater than 1, only divisible by 1 and itself), `false` otherwise. Don't check every number up to `n` — stop once you pass the square root of `n`.",
            starter: "function solve(n) {\n  \n}",
            tests: [
              { args: [2], expected: true },
              { args: [17], expected: true },
              { args: [1], expected: false },
              { args: [18], expected: false },
              { args: [97], expected: true },
            ],
          },
          {
            id: "spiral-sum",
            title: "Sum every other number in a range",
            difficulty: "Hard",
            minutes: 5,
            kind: "fn",
            prompt:
              "Write a function `solve(start, end)` that returns the sum of every number from `start` to `end` (inclusive) that is NOT divisible by 3, using a loop.",
            starter: "function solve(start, end) {\n  \n}",
            tests: [
              { args: [1, 6], expected: 12 },
              { args: [1, 10], expected: 37 },
              { args: [3, 3], expected: 0 },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "intermediate",
    title: "Intermediate JavaScript",
    blurb: "ES6 features, array methods, and logic building.",
    accent: "#6FCF97",
    subcategories: [
      {
        slug: "array-methods",
        title: "Array Methods",
        blurb: "Use array methods to manipulate, transform, and analyze data.",
        challenges: [
          {
            id: "filter-evens",
            title: "Filter even numbers",
            difficulty: "Medium",
            minutes: 3,
            kind: "fn",
            prompt: "Write a function `solve(arr)` that returns a new array with only the even numbers from `arr`, using `.filter()`.",
            starter: "function solve(arr) {\n  \n}",
            tests: [
              { args: [[1, 2, 3, 4, 5, 6]], expected: [2, 4, 6] },
              { args: [[1, 3, 5]], expected: [] },
              { args: [[2, 4, 6]], expected: [2, 4, 6] },
            ],
          },
          {
            id: "find-max",
            title: "Find the largest number",
            difficulty: "Medium",
            minutes: 3,
            kind: "fn",
            prompt: "Write a function `solve(arr)` that returns the largest number in `arr`, using `.reduce()` or `Math.max`.",
            starter: "function solve(arr) {\n  \n}",
            tests: [
              { args: [[3, 7, 2, 9, 4]], expected: 9 },
              { args: [[-5, -1, -10]], expected: -1 },
              { args: [[42]], expected: 42 },
            ],
          },
          {
            id: "deep-flatten",
            title: "Flatten an array of any depth",
            difficulty: "Hard",
            minutes: 6,
            kind: "fn",
            prompt:
              "Write a function `solve(arr)` that flattens a nested array of ANY depth into a single flat array. (Hint: recursion, or `Array.prototype.flat(Infinity)`.)",
            starter: "function solve(arr) {\n  \n}",
            tests: [
              { args: [[1, [2, [3, [4, 5]], 6]]], expected: [1, 2, 3, 4, 5, 6] },
              { args: [[1, [2, 3]]], expected: [1, 2, 3] },
              { args: [[[[1]]]], expected: [1] },
            ],
          },
          {
            id: "group-by-parity",
            title: "Group numbers by even/odd",
            difficulty: "Hard",
            minutes: 5,
            kind: "fn",
            prompt:
              "Write a function `solve(arr)` that returns an object with two keys, `even` and `odd`, each mapping to an array of the numbers from `arr` that match. Preserve original order within each group.",
            starter: "function solve(arr) {\n  \n}",
            tests: [
              { args: [[1, 2, 3, 4, 5]], expected: { even: [2, 4], odd: [1, 3, 5] } },
              { args: [[2, 4, 6]], expected: { even: [2, 4, 6], odd: [] } },
            ],
          },
        ],
      },
      {
        slug: "objects-2",
        title: "Objects II",
        blurb: "Dynamic property access, looping over objects, and built-in object utilities.",
        challenges: [
          {
            id: "object-keys-count",
            title: "Count object properties",
            difficulty: "Easy",
            minutes: 2,
            kind: "fn",
            prompt: "Write a function `solve(obj)` that returns the number of keys in `obj`, using `Object.keys()`.",
            starter: "function solve(obj) {\n  \n}",
            tests: [
              { args: [{ a: 1, b: 2, c: 3 }], expected: 3 },
              { args: [{}], expected: 0 },
              { args: [{ x: 1 }], expected: 1 },
            ],
          },
          {
            id: "values-to-array",
            title: "Get all values as an array",
            difficulty: "Medium",
            minutes: 3,
            kind: "fn",
            prompt: "Write a function `solve(obj)` that returns an array of all the values in `obj`, using `Object.values()`.",
            starter: "function solve(obj) {\n  \n}",
            tests: [
              { args: [{ a: 1, b: 2 }], expected: [1, 2] },
              { args: [{ x: "hi" }], expected: ["hi"] },
            ],
          },
        ],
      },
      {
        slug: "scope",
        title: "Scope",
        blurb: "Function scope, block scope, global scope, and scope hierarchy.",
        challenges: [
          {
            id: "make-counter",
            title: "Build a counter with closures",
            difficulty: "Medium",
            minutes: 4,
            kind: "fn",
            prompt:
              "Write a function `solve()` that returns a function. Each time the returned function is called, it should return the next number starting at 1 (1, then 2, then 3...). Use a closure to remember the count.",
            starter: "function solve() {\n  \n}",
            tests: [
              {
                args: [],
                expected: [1, 2, 3],
                run: (fn) => {
                  const counter = fn();
                  return [counter(), counter(), counter()];
                },
              },
            ],
          },
          {
            id: "block-scope-fix",
            title: "Capture the right value in a loop",
            difficulty: "Medium",
            minutes: 4,
            kind: "fn",
            prompt:
              "Write a function `solve()` that returns an array of 3 functions. Calling the function at index `i` should return `i`. (Hint: use `let`, not `var`, in your loop.)",
            starter: "function solve() {\n  \n}",
            tests: [
              {
                args: [],
                expected: [0, 1, 2],
                run: (fn) => {
                  const fns = fn();
                  return fns.map((f) => f());
                },
              },
            ],
          },
          {
            id: "memoize",
            title: "Memoize an expensive function",
            difficulty: "Hard",
            minutes: 6,
            kind: "fn",
            prompt:
              "Write a function `solve(fn)` that returns a memoized version of `fn`: the first time it's called with a given argument, it calls `fn` and caches the result; on later calls with the SAME argument, it returns the cached result instead of calling `fn` again. Use a closure to hold the cache.",
            starter: "function solve(fn) {\n  \n}",
            tests: [
              {
                args: [],
                expected: [10, 10, 20],
                run: (fn) => {
                  let calls = 0;
                  const slowDouble = (n) => {
                    calls++;
                    return n * 2;
                  };
                  const memoized = fn(slowDouble);
                  const results = [memoized(5), memoized(5), memoized(10)];
                  // calls should be 2 (one per distinct argument), not 3
                  if (calls !== 2) throw new Error(`expected the wrapped function to be called 2 times, but it was called ${calls} times`);
                  return results;
                },
              },
            ],
          },
        ],
      },
      {
        slug: "functions-2",
        title: "Functions II",
        blurb: "Arrow functions, rest parameters, closures, and higher-order functions.",
        challenges: [
          {
            id: "sum-all",
            title: "Sum any number of arguments",
            difficulty: "Medium",
            minutes: 3,
            kind: "fn",
            prompt: "Write a function `solve(...nums)` that returns the sum of any number of arguments, using rest parameters.",
            starter: "function solve(...nums) {\n  \n}",
            tests: [
              { args: [1, 2, 3], expected: 6 },
              { args: [5], expected: 5 },
              { args: [1, 2, 3, 4, 5], expected: 15 },
            ],
          },
          {
            id: "higher-order-apply-twice",
            title: "Apply a function twice",
            difficulty: "Hard",
            minutes: 4,
            kind: "fn",
            prompt: "Write a function `solve(fn, x)` that returns `fn(fn(x))` — calling `fn` on `x`, then calling `fn` again on that result.",
            starter: "function solve(fn, x) {\n  \n}",
            tests: [
              {
                args: [(n) => n + 1, 5],
                expected: 7,
              },
              {
                args: [(n) => n * 2, 3],
                expected: 12,
              },
            ],
          },
        ],
      },
      {
        slug: "async",
        title: "Asynchronous JavaScript",
        blurb: "Move time-consuming tasks to the background and continue once they finish.",
        challenges: [
          {
            id: "await-value",
            title: "Await a resolved promise",
            difficulty: "Medium",
            minutes: 3,
            kind: "fn",
            prompt:
              "Write an async function `solve(value)` that returns a Promise which resolves to `value * 2`. (Hint: `async function solve(value) { return value * 2; }` already returns a Promise.)",
            starter: "async function solve(value) {\n  \n}",
            tests: [
              { args: [5], expected: 10 },
              { args: [0], expected: 0 },
              { args: [-3], expected: -6 },
            ],
          },
          {
            id: "chain-promises",
            title: "Chain two async steps",
            difficulty: "Hard",
            minutes: 5,
            kind: "fn",
            prompt:
              "Write an async function `solve(n)` that awaits `Promise.resolve(n + 1)`, then returns that result multiplied by 2.",
            starter: "async function solve(n) {\n  \n}",
            tests: [
              { args: [1], expected: 4 },
              { args: [4], expected: 10 },
            ],
          },
          {
            id: "promise-all-sum",
            title: "Resolve several promises in parallel",
            difficulty: "Hard",
            minutes: 6,
            kind: "fn",
            prompt:
              "Write an async function `solve(nums)` that takes an array of numbers, wraps each in `Promise.resolve(n * 2)`, waits for all of them using `Promise.all`, and returns the sum of the resolved values.",
            starter: "async function solve(nums) {\n  \n}",
            tests: [
              { args: [[1, 2, 3]], expected: 12 },
              { args: [[5]], expected: 10 },
              { args: [[]], expected: 0 },
            ],
          },
        ],
      },
      {
        slug: "classes",
        title: "Classes",
        blurb: "Reusable blueprints for objects — constructors, methods, getters, and setters.",
        challenges: [
          {
            id: "rectangle-area",
            title: "Build a Rectangle class",
            difficulty: "Medium",
            minutes: 4,
            kind: "fn",
            prompt:
              "Write a function `solve(width, height)` that defines a class `Rectangle` with a constructor taking `width` and `height`, and a method `area()` returning their product. Return the result of calling `.area()` on a new instance.",
            starter: "function solve(width, height) {\n  \n}",
            tests: [
              { args: [4, 5], expected: 20 },
              { args: [2, 2], expected: 4 },
            ],
          },
          {
            id: "class-inheritance",
            title: "Extend a class",
            difficulty: "Hard",
            minutes: 5,
            kind: "fn",
            prompt:
              "Write a function `solve(name)` that defines a class `Animal` with a method `speak()` returning `name + ' makes a sound.'`, and a subclass `Dog extends Animal` that overrides `speak()` to return `name + ' barks.'`. Return the result of calling `.speak()` on a new `Dog`.",
            starter: "function solve(name) {\n  \n}",
            tests: [
              { args: ["Rex"], expected: "Rex barks." },
              { args: ["Fido"], expected: "Fido barks." },
            ],
          },
          {
            id: "class-static-and-getter",
            title: "Static methods and getters",
            difficulty: "Hard",
            minutes: 6,
            kind: "fn",
            prompt:
              "Write a function `solve(radius)` that defines a class `Circle` with a constructor taking `radius`, a getter `area` that returns `Math.PI * radius * radius`, and a static method `Circle.describe()` that returns the string `'A circle has one radius.'`. Return an array: `[circle.area, Circle.describe()]`.",
            starter: "function solve(radius) {\n  \n}",
            tests: [
              {
                args: [1],
                expected: [Math.PI, "A circle has one radius."],
              },
              {
                args: [2],
                expected: [Math.PI * 4, "A circle has one radius."],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "dom",
    title: "JavaScript DOM Exercises",
    blurb: "Learn how to interact with the DOM to make websites dynamic.",
    accent: "#E8B04A",
    subcategories: [
      {
        slug: "selector-methods",
        title: "DOM Selector Methods",
        blurb: "Practice accessing elements in the DOM using selector methods.",
        challenges: [
          {
            id: "select-by-id",
            title: "Select an element by id",
            difficulty: "Easy",
            minutes: 2,
            kind: "domRead",
            setupHTML: '<p id="msg">Hello</p>',
            prompt: "Write a function `solve(container)` that selects the element with id `msg` inside `container` and returns its text content.",
            starter: "function solve(container) {\n  \n}",
            tests: [{ expected: "Hello" }],
          },
          {
            id: "count-list-items",
            title: "Count list items",
            difficulty: "Easy",
            minutes: 2,
            kind: "domRead",
            setupHTML: "<ul><li>One</li><li>Two</li><li>Three</li></ul>",
            prompt: "Write a function `solve(container)` that returns how many `<li>` elements are inside `container`.",
            starter: "function solve(container) {\n  \n}",
            tests: [{ expected: 3 }],
          },
        ],
      },
      {
        slug: "events",
        title: "Events And User Interactions",
        blurb: "Access elements in the DOM and respond to user events.",
        challenges: [
          {
            id: "click-increments",
            title: "Increment a counter on click",
            difficulty: "Medium",
            minutes: 4,
            kind: "domMutate",
            setupHTML: '<button id="btn">+1</button><span id="count">0</span>',
            prompt:
              "Add a click listener to the button (`#btn`) that increments the number shown in `#count` by 1 each time it's clicked.",
            starter:
              "const btn = container.querySelector('#btn');\nconst count = container.querySelector('#count');\n\n",
            tests: [
              {
                description: "clicking #btn 3 times sets #count to 3",
                check: (container) => {
                  const btn = container.querySelector("#btn");
                  const count = container.querySelector("#count");
                  btn.click();
                  btn.click();
                  btn.click();
                  return count.textContent.trim() === "3";
                },
              },
            ],
          },
        ],
      },
      {
        slug: "manipulation",
        title: "DOM Manipulation",
        blurb: "Add and remove elements, change their styles and attributes.",
        challenges: [
          {
            id: "append-list-item",
            title: "Append a list item",
            difficulty: "Easy",
            minutes: 3,
            kind: "domMutate",
            setupHTML: '<ul id="list"><li>Existing</li></ul>',
            prompt: "Create a new `<li>` with the text `Added` and append it to the `<ul id=\"list\">` in `container`.",
            starter: "const list = container.querySelector('#list');\n\n",
            tests: [
              {
                description: "list has 2 items and the last one reads 'Added'",
                check: (container) => {
                  const items = container.querySelectorAll("#list li");
                  return items.length === 2 && items[1].textContent === "Added";
                },
              },
            ],
          },
          {
            id: "toggle-class",
            title: "Toggle a CSS class",
            difficulty: "Easy",
            minutes: 3,
            kind: "domMutate",
            setupHTML: '<div id="box">box</div>',
            prompt: "Add the class `active` to the element with id `box` in `container`.",
            starter: "const box = container.querySelector('#box');\n\n",
            tests: [
              {
                description: "#box has the class 'active'",
                check: (container) => container.querySelector("#box").classList.contains("active"),
              },
            ],
          },
        ],
      },
      {
        slug: "dom-fundamentals",
        title: "DOM Fundamentals",
        blurb: "Mixed exercises practicing everything you've learned about the DOM.",
        challenges: [
          {
            id: "set-attribute",
            title: "Set an attribute",
            difficulty: "Easy",
            minutes: 2,
            kind: "domMutate",
            setupHTML: '<img id="pic" />',
            prompt: "Set the `alt` attribute of the `#pic` element in `container` to `'profile photo'`.",
            starter: "const pic = container.querySelector('#pic');\n\n",
            tests: [
              {
                description: "#pic has alt='profile photo'",
                check: (container) => container.querySelector("#pic").getAttribute("alt") === "profile photo",
              },
            ],
          },
        ],
      },
      {
        slug: "dom-recursive",
        title: "DOM Recursive Functions",
        blurb: "Use recursive functions in the context of working with the DOM.",
        challenges: [
          {
            id: "count-nested-elements",
            title: "Count all nested elements",
            difficulty: "Hard",
            minutes: 5,
            kind: "domRead",
            setupHTML: "<div><p>One</p><div><span>Two</span><span>Three</span></div></div>",
            prompt:
              "Write a function `solve(container)` that recursively counts every element node nested inside `container` (not counting `container` itself).",
            starter: "function solve(container) {\n  \n}",
            tests: [{ expected: 4 }],
          },
          {
            id: "max-nesting-depth",
            title: "Find the maximum nesting depth",
            difficulty: "Hard",
            minutes: 6,
            kind: "domRead",
            setupHTML: "<div><p>Shallow</p><div><span><b>Deep</b></span></div></div>",
            prompt:
              "Write a function `solve(container)` that recursively returns the maximum nesting depth of elements inside `container`. `container` itself counts as depth 0; a direct child is depth 1, and so on.",
            starter: "function solve(container) {\n  \n}",
            tests: [{ expected: 4 }],
          },
        ],
      },
    ],
  },
  {
    slug: "practice",
    title: "JavaScript Practice",
    blurb: "Mixed challenges to test your understanding across topics.",
    accent: "#B98AE8",
    subcategories: [
      {
        slug: "fundamentals",
        title: "JavaScript Fundamentals",
        blurb: "Covers basics like strings and operators to reinforce your understanding.",
        challenges: [
          {
            id: "is-palindrome",
            title: "Check if a string is a palindrome",
            difficulty: "Medium",
            minutes: 4,
            kind: "fn",
            prompt: "Write a function `solve(str)` that returns `true` if `str` reads the same forwards and backwards.",
            starter: "function solve(str) {\n  \n}",
            tests: [
              { args: ["racecar"], expected: true },
              { args: ["hello"], expected: false },
              { args: ["a"], expected: true },
            ],
          },
          {
            id: "factorial",
            title: "Calculate a factorial",
            difficulty: "Medium",
            minutes: 3,
            kind: "fn",
            prompt: "Write a function `solve(n)` that returns the factorial of `n` (n!).",
            starter: "function solve(n) {\n  \n}",
            tests: [
              { args: [5], expected: 120 },
              { args: [0], expected: 1 },
              { args: [3], expected: 6 },
            ],
          },
        ],
      },
      {
        slug: "practice-arrays",
        title: "JavaScript Arrays",
        blurb: "Creating, accessing, and modifying arrays and their elements.",
        challenges: [
          {
            id: "remove-duplicates",
            title: "Remove duplicate values",
            difficulty: "Medium",
            minutes: 4,
            kind: "fn",
            prompt: "Write a function `solve(arr)` that returns a new array with duplicate values removed, keeping first-occurrence order.",
            starter: "function solve(arr) {\n  \n}",
            tests: [
              { args: [[1, 2, 2, 3, 1]], expected: [1, 2, 3] },
              { args: [["a", "a", "b"]], expected: ["a", "b"] },
              { args: [[1, 2, 3]], expected: [1, 2, 3] },
            ],
          },
          {
            id: "flatten-once",
            title: "Flatten an array one level",
            difficulty: "Hard",
            minutes: 4,
            kind: "fn",
            prompt: "Write a function `solve(arr)` that flattens a one-level-nested array into a single flat array.",
            starter: "function solve(arr) {\n  \n}",
            tests: [
              { args: [[1, [2, 3], [4]]], expected: [1, 2, 3, 4] },
              { args: [[[1], [2], [3]]], expected: [1, 2, 3] },
            ],
          },
          {
            id: "chunk-array",
            title: "Split an array into chunks",
            difficulty: "Hard",
            minutes: 6,
            kind: "fn",
            prompt:
              "Write a function `solve(arr, size)` that splits `arr` into an array of chunks, each of length `size` (the last chunk may be shorter).",
            starter: "function solve(arr, size) {\n  \n}",
            tests: [
              { args: [[1, 2, 3, 4, 5], 2], expected: [[1, 2], [3, 4], [5]] },
              { args: [[1, 2, 3, 4], 4], expected: [[1, 2, 3, 4]] },
              { args: [[1, 2, 3], 1], expected: [[1], [2], [3]] },
            ],
          },
        ],
      },
      {
        slug: "practice-objects",
        title: "JavaScript Objects",
        blurb: "Creating, accessing, and modifying object properties and methods.",
        challenges: [
          {
            id: "has-property",
            title: "Check if a property exists",
            difficulty: "Easy",
            minutes: 2,
            kind: "fn",
            prompt: "Write a function `solve(obj, key)` that returns `true` if `obj` has its own property `key`.",
            starter: "function solve(obj, key) {\n  \n}",
            tests: [
              { args: [{ a: 1 }, "a"], expected: true },
              { args: [{ a: 1 }, "b"], expected: false },
            ],
          },
          {
            id: "invert-object",
            title: "Invert keys and values",
            difficulty: "Medium",
            minutes: 4,
            kind: "fn",
            prompt: "Write a function `solve(obj)` that returns a new object where each value becomes a key, and each key becomes its value.",
            starter: "function solve(obj) {\n  \n}",
            tests: [
              { args: [{ a: "x", b: "y" }], expected: { x: "a", y: "b" } },
            ],
          },
          {
            id: "deep-merge",
            title: "Deep merge two objects",
            difficulty: "Hard",
            minutes: 7,
            kind: "fn",
            prompt:
              "Write a function `solve(a, b)` that deeply merges `b` into `a` and returns a new object: nested objects are merged recursively (not replaced wholesale), and `b`'s primitive values win on conflicts.",
            starter: "function solve(a, b) {\n  \n}",
            tests: [
              {
                args: [{ user: { name: "Ada", age: 30 } }, { user: { age: 31 } }],
                expected: { user: { name: "Ada", age: 31 } },
              },
              {
                args: [{ a: 1, b: { c: 2 } }, { b: { d: 3 } }],
                expected: { a: 1, b: { c: 2, d: 3 } },
              },
            ],
          },
        ],
      },
      {
        slug: "dates",
        title: "JavaScript Dates",
        blurb: "Creating, formatting, and manipulating date objects.",
        challenges: [
          {
            id: "get-year",
            title: "Get the year from a date",
            difficulty: "Easy",
            minutes: 2,
            kind: "fn",
            prompt: "Write a function `solve(isoString)` that returns the 4-digit year from a date string like `'2024-06-15'`, as a number.",
            starter: "function solve(isoString) {\n  \n}",
            tests: [
              { args: ["2024-06-15"], expected: 2024 },
              { args: ["1999-01-01"], expected: 1999 },
            ],
          },
          {
            id: "days-between",
            title: "Days between two dates",
            difficulty: "Medium",
            minutes: 4,
            kind: "fn",
            prompt: "Write a function `solve(a, b)` that returns the number of whole days between date strings `a` and `b` (assume `b` is after `a`).",
            starter: "function solve(a, b) {\n  \n}",
            tests: [
              { args: ["2024-01-01", "2024-01-11"], expected: 10 },
              { args: ["2024-03-01", "2024-03-02"], expected: 1 },
            ],
          },
        ],
      },
      {
        slug: "sets",
        title: "JavaScript Sets",
        blurb: "Create sets, add and remove items, and perform common set operations.",
        challenges: [
          {
            id: "unique-count",
            title: "Count unique values using a Set",
            difficulty: "Easy",
            minutes: 2,
            kind: "fn",
            prompt: "Write a function `solve(arr)` that returns the number of unique values in `arr`, using a `Set`.",
            starter: "function solve(arr) {\n  \n}",
            tests: [
              { args: [[1, 2, 2, 3]], expected: 3 },
              { args: [["a", "a", "a"]], expected: 1 },
            ],
          },
          {
            id: "set-intersection",
            title: "Intersect two arrays",
            difficulty: "Medium",
            minutes: 4,
            kind: "fn",
            prompt: "Write a function `solve(a, b)` that returns an array of values present in both `a` and `b`, with no duplicates, using `Set`.",
            starter: "function solve(a, b) {\n  \n}",
            tests: [
              { args: [[1, 2, 3], [2, 3, 4]], expected: [2, 3] },
              { args: [[1, 2], [3, 4]], expected: [] },
            ],
          },
          {
            id: "symmetric-difference",
            title: "Symmetric difference of two arrays",
            difficulty: "Hard",
            minutes: 6,
            kind: "fn",
            prompt:
              "Write a function `solve(a, b)` that returns an array of values that are in exactly one of `a` or `b`, but not both — no duplicates. Order doesn't matter, but your output must contain the same elements as the expected result.",
            starter: "function solve(a, b) {\n  \n}",
            tests: [
              {
                args: [[1, 2, 3], [2, 3, 4]],
                expected: [1, 4],
                run: (fn) => {
                  const result = fn([1, 2, 3], [2, 3, 4]);
                  return [...result].sort((a, b) => a - b);
                },
              },
              {
                args: [[1, 2], [3, 4]],
                expected: [1, 2, 3, 4],
                run: (fn) => {
                  const result = fn([1, 2], [3, 4]);
                  return [...result].sort((a, b) => a - b);
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

// Attach lesson content (if any) onto each subcategory, with a stable id
// used for progress tracking. Also merge in the auto-generated extra
// challenges from moreChallenges.js.
for (const section of sections) {
  for (const sub of section.subcategories) {
    const key = `${section.slug}/${sub.slug}`;
    const lesson = lessons[key];
    sub.lesson = lesson ? { id: `${key}-lesson`, ...lesson } : null;
    if (moreChallenges[key]) {
      sub.challenges = [...sub.challenges, ...moreChallenges[key]];
    }
  }
}

// ---- lookup + aggregate helpers ----

export function getSection(sectionSlug) {
  return sections.find((s) => s.slug === sectionSlug) || null;
}

export function getSubcategory(sectionSlug, subSlug) {
  const section = getSection(sectionSlug);
  if (!section) return null;
  return section.subcategories.find((c) => c.slug === subSlug) || null;
}

export function getChallenge(sectionSlug, subSlug, challengeId) {
  const sub = getSubcategory(sectionSlug, subSlug);
  if (!sub) return null;
  return sub.challenges.find((c) => c.id === challengeId) || null;
}

export function allChallengesFlat() {
  const out = [];
  for (const section of sections) {
    for (const sub of section.subcategories) {
      for (const ch of sub.challenges) {
        out.push({ ...ch, sectionSlug: section.slug, subSlug: sub.slug });
      }
    }
  }
  return out;
}
