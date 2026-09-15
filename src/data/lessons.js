// Lesson step types:
//   { type: "text", bullets: [...] }
//   { type: "code", code: "...", note?: "..." }              — runnable example
//   { type: "mcq", prompt, code?, options: [{text, correct}], explanation }
//
// Keyed by "sectionSlug/subSlug" and merged onto each subcategory in
// challenges.js as `sub.lesson`.

export const lessons = {
  "basics/variables": {
    title: "The console and introduction to variables",
    steps: [
      { type: "text", bullets: ["Before we begin with variables, we have to talk about the `console.log()` statement."] },
      { type: "text", bullets: ["Press the button to run the following code snippet."] },
      { type: "code", code: "console.log(1);" },
      { type: "text", bullets: [
          "As you can see, `console.log()` simply displays information in your JavaScript console — in this case the value 1.",
          "We will use `console.log()` as a tool to test our code.",
          "Great! Now, we can talk about JavaScript variables.",
          "Variables are containers that store information for later use.",
          "Let's create our first variable:",
        ] },
      { type: "code", code: "let test;" },
      { type: "text", bullets: [
          "We use the `let` keyword to declare a variable with the name `test`. Declaring a variable is JavaScript slang for creating a variable.",
          "But, what happens if we use `console.log()` to log our new variable?",
        ] },
      { type: "code", code: "let test;\nconsole.log(test);" },
      { type: "text", bullets: [
          "The console prints `undefined`. This is because we have not initialized our variable. Initializing a variable is the process of assigning a value to it.",
          "We can assign a value to a variable with the assignment operator `=`.",
        ] },
      { type: "code", code: "let test;\ntest = 1;\nconsole.log(test);" },
      { type: "text", bullets: [
          "Great! Now, we have created a new variable and assigned it the value 1. We have also used `console.log()` to access this value.",
          "You can also assign a value to a variable directly when you create it.",
        ] },
      { type: "code", code: "let test = 1;\nconsole.log(test);" },
      { type: "text", bullets: ["Awesome! Let's wrap this up with some questions."] },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "let num;\nconsole.log(num);",
        options: [
          { text: "undefined", correct: true },
          { text: "num", correct: false },
        ],
        explanation: "`num` is declared but never assigned a value, so it's `undefined` until something is assigned to it.",
      },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "let num = 0;\nconsole.log(num);\nnum = 2;\nconsole.log(num);",
        options: [
          { text: "0\n0", correct: false },
          { text: "0\n2", correct: true },
        ],
        explanation: "The first log prints the initial value 0. Reassigning `num` to 2 changes what the second log prints.",
      },
    ],
  },

  "basics/booleans": {
    title: "True, false, and making decisions",
    steps: [
      { type: "text", bullets: [
          "A boolean is a value that's either `true` or `false` — nothing else.",
          "Booleans are what let your code make decisions: 'is the user logged in?', 'is the cart empty?'.",
        ] },
      { type: "code", code: "let isLoggedIn = true;\nconsole.log(isLoggedIn);" },
      { type: "text", bullets: [
          "Comparison operators (`===`, `>`, `<`, etc.) produce booleans.",
        ] },
      { type: "code", code: "console.log(5 > 3);\nconsole.log(5 === 6);" },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "console.log(10 === '10');",
        options: [
          { text: "true", correct: false },
          { text: "false", correct: true },
        ],
        explanation: "`===` checks both value AND type. A number and a string are never strictly equal, even if they 'look' the same.",
      },
    ],
  },

  "basics/operators": {
    title: "Doing math and comparisons",
    steps: [
      { type: "text", bullets: [
          "Arithmetic operators: `+`, `-`, `*`, `/`, and `%` (modulo — the remainder after division).",
        ] },
      { type: "code", code: "console.log(7 % 2);" },
      { type: "text", bullets: ["`%` is how you check divisibility — a remainder of 0 means it divides evenly."] },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "console.log(9 % 3);",
        options: [
          { text: "3", correct: false },
          { text: "0", correct: true },
        ],
        explanation: "9 divides evenly by 3, so the remainder — and the result of `%` — is 0.",
      },
    ],
  },

  "basics/strings": {
    title: "Working with text",
    steps: [
      { type: "text", bullets: [
          "Strings are text, wrapped in quotes: `'single'`, `\"double\"`, or backticks for templates.",
          "Strings have a `.length`, and you can access individual characters by index, starting at 0.",
        ] },
      { type: "code", code: "let word = 'hello';\nconsole.log(word.length);\nconsole.log(word[0]);" },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "console.log('cat'.length);",
        options: [
          { text: "3", correct: true },
          { text: "4", correct: false },
        ],
        explanation: "'cat' has three characters: c, a, t.",
      },
    ],
  },

  "basics/conditionals": {
    title: "if, else, and branching logic",
    steps: [
      { type: "text", bullets: [
          "`if` runs a block only when its condition is `true`. `else` runs when it's `false`.",
        ] },
      { type: "code", code: "let age = 20;\nif (age >= 18) {\n  console.log('adult');\n} else {\n  console.log('minor');\n}" },
      { type: "text", bullets: ["Chain more conditions with `else if`."] },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "let score = 85;\nif (score >= 90) {\n  console.log('A');\n} else if (score >= 80) {\n  console.log('B');\n} else {\n  console.log('C');\n}",
        options: [
          { text: "A", correct: false },
          { text: "B", correct: true },
          { text: "C", correct: false },
        ],
        explanation: "85 isn't ≥ 90, but it is ≥ 80, so the `else if` branch runs.",
      },
    ],
  },

  "basics/functions-1": {
    title: "Defining and calling functions",
    steps: [
      { type: "text", bullets: [
          "A function is a reusable block of code. You define it once, then call it as many times as you need.",
        ] },
      { type: "code", code: "function greet(name) {\n  return 'Hello, ' + name;\n}\nconsole.log(greet('Ada'));" },
      { type: "text", bullets: [
          "The value after `return` is what the function call evaluates to — nothing after `return` in a function runs.",
        ] },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "function double(n) {\n  return n * 2;\n}\nconsole.log(double(4));",
        options: [
          { text: "8", correct: true },
          { text: "42", correct: false },
        ],
        explanation: "`double(4)` returns `4 * 2`, which is 8.",
      },
    ],
  },

  "basics/arrays": {
    title: "Storing lists of values",
    steps: [
      { type: "text", bullets: [
          "An array holds an ordered list of values, indexed from 0.",
        ] },
      { type: "code", code: "let fruits = ['apple', 'banana', 'cherry'];\nconsole.log(fruits[1]);\nconsole.log(fruits.length);" },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "let nums = [10, 20, 30];\nconsole.log(nums[2]);",
        options: [
          { text: "20", correct: false },
          { text: "30", correct: true },
        ],
        explanation: "Index 2 is the third element (0, 1, 2) — 30.",
      },
    ],
  },

  "basics/objects": {
    title: "Grouping data with key/value pairs",
    steps: [
      { type: "text", bullets: [
          "An object stores data as key/value pairs. Access a value with dot or bracket notation.",
        ] },
      { type: "code", code: "let user = { name: 'Ada', age: 30 };\nconsole.log(user.name);\nconsole.log(user['age']);" },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "let car = { brand: 'Toyota' };\nconsole.log(car.model);",
        options: [
          { text: "undefined", correct: true },
          { text: "an error", correct: false },
        ],
        explanation: "Accessing a property that doesn't exist returns `undefined`, not an error.",
      },
    ],
  },

  "basics/loops": {
    title: "Repeating with for and while",
    steps: [
      { type: "text", bullets: [
          "A `for` loop repeats a block a set number of times, tracked by a counter variable.",
        ] },
      { type: "code", code: "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}" },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "for (let i = 1; i <= 3; i++) {\n  console.log(i * 2);\n}",
        options: [
          { text: "2\n4\n6", correct: true },
          { text: "1\n2\n3", correct: false },
        ],
        explanation: "`i` runs 1, 2, 3 — each logged value is `i * 2`.",
      },
    ],
  },

  "intermediate/array-methods": {
    title: "map, filter, and reduce",
    steps: [
      { type: "text", bullets: [
          "`.map()` transforms every element into a new array. `.filter()` keeps only elements that pass a test.",
        ] },
      { type: "code", code: "let nums = [1, 2, 3];\nconsole.log(nums.map(n => n * 10));\nconsole.log(nums.filter(n => n > 1));" },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "console.log([1, 2, 3, 4].filter(n => n % 2 === 0));",
        options: [
          { text: "[2, 4]", correct: true },
          { text: "[1, 3]", correct: false },
        ],
        explanation: "`.filter()` keeps elements where the callback returns `true` — here, the even numbers.",
      },
    ],
  },

  "intermediate/objects-2": {
    title: "Looping over objects",
    steps: [
      { type: "text", bullets: [
          "`Object.keys()`, `Object.values()`, and `Object.entries()` let you loop over an object's data.",
        ] },
      { type: "code", code: "let obj = { a: 1, b: 2 };\nconsole.log(Object.keys(obj));\nconsole.log(Object.values(obj));" },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "console.log(Object.keys({ x: 1, y: 2, z: 3 }).length);",
        options: [
          { text: "3", correct: true },
          { text: "6", correct: false },
        ],
        explanation: "`Object.keys()` returns an array of the object's own keys — there are three: x, y, z.",
      },
    ],
  },

  "intermediate/scope": {
    title: "Scope and closures",
    steps: [
      { type: "text", bullets: [
          "A variable declared with `let`/`const` only exists inside the block `{ }` it was declared in.",
          "A closure is a function that 'remembers' variables from where it was created, even after that outer function has finished running.",
        ] },
      { type: "code", code: "function makeAdder(a) {\n  return function (b) {\n    return a + b;\n  };\n}\nlet add5 = makeAdder(5);\nconsole.log(add5(2));" },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "function outer() {\n  let x = 10;\n  function inner() {\n    return x;\n  }\n  return inner();\n}\nconsole.log(outer());",
        options: [
          { text: "10", correct: true },
          { text: "undefined", correct: false },
        ],
        explanation: "`inner()` closes over `x` from `outer()`'s scope — it can still read it.",
      },
    ],
  },

  "intermediate/functions-2": {
    title: "Arrow functions and rest parameters",
    steps: [
      { type: "text", bullets: [
          "Arrow functions are a shorter way to write functions: `(a, b) => a + b`.",
          "Rest parameters (`...args`) collect any number of arguments into an array.",
        ] },
      { type: "code", code: "const add = (a, b) => a + b;\nconsole.log(add(2, 3));\n\nfunction sumAll(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}\nconsole.log(sumAll(1, 2, 3, 4));" },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "const square = n => n * n;\nconsole.log(square(5));",
        options: [
          { text: "25", correct: true },
          { text: "10", correct: false },
        ],
        explanation: "`square(5)` returns `5 * 5`, which is 25.",
      },
    ],
  },

  "intermediate/async": {
    title: "Promises and async/await",
    steps: [
      { type: "text", bullets: [
          "A Promise represents a value that isn't ready yet, but will resolve eventually.",
          "`async`/`await` lets you write asynchronous code that reads top-to-bottom, like synchronous code.",
        ] },
      { type: "code", code: "async function getValue() {\n  return 42;\n}\ngetValue().then(v => console.log(v));" },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "async function double(n) {\n  return n * 2;\n}\ndouble(21).then(v => console.log(v));",
        options: [
          { text: "42", correct: true },
          { text: "[object Promise]", correct: false },
        ],
        explanation: "`async` functions always return a Promise. `.then()` unwraps it once it resolves, giving you the actual value.",
      },
    ],
  },

  "intermediate/classes": {
    title: "Classes and instances",
    steps: [
      { type: "text", bullets: [
          "A class is a blueprint for creating objects with the same shape and behavior.",
          "`new ClassName(...)` creates an instance, running the `constructor`.",
        ] },
      { type: "code", code: "class Dog {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    return this.name + ' barks.';\n  }\n}\nlet rex = new Dog('Rex');\nconsole.log(rex.speak());" },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "class Box {\n  constructor(size) {\n    this.size = size;\n  }\n}\nlet b = new Box(5);\nconsole.log(b.size);",
        options: [
          { text: "5", correct: true },
          { text: "undefined", correct: false },
        ],
        explanation: "The constructor assigns `size` onto the new instance, so `b.size` is 5.",
      },
    ],
  },

  "dom/selector-methods": {
    title: "Finding elements in the DOM",
    steps: [
      { type: "text", bullets: [
          "`document.querySelector(selector)` finds the first matching element. `querySelectorAll` finds all of them.",
          "Selectors work like CSS: `#id`, `.class`, `tag`.",
        ] },
      { type: "text", bullets: [
          "Example: given `<p id=\"msg\">Hi</p>`, `document.querySelector('#msg')` returns that paragraph element.",
        ] },
      {
        type: "mcq",
        prompt: "Given `<ul><li>A</li><li>B</li></ul>`, what does `document.querySelectorAll('li').length` return?",
        options: [
          { text: "1", correct: false },
          { text: "2", correct: true },
        ],
        explanation: "There are two `<li>` elements, so `.length` is 2.",
      },
    ],
  },

  "dom/events": {
    title: "Responding to user events",
    steps: [
      { type: "text", bullets: [
          "`element.addEventListener('click', handler)` runs `handler` every time the element is clicked.",
          "The same pattern works for `'input'`, `'submit'`, `'keydown'`, and many other events.",
        ] },
      { type: "text", bullets: [
          "Example: `btn.addEventListener('click', () => console.log('clicked!'))` logs a message on every click.",
        ] },
      {
        type: "mcq",
        prompt: "Which event fires as a user types into a text input?",
        options: [
          { text: "'input'", correct: true },
          { text: "'submit'", correct: false },
        ],
        explanation: "'input' fires on every keystroke change to a field. 'submit' fires when a form is submitted.",
      },
    ],
  },

  "dom/manipulation": {
    title: "Creating and changing elements",
    steps: [
      { type: "text", bullets: [
          "`document.createElement(tag)` makes a new element. `.appendChild()` adds it to the page.",
          "`.classList.add('name')` and `.setAttribute('key', 'value')` change how an element looks and behaves.",
        ] },
      { type: "text", bullets: [
          "Example: `const li = document.createElement('li'); li.textContent = 'New'; list.appendChild(li);` adds a new list item.",
        ] },
      {
        type: "mcq",
        prompt: "Which method adds a CSS class to an element?",
        options: [
          { text: "element.classList.add('name')", correct: true },
          { text: "element.class = 'name'", correct: false },
        ],
        explanation: "`classList.add()` is the standard way to add a class without overwriting existing ones.",
      },
    ],
  },

  "dom/dom-fundamentals": {
    title: "Putting it together",
    steps: [
      { type: "text", bullets: [
          "Most DOM work is a combination of three steps: select an element, read or change something about it, and (optionally) react to an event.",
        ] },
      { type: "text", bullets: [
          "Example: select `#pic`, then set its `alt` attribute so screen readers can describe the image.",
        ] },
      {
        type: "mcq",
        prompt: "Which attribute describes an image for accessibility?",
        options: [
          { text: "alt", correct: true },
          { text: "desc", correct: false },
        ],
        explanation: "`alt` is the standard attribute screen readers use to describe an image.",
      },
    ],
  },

  "dom/dom-recursive": {
    title: "Recursion over the DOM tree",
    steps: [
      { type: "text", bullets: [
          "The DOM is a tree: elements contain child elements, which can contain their own children.",
          "A recursive function calls itself on each child to visit every node in the tree, however deep it goes.",
        ] },
      { type: "code", code: "function countNodes(node) {\n  let count = node.children.length;\n  for (const child of node.children) {\n    count += countNodes(child);\n  }\n  return count;\n}" },
      {
        type: "mcq",
        prompt: "Why use recursion instead of one loop to count every nested element?",
        options: [
          { text: "The tree can be arbitrarily deep, and recursion naturally handles any depth", correct: true },
          { text: "Recursion is required by the browser", correct: false },
        ],
        explanation: "A single loop only sees direct children; recursion lets you descend into children-of-children without knowing the depth in advance.",
      },
    ],
  },

  "practice/fundamentals": {
    title: "Mixing it all together",
    steps: [
      { type: "text", bullets: [
          "These drills mix strings, loops, and conditionals — the same tools from JavaScript Basics, combined.",
        ] },
      { type: "code", code: "function isPalindrome(str) {\n  return str === str.split('').reverse().join('');\n}\nconsole.log(isPalindrome('racecar'));" },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "console.log('level' === 'level'.split('').reverse().join(''));",
        options: [
          { text: "true", correct: true },
          { text: "false", correct: false },
        ],
        explanation: "'level' reversed is still 'level' — it's a palindrome.",
      },
    ],
  },

  "practice/practice-arrays": {
    title: "Array drills",
    steps: [
      { type: "text", bullets: [
          "A `Set` only stores unique values — a handy way to remove duplicates from an array.",
        ] },
      { type: "code", code: "let nums = [1, 2, 2, 3];\nconsole.log([...new Set(nums)]);" },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "console.log([...new Set([1, 1, 1])].length);",
        options: [
          { text: "1", correct: true },
          { text: "3", correct: false },
        ],
        explanation: "A `Set` collapses duplicates, so `{1, 1, 1}` becomes just `{1}` — length 1.",
      },
    ],
  },

  "practice/practice-objects": {
    title: "Object drills",
    steps: [
      { type: "text", bullets: [
          "`obj.hasOwnProperty(key)` (or the `in` operator) checks whether a key exists on an object.",
        ] },
      { type: "code", code: "let obj = { a: 1 };\nconsole.log('a' in obj);\nconsole.log('b' in obj);" },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "console.log('x' in { x: undefined });",
        options: [
          { text: "true", correct: true },
          { text: "false", correct: false },
        ],
        explanation: "The key `x` exists on the object — even though its value is `undefined`, the `in` operator still finds the key.",
      },
    ],
  },

  "practice/dates": {
    title: "Working with dates",
    steps: [
      { type: "text", bullets: [
          "`new Date(str)` parses a date string. `.getFullYear()`, `.getMonth()`, and `.getDate()` read parts of it.",
        ] },
      { type: "code", code: "let d = new Date('2024-06-15');\nconsole.log(d.getFullYear());" },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "console.log(new Date('1999-01-01').getFullYear());",
        options: [
          { text: "1999", correct: true },
          { text: "99", correct: false },
        ],
        explanation: "`.getFullYear()` returns the full 4-digit year.",
      },
    ],
  },

  "practice/sets": {
    title: "Sets and set operations",
    steps: [
      { type: "text", bullets: [
          "A `Set` is a collection of unique values. `.add()`, `.has()`, and `.size` are its core operations.",
        ] },
      { type: "code", code: "let s = new Set();\ns.add(1);\ns.add(1);\ns.add(2);\nconsole.log(s.size);" },
      {
        type: "mcq",
        prompt: "What will be the output?",
        code: "console.log(new Set([1, 2, 3]).has(2));",
        options: [
          { text: "true", correct: true },
          { text: "false", correct: false },
        ],
        explanation: "`.has()` checks membership — 2 is in the set.",
      },
    ],
  },
};
