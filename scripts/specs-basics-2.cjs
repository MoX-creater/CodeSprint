const { buildFn, add } = require("./generate-challenges.cjs");

// ---- strings ----
add("basics/strings", buildFn({
  id: "to-uppercase", title: "Convert to uppercase", difficulty: "Easy", minutes: 1,
  prompt: "Write a function `solve(str)` that returns `str` converted to all uppercase.",
  starter: "function solve(str) {\n  \n}",
  ref: (str) => str.toUpperCase(),
  argsList: [["hello"], ["JavaScript"]],
}));
add("basics/strings", buildFn({
  id: "to-lowercase", title: "Convert to lowercase", difficulty: "Easy", minutes: 1,
  prompt: "Write a function `solve(str)` that returns `str` converted to all lowercase.",
  starter: "function solve(str) {\n  \n}",
  ref: (str) => str.toLowerCase(),
  argsList: [["HELLO"], ["JavaScript"]],
}));
add("basics/strings", buildFn({
  id: "trim-whitespace", title: "Trim surrounding whitespace", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(str)` that returns `str` with leading and trailing whitespace removed.",
  starter: "function solve(str) {\n  \n}",
  ref: (str) => str.trim(),
  argsList: [["  hi  "], ["\tjs\n"]],
}));
add("basics/strings", buildFn({
  id: "split-into-words", title: "Split a sentence into words", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(sentence)` that returns an array of words, splitting on spaces.",
  starter: "function solve(sentence) {\n  \n}",
  ref: (s) => s.split(" "),
  argsList: [["the quick fox"], ["one two"]],
}));
add("basics/strings", buildFn({
  id: "join-words", title: "Join an array of words into a sentence", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(words)` that joins an array of words into a single string, separated by spaces.",
  starter: "function solve(words) {\n  \n}",
  ref: (words) => words.join(" "),
  argsList: [[["the", "quick", "fox"]], [["hi"]]],
}));
add("basics/strings", buildFn({
  id: "replace-substring", title: "Replace part of a string", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(str, target, replacement)` that returns `str` with the first occurrence of `target` replaced by `replacement`.",
  starter: "function solve(str, target, replacement) {\n  \n}",
  ref: (str, target, replacement) => str.replace(target, replacement),
  argsList: [["hello world", "world", "there"], ["aabbcc", "bb", "XX"]],
}));
add("basics/strings", buildFn({
  id: "string-includes", title: "Check for a substring", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(str, sub)` that returns `true` if `str` contains `sub`, using `.includes()`.",
  starter: "function solve(str, sub) {\n  \n}",
  ref: (str, sub) => str.includes(sub),
  argsList: [["javascript", "script"], ["hello", "xyz"]],
}));
add("basics/strings", buildFn({
  id: "starts-and-ends-with", title: "Check start and end of a string", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(str, prefix, suffix)` that returns `true` if `str` starts with `prefix` AND ends with `suffix`.",
  starter: "function solve(str, prefix, suffix) {\n  \n}",
  ref: (str, prefix, suffix) => str.startsWith(prefix) && str.endsWith(suffix),
  argsList: [["hello.js", "hello", ".js"], ["test.txt", "hello", ".js"]],
}));
add("basics/strings", buildFn({
  id: "repeat-string", title: "Repeat a string", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(str, times)` that returns `str` repeated `times` times.",
  starter: "function solve(str, times) {\n  \n}",
  ref: (str, times) => str.repeat(times),
  argsList: [["ab", 3], ["x", 0]],
}));
add("basics/strings", buildFn({
  id: "slice-substring", title: "Extract part of a string", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(str, start, end)` that returns the substring of `str` from index `start` up to (not including) `end`, using `.slice()`.",
  starter: "function solve(str, start, end) {\n  \n}",
  ref: (str, start, end) => str.slice(start, end),
  argsList: [["javascript", 0, 4], ["hello world", 6, 11]],
}));
add("basics/strings", buildFn({
  id: "pad-start", title: "Pad a string to a fixed length", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(str, length, padChar)` that pads `str` at the start with `padChar` until it reaches `length` characters, using `.padStart()`.",
  starter: "function solve(str, length, padChar) {\n  \n}",
  ref: (str, length, padChar) => str.padStart(length, padChar),
  argsList: [["7", 3, "0"], ["5", 2, "0"]],
}));
add("basics/strings", buildFn({
  id: "title-case", title: "Convert a sentence to Title Case", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(sentence)` that capitalizes the first letter of every word in `sentence` and returns the result.",
  starter: "function solve(sentence) {\n  \n}",
  ref: (s) => s.split(" ").map((w) => w[0].toUpperCase() + w.slice(1)).join(" "),
  argsList: [["the quick brown fox"], ["hello world"]],
}));
add("basics/strings", buildFn({
  id: "string-template-multi", title: "Build a multi-part message", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(items)` that takes an array of strings and returns `` `You have ${items.length} items: ${items.join(', ')}` `` using a template literal.",
  starter: "function solve(items) {\n  \n}",
  ref: (items) => `You have ${items.length} items: ${items.join(", ")}`,
  argsList: [[["apple", "banana"]], [["one"]]],
}));

// ---- conditionals ----
add("basics/conditionals", buildFn({
  id: "leap-year", title: "Check if a year is a leap year", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(year)` that returns `true` if `year` is a leap year: divisible by 4, except centuries (divisible by 100) unless also divisible by 400.",
  starter: "function solve(year) {\n  \n}",
  ref: (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0,
  argsList: [[2024], [1900], [2000], [2023]],
}));
add("basics/conditionals", buildFn({
  id: "traffic-light", title: "Decide the action for a traffic light", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(color)` that returns `'go'` for `'green'`, `'slow down'` for `'yellow'`, `'stop'` for `'red'`, and `'unknown'` for anything else.",
  starter: "function solve(color) {\n  \n}",
  ref: (color) => {
    if (color === "green") return "go";
    if (color === "yellow") return "slow down";
    if (color === "red") return "stop";
    return "unknown";
  },
  argsList: [["green"], ["red"], ["yellow"], ["purple"]],
}));
add("basics/conditionals", buildFn({
  id: "bmi-category", title: "Categorize a BMI value", difficulty: "Hard", minutes: 4,
  prompt: "Write a function `solve(bmi)` that returns `'underweight'` if bmi < 18.5, `'normal'` if < 25, `'overweight'` if < 30, otherwise `'obese'`.",
  starter: "function solve(bmi) {\n  \n}",
  ref: (bmi) => {
    if (bmi < 18.5) return "underweight";
    if (bmi < 25) return "normal";
    if (bmi < 30) return "overweight";
    return "obese";
  },
  argsList: [[17], [22], [27], [32]],
}));
add("basics/conditionals", buildFn({
  id: "switch-day-name", title: "Get a day name with switch", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(dayNum)` that returns the day name for `dayNum` (0 = 'Sunday' through 6 = 'Saturday') using a `switch` statement.",
  starter: "function solve(dayNum) {\n  \n}",
  ref: (n) => ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][n],
  argsList: [[0], [3], [6]],
}));
add("basics/conditionals", buildFn({
  id: "nested-conditionals", title: "Nested conditionals for a discount", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(total, isMember)` that returns the discount percentage: members get 20% off orders over 100, 10% off otherwise; non-members get 10% off orders over 100, and 0% otherwise.",
  starter: "function solve(total, isMember) {\n  \n}",
  ref: (total, isMember) => {
    if (isMember) {
      return total > 100 ? 20 : 10;
    } else {
      return total > 100 ? 10 : 0;
    }
  },
  argsList: [[150, true], [150, false], [50, true], [50, false]],
}));
add("basics/conditionals", buildFn({
  id: "short-circuit-default", title: "Short-circuit with ||", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(username)` that returns `username` if it's a non-empty string, otherwise returns `'Guest'`, using `||`.",
  starter: "function solve(username) {\n  \n}",
  ref: (username) => username || "Guest",
  argsList: [["Ada"], [""], [null]],
}));
add("basics/conditionals", buildFn({
  id: "rock-paper-scissors", title: "Decide the winner of rock-paper-scissors", difficulty: "Hard", minutes: 6,
  prompt: "Write a function `solve(a, b)` where `a` and `b` are each `'rock'`, `'paper'`, or `'scissors'`. Return `'a'` if player a wins, `'b'` if player b wins, or `'tie'`.",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => {
    if (a === b) return "tie";
    const beats = { rock: "scissors", paper: "rock", scissors: "paper" };
    return beats[a] === b ? "a" : "b";
  },
  argsList: [["rock", "scissors"], ["paper", "rock"], ["scissors", "scissors"], ["rock", "paper"]],
}));
add("basics/conditionals", buildFn({
  id: "guard-clause-refactor", title: "Return early with a guard clause", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(age)` that returns `'invalid'` immediately if `age` is negative (a guard clause), otherwise returns `'valid'`.",
  starter: "function solve(age) {\n  \n}",
  ref: (age) => (age < 0 ? "invalid" : "valid"),
  argsList: [[-5], [25], [0]],
}));

// ---- functions-1 ----
add("basics/functions-1", buildFn({
  id: "is-vowel", title: "Check if a character is a vowel", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(char)` that returns `true` if `char` is a vowel (a, e, i, o, u), case-insensitive.",
  starter: "function solve(char) {\n  \n}",
  ref: (c) => "aeiou".includes(c.toLowerCase()),
  argsList: [["a"], ["B"], ["e"]],
}));
add("basics/functions-1", buildFn({
  id: "max-of-two", title: "Return the larger of two numbers", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(a, b)` that returns whichever of `a` or `b` is larger.",
  starter: "function solve(a, b) {\n  \n}",
  ref: (a, b) => Math.max(a, b),
  argsList: [[3, 7], [10, 2], [5, 5]],
}));
add("basics/functions-1", buildFn({
  id: "default-parameters", title: "Use a default parameter", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(name)` with a default parameter value of `'World'`, returning `'Hello, ' + name + '!'`.",
  starter: "function solve(name = 'World') {\n  \n}",
  ref: (name = "World") => "Hello, " + name + "!",
  argsList: [["Ada"], [undefined]],
}));
add("basics/functions-1", buildFn({
  id: "cube-number", title: "Cube a number", difficulty: "Easy", minutes: 2,
  prompt: "Write a function `solve(n)` that returns `n` cubed.",
  starter: "function solve(n) {\n  \n}",
  ref: (n) => n ** 3,
  argsList: [[2], [3], [0]],
}));
add("basics/functions-1", buildFn({
  id: "count-arguments", title: "Count how many arguments were passed", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(...args)` that returns how many arguments were passed to it, using rest parameters.",
  starter: "function solve(...args) {\n  \n}",
  ref: (...args) => args.length,
  argsList: [[1, 2, 3], [], ["a"]],
}));
add("basics/functions-1", buildFn({
  id: "recursive-countdown", title: "Build a countdown array recursively", difficulty: "Hard", minutes: 5,
  prompt: "Write a function `solve(n)` that recursively returns an array counting down from `n` to 1, e.g. `solve(3)` returns `[3, 2, 1]`.",
  starter: "function solve(n) {\n  \n}",
  ref: function countdown(n) { return n <= 0 ? [] : [n, ...countdown(n - 1)]; },
  argsList: [[3], [1], [5]],
}));
add("basics/functions-1", buildFn({
  id: "count-truthy-args", title: "Count truthy arguments", difficulty: "Medium", minutes: 3,
  prompt: "Write a function `solve(...args)` that returns how many of the passed arguments are truthy, using rest parameters.",
  starter: "function solve(...args) {\n  \n}",
  ref: (...args) => args.filter(Boolean).length,
  argsList: [[1, 0, "hi", "", null, 5], [true, false, true]],
}));

module.exports = {};
