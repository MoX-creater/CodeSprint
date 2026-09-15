const { buildFn, buildDomRead, out, add } = require("./generate-challenges.cjs");

// ============================= BASICS =============================

// ---- variables ----
add("basics/variables", buildFn({
  id: "swap-values", title: "Swap two values", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(a, b)` that returns an array `[b, a]` — the two values swapped.",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => [b, a],
  argsList: [[1, 2], ["x", "y"], [true, false]],
}));
add("basics/variables", buildFn({
  id: "increment-by-one", title: "Increment a value", difficulty: "Easy", minutes: 1,
  prompt: "Write a function `solve(n)` that returns `n` incremented by 1.",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => n + 1,
  argsList: [[0], [9], [-1]],
}));
add("basics/variables", buildFn({
  id: "sum-three-numbers", title: "Sum three numbers", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(a, b, c)` that returns the sum of all three arguments.",
  starter: "function solve(a, b, c) {\n  \n}",
  ref: (a, b, c) => a + b + c,
  argsList: [[1, 2, 3], [0, 0, 0], [-5, 5, 10]],
}));
add("basics/variables", buildFn({
  id: "typeof-null-quirk", title: "The typeof null quirk", difficulty: "Medium", minutes: 2,
  prompt: "Write a function `solve()` that returns the result of `typeof null`. (This is a famous, long-standing JavaScript quirk.)",
  starter: "function solve() {\n  \n}",
  ref: () => typeof null,
  argsList: [[]],
}));
add("basics/variables", buildFn({
  id: "string-to-number", title: "Convert a string to a number", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(str)` that converts `str` to a number and returns it, using `Number()`.",
  starter: "function solve(str) {\n  \n}",
  ref: (str) => Number(str),
  argsList: [["42"], ["3.14"], ["-7"]],
}));
add("basics/variables", buildFn({
  id: "number-to-string", title: "Convert a number to a string", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(n)` that converts `n` to a string and returns it.",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => String(n),
  argsList: [[42], [3.14], [0]],
}));
add("basics/variables", buildFn({
  id: "default-if-undefined", title: "Provide a default value", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(value)` that returns `value` if it's not `undefined`, otherwise returns the string `'default'`. Use a default parameter.",
  starter: "function solve(value = 'default') {\n  \n}",
  ref: (value) => (value === undefined ? "default" : value),
  argsList: [[undefined], ["hi"], [0]],
}));
add("basics/variables", buildFn({
  id: "template-literal-greeting", title: "Build a sentence with a template literal", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(name, age)` that returns the string `` `${name} is ${age} years old` `` using a template literal.",
  starter: "function solve(name, age) {\n  \n}",
  ref: (name, age) => `${name} is ${age} years old`,
  argsList: [["Ada", 30], ["Sam", 5]],
}));
add("basics/variables", buildFn({
  id: "is-nan-check", title: "Check if a value is NaN", difficulty: "Medium", minutes: 2,
  prompt: "Write a function `solve(value)` that returns `true` if `value` is `NaN`, using `Number.isNaN()`.",
  starter: "function solve(value) {\n  \n}",
  ref: (value) => Number.isNaN(value),
  argsList: [[NaN], [5], [0 / 0]],
}));
add("basics/variables", buildFn({
  id: "const-reassign-object", title: "Mutate a const object's property", difficulty: "Hard", minutes: 4,
  prompt: "Write a function `solve(obj, key, value)` that mutates `obj[key] = value` on a `const`-declared object (this is legal — `const` prevents reassigning the variable, not mutating its contents) and returns the object.",
  starter: "function solve(obj, key, value) {\n  \n}",
  ref: (obj, key, value) => { obj[key] = value; return obj; },
  argsList: [[{ a: 1 }, "a", 2], [{ x: 1, y: 2 }, "z", 3]],
}));
add("basics/variables", buildFn({
  id: "chained-assignment", title: "Assign the same value to three variables", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(value)` that declares three variables `a`, `b`, and `c`, all assigned to `value` in a single statement (`let a = b = c = value` style, or equivalent), and returns their sum-of-equality-checks: `true` if all three are equal to `value`.",
  starter: "function solve(value) {\n  \n}",
  ref: (value) => { let a, b, c; a = b = c = value; return a === value && b === value && c === value; },
  argsList: [[5], ["hi"]],
}));

// ---- booleans ----
add("basics/booleans", buildFn({
  id: "logical-and", title: "Logical AND", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(a, b)` that returns `true` only if both `a` and `b` are `true`, using `&&`.",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => a && b,
  argsList: [[true, true], [true, false], [false, false]],
}));
add("basics/booleans", buildFn({
  id: "logical-or", title: "Logical OR", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(a, b)` that returns `true` if at least one of `a` or `b` is `true`, using `||`.",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => a || b,
  argsList: [[true, false], [false, false], [false, true]],
}));
add("basics/booleans", buildFn({
  id: "logical-not", title: "Logical NOT", difficulty: "Easy", minutes: 1,
  prompt: "Write a function `solve(value)` that returns the opposite boolean of `value`, using `!`.",
  starter: "function solve(value) {\n  \n}",
  ref: (value) => !value,
  argsList: [[true], [false]],
}));
add("basics/booleans", buildFn({
  id: "truthy-check", title: "Check truthiness", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(value)` that returns `true` if `value` is truthy, `false` if falsy. Remember: `0`, `''`, `null`, `undefined`, `NaN`, and `false` are all falsy.",
  starter: "function solve(value) {\n  \n}",
  ref: (value) => Boolean(value),
  argsList: [[0], [""], ["hello"], [1], [null]],
}));
add("basics/booleans", buildFn({
  id: "loose-vs-strict", title: "Loose vs strict equality", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(a, b)` that returns `true` if `a == b` (loose equality) but `a !== b` (not strictly equal) — i.e. they're 'equal' only after type coercion.",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => a == b && a !== b,
  argsList: [[1, "1"], [1, 1], [0, false]],
}));
add("basics/booleans", buildFn({
  id: "is-positive", title: "Check if a number is positive", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(n)` that returns `true` if `n` is greater than 0.",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => n > 0,
  argsList: [[5], [-3], [0]],
}));
add("basics/booleans", buildFn({
  id: "between-range", title: "Check if a number is within a range", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(n, min, max)` that returns `true` if `n` is between `min` and `max`, inclusive.",
  starter: "function solve(n, min, max) {\n  \n}",
  ref: (n, min, max) => n >= min && n <= max,
  argsList: [[5, 1, 10], [15, 1, 10], [1, 1, 10]],
}));
add("basics/booleans", buildFn({
  id: "xor-logic", title: "Exclusive OR (XOR)", difficulty: "Hard", minutes: 4,
  prompt: "Write a function `solve(a, b)` that returns `true` if exactly one of `a` or `b` is `true` (not both, not neither) — i.e. logical XOR.",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => a !== b,
  argsList: [[true, false], [true, true], [false, false]],
}));
add("basics/booleans", buildFn({
  id: "all-true", title: "Check if every value in an array is true", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(arr)` that returns `true` if every element in `arr` is `true`, using `.every()`.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => arr.every((v) => v === true),
  argsList: [[[true, true, true]], [[true, false, true]], [[]]],
}));
add("basics/booleans", buildFn({
  id: "some-true", title: "Check if any value in an array is true", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(arr)` that returns `true` if at least one element in `arr` is `true`, using `.some()`.",
  starter: "function solve(arr) {\n  \n}",
  ref: (arr) => arr.some((v) => v === true),
  argsList: [[[false, false, true]], [[false, false]], [[]]],
}));

// ---- operators ----
add("basics/operators", buildFn({
  id: "exponent-operator", title: "Raise to a power", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(base, exp)` that returns `base` raised to the power `exp`, using the `**` operator.",
  starter: "function solve(base, exp) {\n  \n}",
  ref: (base, exp) => base ** exp,
  argsList: [[2, 10], [5, 0], [3, 3]],
}));
add("basics/operators", buildFn({
  id: "integer-division", title: "Integer division", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(a, b)` that returns the integer (whole-number) result of `a / b`, discarding any remainder.",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => Math.trunc(a / b),
  argsList: [[7, 2], [10, 3], [-7, 2]],
}));
add("basics/operators", buildFn({
  id: "ternary-operator", title: "Use the ternary operator", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(n)` that returns `'even'` or `'odd'` using a single ternary expression (`condition ? a : b`).",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => (n % 2 === 0 ? "even" : "odd"),
  argsList: [[4], [7], [0]],
}));
add("basics/operators", buildFn({
  id: "nullish-coalescing", title: "Nullish coalescing operator", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(value)` that returns `value` unless it's `null` or `undefined`, in which case it returns `'fallback'`. Use the `??` operator (not `||`, which would also replace `0` or `''`).",
  starter: "function solve(value) {\n  \n}",
  ref: (value) => value ?? "fallback",
  argsList: [[null], [0], ["hi"], [undefined]],
}));
add("basics/operators", buildFn({
  id: "compound-assignment", title: "Compound assignment operators", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(n)` that takes `n`, multiplies it by 3 using `*=`, then subtracts 1 using `-=`, and returns the result.",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => { n *= 3; n -= 1; return n; },
  argsList: [[5], [0], [-2]],
}));
add("basics/operators", buildFn({
  id: "operator-precedence", title: "Operator precedence", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(a, b, c)` that returns `a + b * c` (multiplication happens before addition — no parentheses needed).",
  starter: "function solve(a, b, c) {\n  \n}",
  ref: (a, b, c) => a + b * c,
  argsList: [[2, 3, 4], [1, 1, 1], [0, 5, 5]],
}));
add("basics/operators", buildFn({
  id: "bitwise-and", title: "Bitwise AND", difficulty: "Hard", minutes: 4,
  prompt: "Write a function `solve(a, b)` that returns the result of the bitwise AND operator `&` on `a` and `b`.",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => a & b,
  argsList: [[5, 3], [12, 10], [255, 15]],
}));
add("basics/operators", buildFn({
  id: "increment-decrement", title: "Pre vs post increment", difficulty: "Hard", minutes: 4,
  prompt: "Write a function `solve(n)` that returns an array `[a, b]` where `a` is the result of post-incrementing `n` (`n++`, evaluates to the OLD value) and `b` is `n` afterward.",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => { const a = n++; return [a, n]; },
  argsList: [[5], [0], [99]],
}));

module.exports = {};
