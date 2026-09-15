// AUTO-GENERATED extra challenges, merged onto the base set in challenges.js.
// Regenerate with: node scripts/build.cjs (requires devDependency "jsdom").
// Every test case here was computed by actually running a reference
// solution (see scripts/specs-*.cjs), not hand-calculated, so the expected
// values are guaranteed correct for the reference implementation.

export const moreChallenges = {
  "basics/variables": [
    {
          id: "swap-values",
          title: "Swap two values",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns an array `[b, a]` — the two values swapped.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                1,
                2
              ],
              expected: [
                2,
                1
              ]
            },
            {
              args: [
                "x",
                "y"
              ],
              expected: [
                "y",
                "x"
              ]
            },
            {
              args: [
                true,
                false
              ],
              expected: [
                false,
                true
              ]
            }
          ]
        },
    {
          id: "increment-by-one",
          title: "Increment a value",
          difficulty: "Easy",
          minutes: 1,
          kind: "fn",
          prompt: "Write a function `solve(n)` that returns `n` incremented by 1.",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                0
              ],
              expected: 1
            },
            {
              args: [
                9
              ],
              expected: 10
            },
            {
              args: [
                -1
              ],
              expected: 0
            }
          ]
        },
    {
          id: "sum-three-numbers",
          title: "Sum three numbers",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(a, b, c)` that returns the sum of all three arguments.",
          starter: "function solve(a, b, c) {\n  \n}",
          tests: [
            {
              args: [
                1,
                2,
                3
              ],
              expected: 6
            },
            {
              args: [
                0,
                0,
                0
              ],
              expected: 0
            },
            {
              args: [
                -5,
                5,
                10
              ],
              expected: 10
            }
          ]
        },
    {
          id: "typeof-null-quirk",
          title: "The typeof null quirk",
          difficulty: "Medium",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve()` that returns the result of `typeof null`. (This is a famous, long-standing JavaScript quirk.)",
          starter: "function solve() {\n  \n}",
          tests: [
            {
              args: [],
              expected: "object"
            }
          ]
        },
    {
          id: "string-to-number",
          title: "Convert a string to a number",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(str)` that converts `str` to a number and returns it, using `Number()`.",
          starter: "function solve(str) {\n  \n}",
          tests: [
            {
              args: [
                "42"
              ],
              expected: 42
            },
            {
              args: [
                "3.14"
              ],
              expected: 3.14
            },
            {
              args: [
                "-7"
              ],
              expected: -7
            }
          ]
        },
    {
          id: "number-to-string",
          title: "Convert a number to a string",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(n)` that converts `n` to a string and returns it.",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                42
              ],
              expected: "42"
            },
            {
              args: [
                3.14
              ],
              expected: "3.14"
            },
            {
              args: [
                0
              ],
              expected: "0"
            }
          ]
        },
    {
          id: "default-if-undefined",
          title: "Provide a default value",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(value)` that returns `value` if it's not `undefined`, otherwise returns the string `'default'`. Use a default parameter.",
          starter: "function solve(value = 'default') {\n  \n}",
          tests: [
            {
              args: [
                undefined
              ],
              expected: "default"
            },
            {
              args: [
                "hi"
              ],
              expected: "hi"
            },
            {
              args: [
                0
              ],
              expected: 0
            }
          ]
        },
    {
          id: "template-literal-greeting",
          title: "Build a sentence with a template literal",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(name, age)` that returns the string `` `${name} is ${age} years old` `` using a template literal.",
          starter: "function solve(name, age) {\n  \n}",
          tests: [
            {
              args: [
                "Ada",
                30
              ],
              expected: "Ada is 30 years old"
            },
            {
              args: [
                "Sam",
                5
              ],
              expected: "Sam is 5 years old"
            }
          ]
        },
    {
          id: "is-nan-check",
          title: "Check if a value is NaN",
          difficulty: "Medium",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(value)` that returns `true` if `value` is `NaN`, using `Number.isNaN()`.",
          starter: "function solve(value) {\n  \n}",
          tests: [
            {
              args: [
                NaN
              ],
              expected: true
            },
            {
              args: [
                5
              ],
              expected: false
            },
            {
              args: [
                NaN
              ],
              expected: true
            }
          ]
        },
    {
          id: "const-reassign-object",
          title: "Mutate a const object's property",
          difficulty: "Hard",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(obj, key, value)` that mutates `obj[key] = value` on a `const`-declared object (this is legal — `const` prevents reassigning the variable, not mutating its contents) and returns the object.",
          starter: "function solve(obj, key, value) {\n  \n}",
          tests: [
            {
              args: [
                {
                  a: 2
                },
                "a",
                2
              ],
              expected: {
                a: 2
              }
            },
            {
              args: [
                {
                  x: 1,
                  y: 2,
                  z: 3
                },
                "z",
                3
              ],
              expected: {
                x: 1,
                y: 2,
                z: 3
              }
            }
          ]
        },
    {
          id: "chained-assignment",
          title: "Assign the same value to three variables",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(value)` that declares three variables `a`, `b`, and `c`, all assigned to `value` in a single statement (`let a = b = c = value` style, or equivalent), and returns their sum-of-equality-checks: `true` if all three are equal to `value`.",
          starter: "function solve(value) {\n  \n}",
          tests: [
            {
              args: [
                5
              ],
              expected: true
            },
            {
              args: [
                "hi"
              ],
              expected: true
            }
          ]
        },
    {
          id: "let-vs-const-array",
          title: "Mutate an array declared with const",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(arr, item)` that pushes `item` onto a `const`-declared array `arr` (legal — `const` only locks the variable binding, not the array's contents) and returns the array's new length.",
          starter: "function solve(arr, item) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3
                ],
                3
              ],
              expected: 3
            },
            {
              args: [
                [
                  "a"
                ],
                "a"
              ],
              expected: 1
            }
          ]
        },
    {
          id: "destructure-swap-array",
          title: "Swap two array elements with destructuring",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(arr, i, j)` that swaps the elements at indices `i` and `j` using array destructuring (`[arr[i], arr[j]] = [arr[j], arr[i]]`), and returns the array.",
          starter: "function solve(arr, i, j) {\n  \n}",
          tests: [
            {
              args: [
                [
                  3,
                  2,
                  1
                ],
                0,
                2
              ],
              expected: [
                3,
                2,
                1
              ]
            },
            {
              args: [
                [
                  "b",
                  "a"
                ],
                0,
                1
              ],
              expected: [
                "b",
                "a"
              ]
            }
          ]
        },
    {
          id: "typeof-various",
          title: "Identify a value's type",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(value)` that returns the result of `typeof value`.",
          starter: "function solve(value) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2
                ]
              ],
              expected: "object"
            },
            {
              args: [
                {}
              ],
              expected: "object"
            },
            {
              args: [
                () => {}
              ],
              expected: "function"
            },
            {
              args: [
                undefined
              ],
              expected: "undefined"
            }
          ]
        }
  ],
  "basics/booleans": [
    {
          id: "logical-and",
          title: "Logical AND",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns `true` only if both `a` and `b` are `true`, using `&&`.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                true,
                true
              ],
              expected: true
            },
            {
              args: [
                true,
                false
              ],
              expected: false
            },
            {
              args: [
                false,
                false
              ],
              expected: false
            }
          ]
        },
    {
          id: "logical-or",
          title: "Logical OR",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns `true` if at least one of `a` or `b` is `true`, using `||`.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                true,
                false
              ],
              expected: true
            },
            {
              args: [
                false,
                false
              ],
              expected: false
            },
            {
              args: [
                false,
                true
              ],
              expected: true
            }
          ]
        },
    {
          id: "logical-not",
          title: "Logical NOT",
          difficulty: "Easy",
          minutes: 1,
          kind: "fn",
          prompt: "Write a function `solve(value)` that returns the opposite boolean of `value`, using `!`.",
          starter: "function solve(value) {\n  \n}",
          tests: [
            {
              args: [
                true
              ],
              expected: false
            },
            {
              args: [
                false
              ],
              expected: true
            }
          ]
        },
    {
          id: "truthy-check",
          title: "Check truthiness",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(value)` that returns `true` if `value` is truthy, `false` if falsy. Remember: `0`, `''`, `null`, `undefined`, `NaN`, and `false` are all falsy.",
          starter: "function solve(value) {\n  \n}",
          tests: [
            {
              args: [
                0
              ],
              expected: false
            },
            {
              args: [
                ""
              ],
              expected: false
            },
            {
              args: [
                "hello"
              ],
              expected: true
            },
            {
              args: [
                1
              ],
              expected: true
            },
            {
              args: [
                null
              ],
              expected: false
            }
          ]
        },
    {
          id: "loose-vs-strict",
          title: "Loose vs strict equality",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns `true` if `a == b` (loose equality) but `a !== b` (not strictly equal) — i.e. they're 'equal' only after type coercion.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                1,
                "1"
              ],
              expected: true
            },
            {
              args: [
                1,
                1
              ],
              expected: false
            },
            {
              args: [
                0,
                false
              ],
              expected: true
            }
          ]
        },
    {
          id: "is-positive",
          title: "Check if a number is positive",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(n)` that returns `true` if `n` is greater than 0.",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                5
              ],
              expected: true
            },
            {
              args: [
                -3
              ],
              expected: false
            },
            {
              args: [
                0
              ],
              expected: false
            }
          ]
        },
    {
          id: "between-range",
          title: "Check if a number is within a range",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(n, min, max)` that returns `true` if `n` is between `min` and `max`, inclusive.",
          starter: "function solve(n, min, max) {\n  \n}",
          tests: [
            {
              args: [
                5,
                1,
                10
              ],
              expected: true
            },
            {
              args: [
                15,
                1,
                10
              ],
              expected: false
            },
            {
              args: [
                1,
                1,
                10
              ],
              expected: true
            }
          ]
        },
    {
          id: "xor-logic",
          title: "Exclusive OR (XOR)",
          difficulty: "Hard",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns `true` if exactly one of `a` or `b` is `true` (not both, not neither) — i.e. logical XOR.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                true,
                false
              ],
              expected: true
            },
            {
              args: [
                true,
                true
              ],
              expected: false
            },
            {
              args: [
                false,
                false
              ],
              expected: false
            }
          ]
        },
    {
          id: "all-true",
          title: "Check if every value in an array is true",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns `true` if every element in `arr` is `true`, using `.every()`.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  true,
                  true,
                  true
                ]
              ],
              expected: true
            },
            {
              args: [
                [
                  true,
                  false,
                  true
                ]
              ],
              expected: false
            },
            {
              args: [
                []
              ],
              expected: true
            }
          ]
        },
    {
          id: "some-true",
          title: "Check if any value in an array is true",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns `true` if at least one element in `arr` is `true`, using `.some()`.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  false,
                  false,
                  true
                ]
              ],
              expected: true
            },
            {
              args: [
                [
                  false,
                  false
                ]
              ],
              expected: false
            },
            {
              args: [
                []
              ],
              expected: false
            }
          ]
        },
    {
          id: "not-not-coerce",
          title: "Coerce a value to boolean with double negation",
          difficulty: "Medium",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(value)` that returns `value` converted to a strict boolean using `!!value`.",
          starter: "function solve(value) {\n  \n}",
          tests: [
            {
              args: [
                "hello"
              ],
              expected: true
            },
            {
              args: [
                0
              ],
              expected: false
            },
            {
              args: [
                null
              ],
              expected: false
            },
            {
              args: [
                42
              ],
              expected: true
            }
          ]
        },
    {
          id: "is-empty-string",
          title: "Check for an empty string",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(str)` that returns `true` if `str` has zero length.",
          starter: "function solve(str) {\n  \n}",
          tests: [
            {
              args: [
                ""
              ],
              expected: true
            },
            {
              args: [
                "a"
              ],
              expected: false
            }
          ]
        },
    {
          id: "compare-strings-boolean",
          title: "Compare two strings for equality",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns `true` if the two strings are exactly equal.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                "cat",
                "cat"
              ],
              expected: true
            },
            {
              args: [
                "cat",
                "dog"
              ],
              expected: false
            }
          ]
        }
  ],
  "basics/operators": [
    {
          id: "exponent-operator",
          title: "Raise to a power",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(base, exp)` that returns `base` raised to the power `exp`, using the `**` operator.",
          starter: "function solve(base, exp) {\n  \n}",
          tests: [
            {
              args: [
                2,
                10
              ],
              expected: 1024
            },
            {
              args: [
                5,
                0
              ],
              expected: 1
            },
            {
              args: [
                3,
                3
              ],
              expected: 27
            }
          ]
        },
    {
          id: "integer-division",
          title: "Integer division",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns the integer (whole-number) result of `a / b`, discarding any remainder.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                7,
                2
              ],
              expected: 3
            },
            {
              args: [
                10,
                3
              ],
              expected: 3
            },
            {
              args: [
                -7,
                2
              ],
              expected: -3
            }
          ]
        },
    {
          id: "ternary-operator",
          title: "Use the ternary operator",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(n)` that returns `'even'` or `'odd'` using a single ternary expression (`condition ? a : b`).",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                4
              ],
              expected: "even"
            },
            {
              args: [
                7
              ],
              expected: "odd"
            },
            {
              args: [
                0
              ],
              expected: "even"
            }
          ]
        },
    {
          id: "nullish-coalescing",
          title: "Nullish coalescing operator",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(value)` that returns `value` unless it's `null` or `undefined`, in which case it returns `'fallback'`. Use the `??` operator (not `||`, which would also replace `0` or `''`).",
          starter: "function solve(value) {\n  \n}",
          tests: [
            {
              args: [
                null
              ],
              expected: "fallback"
            },
            {
              args: [
                0
              ],
              expected: 0
            },
            {
              args: [
                "hi"
              ],
              expected: "hi"
            },
            {
              args: [
                undefined
              ],
              expected: "fallback"
            }
          ]
        },
    {
          id: "compound-assignment",
          title: "Compound assignment operators",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(n)` that takes `n`, multiplies it by 3 using `*=`, then subtracts 1 using `-=`, and returns the result.",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                5
              ],
              expected: 14
            },
            {
              args: [
                0
              ],
              expected: -1
            },
            {
              args: [
                -2
              ],
              expected: -7
            }
          ]
        },
    {
          id: "operator-precedence",
          title: "Operator precedence",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(a, b, c)` that returns `a + b * c` (multiplication happens before addition — no parentheses needed).",
          starter: "function solve(a, b, c) {\n  \n}",
          tests: [
            {
              args: [
                2,
                3,
                4
              ],
              expected: 14
            },
            {
              args: [
                1,
                1,
                1
              ],
              expected: 2
            },
            {
              args: [
                0,
                5,
                5
              ],
              expected: 25
            }
          ]
        },
    {
          id: "bitwise-and",
          title: "Bitwise AND",
          difficulty: "Hard",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns the result of the bitwise AND operator `&` on `a` and `b`.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                5,
                3
              ],
              expected: 1
            },
            {
              args: [
                12,
                10
              ],
              expected: 8
            },
            {
              args: [
                255,
                15
              ],
              expected: 15
            }
          ]
        },
    {
          id: "increment-decrement",
          title: "Pre vs post increment",
          difficulty: "Hard",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(n)` that returns an array `[a, b]` where `a` is the result of post-incrementing `n` (`n++`, evaluates to the OLD value) and `b` is `n` afterward.",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                5
              ],
              expected: [
                5,
                6
              ]
            },
            {
              args: [
                0
              ],
              expected: [
                0,
                1
              ]
            },
            {
              args: [
                99
              ],
              expected: [
                99,
                100
              ]
            }
          ]
        },
    {
          id: "average-of-two",
          title: "Average two numbers",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns the average of `a` and `b`.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                4,
                8
              ],
              expected: 6
            },
            {
              args: [
                1,
                2
              ],
              expected: 1.5
            }
          ]
        },
    {
          id: "percentage-of",
          title: "Calculate a percentage",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(part, total)` that returns what percentage `part` is of `total`, as a number (e.g. `solve(25, 200)` → `12.5`).",
          starter: "function solve(part, total) {\n  \n}",
          tests: [
            {
              args: [
                25,
                200
              ],
              expected: 12.5
            },
            {
              args: [
                1,
                4
              ],
              expected: 25
            }
          ]
        },
    {
          id: "spread-into-max",
          title: "Spread an array into Math.max",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns the largest number in `arr`, spreading it into `Math.max(...arr)`.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  3,
                  7,
                  1
                ]
              ],
              expected: 7
            },
            {
              args: [
                [
                  10
                ]
              ],
              expected: 10
            }
          ]
        }
  ],
  "basics/strings": [
    {
          id: "to-uppercase",
          title: "Convert to uppercase",
          difficulty: "Easy",
          minutes: 1,
          kind: "fn",
          prompt: "Write a function `solve(str)` that returns `str` converted to all uppercase.",
          starter: "function solve(str) {\n  \n}",
          tests: [
            {
              args: [
                "hello"
              ],
              expected: "HELLO"
            },
            {
              args: [
                "JavaScript"
              ],
              expected: "JAVASCRIPT"
            }
          ]
        },
    {
          id: "to-lowercase",
          title: "Convert to lowercase",
          difficulty: "Easy",
          minutes: 1,
          kind: "fn",
          prompt: "Write a function `solve(str)` that returns `str` converted to all lowercase.",
          starter: "function solve(str) {\n  \n}",
          tests: [
            {
              args: [
                "HELLO"
              ],
              expected: "hello"
            },
            {
              args: [
                "JavaScript"
              ],
              expected: "javascript"
            }
          ]
        },
    {
          id: "trim-whitespace",
          title: "Trim surrounding whitespace",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(str)` that returns `str` with leading and trailing whitespace removed.",
          starter: "function solve(str) {\n  \n}",
          tests: [
            {
              args: [
                "  hi  "
              ],
              expected: "hi"
            },
            {
              args: [
                "\tjs\n"
              ],
              expected: "js"
            }
          ]
        },
    {
          id: "split-into-words",
          title: "Split a sentence into words",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(sentence)` that returns an array of words, splitting on spaces.",
          starter: "function solve(sentence) {\n  \n}",
          tests: [
            {
              args: [
                "the quick fox"
              ],
              expected: [
                "the",
                "quick",
                "fox"
              ]
            },
            {
              args: [
                "one two"
              ],
              expected: [
                "one",
                "two"
              ]
            }
          ]
        },
    {
          id: "join-words",
          title: "Join an array of words into a sentence",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(words)` that joins an array of words into a single string, separated by spaces.",
          starter: "function solve(words) {\n  \n}",
          tests: [
            {
              args: [
                [
                  "the",
                  "quick",
                  "fox"
                ]
              ],
              expected: "the quick fox"
            },
            {
              args: [
                [
                  "hi"
                ]
              ],
              expected: "hi"
            }
          ]
        },
    {
          id: "replace-substring",
          title: "Replace part of a string",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(str, target, replacement)` that returns `str` with the first occurrence of `target` replaced by `replacement`.",
          starter: "function solve(str, target, replacement) {\n  \n}",
          tests: [
            {
              args: [
                "hello world",
                "world",
                "there"
              ],
              expected: "hello there"
            },
            {
              args: [
                "aabbcc",
                "bb",
                "XX"
              ],
              expected: "aaXXcc"
            }
          ]
        },
    {
          id: "string-includes",
          title: "Check for a substring",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(str, sub)` that returns `true` if `str` contains `sub`, using `.includes()`.",
          starter: "function solve(str, sub) {\n  \n}",
          tests: [
            {
              args: [
                "javascript",
                "script"
              ],
              expected: true
            },
            {
              args: [
                "hello",
                "xyz"
              ],
              expected: false
            }
          ]
        },
    {
          id: "starts-and-ends-with",
          title: "Check start and end of a string",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(str, prefix, suffix)` that returns `true` if `str` starts with `prefix` AND ends with `suffix`.",
          starter: "function solve(str, prefix, suffix) {\n  \n}",
          tests: [
            {
              args: [
                "hello.js",
                "hello",
                ".js"
              ],
              expected: true
            },
            {
              args: [
                "test.txt",
                "hello",
                ".js"
              ],
              expected: false
            }
          ]
        },
    {
          id: "repeat-string",
          title: "Repeat a string",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(str, times)` that returns `str` repeated `times` times.",
          starter: "function solve(str, times) {\n  \n}",
          tests: [
            {
              args: [
                "ab",
                3
              ],
              expected: "ababab"
            },
            {
              args: [
                "x",
                0
              ],
              expected: ""
            }
          ]
        },
    {
          id: "slice-substring",
          title: "Extract part of a string",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(str, start, end)` that returns the substring of `str` from index `start` up to (not including) `end`, using `.slice()`.",
          starter: "function solve(str, start, end) {\n  \n}",
          tests: [
            {
              args: [
                "javascript",
                0,
                4
              ],
              expected: "java"
            },
            {
              args: [
                "hello world",
                6,
                11
              ],
              expected: "world"
            }
          ]
        },
    {
          id: "pad-start",
          title: "Pad a string to a fixed length",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(str, length, padChar)` that pads `str` at the start with `padChar` until it reaches `length` characters, using `.padStart()`.",
          starter: "function solve(str, length, padChar) {\n  \n}",
          tests: [
            {
              args: [
                "7",
                3,
                "0"
              ],
              expected: "007"
            },
            {
              args: [
                "5",
                2,
                "0"
              ],
              expected: "05"
            }
          ]
        },
    {
          id: "title-case",
          title: "Convert a sentence to Title Case",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(sentence)` that capitalizes the first letter of every word in `sentence` and returns the result.",
          starter: "function solve(sentence) {\n  \n}",
          tests: [
            {
              args: [
                "the quick brown fox"
              ],
              expected: "The Quick Brown Fox"
            },
            {
              args: [
                "hello world"
              ],
              expected: "Hello World"
            }
          ]
        },
    {
          id: "string-template-multi",
          title: "Build a multi-part message",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(items)` that takes an array of strings and returns `` `You have ${items.length} items: ${items.join(', ')}` `` using a template literal.",
          starter: "function solve(items) {\n  \n}",
          tests: [
            {
              args: [
                [
                  "apple",
                  "banana"
                ]
              ],
              expected: "You have 2 items: apple, banana"
            },
            {
              args: [
                [
                  "one"
                ]
              ],
              expected: "You have 1 items: one"
            }
          ]
        },
    {
          id: "char-at-method",
          title: "Get a character with charAt",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(str, i)` that returns the character at index `i` using `.charAt()`.",
          starter: "function solve(str, i) {\n  \n}",
          tests: [
            {
              args: [
                "hello",
                1
              ],
              expected: "e"
            },
            {
              args: [
                "js",
                5
              ],
              expected: ""
            }
          ]
        },
    {
          id: "string-concat-plus",
          title: "Concatenate strings with +",
          difficulty: "Easy",
          minutes: 1,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns `a` and `b` concatenated with the `+` operator.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                "foo",
                "bar"
              ],
              expected: "foobar"
            },
            {
              args: [
                "1",
                "2"
              ],
              expected: "12"
            }
          ]
        },
    {
          id: "array-to-string",
          title: "Convert an array to a comma-separated string",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that converts `arr` to a string with `.toString()` (elements comma-separated).",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3
                ]
              ],
              expected: "1,2,3"
            },
            {
              args: [
                [
                  "a",
                  "b"
                ]
              ],
              expected: "a,b"
            }
          ]
        },
    {
          id: "last-n-characters",
          title: "Get the last N characters of a string",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(str, n)` that returns the last `n` characters of `str`.",
          starter: "function solve(str, n) {\n  \n}",
          tests: [
            {
              args: [
                "javascript",
                3
              ],
              expected: "ipt"
            },
            {
              args: [
                "hi",
                5
              ],
              expected: "hi"
            }
          ]
        }
  ],
  "basics/conditionals": [
    {
          id: "leap-year",
          title: "Check if a year is a leap year",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(year)` that returns `true` if `year` is a leap year: divisible by 4, except centuries (divisible by 100) unless also divisible by 400.",
          starter: "function solve(year) {\n  \n}",
          tests: [
            {
              args: [
                2024
              ],
              expected: true
            },
            {
              args: [
                1900
              ],
              expected: false
            },
            {
              args: [
                2000
              ],
              expected: true
            },
            {
              args: [
                2023
              ],
              expected: false
            }
          ]
        },
    {
          id: "traffic-light",
          title: "Decide the action for a traffic light",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(color)` that returns `'go'` for `'green'`, `'slow down'` for `'yellow'`, `'stop'` for `'red'`, and `'unknown'` for anything else.",
          starter: "function solve(color) {\n  \n}",
          tests: [
            {
              args: [
                "green"
              ],
              expected: "go"
            },
            {
              args: [
                "red"
              ],
              expected: "stop"
            },
            {
              args: [
                "yellow"
              ],
              expected: "slow down"
            },
            {
              args: [
                "purple"
              ],
              expected: "unknown"
            }
          ]
        },
    {
          id: "bmi-category",
          title: "Categorize a BMI value",
          difficulty: "Hard",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(bmi)` that returns `'underweight'` if bmi < 18.5, `'normal'` if < 25, `'overweight'` if < 30, otherwise `'obese'`.",
          starter: "function solve(bmi) {\n  \n}",
          tests: [
            {
              args: [
                17
              ],
              expected: "underweight"
            },
            {
              args: [
                22
              ],
              expected: "normal"
            },
            {
              args: [
                27
              ],
              expected: "overweight"
            },
            {
              args: [
                32
              ],
              expected: "obese"
            }
          ]
        },
    {
          id: "switch-day-name",
          title: "Get a day name with switch",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(dayNum)` that returns the day name for `dayNum` (0 = 'Sunday' through 6 = 'Saturday') using a `switch` statement.",
          starter: "function solve(dayNum) {\n  \n}",
          tests: [
            {
              args: [
                0
              ],
              expected: "Sunday"
            },
            {
              args: [
                3
              ],
              expected: "Wednesday"
            },
            {
              args: [
                6
              ],
              expected: "Saturday"
            }
          ]
        },
    {
          id: "nested-conditionals",
          title: "Nested conditionals for a discount",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(total, isMember)` that returns the discount percentage: members get 20% off orders over 100, 10% off otherwise; non-members get 10% off orders over 100, and 0% otherwise.",
          starter: "function solve(total, isMember) {\n  \n}",
          tests: [
            {
              args: [
                150,
                true
              ],
              expected: 20
            },
            {
              args: [
                150,
                false
              ],
              expected: 10
            },
            {
              args: [
                50,
                true
              ],
              expected: 10
            },
            {
              args: [
                50,
                false
              ],
              expected: 0
            }
          ]
        },
    {
          id: "short-circuit-default",
          title: "Short-circuit with ||",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(username)` that returns `username` if it's a non-empty string, otherwise returns `'Guest'`, using `||`.",
          starter: "function solve(username) {\n  \n}",
          tests: [
            {
              args: [
                "Ada"
              ],
              expected: "Ada"
            },
            {
              args: [
                ""
              ],
              expected: "Guest"
            },
            {
              args: [
                null
              ],
              expected: "Guest"
            }
          ]
        },
    {
          id: "rock-paper-scissors",
          title: "Decide the winner of rock-paper-scissors",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` where `a` and `b` are each `'rock'`, `'paper'`, or `'scissors'`. Return `'a'` if player a wins, `'b'` if player b wins, or `'tie'`.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                "rock",
                "scissors"
              ],
              expected: "a"
            },
            {
              args: [
                "paper",
                "rock"
              ],
              expected: "a"
            },
            {
              args: [
                "scissors",
                "scissors"
              ],
              expected: "tie"
            },
            {
              args: [
                "rock",
                "paper"
              ],
              expected: "b"
            }
          ]
        },
    {
          id: "guard-clause-refactor",
          title: "Return early with a guard clause",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(age)` that returns `'invalid'` immediately if `age` is negative (a guard clause), otherwise returns `'valid'`.",
          starter: "function solve(age) {\n  \n}",
          tests: [
            {
              args: [
                -5
              ],
              expected: "invalid"
            },
            {
              args: [
                25
              ],
              expected: "valid"
            },
            {
              args: [
                0
              ],
              expected: "valid"
            }
          ]
        },
    {
          id: "sign-of-number",
          title: "Determine the sign of a number",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(n)` that returns `'positive'`, `'negative'`, or `'zero'`.",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                5
              ],
              expected: "positive"
            },
            {
              args: [
                -5
              ],
              expected: "negative"
            },
            {
              args: [
                0
              ],
              expected: "zero"
            }
          ]
        },
    {
          id: "password-strength",
          title: "Rate a password's length",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(password)` that returns `'weak'` if length < 6, `'medium'` if < 10, otherwise `'strong'`.",
          starter: "function solve(password) {\n  \n}",
          tests: [
            {
              args: [
                "abc"
              ],
              expected: "weak"
            },
            {
              args: [
                "abcdefg"
              ],
              expected: "medium"
            },
            {
              args: [
                "abcdefghijk"
              ],
              expected: "strong"
            }
          ]
        },
    {
          id: "vote-eligibility",
          title: "Check voting eligibility",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(age, isCitizen)` that returns `true` only if `age >= 18` AND `isCitizen` is `true`.",
          starter: "function solve(age, isCitizen) {\n  \n}",
          tests: [
            {
              args: [
                20,
                true
              ],
              expected: true
            },
            {
              args: [
                15,
                true
              ],
              expected: false
            },
            {
              args: [
                30,
                false
              ],
              expected: false
            }
          ]
        }
  ],
  "basics/functions-1": [
    {
          id: "is-vowel",
          title: "Check if a character is a vowel",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(char)` that returns `true` if `char` is a vowel (a, e, i, o, u), case-insensitive.",
          starter: "function solve(char) {\n  \n}",
          tests: [
            {
              args: [
                "a"
              ],
              expected: true
            },
            {
              args: [
                "B"
              ],
              expected: false
            },
            {
              args: [
                "e"
              ],
              expected: true
            }
          ]
        },
    {
          id: "max-of-two",
          title: "Return the larger of two numbers",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns whichever of `a` or `b` is larger.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                3,
                7
              ],
              expected: 7
            },
            {
              args: [
                10,
                2
              ],
              expected: 10
            },
            {
              args: [
                5,
                5
              ],
              expected: 5
            }
          ]
        },
    {
          id: "default-parameters",
          title: "Use a default parameter",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(name)` with a default parameter value of `'World'`, returning `'Hello, ' + name + '!'`.",
          starter: "function solve(name = 'World') {\n  \n}",
          tests: [
            {
              args: [
                "Ada"
              ],
              expected: "Hello, Ada!"
            },
            {
              args: [
                undefined
              ],
              expected: "Hello, World!"
            }
          ]
        },
    {
          id: "cube-number",
          title: "Cube a number",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(n)` that returns `n` cubed.",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                2
              ],
              expected: 8
            },
            {
              args: [
                3
              ],
              expected: 27
            },
            {
              args: [
                0
              ],
              expected: 0
            }
          ]
        },
    {
          id: "count-arguments",
          title: "Count how many arguments were passed",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(...args)` that returns how many arguments were passed to it, using rest parameters.",
          starter: "function solve(...args) {\n  \n}",
          tests: [
            {
              args: [
                1,
                2,
                3
              ],
              expected: 3
            },
            {
              args: [],
              expected: 0
            },
            {
              args: [
                "a"
              ],
              expected: 1
            }
          ]
        },
    {
          id: "recursive-countdown",
          title: "Build a countdown array recursively",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(n)` that recursively returns an array counting down from `n` to 1, e.g. `solve(3)` returns `[3, 2, 1]`.",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                3
              ],
              expected: [
                3,
                2,
                1
              ]
            },
            {
              args: [
                1
              ],
              expected: [
                1
              ]
            },
            {
              args: [
                5
              ],
              expected: [
                5,
                4,
                3,
                2,
                1
              ]
            }
          ]
        },
    {
          id: "count-truthy-args",
          title: "Count truthy arguments",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(...args)` that returns how many of the passed arguments are truthy, using rest parameters.",
          starter: "function solve(...args) {\n  \n}",
          tests: [
            {
              args: [
                1,
                0,
                "hi",
                "",
                null,
                5
              ],
              expected: 3
            },
            {
              args: [
                true,
                false,
                true
              ],
              expected: 2
            }
          ]
        },
    {
          id: "absolute-value",
          title: "Return the absolute value",
          difficulty: "Easy",
          minutes: 1,
          kind: "fn",
          prompt: "Write a function `solve(n)` that returns the absolute value of `n`.",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                -5
              ],
              expected: 5
            },
            {
              args: [
                5
              ],
              expected: 5
            },
            {
              args: [
                0
              ],
              expected: 0
            }
          ]
        },
    {
          id: "is-multiple-of",
          title: "Check if a number is a multiple of another",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(n, factor)` that returns `true` if `n` is a multiple of `factor`.",
          starter: "function solve(n, factor) {\n  \n}",
          tests: [
            {
              args: [
                10,
                5
              ],
              expected: true
            },
            {
              args: [
                10,
                3
              ],
              expected: false
            }
          ]
        },
    {
          id: "clamp-number",
          title: "Clamp a number within a range",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(n, min, max)` that returns `n`, but clamped so it's never below `min` or above `max`.",
          starter: "function solve(n, min, max) {\n  \n}",
          tests: [
            {
              args: [
                15,
                0,
                10
              ],
              expected: 10
            },
            {
              args: [
                -5,
                0,
                10
              ],
              expected: 0
            },
            {
              args: [
                5,
                0,
                10
              ],
              expected: 5
            }
          ]
        }
  ],
  "basics/arrays": [
    {
          id: "push-to-array",
          title: "Add an item to the end of an array",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(arr, item)` that adds `item` to the end of `arr` using `.push()` and returns the modified array.",
          starter: "function solve(arr, item) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3
                ],
                3
              ],
              expected: [
                1,
                2,
                3
              ]
            },
            {
              args: [
                [
                  "a"
                ],
                "a"
              ],
              expected: [
                "a"
              ]
            }
          ]
        },
    {
          id: "pop-from-array",
          title: "Remove the last item from an array",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that removes and returns the last element of `arr`, using `.pop()`.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2
                ]
              ],
              expected: 3
            },
            {
              args: [
                [
                  "a"
                ]
              ],
              expected: "b"
            }
          ]
        },
    {
          id: "first-element",
          title: "Get the first element",
          difficulty: "Easy",
          minutes: 1,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns the first element of `arr`.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3
                ]
              ],
              expected: 1
            },
            {
              args: [
                [
                  "x"
                ]
              ],
              expected: "x"
            }
          ]
        },
    {
          id: "last-element",
          title: "Get the last element",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns the last element of `arr`, without using a hardcoded index.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3
                ]
              ],
              expected: 3
            },
            {
              args: [
                [
                  "x",
                  "y"
                ]
              ],
              expected: "y"
            }
          ]
        },
    {
          id: "includes-check",
          title: "Check if an array contains a value",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(arr, value)` that returns `true` if `arr` contains `value`, using `.includes()`.",
          starter: "function solve(arr, value) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3
                ],
                2
              ],
              expected: true
            },
            {
              args: [
                [
                  "a",
                  "b"
                ],
                "z"
              ],
              expected: false
            }
          ]
        },
    {
          id: "index-of-value",
          title: "Find the index of a value",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(arr, value)` that returns the index of the first occurrence of `value` in `arr`, or `-1` if not found.",
          starter: "function solve(arr, value) {\n  \n}",
          tests: [
            {
              args: [
                [
                  10,
                  20,
                  30
                ],
                20
              ],
              expected: 1
            },
            {
              args: [
                [
                  1,
                  2,
                  3
                ],
                9
              ],
              expected: -1
            }
          ]
        },
    {
          id: "slice-array",
          title: "Get a portion of an array",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(arr, start, end)` that returns the elements of `arr` from `start` up to (not including) `end`, using `.slice()`.",
          starter: "function solve(arr, start, end) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3,
                  4,
                  5
                ],
                1,
                3
              ],
              expected: [
                2,
                3
              ]
            },
            {
              args: [
                [
                  "a",
                  "b",
                  "c"
                ],
                0,
                2
              ],
              expected: [
                "a",
                "b"
              ]
            }
          ]
        },
    {
          id: "concat-arrays",
          title: "Combine two arrays",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns a new array combining all elements of `a` followed by all elements of `b`.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2
                ],
                [
                  3,
                  4
                ]
              ],
              expected: [
                1,
                2,
                3,
                4
              ]
            },
            {
              args: [
                [],
                [
                  1
                ]
              ],
              expected: [
                1
              ]
            }
          ]
        },
    {
          id: "array-average",
          title: "Compute the average of an array",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns the average of the numbers in `arr`. Return 0 for an empty array.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  2,
                  4,
                  6
                ]
              ],
              expected: 4
            },
            {
              args: [
                [
                  10
                ]
              ],
              expected: 10
            },
            {
              args: [
                []
              ],
              expected: 0
            }
          ]
        },
    {
          id: "reverse-array",
          title: "Reverse an array",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns a new array with the elements of `arr` in reverse order (don't mutate the original).",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3
                ]
              ],
              expected: [
                3,
                2,
                1
              ]
            },
            {
              args: [
                [
                  "a",
                  "b",
                  "c"
                ]
              ],
              expected: [
                "c",
                "b",
                "a"
              ]
            }
          ]
        },
    {
          id: "array-min",
          title: "Find the smallest number",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns the smallest number in `arr`.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  5,
                  2,
                  8,
                  1
                ]
              ],
              expected: 1
            },
            {
              args: [
                [
                  -3,
                  -1,
                  -7
                ]
              ],
              expected: -7
            }
          ]
        },
    {
          id: "array-sort-numbers",
          title: "Sort an array of numbers ascending",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns a new array with the numbers in `arr` sorted from smallest to largest. (Remember: `.sort()` sorts as strings by default — pass a compare function.)",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  3,
                  1,
                  4,
                  1,
                  5
                ]
              ],
              expected: [
                1,
                1,
                3,
                4,
                5
              ]
            },
            {
              args: [
                [
                  10,
                  2,
                  33
                ]
              ],
              expected: [
                2,
                10,
                33
              ]
            }
          ]
        },
    {
          id: "array-is-empty",
          title: "Check if an array is empty",
          difficulty: "Easy",
          minutes: 1,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns `true` if `arr` has no elements.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                []
              ],
              expected: true
            },
            {
              args: [
                [
                  1
                ]
              ],
              expected: false
            }
          ]
        },
    {
          id: "unshift-to-array",
          title: "Add an item to the start of an array",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(arr, item)` that adds `item` to the START of `arr` using `.unshift()` and returns the array.",
          starter: "function solve(arr, item) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3
                ],
                1
              ],
              expected: [
                1,
                2,
                3
              ]
            },
            {
              args: [
                [
                  "a"
                ],
                "a"
              ],
              expected: [
                "a"
              ]
            }
          ]
        },
    {
          id: "array-fill",
          title: "Create an array filled with a value",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(value, length)` that returns a new array of `length` elements, all set to `value`, using `.fill()`.",
          starter: "function solve(value, length) {\n  \n}",
          tests: [
            {
              args: [
                0,
                3
              ],
              expected: [
                0,
                0,
                0
              ]
            },
            {
              args: [
                "x",
                2
              ],
              expected: [
                "x",
                "x"
              ]
            }
          ]
        },
    {
          id: "array-every-length-check",
          title: "Check every string meets a minimum length",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(words, minLen)` that returns `true` if every word in `words` has length >= `minLen`.",
          starter: "function solve(words, minLen) {\n  \n}",
          tests: [
            {
              args: [
                [
                  "cat",
                  "dog"
                ],
                3
              ],
              expected: true
            },
            {
              args: [
                [
                  "cat",
                  "a"
                ],
                2
              ],
              expected: false
            }
          ]
        }
  ],
  "basics/objects": [
    {
          id: "add-property",
          title: "Add a new property to an object",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(obj, key, value)` that adds `key: value` to `obj` and returns the object.",
          starter: "function solve(obj, key, value) {\n  \n}",
          tests: [
            {
              args: [
                {
                  a: 1,
                  b: 2
                },
                "b",
                2
              ],
              expected: {
                a: 1,
                b: 2
              }
            },
            {
              args: [
                {
                  x: "y"
                },
                "x",
                "y"
              ],
              expected: {
                x: "y"
              }
            }
          ]
        },
    {
          id: "delete-property",
          title: "Remove a property from an object",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(obj, key)` that removes `key` from `obj` using the `delete` operator, and returns the object.",
          starter: "function solve(obj, key) {\n  \n}",
          tests: [
            {
              args: [
                {
                  b: 2
                },
                "a"
              ],
              expected: {
                b: 2
              }
            },
            {
              args: [
                {
                  x: 1
                },
                "y"
              ],
              expected: {
                x: 1
              }
            }
          ]
        },
    {
          id: "object-spread",
          title: "Copy an object with the spread operator",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(obj, extra)` that returns a NEW object containing all of `obj`'s properties plus all of `extra`'s properties, using `{ ...obj, ...extra }`.",
          starter: "function solve(obj, extra) {\n  \n}",
          tests: [
            {
              args: [
                {
                  a: 1
                },
                {
                  b: 2
                }
              ],
              expected: {
                a: 1,
                b: 2
              }
            },
            {
              args: [
                {
                  x: 1
                },
                {
                  x: 2
                }
              ],
              expected: {
                x: 2
              }
            }
          ]
        },
    {
          id: "destructure-object",
          title: "Destructure two properties",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(obj)` that destructures `name` and `age` out of `obj` and returns them as the array `[name, age]`.",
          starter: "function solve(obj) {\n  \n}",
          tests: [
            {
              args: [
                {
                  name: "Ada",
                  age: 30,
                  extra: true
                }
              ],
              expected: [
                "Ada",
                30
              ]
            }
          ]
        },
    {
          id: "nested-property-access",
          title: "Access a nested property",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(obj)` that returns `obj.address.city`, or `undefined` if that path doesn't fully exist (use optional chaining `?.`).",
          starter: "function solve(obj) {\n  \n}",
          tests: [
            {
              args: [
                {
                  address: {
                    city: "Delhi"
                  }
                }
              ],
              expected: "Delhi"
            },
            {
              args: [
                {}
              ],
              expected: undefined
            }
          ]
        },
    {
          id: "object-entries-loop",
          title: "Build a string from object entries",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(obj)` that returns a string listing each key-value pair as `'key=value'`, joined by commas, in insertion order. Use `Object.entries()`.",
          starter: "function solve(obj) {\n  \n}",
          tests: [
            {
              args: [
                {
                  a: 1,
                  b: 2
                }
              ],
              expected: "a=1,b=2"
            },
            {
              args: [
                {
                  x: "y"
                }
              ],
              expected: "x=y"
            }
          ]
        },
    {
          id: "shallow-clone",
          title: "Shallow clone an object",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(obj)` that returns a shallow copy of `obj` (a new object with the same top-level properties), using `Object.assign()` or spread.",
          starter: "function solve(obj) {\n  \n}",
          tests: [
            {
              args: [
                {
                  a: 1,
                  b: 2
                }
              ],
              expected: {
                a: 1,
                b: 2
              }
            }
          ]
        },
    {
          id: "object-from-entries",
          title: "Build an object from an array of pairs",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(pairs)` that converts an array of `[key, value]` pairs into an object, using `Object.fromEntries()`.",
          starter: "function solve(pairs) {\n  \n}",
          tests: [
            {
              args: [
                [
                  [
                    "a",
                    1
                  ],
                  [
                    "b",
                    2
                  ]
                ]
              ],
              expected: {
                a: 1,
                b: 2
              }
            },
            {
              args: [
                [
                  [
                    "x",
                    "y"
                  ]
                ]
              ],
              expected: {
                x: "y"
              }
            }
          ]
        },
    {
          id: "object-key-list",
          title: "Get all keys of an object",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(obj)` that returns an array of `obj`'s own keys, using `Object.keys()`.",
          starter: "function solve(obj) {\n  \n}",
          tests: [
            {
              args: [
                {
                  a: 1,
                  b: 2
                }
              ],
              expected: [
                "a",
                "b"
              ]
            },
            {
              args: [
                {}
              ],
              expected: []
            }
          ]
        },
    {
          id: "objects-are-references",
          title: "Objects are compared by reference",
          difficulty: "Hard",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(obj)` that returns `true` if `obj === { ...obj }` would be `false` — i.e. demonstrate that two object literals with identical contents are never `===` unless they're the same reference. Just return `obj === { ...obj }` directly.",
          starter: "function solve(obj) {\n  \n}",
          tests: [
            {
              args: [
                {
                  a: 1
                }
              ],
              expected: false
            },
            {
              args: [
                {}
              ],
              expected: false
            }
          ]
        }
  ],
  "basics/loops": [
    {
          id: "while-loop-sum",
          title: "Sum with a while loop",
          difficulty: "Easy",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(n)` that returns the sum of 1 to `n` using a `while` loop instead of `for`.",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                5
              ],
              expected: 15
            },
            {
              args: [
                10
              ],
              expected: 55
            },
            {
              args: [
                1
              ],
              expected: 1
            }
          ]
        },
    {
          id: "countdown-array",
          title: "Build a countdown array with a loop",
          difficulty: "Easy",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(n)` that returns an array counting DOWN from `n` to 1, using a loop (not recursion).",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                5
              ],
              expected: [
                5,
                4,
                3,
                2,
                1
              ]
            },
            {
              args: [
                1
              ],
              expected: [
                1
              ]
            },
            {
              args: [
                3
              ],
              expected: [
                3,
                2,
                1
              ]
            }
          ]
        },
    {
          id: "break-on-target",
          title: "Stop a loop early with break",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(arr, target)` that loops through `arr` and returns the index of the first occurrence of `target`, stopping the loop early with `break` once found. Return `-1` if not found.",
          starter: "function solve(arr, target) {\n  \n}",
          tests: [
            {
              args: [
                [
                  5,
                  3,
                  8,
                  3
                ],
                3
              ],
              expected: 1
            },
            {
              args: [
                [
                  1,
                  2,
                  3
                ],
                9
              ],
              expected: -1
            }
          ]
        },
    {
          id: "skip-with-continue",
          title: "Skip values with continue",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns a new array of only the positive numbers from `arr`, using a loop with `continue` to skip non-positive values.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  -2,
                  5,
                  0,
                  8,
                  -1
                ]
              ],
              expected: [
                5,
                8
              ]
            },
            {
              args: [
                [
                  1,
                  2,
                  3
                ]
              ],
              expected: [
                1,
                2,
                3
              ]
            }
          ]
        },
    {
          id: "nested-loop-grid",
          title: "Build coordinate pairs with a nested loop",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(rows, cols)` that returns an array of `[row, col]` pairs for every cell in a grid of size `rows` x `cols`, using a nested loop, in row-major order.",
          starter: "function solve(rows, cols) {\n  \n}",
          tests: [
            {
              args: [
                2,
                2
              ],
              expected: [
                [
                  0,
                  0
                ],
                [
                  0,
                  1
                ],
                [
                  1,
                  0
                ],
                [
                  1,
                  1
                ]
              ]
            },
            {
              args: [
                1,
                3
              ],
              expected: [
                [
                  0,
                  0
                ],
                [
                  0,
                  1
                ],
                [
                  0,
                  2
                ]
              ]
            }
          ]
        },
    {
          id: "multiplication-table-row",
          title: "Generate a multiplication table row",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(n, upTo)` that returns an array of the multiples of `n` from `n*1` to `n*upTo`, using a loop.",
          starter: "function solve(n, upTo) {\n  \n}",
          tests: [
            {
              args: [
                3,
                5
              ],
              expected: [
                3,
                6,
                9,
                12,
                15
              ]
            },
            {
              args: [
                7,
                3
              ],
              expected: [
                7,
                14,
                21
              ]
            }
          ]
        },
    {
          id: "do-while-at-least-once",
          title: "Run a loop body at least once",
          difficulty: "Hard",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(n)` that uses a `do...while` loop to build an array of numbers from 1 up to `n` — even if `n` is 0 or negative, the loop body should run once, so the result always has at least one element.",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                3
              ],
              expected: [
                1,
                2,
                3
              ]
            },
            {
              args: [
                0
              ],
              expected: [
                1
              ]
            },
            {
              args: [
                -2
              ],
              expected: [
                1
              ]
            }
          ]
        },
    {
          id: "loop-over-object-keys",
          title: "Loop over an object with for...in",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(obj)` that returns the sum of all values in `obj`, iterating with a `for...in` loop.",
          starter: "function solve(obj) {\n  \n}",
          tests: [
            {
              args: [
                {
                  a: 1,
                  b: 2,
                  c: 3
                }
              ],
              expected: 6
            },
            {
              args: [
                {}
              ],
              expected: 0
            }
          ]
        },
    {
          id: "loop-over-array-for-of",
          title: "Loop over an array with for...of",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns the sum of `arr`, iterating with a `for...of` loop.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3
                ]
              ],
              expected: 6
            },
            {
              args: [
                []
              ],
              expected: 0
            }
          ]
        },
    {
          id: "count-loop-iterations",
          title: "Count how many times a loop runs",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(n)` that counts how many numbers from 1 to `n` are divisible by 3, using a loop.",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                10
              ],
              expected: 3
            },
            {
              args: [
                3
              ],
              expected: 1
            },
            {
              args: [
                1
              ],
              expected: 0
            }
          ]
        }
  ],
  "intermediate/array-methods": [
    {
          id: "map-to-length",
          title: "Map strings to their lengths",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(words)` that returns an array of the length of each word, using `.map()`.",
          starter: "function solve(words) {\n  \n}",
          tests: [
            {
              args: [
                [
                  "a",
                  "bb",
                  "ccc"
                ]
              ],
              expected: [
                1,
                2,
                3
              ]
            },
            {
              args: [
                [
                  "hello",
                  "hi"
                ]
              ],
              expected: [
                5,
                2
              ]
            }
          ]
        },
    {
          id: "reduce-to-sum",
          title: "Sum an array with reduce",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns the sum of `arr` using `.reduce()`.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3,
                  4
                ]
              ],
              expected: 10
            },
            {
              args: [
                []
              ],
              expected: 0
            }
          ]
        },
    {
          id: "find-first-match",
          title: "Find the first matching element",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(arr, min)` that returns the first number in `arr` greater than `min`, using `.find()`. Return `undefined` if none match.",
          starter: "function solve(arr, min) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  5,
                  10,
                  15
                ],
                8
              ],
              expected: 10
            },
            {
              args: [
                [
                  1,
                  2
                ],
                10
              ],
              expected: undefined
            }
          ]
        },
    {
          id: "find-index-match",
          title: "Find the index of a matching element",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(arr, min)` that returns the index of the first number greater than `min`, using `.findIndex()`.",
          starter: "function solve(arr, min) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  5,
                  10
                ],
                4
              ],
              expected: 1
            },
            {
              args: [
                [
                  1,
                  2
                ],
                10
              ],
              expected: -1
            }
          ]
        },
    {
          id: "every-positive",
          title: "Check if every number is positive",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns `true` if every number in `arr` is positive, using `.every()`.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3
                ]
              ],
              expected: true
            },
            {
              args: [
                [
                  1,
                  -2,
                  3
                ]
              ],
              expected: false
            }
          ]
        },
    {
          id: "some-negative",
          title: "Check if any number is negative",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns `true` if at least one number in `arr` is negative, using `.some()`.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  -2,
                  3
                ]
              ],
              expected: true
            },
            {
              args: [
                [
                  1,
                  2,
                  3
                ]
              ],
              expected: false
            }
          ]
        },
    {
          id: "sort-by-property",
          title: "Sort an array of objects by a property",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(people)` that returns `people` sorted by their `age` property, ascending, using `.sort()` with a compare function.",
          starter: "function solve(people) {\n  \n}",
          tests: [
            {
              args: [
                [
                  {
                    name: "A",
                    age: 30
                  },
                  {
                    name: "B",
                    age: 20
                  }
                ]
              ],
              expected: [
                {
                  name: "B",
                  age: 20
                },
                {
                  name: "A",
                  age: 30
                }
              ]
            }
          ]
        },
    {
          id: "map-filter-chain",
          title: "Chain map and filter",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns the squares of only the even numbers in `arr`, chaining `.filter()` and `.map()`.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6
                ]
              ],
              expected: [
                4,
                16,
                36
              ]
            },
            {
              args: [
                [
                  1,
                  3,
                  5
                ]
              ],
              expected: []
            }
          ]
        },
    {
          id: "reduce-to-object",
          title: "Turn an array into a lookup object with reduce",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write a function `solve(people)` that reduces an array of `{ id, name }` objects into a single object mapping each `id` to its `name`.",
          starter: "function solve(people) {\n  \n}",
          tests: [
            {
              args: [
                [
                  {
                    id: 1,
                    name: "Ada"
                  },
                  {
                    id: 2,
                    name: "Sam"
                  }
                ]
              ],
              expected: {
                "1": "Ada",
                "2": "Sam"
              }
            }
          ]
        },
    {
          id: "array-from-range",
          title: "Generate a range with Array.from",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(n)` that returns an array `[0, 1, 2, ..., n-1]` using `Array.from()` (not a loop).",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                5
              ],
              expected: [
                0,
                1,
                2,
                3,
                4
              ]
            },
            {
              args: [
                0
              ],
              expected: []
            },
            {
              args: [
                3
              ],
              expected: [
                0,
                1,
                2
              ]
            }
          ]
        },
    {
          id: "flat-map-example",
          title: "Map and flatten in one step",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(sentences)` that takes an array of sentences and returns a single flat array of all their words, using `.flatMap()`.",
          starter: "function solve(sentences) {\n  \n}",
          tests: [
            {
              args: [
                [
                  "hello world",
                  "foo bar"
                ]
              ],
              expected: [
                "hello",
                "world",
                "foo",
                "bar"
              ]
            },
            {
              args: [
                [
                  "one"
                ]
              ],
              expected: [
                "one"
              ]
            }
          ]
        },
    {
          id: "array-some-vs-every",
          title: "Combine some and every",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns `'all positive'` if every number is positive, `'mixed'` if some but not all are positive, or `'none positive'` if none are.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3
                ]
              ],
              expected: "all positive"
            },
            {
              args: [
                [
                  1,
                  -2,
                  3
                ]
              ],
              expected: "mixed"
            },
            {
              args: [
                [
                  -1,
                  -2
                ]
              ],
              expected: "none positive"
            }
          ]
        },
    {
          id: "reduce-right-example",
          title: "Reduce from the right",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that concatenates the strings in `arr` from right to left, using `.reduceRight()`.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  "a",
                  "b",
                  "c"
                ]
              ],
              expected: "cba"
            },
            {
              args: [
                [
                  "x"
                ]
              ],
              expected: "x"
            }
          ]
        },
    {
          id: "map-with-index",
          title: "Use the index argument in map",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns a new array where each element is `value + index` (using the second argument `.map()` provides).",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  10,
                  10,
                  10
                ]
              ],
              expected: [
                10,
                11,
                12
              ]
            },
            {
              args: [
                [
                  0,
                  0,
                  0,
                  0
                ]
              ],
              expected: [
                0,
                1,
                2,
                3
              ]
            }
          ]
        }
  ],
  "intermediate/objects-2": [
    {
          id: "object-entries-to-map",
          title: "Double every value in an object",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(obj)` that returns a new object with the same keys but every value doubled, using `Object.entries()` and `Object.fromEntries()`.",
          starter: "function solve(obj) {\n  \n}",
          tests: [
            {
              args: [
                {
                  a: 1,
                  b: 2
                }
              ],
              expected: {
                a: 2,
                b: 4
              }
            },
            {
              args: [
                {
                  x: 5
                }
              ],
              expected: {
                x: 10
              }
            }
          ]
        },
    {
          id: "filter-object-keys",
          title: "Filter an object's keys",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(obj, keys)` that returns a new object containing only the properties of `obj` whose keys appear in the `keys` array.",
          starter: "function solve(obj, keys) {\n  \n}",
          tests: [
            {
              args: [
                {
                  a: 1,
                  b: 2,
                  c: 3
                },
                [
                  "a",
                  "c"
                ]
              ],
              expected: {
                a: 1,
                c: 3
              }
            }
          ]
        },
    {
          id: "object-freeze-check",
          title: "Check if an object is frozen",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(obj)` that freezes `obj` with `Object.freeze()` and returns whether it's now frozen, using `Object.isFrozen()`.",
          starter: "function solve(obj) {\n  \n}",
          tests: [
            {
              args: [
                {
                  a: 1
                }
              ],
              expected: true
            }
          ]
        },
    {
          id: "computed-property-names",
          title: "Build an object with a computed key",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(key, value)` that returns an object where the property name is the VALUE of `key` (a computed property name), mapped to `value`.",
          starter: "function solve(key, value) {\n  \n}",
          tests: [
            {
              args: [
                "name",
                "Ada"
              ],
              expected: {
                name: "Ada"
              }
            },
            {
              args: [
                "id",
                5
              ],
              expected: {
                id: 5
              }
            }
          ]
        },
    {
          id: "object-values-sum",
          title: "Sum all numeric values in an object",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(obj)` that returns the sum of all values in `obj`, using `Object.values()`.",
          starter: "function solve(obj) {\n  \n}",
          tests: [
            {
              args: [
                {
                  a: 1,
                  b: 2,
                  c: 3
                }
              ],
              expected: 6
            },
            {
              args: [
                {}
              ],
              expected: 0
            }
          ]
        },
    {
          id: "rename-key",
          title: "Rename a key in an object",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(obj, oldKey, newKey)` that returns a new object with `oldKey` renamed to `newKey`, preserving its value and all other keys.",
          starter: "function solve(obj, oldKey, newKey) {\n  \n}",
          tests: [
            {
              args: [
                {
                  a: 1,
                  b: 2
                },
                "a",
                "z"
              ],
              expected: {
                b: 2,
                z: 1
              }
            }
          ]
        },
    {
          id: "group-objects-by-key",
          title: "Group an array of objects by a property",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write a function `solve(items)` that groups an array of `{ category, name }` objects into an object keyed by `category`, each mapping to an array of names.",
          starter: "function solve(items) {\n  \n}",
          tests: [
            {
              args: [
                [
                  {
                    category: "fruit",
                    name: "apple"
                  },
                  {
                    category: "veg",
                    name: "carrot"
                  },
                  {
                    category: "fruit",
                    name: "banana"
                  }
                ]
              ],
              expected: {
                fruit: [
                  "apple",
                  "banana"
                ],
                veg: [
                  "carrot"
                ]
              }
            }
          ]
        },
    {
          id: "object-assign-multi",
          title: "Merge multiple objects with Object.assign",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(a, b, c)` that merges three objects into a new one using `Object.assign({}, a, b, c)`, with later objects winning conflicts.",
          starter: "function solve(a, b, c) {\n  \n}",
          tests: [
            {
              args: [
                {
                  x: 1
                },
                {
                  y: 2
                },
                {
                  x: 3
                }
              ],
              expected: {
                x: 3,
                y: 2
              }
            }
          ]
        },
    {
          id: "object-has-own-vs-in",
          title: "Distinguish own vs inherited properties",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(obj, key)` that returns `true` only if `key` is an OWN property of `obj` (not inherited from its prototype chain), using `Object.hasOwn()` or `.hasOwnProperty()`.",
          starter: "function solve(obj, key) {\n  \n}",
          tests: [
            {
              args: [
                {
                  a: 1
                },
                "a"
              ],
              expected: true
            },
            {
              args: [
                {
                  a: 1
                },
                "toString"
              ],
              expected: false
            }
          ]
        }
  ],
  "intermediate/scope": [
    {
          id: "iife-basic",
          title: "Use an IIFE to create private scope",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(n)` that uses an Immediately Invoked Function Expression `(function(){...})()` internally to compute and return `n * n`, demonstrating that the IIFE's variables don't leak out.",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                4
              ],
              expected: 16
            },
            {
              args: [
                7
              ],
              expected: 49
            }
          ]
        },
    {
          id: "private-counter-object",
          title: "Build a private counter object",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write a function `solve()` that returns an object with two methods: `increment()` (adds 1 to a hidden counter, returns nothing) and `getCount()` (returns the current count). The counter variable must not be accessible from outside.",
          starter: "function solve() {\n  \n}",
          tests: [
            {
              args: [],
              run: (solve) => {
            const counter = solve();
            counter.increment();
            counter.increment();
            counter.increment();
            return counter.getCount();
          },
              expected: 3
            },
            {
              args: [],
              run: (solve) => solve().getCount(),
              expected: 0
            }
          ]
        },
    {
          id: "global-vs-local",
          title: "Local variables shadow global ones",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve()` that declares a local variable `x = 'local'` inside the function (even if a global `x` exists elsewhere) and returns it, demonstrating that the local declaration takes precedence within the function's scope.",
          starter: "function solve() {\n  \n}",
          tests: [
            {
              args: [],
              expected: "local"
            }
          ]
        },
    {
          id: "let-loop-closures-array",
          title: "Closures inside a for-of loop",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(names)` that returns an array of functions, one per name in `names`; calling the function at index `i` should return `'Hi, ' + names[i]`.",
          starter: "function solve(names) {\n  \n}",
          tests: [
            {
              args: [],
              run: (solve) => {
            const fns = solve(["Ada", "Sam"]);
            return fns.map((f) => f());
          },
              expected: [
                "Hi, Ada",
                "Hi, Sam"
              ]
            }
          ]
        },
    {
          id: "module-pattern-basic",
          title: "Build a simple module with a public API",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write a function `solve(initial)` that returns an object with `get()` (returns the current value) and `set(v)` (updates it) methods, using a closure over a variable initialized to `initial`.",
          starter: "function solve(initial) {\n  \n}",
          tests: [
            {
              args: [],
              run: (solve) => {
            const mod = solve(1);
            const before = mod.get();
            mod.set(5);
            return [before, mod.get()];
          },
              expected: [
                1,
                5
              ]
            }
          ]
        },
    {
          id: "hoisting-var-vs-let",
          title: "Understand var hoisting",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve()` that returns the value logged by referencing a `var x` BEFORE its declaration line (var declarations are hoisted, so this returns `undefined` rather than throwing).",
          starter: "function solve() {\n  \n}",
          tests: [
            {
              args: [],
              expected: "undefined"
            }
          ]
        }
  ],
  "intermediate/functions-2": [
    {
          id: "arrow-vs-function-this",
          title: "Return values from an array of arrow functions",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(nums)` that returns a new array where each number is passed through the arrow function `n => n % 2 === 0 ? 'even' : 'odd'`.",
          starter: "function solve(nums) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3,
                  4
                ]
              ],
              expected: [
                "odd",
                "even",
                "odd",
                "even"
              ]
            }
          ]
        },
    {
          id: "curry-add",
          title: "Curry a two-argument function",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write a function `solve(a)` that returns a function which takes `b` and returns `a + b` (a curried adder). Return the result of calling `solve(3)(4)`.",
          starter: "function solve(a) {\n  return function(b) {\n    \n  };\n}",
          tests: [
            {
              args: [],
              run: (solve) => solve(3)(4),
              expected: 7
            },
            {
              args: [],
              run: (solve) => solve(5)(5),
              expected: 10
            }
          ]
        },
    {
          id: "compose-two-functions",
          title: "Compose two functions",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write a function `solve(f, g, x)` that returns `f(g(x))` — apply `g` first, then `f` to the result.",
          starter: "function solve(f, g, x) {\n  \n}",
          tests: [
            {
              args: [
                (n) => n + 1,
                (n) => n * 2,
                5
              ],
              expected: 11
            }
          ]
        },
    {
          id: "default-and-rest-combo",
          title: "Combine default and rest parameters",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(prefix = '>', ...items)` that returns an array where each item is prefixed: `prefix + item`.",
          starter: "function solve(prefix = '>', ...items) {\n  \n}",
          tests: [
            {
              args: [
                "-",
                "a",
                "b"
              ],
              expected: [
                "-a",
                "-b"
              ]
            },
            {
              args: [
                undefined,
                "x"
              ],
              expected: [
                ">x"
              ]
            }
          ]
        },
    {
          id: "partial-application",
          title: "Partially apply a function",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write a function `solve(fn, ...presetArgs)` that returns a new function which, when called with more arguments, calls `fn` with `presetArgs` followed by the new arguments.",
          starter: "function solve(fn, ...presetArgs) {\n  \n}",
          tests: [
            {
              args: [],
              run: (solve) => {
            const add3 = (a, b, c) => a + b + c;
            const addTo1 = solve(add3, 1);
            return addTo1(2, 3);
          },
              expected: 6
            }
          ]
        },
    {
          id: "arrow-implicit-return-object",
          title: "Return an object literal with shorthand properties",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(name, age)` that returns `{ name, age }` using object shorthand property names.",
          starter: "function solve(name, age) {\n  \n}",
          tests: [
            {
              args: [
                "Ada",
                30
              ],
              expected: {
                name: "Ada",
                age: 30
              }
            },
            {
              args: [
                "Sam",
                5
              ],
              expected: {
                name: "Sam",
                age: 5
              }
            }
          ]
        },
    {
          id: "once-function",
          title: "Make a function that only runs once",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write a function `solve(fn)` that returns a wrapped version of `fn` which only actually calls `fn` the FIRST time it's invoked; every call after that returns the same cached result without calling `fn` again.",
          starter: "function solve(fn) {\n  \n}",
          tests: [
            {
              args: [],
              run: (solve) => {
            let calls = 0;
            const fn = () => { calls++; return 5; };
            const once = solve(fn);
            const results = [once(), once(), once()];
            if (calls !== 1) throw new Error(`expected fn to be called once, was called ${calls} times`);
            return results;
          },
              expected: [
                5,
                5,
                5
              ]
            }
          ]
        },
    {
          id: "pipe-functions",
          title: "Pipe an array of functions together",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write a function `solve(fns, initial)` that applies each function in `fns` to `initial`, left to right (the output of one becomes the input of the next), and returns the final result.",
          starter: "function solve(fns, initial) {\n  \n}",
          tests: [
            {
              args: [
                [
                  (n) => n + 1,
                  (n) => n * 2,
                  (n) => n - 3
                ],
                5
              ],
              expected: 9
            }
          ]
        }
  ],
  "intermediate/classes": [
    {
          id: "class-with-method",
          title: "Class with a simple method",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(w, h)` that defines a class `Box` with a constructor taking `width` and `height`, and a method `perimeter()` returning `2 * (width + height)`. Return the result of `.perimeter()`.",
          starter: "function solve(w, h) {\n  \n}",
          tests: [
            {
              args: [
                3,
                4
              ],
              expected: 14
            },
            {
              args: [
                10,
                2
              ],
              expected: 24
            }
          ]
        },
    {
          id: "class-private-field",
          title: "Use a private class field",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write a function `solve(balance)` that defines a class `Account` with a private field `#balance` initialized from the constructor, and a method `getBalance()` that returns it. Return the result of calling `.getBalance()` on a new instance.",
          starter: "function solve(balance) {\n  \n}",
          tests: [
            {
              args: [
                100
              ],
              expected: 100
            },
            {
              args: [
                0
              ],
              expected: 0
            }
          ]
        },
    {
          id: "class-toString-override",
          title: "Override toString on a class",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(name, price)` that defines a class `Product` with a `toString()` method returning `` `${name}: $${price}` ``. Return the result of using template-literal string coercion on a new instance.",
          starter: "function solve(name, price) {\n  \n}",
          tests: [
            {
              args: [
                "Pen",
                2
              ],
              expected: "Pen: $2"
            },
            {
              args: [
                "Book",
                15
              ],
              expected: "Book: $15"
            }
          ]
        },
    {
          id: "class-instanceof-check",
          title: "Check inheritance with instanceof",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve()` that defines a class `Animal` and a subclass `Cat extends Animal`, creates a new `Cat`, and returns `true` if it's an instance of BOTH `Cat` and `Animal`, using `instanceof`.",
          starter: "function solve() {\n  \n}",
          tests: [
            {
              args: [],
              expected: true
            }
          ]
        },
    {
          id: "class-static-counter",
          title: "Track instances with a static property",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write a function `solve(count)` that defines a class `Widget` with a static property `total` (starting at 0), incremented in the constructor every time a new instance is created. Create `count` instances and return `Widget.total`.",
          starter: "function solve(count) {\n  \n}",
          tests: [
            {
              args: [
                3
              ],
              expected: 3
            },
            {
              args: [
                0
              ],
              expected: 0
            },
            {
              args: [
                5
              ],
              expected: 5
            }
          ]
        },
    {
          id: "class-getter-setter",
          title: "Use a getter and setter together",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write a function `solve(celsius)` that defines a class `Temperature` with a `celsius` field, a getter `fahrenheit` returning `celsius * 9/5 + 32`, and a setter `fahrenheit` that updates `celsius` accordingly. Return the getter's value for the given `celsius`.",
          starter: "function solve(celsius) {\n  \n}",
          tests: [
            {
              args: [
                0
              ],
              expected: 32
            },
            {
              args: [
                100
              ],
              expected: 212
            },
            {
              args: [
                20
              ],
              expected: 68
            }
          ]
        }
  ],
  "intermediate/async": [
    {
          id: "async-try-catch",
          title: "Handle a rejected promise",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write an async function `solve(shouldFail)` that, if `shouldFail` is `true`, awaits `Promise.reject('failed')` inside a `try/catch` and returns the string `'caught: failed'`; otherwise it returns `'ok'`.",
          starter: "async function solve(shouldFail) {\n  \n}",
          tests: [
            {
              args: [
                true
              ],
              expected: "caught: failed"
            },
            {
              args: [
                false
              ],
              expected: "ok"
            }
          ]
        },
    {
          id: "async-sequential-sum",
          title: "Await promises one after another",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write an async function `solve(nums)` that awaits `Promise.resolve(n)` for each number in `nums`, ONE AT A TIME (sequentially, not in parallel), summing the results as it goes. Return the total.",
          starter: "async function solve(nums) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3
                ]
              ],
              expected: 6
            },
            {
              args: [
                [
                  10
                ]
              ],
              expected: 10
            }
          ]
        },
    {
          id: "async-map",
          title: "Map over an array with async operations",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write an async function `solve(nums)` that returns a new array where each number has been asynchronously doubled — map each number through an async doubling function, and await all the results with `Promise.all`.",
          starter: "async function solve(nums) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3
                ]
              ],
              expected: [
                2,
                4,
                6
              ]
            },
            {
              args: [
                []
              ],
              expected: []
            }
          ]
        },
    {
          id: "promise-race-fastest",
          title: "Get the first settled promise",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write an async function `solve(a, b)` that returns whichever of `Promise.resolve(a)` or `Promise.resolve(b)` settles first, using `Promise.race()`. (With already-resolved promises, the first one passed wins.)",
          starter: "async function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                1,
                2
              ],
              expected: 1
            },
            {
              args: [
                "first",
                "second"
              ],
              expected: "first"
            }
          ]
        },
    {
          id: "async-error-propagation",
          title: "Let an async function's rejection propagate",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write an async function `solve(n)` that returns `n * 2` if `n` is a number, otherwise throws an Error with message `'not a number'`. Since the tests only check successful cases here, just handle the numeric path correctly.",
          starter: "async function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                5
              ],
              expected: 10
            },
            {
              args: [
                10
              ],
              expected: 20
            }
          ]
        },
    {
          id: "delay-then-resolve",
          title: "Simulate a delayed API call",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write an async function `solve(value)` that awaits `new Promise(resolve => resolve(value))` and returns the resolved value (simulating an API response).",
          starter: "async function solve(value) {\n  \n}",
          tests: [
            {
              args: [
                "data"
              ],
              expected: "data"
            },
            {
              args: [
                42
              ],
              expected: 42
            }
          ]
        },
    {
          id: "async-filter",
          title: "Filter an array using async checks",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write an async function `solve(nums)` that returns only the even numbers from `nums`, checking each one with an async predicate (`await Promise.resolve(n % 2 === 0)`) and using `Promise.all` to gather the checks before filtering.",
          starter: "async function solve(nums) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3,
                  4,
                  5
                ]
              ],
              expected: [
                2,
                4
              ]
            },
            {
              args: [
                [
                  1,
                  3,
                  5
                ]
              ],
              expected: []
            }
          ]
        }
  ],
  "dom/selector-methods": [
    {
          id: "select-by-class-count",
          title: "Count elements by class",
          difficulty: "Easy",
          minutes: 2,
          kind: "domRead",
          setupHTML: "<p class=\"msg\">Hi</p><p class=\"msg\">Bye</p><p>Other</p>",
          prompt: "Write a function `solve(container)` that returns how many elements inside `container` have the class `msg`.",
          starter: "function solve(container) {\n  \n}",
          tests: [
            {
              expected: 2
            }
          ]
        },
    {
          id: "select-nested-text",
          title: "Select a nested element's text",
          difficulty: "Easy",
          minutes: 2,
          kind: "domRead",
          setupHTML: "<div id=\"outer\"><div id=\"inner\">Hello</div></div>",
          prompt: "Write a function `solve(container)` that returns the text content of the element with id `inner`.",
          starter: "function solve(container) {\n  \n}",
          tests: [
            {
              expected: "Hello"
            }
          ]
        },
    {
          id: "get-href-attribute",
          title: "Read a link's href attribute",
          difficulty: "Easy",
          minutes: 2,
          kind: "domRead",
          setupHTML: "<a href=\"https://example.com\">link</a>",
          prompt: "Write a function `solve(container)` that returns the `href` attribute of the `<a>` element inside `container`.",
          starter: "function solve(container) {\n  \n}",
          tests: [
            {
              expected: "https://example.com"
            }
          ]
        },
    {
          id: "select-by-data-attribute",
          title: "Select elements by a data attribute",
          difficulty: "Medium",
          minutes: 3,
          kind: "domRead",
          setupHTML: "<div data-role=\"admin\">Root</div><div data-role=\"user\">Guest</div>",
          prompt: "Write a function `solve(container)` that returns the text content of the element whose `data-role` attribute is `'admin'`, using the attribute selector `[data-role=\"admin\"]`.",
          starter: "function solve(container) {\n  \n}",
          tests: [
            {
              expected: "Root"
            }
          ]
        },
    {
          id: "count-direct-children",
          title: "Count an element's direct children",
          difficulty: "Medium",
          minutes: 3,
          kind: "domRead",
          setupHTML: "<ul><li>1</li><li>2</li><li>3</li><li>4</li></ul>",
          prompt: "Write a function `solve(container)` that returns how many direct child elements the `<ul>` inside `container` has, using `.children.length`.",
          starter: "function solve(container) {\n  \n}",
          tests: [
            {
              expected: 4
            }
          ]
        },
    {
          id: "read-input-value",
          title: "Read an input's value",
          difficulty: "Easy",
          minutes: 2,
          kind: "domRead",
          setupHTML: "<input id=\"name\" value=\"Ada\" />",
          prompt: "Write a function `solve(container)` that returns the `value` property of the `#name` input.",
          starter: "function solve(container) {\n  \n}",
          tests: [
            {
              expected: "Ada"
            }
          ]
        },
    {
          id: "select-last-child",
          title: "Select the last child element",
          difficulty: "Medium",
          minutes: 3,
          kind: "domRead",
          setupHTML: "<ul><li>A</li><li>B</li><li>C</li></ul>",
          prompt: "Write a function `solve(container)` that returns the text content of the LAST `<li>` inside `container`.",
          starter: "function solve(container) {\n  \n}",
          tests: [
            {
              expected: "C"
            }
          ]
        },
    {
          id: "get-all-text-array",
          title: "Collect text from every matching element",
          difficulty: "Hard",
          minutes: 5,
          kind: "domRead",
          setupHTML: "<span>a</span><span>b</span><span>c</span>",
          prompt: "Write a function `solve(container)` that returns an array of the text content of every `<span>` inside `container`, in order.",
          starter: "function solve(container) {\n  \n}",
          tests: [
            {
              expected: [
                "a",
                "b",
                "c"
              ]
            }
          ]
        },
    {
          id: "select-by-tag-name",
          title: "Select elements by tag name",
          difficulty: "Easy",
          minutes: 2,
          kind: "domRead",
          setupHTML: "<p>One</p><p>Two</p><span>Three</span>",
          prompt: "Write a function `solve(container)` that returns how many `<p>` elements are inside `container`, using `getElementsByTagName` or `querySelectorAll`.",
          starter: "function solve(container) {\n  \n}",
          tests: [
            {
              expected: 2
            }
          ]
        },
    {
          id: "select-checked-checkbox",
          title: "Find a checked checkbox",
          difficulty: "Medium",
          minutes: 3,
          kind: "domRead",
          setupHTML: "<input type=\"checkbox\" id=\"a\" /><input type=\"checkbox\" id=\"b\" checked />",
          prompt: "Write a function `solve(container)` that returns the `id` of the checkbox that is currently checked, using the `:checked` selector.",
          starter: "function solve(container) {\n  \n}",
          tests: [
            {
              expected: "b"
            }
          ]
        },
    {
          id: "select-nth-child",
          title: "Select the nth child element",
          difficulty: "Medium",
          minutes: 3,
          kind: "domRead",
          setupHTML: "<ul><li>First</li><li>Second</li><li>Third</li></ul>",
          prompt: "Write a function `solve(container)` that returns the text of the SECOND `<li>` using the `:nth-child(2)` CSS selector.",
          starter: "function solve(container) {\n  \n}",
          tests: [
            {
              expected: "Second"
            }
          ]
        },
    {
          id: "closest-ancestor",
          title: "Find the closest matching ancestor",
          difficulty: "Hard",
          minutes: 5,
          kind: "domRead",
          setupHTML: "<div class=\"card\"><div class=\"body\"><button id=\"btn\">Click</button></div></div>",
          prompt: "Write a function `solve(container)` that, starting from `#btn`, returns the `class` attribute of its closest ancestor with class `card`, using `.closest()`.",
          starter: "function solve(container) {\n  \n}",
          tests: [
            {
              expected: "card"
            }
          ]
        }
  ],
  "dom/events": [
    {
          id: "double-click-resets",
          title: "Reset a counter on double click",
          difficulty: "Medium",
          minutes: 4,
          kind: "domMutate",
          setupHTML: "<button id=\"btn\">+1</button><span id=\"count\">3</span>",
          prompt: "Add a `dblclick` listener to `#btn` that resets `#count`'s text to `'0'`.",
          starter: "const btn = container.querySelector('#btn');\nconst count = container.querySelector('#count');\n\n",
          tests: [
            {
              description: "double-clicking #btn resets #count to '0'",
              check: (container) => {
            const btn = container.querySelector("#btn");
            const count = container.querySelector("#count");
            btn.dispatchEvent(new container.ownerDocument.defaultView.MouseEvent("dblclick", { bubbles: true }));
            return count.textContent.trim() === "0";
          }
            }
          ]
        },
    {
          id: "input-updates-preview",
          title: "Live preview from an input",
          difficulty: "Medium",
          minutes: 4,
          kind: "domMutate",
          setupHTML: "<input id=\"name\" /><p id=\"preview\"></p>",
          prompt: "Add an `input` listener to `#name` that updates `#preview`'s text to match whatever is typed.",
          starter: "const nameInput = container.querySelector('#name');\nconst preview = container.querySelector('#preview');\n\n",
          tests: [
            {
              description: "typing into #name updates #preview to match",
              check: (container) => {
            const input = container.querySelector("#name");
            const preview = container.querySelector("#preview");
            input.value = "Ada";
            input.dispatchEvent(new container.ownerDocument.defaultView.Event("input", { bubbles: true }));
            return preview.textContent === "Ada";
          }
            }
          ]
        },
    {
          id: "checkbox-toggles-text",
          title: "Toggle text based on a checkbox",
          difficulty: "Medium",
          minutes: 4,
          kind: "domMutate",
          setupHTML: "<input type=\"checkbox\" id=\"toggle\" /><p id=\"status\">Off</p>",
          prompt: "Add a `change` listener to `#toggle` that sets `#status`'s text to `'On'` when checked, `'Off'` when unchecked.",
          starter: "const toggle = container.querySelector('#toggle');\nconst status = container.querySelector('#status');\n\n",
          tests: [
            {
              description: "checking #toggle sets #status to 'On'",
              check: (container) => {
            const toggle = container.querySelector("#toggle");
            const status = container.querySelector("#status");
            toggle.checked = true;
            toggle.dispatchEvent(new container.ownerDocument.defaultView.Event("change", { bubbles: true }));
            return status.textContent === "On";
          }
            }
          ]
        },
    {
          id: "keydown-detects-enter",
          title: "Detect the Enter key",
          difficulty: "Hard",
          minutes: 5,
          kind: "domMutate",
          setupHTML: "<input id=\"field\" /><p id=\"msg\"></p>",
          prompt: "Add a `keydown` listener to `#field` that sets `#msg`'s text to `'submitted'` when the Enter key (`event.key === 'Enter'`) is pressed.",
          starter: "const field = container.querySelector('#field');\nconst msg = container.querySelector('#msg');\n\n",
          tests: [
            {
              description: "pressing Enter in #field sets #msg to 'submitted'",
              check: (container) => {
            const field = container.querySelector("#field");
            const msg = container.querySelector("#msg");
            field.dispatchEvent(new container.ownerDocument.defaultView.KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
            return msg.textContent === "submitted";
          }
            }
          ]
        },
    {
          id: "focus-adds-highlight",
          title: "Highlight an input on focus",
          difficulty: "Medium",
          minutes: 4,
          kind: "domMutate",
          setupHTML: "<input id=\"field\" />",
          prompt: "Add a `focus` listener to `#field` that adds the class `highlighted` to it.",
          starter: "const field = container.querySelector('#field');\n\n",
          tests: [
            {
              description: "focusing #field adds the 'highlighted' class",
              check: (container) => {
            const field = container.querySelector("#field");
            field.dispatchEvent(new container.ownerDocument.defaultView.FocusEvent("focus", { bubbles: false }));
            return field.classList.contains("highlighted");
          }
            }
          ]
        },
    {
          id: "mouseover-shows-tooltip",
          title: "Show text on mouseover",
          difficulty: "Medium",
          minutes: 4,
          kind: "domMutate",
          setupHTML: "<div id=\"icon\">?</div><span id=\"tooltip\"></span>",
          prompt: "Add a `mouseover` listener to `#icon` that sets `#tooltip`'s text to `'Help info'`.",
          starter: "const icon = container.querySelector('#icon');\nconst tooltip = container.querySelector('#tooltip');\n\n",
          tests: [
            {
              description: "hovering #icon sets #tooltip's text to 'Help info'",
              check: (container) => {
            const icon = container.querySelector("#icon");
            const tooltip = container.querySelector("#tooltip");
            icon.dispatchEvent(new container.ownerDocument.defaultView.MouseEvent("mouseover", { bubbles: true }));
            return tooltip.textContent === "Help info";
          }
            }
          ]
        },
    {
          id: "prevent-default-link",
          title: "Prevent a link's default navigation",
          difficulty: "Hard",
          minutes: 5,
          kind: "domMutate",
          setupHTML: "<a id=\"link\" href=\"https://example.com\">Click</a><p id=\"log\"></p>",
          prompt: "Add a `click` listener to `#link` that calls `event.preventDefault()` and sets `#log`'s text to `'blocked'`.",
          starter: "const link = container.querySelector('#link');\nconst log = container.querySelector('#log');\n\n",
          tests: [
            {
              description: "clicking #link sets #log to 'blocked'",
              check: (container) => {
            const link = container.querySelector("#link");
            const log = container.querySelector("#log");
            link.dispatchEvent(new container.ownerDocument.defaultView.MouseEvent("click", { bubbles: true, cancelable: true }));
            return log.textContent === "blocked";
          }
            }
          ]
        },
    {
          id: "event-delegation-list",
          title: "Handle clicks on list items with event delegation",
          difficulty: "Hard",
          minutes: 6,
          kind: "domMutate",
          setupHTML: "<ul id=\"list\"><li data-id=\"1\">A</li><li data-id=\"2\">B</li></ul><p id=\"selected\"></p>",
          prompt: "Add a SINGLE `click` listener to `#list` (not to each `<li>` individually) that sets `#selected`'s text to the clicked item's `data-id`, using `event.target`.",
          starter: "const list = container.querySelector('#list');\nconst selected = container.querySelector('#selected');\n\n",
          tests: [
            {
              description: "clicking the second <li> sets #selected to '2'",
              check: (container) => {
            const items = container.querySelectorAll("#list li");
            const selected = container.querySelector("#selected");
            items[1].dispatchEvent(new container.ownerDocument.defaultView.MouseEvent("click", { bubbles: true }));
            return selected.textContent === "2";
          }
            }
          ]
        }
  ],
  "dom/manipulation": [
    {
          id: "remove-element",
          title: "Remove an element",
          difficulty: "Easy",
          minutes: 2,
          kind: "domMutate",
          setupHTML: "<p id=\"doomed\">Remove me</p><p id=\"stays\">Keep me</p>",
          prompt: "Remove the element with id `doomed` from `container` entirely.",
          starter: "const doomed = container.querySelector('#doomed');\n\n",
          tests: [
            {
              description: "#doomed no longer exists in the container",
              check: (container) => container.querySelector("#doomed") === null
            }
          ]
        },
    {
          id: "change-text-content",
          title: "Change an element's text",
          difficulty: "Easy",
          minutes: 2,
          kind: "domMutate",
          setupHTML: "<h1 id=\"title\">Old Title</h1>",
          prompt: "Change the text content of `#title` to `'New Title'`.",
          starter: "const title = container.querySelector('#title');\n\n",
          tests: [
            {
              description: "#title now reads 'New Title'",
              check: (container) => container.querySelector("#title").textContent === "New Title"
            }
          ]
        },
    {
          id: "wrap-in-new-parent",
          title: "Insert a new element before another",
          difficulty: "Medium",
          minutes: 4,
          kind: "domMutate",
          setupHTML: "<div id=\"target\">Target</div>",
          prompt: "Create a new `<p>` with the text `'Label'` and insert it directly BEFORE `#target` inside `container`, using `.before()` or `insertBefore()`.",
          starter: "const target = container.querySelector('#target');\n\n",
          tests: [
            {
              description: "container's first child is a <p> with text 'Label'",
              check: (container) => container.firstElementChild.tagName === "P" && container.firstElementChild.textContent === "Label"
            }
          ]
        },
    {
          id: "toggle-visibility-style",
          title: "Hide an element with inline style",
          difficulty: "Medium",
          minutes: 3,
          kind: "domMutate",
          setupHTML: "<div id=\"panel\">Panel content</div>",
          prompt: "Set the inline style of `#panel` so it is hidden (`display: none`).",
          starter: "const panel = container.querySelector('#panel');\n\n",
          tests: [
            {
              description: "#panel has display: none",
              check: (container) => container.querySelector("#panel").style.display === "none"
            }
          ]
        },
    {
          id: "remove-class",
          title: "Remove a CSS class",
          difficulty: "Easy",
          minutes: 2,
          kind: "domMutate",
          setupHTML: "<div id=\"box\" class=\"active highlighted\">Box</div>",
          prompt: "Remove the class `active` from `#box`, while leaving any other classes untouched.",
          starter: "const box = container.querySelector('#box');\n\n",
          tests: [
            {
              description: "#box no longer has the 'active' class, but keeps 'highlighted'",
              check: (container) => {
            const box = container.querySelector("#box");
            return !box.classList.contains("active") && box.classList.contains("highlighted");
          }
            }
          ]
        },
    {
          id: "add-multiple-classes",
          title: "Add multiple classes at once",
          difficulty: "Easy",
          minutes: 2,
          kind: "domMutate",
          setupHTML: "<div id=\"card\">Card</div>",
          prompt: "Add both the classes `rounded` and `shadow` to `#card` in a single `classList.add()` call.",
          starter: "const card = container.querySelector('#card');\n\n",
          tests: [
            {
              description: "#card has both 'rounded' and 'shadow' classes",
              check: (container) => {
            const card = container.querySelector("#card");
            return card.classList.contains("rounded") && card.classList.contains("shadow");
          }
            }
          ]
        },
    {
          id: "clone-an-element",
          title: "Clone an element",
          difficulty: "Hard",
          minutes: 5,
          kind: "domMutate",
          setupHTML: "<ul id=\"list\"><li id=\"template\">Item</li></ul>",
          prompt: "Clone the `#template` list item with `.cloneNode(true)`, and append the clone to `#list` (so there are 2 items total).",
          starter: "const template = container.querySelector('#template');\nconst list = container.querySelector('#list');\n\n",
          tests: [
            {
              description: "#list now has 2 <li> items",
              check: (container) => container.querySelectorAll("#list li").length === 2
            }
          ]
        },
    {
          id: "insert-adjacent-html",
          title: "Insert HTML with insertAdjacentHTML",
          difficulty: "Medium",
          minutes: 4,
          kind: "domMutate",
          setupHTML: "<div id=\"box\">Existing</div>",
          prompt: "Use `.insertAdjacentHTML('beforeend', ...)` to append the HTML `<span id=\"tag\">New</span>` inside `#box`.",
          starter: "const box = container.querySelector('#box');\n\n",
          tests: [
            {
              description: "#box now contains a #tag span reading 'New'",
              check: (container) => {
            const tag = container.querySelector("#tag");
            return tag !== null && tag.textContent === "New";
          }
            }
          ]
        },
    {
          id: "set-text-vs-html",
          title: "Safely set text (not HTML)",
          difficulty: "Medium",
          minutes: 3,
          kind: "domMutate",
          setupHTML: "<div id=\"output\"></div>",
          prompt: "Set `#output`'s content to the literal text `<b>bold</b>` using `.textContent` (NOT `.innerHTML`), so it displays as plain text rather than being parsed as HTML.",
          starter: "const output = container.querySelector('#output');\n\n",
          tests: [
            {
              description: "#output has no element children (the <b> was not parsed as HTML)",
              check: (container) => container.querySelector("#output").children.length === 0 && container.querySelector("#output").textContent === "<b>bold</b>"
            }
          ]
        }
  ],
  "dom/dom-fundamentals": [
    {
          id: "build-list-from-scratch",
          title: "Build a list from an empty container",
          difficulty: "Hard",
          minutes: 6,
          kind: "domMutate",
          setupHTML: "<ul id=\"list\"></ul>",
          prompt: "Create three `<li>` elements with the text `'One'`, `'Two'`, and `'Three'`, and append all of them to `#list`, in order.",
          starter: "const list = container.querySelector('#list');\n\n",
          tests: [
            {
              description: "#list has 3 items reading 'One', 'Two', 'Three'",
              check: (container) => {
            const items = Array.from(container.querySelectorAll("#list li")).map((li) => li.textContent);
            return items.length === 3 && items[0] === "One" && items[1] === "Two" && items[2] === "Three";
          }
            }
          ]
        },
    {
          id: "set-multiple-attributes",
          title: "Set multiple attributes at once",
          difficulty: "Medium",
          minutes: 3,
          kind: "domMutate",
          setupHTML: "<img id=\"photo\" />",
          prompt: "Set the `src` attribute of `#photo` to `'cat.jpg'` and the `alt` attribute to `'A cat'`.",
          starter: "const photo = container.querySelector('#photo');\n\n",
          tests: [
            {
              description: "#photo has src='cat.jpg' and alt='A cat'",
              check: (container) => {
            const photo = container.querySelector("#photo");
            return photo.getAttribute("src") === "cat.jpg" && photo.getAttribute("alt") === "A cat";
          }
            }
          ]
        },
    {
          id: "replace-element",
          title: "Replace one element with another",
          difficulty: "Hard",
          minutes: 5,
          kind: "domMutate",
          setupHTML: "<div id=\"old\">Old content</div>",
          prompt: "Create a new `<p>` with the text `'New content'` and use `.replaceWith()` to swap it in for `#old`.",
          starter: "const old = container.querySelector('#old');\n\n",
          tests: [
            {
              description: "container's first child is now a <p> reading 'New content', and #old is gone",
              check: (container) =>
            container.querySelector("#old") === null &&
            container.firstElementChild.tagName === "P" &&
            container.firstElementChild.textContent === "New content"
            }
          ]
        },
    {
          id: "empty-a-container",
          title: "Remove all children from a container",
          difficulty: "Medium",
          minutes: 3,
          kind: "domMutate",
          setupHTML: "<div id=\"box\"><p>A</p><p>B</p><p>C</p></div>",
          prompt: "Remove every child element from `#box`, leaving it empty.",
          starter: "const box = container.querySelector('#box');\n\n",
          tests: [
            {
              description: "#box has no children left",
              check: (container) => container.querySelector("#box").children.length === 0
            }
          ]
        },
    {
          id: "add-and-remove-class-combo",
          title: "Swap one class for another",
          difficulty: "Medium",
          minutes: 3,
          kind: "domMutate",
          setupHTML: "<div id=\"status\" class=\"pending\">Loading...</div>",
          prompt: "Remove the class `pending` from `#status` and add the class `done` instead.",
          starter: "const status = container.querySelector('#status');\n\n",
          tests: [
            {
              description: "#status has 'done' but not 'pending'",
              check: (container) => {
            const status = container.querySelector("#status");
            return status.classList.contains("done") && !status.classList.contains("pending");
          }
            }
          ]
        },
    {
          id: "read-data-attribute-value",
          title: "Read a data attribute's value",
          difficulty: "Easy",
          minutes: 2,
          kind: "domRead",
          setupHTML: "<div id=\"item\" data-price=\"42\">Widget</div>",
          prompt: "Write a function `solve(container)` that returns the `data-price` attribute of `#item` as a NUMBER, using `.dataset` and `Number()`.",
          starter: "function solve(container) {\n  \n}",
          tests: [
            {
              expected: 42
            }
          ]
        },
    {
          id: "disable-a-button",
          title: "Disable a button",
          difficulty: "Easy",
          minutes: 2,
          kind: "domMutate",
          setupHTML: "<button id=\"submit\">Submit</button>",
          prompt: "Set the `disabled` property of `#submit` to `true`.",
          starter: "const submit = container.querySelector('#submit');\n\n",
          tests: [
            {
              description: "#submit is disabled",
              check: (container) => container.querySelector("#submit").disabled === true
            }
          ]
        }
  ],
  "dom/dom-recursive": [
    {
          id: "sum-numeric-text-nodes",
          title: "Sum numeric text across nested elements",
          difficulty: "Hard",
          minutes: 6,
          kind: "domRead",
          setupHTML: "<div><span>1</span><div><span>2</span><span>3</span></div></div>",
          prompt: "Write a function `solve(container)` that recursively walks every element inside `container` and sums up the numeric value of any element's DIRECT text (elements with only text and no element children), returning the total.",
          starter: "function solve(container) {\n  \n}",
          tests: [
            {
              expected: 6
            }
          ]
        },
    {
          id: "find-deepest-text",
          title: "Find the text of the most deeply nested element",
          difficulty: "Hard",
          minutes: 6,
          kind: "domRead",
          setupHTML: "<div><p>Shallow</p><div><span><b>Deepest</b></span></div></div>",
          prompt: "Write a function `solve(container)` that recursively finds the most deeply nested element inside `container` and returns its text content.",
          starter: "function solve(container) {\n  \n}",
          tests: [
            {
              expected: "Deepest"
            }
          ]
        },
    {
          id: "collect-all-tag-names",
          title: "Recursively collect every tag name",
          difficulty: "Hard",
          minutes: 6,
          kind: "domRead",
          setupHTML: "<div><p>A</p><span><b>B</b></span></div>",
          prompt: "Write a function `solve(container)` that recursively collects the tag name (uppercase, e.g. `'P'`) of every element nested inside `container`, returning them as an array in document order.",
          starter: "function solve(container) {\n  \n}",
          tests: [
            {
              expected: [
                "DIV",
                "P",
                "SPAN",
                "B"
              ]
            }
          ]
        },
    {
          id: "recursive-total-text-length",
          title: "Sum the text length of every nested element",
          difficulty: "Hard",
          minutes: 6,
          kind: "domRead",
          setupHTML: "<div><p>Hi</p><div><span>Yo</span><span>Ok</span></div></div>",
          prompt: "Write a function `solve(container)` that recursively sums the `.textContent.length` of every LEAF element (an element with no element children) inside `container`.",
          starter: "function solve(container) {\n  \n}",
          tests: [
            {
              expected: 6
            }
          ]
        }
  ],
  "practice/fundamentals": [
    {
          id: "two-sum",
          title: "Two Sum",
          difficulty: "Hard",
          minutes: 8,
          kind: "fn",
          prompt: "Write a function `solve(nums, target)` that returns the indices `[i, j]` of the two numbers in `nums` that add up to `target` (assume exactly one solution exists, and you can't use the same element twice).",
          starter: "function solve(nums, target) {\n  \n}",
          tests: [
            {
              args: [
                [
                  2,
                  7,
                  11,
                  15
                ],
                9
              ],
              expected: [
                0,
                1
              ]
            },
            {
              args: [
                [
                  3,
                  2,
                  4
                ],
                6
              ],
              expected: [
                1,
                2
              ]
            }
          ]
        },
    {
          id: "is-anagram",
          title: "Check if two strings are anagrams",
          difficulty: "Medium",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns `true` if `a` and `b` are anagrams of each other (same letters, same counts, order doesn't matter). Ignore case.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                "listen",
                "silent"
              ],
              expected: true
            },
            {
              args: [
                "hello",
                "world"
              ],
              expected: false
            },
            {
              args: [
                "Dormitory",
                "dirtyroom"
              ],
              expected: true
            }
          ]
        },
    {
          id: "valid-parentheses",
          title: "Check for balanced parentheses",
          difficulty: "Hard",
          minutes: 7,
          kind: "fn",
          prompt: "Write a function `solve(str)` that returns `true` if every `(`, `[`, and `{` in `str` has a correctly matching, correctly ordered closing bracket.",
          starter: "function solve(str) {\n  \n}",
          tests: [
            {
              args: [
                "()[]{}"
              ],
              expected: true
            },
            {
              args: [
                "(]"
              ],
              expected: false
            },
            {
              args: [
                "{[()]}"
              ],
              expected: true
            },
            {
              args: [
                "(("
              ],
              expected: false
            }
          ]
        },
    {
          id: "fizzbuzz-array",
          title: "FizzBuzz as an array",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(n)` that returns an array of the FizzBuzz sequence from 1 to `n`: multiples of 3 → 'Fizz', of 5 → 'Buzz', of both → 'FizzBuzz', otherwise the number.",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                15
              ],
              expected: [
                1,
                2,
                "Fizz",
                4,
                "Buzz",
                "Fizz",
                7,
                8,
                "Fizz",
                "Buzz",
                11,
                "Fizz",
                13,
                14,
                "FizzBuzz"
              ]
            },
            {
              args: [
                5
              ],
              expected: [
                1,
                2,
                "Fizz",
                4,
                "Buzz"
              ]
            }
          ]
        },
    {
          id: "gcd-two-numbers",
          title: "Greatest common divisor",
          difficulty: "Medium",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns the greatest common divisor of `a` and `b`, using the Euclidean algorithm.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                48,
                18
              ],
              expected: 6
            },
            {
              args: [
                17,
                5
              ],
              expected: 1
            },
            {
              args: [
                100,
                75
              ],
              expected: 25
            }
          ]
        },
    {
          id: "lcm-two-numbers",
          title: "Least common multiple",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns the least common multiple of `a` and `b`.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                4,
                6
              ],
              expected: 12
            },
            {
              args: [
                3,
                5
              ],
              expected: 15
            }
          ]
        },
    {
          id: "binary-search",
          title: "Binary search a sorted array",
          difficulty: "Hard",
          minutes: 8,
          kind: "fn",
          prompt: "Write a function `solve(arr, target)` that returns the index of `target` in the SORTED array `arr` using binary search (not a linear scan), or `-1` if not found.",
          starter: "function solve(arr, target) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  3,
                  5,
                  7,
                  9,
                  11
                ],
                7
              ],
              expected: 3
            },
            {
              args: [
                [
                  1,
                  2,
                  3
                ],
                5
              ],
              expected: -1
            }
          ]
        },
    {
          id: "bubble-sort",
          title: "Implement bubble sort",
          difficulty: "Hard",
          minutes: 8,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that sorts `arr` ascending using bubble sort (repeatedly swap adjacent out-of-order elements) and returns the sorted array. Don't just call `.sort()`.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  5,
                  2,
                  9,
                  1,
                  5
                ]
              ],
              expected: [
                1,
                2,
                5,
                5,
                9
              ]
            },
            {
              args: [
                [
                  3,
                  1,
                  2
                ]
              ],
              expected: [
                1,
                2,
                3
              ]
            }
          ]
        },
    {
          id: "string-compression",
          title: "Compress a string with run-length encoding",
          difficulty: "Hard",
          minutes: 7,
          kind: "fn",
          prompt: "Write a function `solve(str)` that compresses runs of repeated characters as `char+count`, e.g. `'aaabbc'` → `'a3b2c1'`.",
          starter: "function solve(str) {\n  \n}",
          tests: [
            {
              args: [
                "aaabbc"
              ],
              expected: "a3b2c1"
            },
            {
              args: [
                "abcd"
              ],
              expected: "a1b1c1d1"
            },
            {
              args: [
                "zzzz"
              ],
              expected: "z4"
            }
          ]
        },
    {
          id: "max-subarray-sum",
          title: "Maximum subarray sum (Kadane's algorithm)",
          difficulty: "Hard",
          minutes: 8,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns the largest possible sum of a CONTIGUOUS subarray of `arr`.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  -2,
                  1,
                  -3,
                  4,
                  -1,
                  2,
                  1,
                  -5,
                  4
                ]
              ],
              expected: 6
            },
            {
              args: [
                [
                  1,
                  2,
                  3,
                  -2
                ]
              ],
              expected: 6
            }
          ]
        },
    {
          id: "fibonacci-iterative",
          title: "Nth Fibonacci number, iteratively",
          difficulty: "Medium",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(n)` that returns the nth Fibonacci number using a LOOP (not recursion) — important for performance on larger `n`.",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                0
              ],
              expected: 0
            },
            {
              args: [
                1
              ],
              expected: 1
            },
            {
              args: [
                10
              ],
              expected: 55
            },
            {
              args: [
                20
              ],
              expected: 6765
            }
          ]
        },
    {
          id: "reverse-integer",
          title: "Reverse the digits of an integer",
          difficulty: "Medium",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(n)` that reverses the digits of `n`, preserving the sign (e.g. `-123` → `-321`).",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                123
              ],
              expected: 321
            },
            {
              args: [
                -456
              ],
              expected: -654
            },
            {
              args: [
                100
              ],
              expected: 1
            }
          ]
        },
    {
          id: "selection-sort",
          title: "Implement selection sort",
          difficulty: "Hard",
          minutes: 8,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that sorts `arr` ascending using selection sort (repeatedly find the minimum of the unsorted portion and swap it into place). Don't use `.sort()`.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  5,
                  2,
                  9,
                  1
                ]
              ],
              expected: [
                1,
                2,
                5,
                9
              ]
            },
            {
              args: [
                [
                  3,
                  1,
                  2
                ]
              ],
              expected: [
                1,
                2,
                3
              ]
            }
          ]
        },
    {
          id: "linear-search",
          title: "Implement linear search",
          difficulty: "Easy",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(arr, target)` that returns the index of `target` in `arr` by checking each element in order, or `-1` if not found.",
          starter: "function solve(arr, target) {\n  \n}",
          tests: [
            {
              args: [
                [
                  4,
                  2,
                  7,
                  1
                ],
                7
              ],
              expected: 2
            },
            {
              args: [
                [
                  1,
                  2,
                  3
                ],
                9
              ],
              expected: -1
            }
          ]
        },
    {
          id: "first-non-repeating-char",
          title: "Find the first non-repeating character",
          difficulty: "Hard",
          minutes: 7,
          kind: "fn",
          prompt: "Write a function `solve(str)` that returns the first character in `str` that doesn't repeat anywhere else in the string, or `null` if every character repeats.",
          starter: "function solve(str) {\n  \n}",
          tests: [
            {
              args: [
                "swiss"
              ],
              expected: "w"
            },
            {
              args: [
                "aabbcc"
              ],
              expected: null
            },
            {
              args: [
                "hello"
              ],
              expected: "h"
            }
          ]
        },
    {
          id: "power-of-two-check",
          title: "Check if a number is a power of two",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write a function `solve(n)` that returns `true` if `n` is a power of 2 (1, 2, 4, 8, 16...).",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                16
              ],
              expected: true
            },
            {
              args: [
                18
              ],
              expected: false
            },
            {
              args: [
                1
              ],
              expected: true
            },
            {
              args: [
                0
              ],
              expected: false
            }
          ]
        },
    {
          id: "digit-sum",
          title: "Sum the digits of a number",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(n)` that returns the sum of the digits of the non-negative integer `n`.",
          starter: "function solve(n) {\n  \n}",
          tests: [
            {
              args: [
                12345
              ],
              expected: 15
            },
            {
              args: [
                0
              ],
              expected: 0
            },
            {
              args: [
                999
              ],
              expected: 27
            }
          ]
        },
    {
          id: "caesar-cipher",
          title: "Caesar cipher encoder",
          difficulty: "Hard",
          minutes: 8,
          kind: "fn",
          prompt: "Write a function `solve(str, shift)` that shifts every lowercase letter in `str` forward by `shift` positions in the alphabet (wrapping z → a), leaving non-letters unchanged.",
          starter: "function solve(str, shift) {\n  \n}",
          tests: [
            {
              args: [
                "abc",
                1
              ],
              expected: "bcd"
            },
            {
              args: [
                "xyz",
                3
              ],
              expected: "abc"
            },
            {
              args: [
                "hello world",
                5
              ],
              expected: "mjqqt btwqi"
            }
          ]
        },
    {
          id: "merge-intervals",
          title: "Merge overlapping intervals",
          difficulty: "Hard",
          minutes: 8,
          kind: "fn",
          prompt: "Write a function `solve(intervals)` that merges all overlapping `[start, end]` intervals and returns the merged list, sorted by start.",
          starter: "function solve(intervals) {\n  \n}",
          tests: [
            {
              args: [
                [
                  [
                    1,
                    3
                  ],
                  [
                    2,
                    6
                  ],
                  [
                    8,
                    10
                  ],
                  [
                    15,
                    18
                  ]
                ]
              ],
              expected: [
                [
                  1,
                  6
                ],
                [
                  8,
                  10
                ],
                [
                  15,
                  18
                ]
              ]
            },
            {
              args: [
                [
                  [
                    1,
                    4
                  ],
                  [
                    4,
                    5
                  ]
                ]
              ],
              expected: [
                [
                  1,
                  5
                ]
              ]
            }
          ]
        },
    {
          id: "roman-to-integer",
          title: "Convert Roman numerals to an integer",
          difficulty: "Hard",
          minutes: 8,
          kind: "fn",
          prompt: "Write a function `solve(roman)` that converts a Roman numeral string (using I, V, X, L, C, D, M) to its integer value.",
          starter: "function solve(roman) {\n  \n}",
          tests: [
            {
              args: [
                "III"
              ],
              expected: 3
            },
            {
              args: [
                "IV"
              ],
              expected: 4
            },
            {
              args: [
                "IX"
              ],
              expected: 9
            },
            {
              args: [
                "LVIII"
              ],
              expected: 58
            },
            {
              args: [
                "MCMXCIV"
              ],
              expected: 1994
            }
          ]
        }
  ],
  "practice/practice-arrays": [
    {
          id: "rotate-array",
          title: "Rotate an array to the right",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write a function `solve(arr, k)` that rotates `arr` to the right by `k` positions and returns the new array.",
          starter: "function solve(arr, k) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3,
                  4,
                  5
                ],
                2
              ],
              expected: [
                4,
                5,
                1,
                2,
                3
              ]
            },
            {
              args: [
                [
                  1,
                  2,
                  3
                ],
                1
              ],
              expected: [
                3,
                1,
                2
              ]
            }
          ]
        },
    {
          id: "find-missing-number",
          title: "Find the missing number",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write a function `solve(nums)` that, given an array containing `n` distinct numbers from `0` to `n` with exactly one missing, returns the missing number.",
          starter: "function solve(nums) {\n  \n}",
          tests: [
            {
              args: [
                [
                  3,
                  0,
                  1
                ]
              ],
              expected: 2
            },
            {
              args: [
                [
                  0,
                  1
                ]
              ],
              expected: 2
            },
            {
              args: [
                [
                  9,
                  6,
                  4,
                  2,
                  3,
                  5,
                  7,
                  0,
                  1
                ]
              ],
              expected: 8
            }
          ]
        },
    {
          id: "move-zeroes",
          title: "Move all zeroes to the end",
          difficulty: "Medium",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that moves all `0`s in `arr` to the end while keeping the relative order of the other elements, returning the new array.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  0,
                  1,
                  0,
                  3,
                  12
                ]
              ],
              expected: [
                1,
                3,
                12,
                0,
                0
              ]
            },
            {
              args: [
                [
                  1,
                  2,
                  3
                ]
              ],
              expected: [
                1,
                2,
                3
              ]
            }
          ]
        },
    {
          id: "array-intersection-count",
          title: "Count common elements between arrays",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns how many elements appear in BOTH `a` and `b` (counting duplicates up to the minimum count in each).",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  2,
                  1
                ],
                [
                  2,
                  2
                ]
              ],
              expected: 2
            },
            {
              args: [
                [
                  4,
                  9,
                  5
                ],
                [
                  9,
                  4,
                  9,
                  8,
                  4
                ]
              ],
              expected: 2
            }
          ]
        },
    {
          id: "second-largest",
          title: "Find the second largest number",
          difficulty: "Medium",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns the second largest DISTINCT number in `arr`.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  5,
                  2,
                  9,
                  9,
                  3
                ]
              ],
              expected: 5
            },
            {
              args: [
                [
                  1,
                  1,
                  2
                ]
              ],
              expected: 1
            }
          ]
        },
    {
          id: "array-to-frequency-map",
          title: "Build a frequency map from an array",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns an object mapping each unique value in `arr` to how many times it appears.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  "a",
                  "b",
                  "a",
                  "c",
                  "b",
                  "a"
                ]
              ],
              expected: {
                a: 3,
                b: 2,
                c: 1
              }
            },
            {
              args: [
                [
                  1,
                  1,
                  2
                ]
              ],
              expected: {
                "1": 2,
                "2": 1
              }
            }
          ]
        },
    {
          id: "is-sorted-check",
          title: "Check if an array is sorted",
          difficulty: "Easy",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns `true` if `arr` is sorted in non-decreasing order.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3
                ]
              ],
              expected: true
            },
            {
              args: [
                [
                  3,
                  1,
                  2
                ]
              ],
              expected: false
            },
            {
              args: [
                []
              ],
              expected: true
            }
          ]
        },
    {
          id: "array-intersection-unique",
          title: "Transpose a matrix",
          difficulty: "Hard",
          minutes: 7,
          kind: "fn",
          prompt: "Write a function `solve(matrix)` that returns the transpose of a 2D array (rows become columns).",
          starter: "function solve(matrix) {\n  \n}",
          tests: [
            {
              args: [
                [
                  [
                    1,
                    2,
                    3
                  ],
                  [
                    4,
                    5,
                    6
                  ]
                ]
              ],
              expected: [
                [
                  1,
                  4
                ],
                [
                  2,
                  5
                ],
                [
                  3,
                  6
                ]
              ]
            },
            {
              args: [
                [
                  [
                    1,
                    2
                  ],
                  [
                    3,
                    4
                  ]
                ]
              ],
              expected: [
                [
                  1,
                  3
                ],
                [
                  2,
                  4
                ]
              ]
            }
          ]
        },
    {
          id: "array-shuffle-check-length",
          title: "Merge two sorted arrays",
          difficulty: "Hard",
          minutes: 7,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that merges two already-sorted arrays `a` and `b` into a single sorted array, without using `.sort()`.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  3,
                  5
                ],
                [
                  2,
                  4,
                  6
                ]
              ],
              expected: [
                1,
                2,
                3,
                4,
                5,
                6
              ]
            },
            {
              args: [
                [
                  1,
                  2
                ],
                [
                  3,
                  4
                ]
              ],
              expected: [
                1,
                2,
                3,
                4
              ]
            }
          ]
        },
    {
          id: "count-occurrences-in-array",
          title: "Count occurrences of a value",
          difficulty: "Easy",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(arr, value)` that returns how many times `value` appears in `arr`.",
          starter: "function solve(arr, value) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  2,
                  3,
                  2
                ],
                2
              ],
              expected: 3
            },
            {
              args: [
                [
                  "a",
                  "b"
                ],
                "z"
              ],
              expected: 0
            }
          ]
        },
    {
          id: "array-first-repeated-element",
          title: "Find the first repeated element",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns the first element that appears more than once (scanning left to right), or `null` if there are no repeats.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  2,
                  5,
                  1,
                  2,
                  5
                ]
              ],
              expected: 2
            },
            {
              args: [
                [
                  1,
                  2,
                  3
                ]
              ],
              expected: null
            }
          ]
        },
    {
          id: "kth-largest-element",
          title: "Find the kth largest element",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write a function `solve(arr, k)` that returns the kth largest element in `arr` (k=1 means the largest).",
          starter: "function solve(arr, k) {\n  \n}",
          tests: [
            {
              args: [
                [
                  3,
                  2,
                  1,
                  5,
                  6,
                  4
                ],
                2
              ],
              expected: 5
            },
            {
              args: [
                [
                  3,
                  2,
                  3,
                  1,
                  2,
                  4,
                  5,
                  5,
                  6
                ],
                4
              ],
              expected: 4
            }
          ]
        }
  ],
  "practice/practice-objects": [
    {
          id: "count-property-types",
          title: "Count objects by a shared property value",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(items, key)` that returns an object counting how many items share each value of `key`.",
          starter: "function solve(items, key) {\n  \n}",
          tests: [
            {
              args: [
                [
                  {
                    type: "a"
                  },
                  {
                    type: "b"
                  },
                  {
                    type: "a"
                  }
                ],
                "type"
              ],
              expected: {
                a: 2,
                b: 1
              }
            }
          ]
        },
    {
          id: "object-array-sum-by-key",
          title: "Sum a numeric field across an array of objects",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(items, key)` that returns the sum of `item[key]` for every item in `items`.",
          starter: "function solve(items, key) {\n  \n}",
          tests: [
            {
              args: [
                [
                  {
                    price: 10
                  },
                  {
                    price: 20
                  },
                  {
                    price: 5
                  }
                ],
                "price"
              ],
              expected: 35
            }
          ]
        },
    {
          id: "pick-keys",
          title: "Pick a subset of keys",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(obj, keys)` that returns a new object with only the given `keys` from `obj` (ignore keys that don't exist).",
          starter: "function solve(obj, keys) {\n  \n}",
          tests: [
            {
              args: [
                {
                  a: 1,
                  b: 2,
                  c: 3
                },
                [
                  "a",
                  "c"
                ]
              ],
              expected: {
                a: 1,
                c: 3
              }
            }
          ]
        },
    {
          id: "omit-keys",
          title: "Omit a subset of keys",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(obj, keys)` that returns a new object with all of `obj`'s properties EXCEPT the given `keys`.",
          starter: "function solve(obj, keys) {\n  \n}",
          tests: [
            {
              args: [
                {
                  a: 1,
                  b: 2,
                  c: 3
                },
                [
                  "b"
                ]
              ],
              expected: {
                a: 1,
                c: 3
              }
            }
          ]
        },
    {
          id: "flatten-object-keys",
          title: "Flatten a nested object's keys",
          difficulty: "Hard",
          minutes: 7,
          kind: "fn",
          prompt: "Write a function `solve(obj)` that flattens a nested object into a single-level object with dot-separated keys, e.g. `{ a: { b: 1 } }` → `{ 'a.b': 1 }`.",
          starter: "function solve(obj) {\n  \n}",
          tests: [
            {
              args: [
                {
                  a: {
                    b: 1,
                    c: 2
                  },
                  d: 3
                }
              ],
              expected: {
                "a.b": 1,
                "a.c": 2,
                d: 3
              }
            }
          ]
        },
    {
          id: "object-array-max-by-key",
          title: "Find the object with the max value for a key",
          difficulty: "Medium",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(items, key)` that returns the whole object from `items` with the largest `item[key]` value.",
          starter: "function solve(items, key) {\n  \n}",
          tests: [
            {
              args: [
                [
                  {
                    name: "a",
                    score: 3
                  },
                  {
                    name: "b",
                    score: 9
                  },
                  {
                    name: "c",
                    score: 5
                  }
                ],
                "score"
              ],
              expected: {
                name: "b",
                score: 9
              }
            }
          ]
        },
    {
          id: "objects-equal-shallow",
          title: "Shallow-compare two objects",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns `true` if `a` and `b` have exactly the same keys and the same top-level values (shallow comparison, not deep).",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                {
                  a: 1,
                  b: 2
                },
                {
                  a: 1,
                  b: 2
                }
              ],
              expected: true
            },
            {
              args: [
                {
                  a: 1
                },
                {
                  a: 2
                }
              ],
              expected: false
            }
          ]
        },
    {
          id: "count-nested-object-keys",
          title: "Count all keys, including nested ones",
          difficulty: "Hard",
          minutes: 6,
          kind: "fn",
          prompt: "Write a function `solve(obj)` that recursively counts every key in `obj`, including keys inside nested objects (but not inside arrays).",
          starter: "function solve(obj) {\n  \n}",
          tests: [
            {
              args: [
                {
                  a: 1,
                  b: {
                    c: 2,
                    d: 3
                  }
                }
              ],
              expected: 4
            },
            {
              args: [
                {
                  x: {
                    y: {
                      z: 1
                    }
                  }
                }
              ],
              expected: 3
            }
          ]
        }
  ],
  "practice/dates": [
    {
          id: "get-month-name",
          title: "Get the month name from a date",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(isoString)` that returns the full month name (e.g. `'June'`) for a date string like `'2024-06-15'`.",
          starter: "function solve(isoString) {\n  \n}",
          tests: [
            {
              args: [
                "2024-06-15"
              ],
              expected: "June"
            },
            {
              args: [
                "1999-01-01"
              ],
              expected: "January"
            },
            {
              args: [
                "2020-12-25"
              ],
              expected: "December"
            }
          ]
        },
    {
          id: "day-of-week",
          title: "Get the day of the week",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(isoString)` that returns the day of the week (0 = Sunday ... 6 = Saturday) for the given date string.",
          starter: "function solve(isoString) {\n  \n}",
          tests: [
            {
              args: [
                "2024-06-15"
              ],
              expected: 6
            },
            {
              args: [
                "2024-01-01"
              ],
              expected: 1
            }
          ]
        },
    {
          id: "is-weekend",
          title: "Check if a date falls on a weekend",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(isoString)` that returns `true` if the date falls on a Saturday or Sunday.",
          starter: "function solve(isoString) {\n  \n}",
          tests: [
            {
              args: [
                "2024-06-15"
              ],
              expected: true
            },
            {
              args: [
                "2024-06-17"
              ],
              expected: false
            }
          ]
        },
    {
          id: "add-days-to-date",
          title: "Add days to a date",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(isoString, days)` that returns a new date string (`YYYY-MM-DD`) that is `days` days after `isoString`.",
          starter: "function solve(isoString, days) {\n  \n}",
          tests: [
            {
              args: [
                "2024-01-01",
                10
              ],
              expected: "2024-01-11"
            },
            {
              args: [
                "2024-01-30",
                5
              ],
              expected: "2024-02-04"
            }
          ]
        },
    {
          id: "format-date-readable",
          title: "Format a date in a readable way",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(isoString)` that returns a date string formatted as `'June 15, 2024'` for input `'2024-06-15'`.",
          starter: "function solve(isoString) {\n  \n}",
          tests: [
            {
              args: [
                "2024-06-15"
              ],
              expected: "June 15, 2024"
            },
            {
              args: [
                "1999-01-05"
              ],
              expected: "January 5, 1999"
            }
          ]
        },
    {
          id: "age-from-birthdate",
          title: "Calculate age from a birth year",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(birthYear, currentYear)` that returns how many years old someone born in `birthYear` would be in `currentYear`.",
          starter: "function solve(birthYear, currentYear) {\n  \n}",
          tests: [
            {
              args: [
                1995,
                2024
              ],
              expected: 29
            },
            {
              args: [
                2000,
                2024
              ],
              expected: 24
            }
          ]
        },
    {
          id: "days-in-month",
          title: "Get the number of days in a month",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(year, month)` (month is 1-12) that returns how many days are in that month of that year, accounting for leap years.",
          starter: "function solve(year, month) {\n  \n}",
          tests: [
            {
              args: [
                2024,
                2
              ],
              expected: 29
            },
            {
              args: [
                2023,
                2
              ],
              expected: 28
            },
            {
              args: [
                2024,
                4
              ],
              expected: 30
            }
          ]
        },
    {
          id: "compare-two-dates",
          title: "Compare two dates",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(dateA, dateB)` that returns `-1` if `dateA` is earlier, `1` if later, or `0` if the same day.",
          starter: "function solve(dateA, dateB) {\n  \n}",
          tests: [
            {
              args: [
                "2024-01-01",
                "2024-01-02"
              ],
              expected: -1
            },
            {
              args: [
                "2024-05-05",
                "2024-05-05"
              ],
              expected: 0
            },
            {
              args: [
                "2024-06-01",
                "2024-01-01"
              ],
              expected: 1
            }
          ]
        }
  ],
  "practice/sets": [
    {
          id: "is-subset",
          title: "Check if one array is a subset of another",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns `true` if every element of `a` also appears in `b`, using a `Set`.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2
                ],
                [
                  1,
                  2,
                  3
                ]
              ],
              expected: true
            },
            {
              args: [
                [
                  1,
                  4
                ],
                [
                  1,
                  2,
                  3
                ]
              ],
              expected: false
            }
          ]
        },
    {
          id: "union-of-sets",
          title: "Union of two arrays",
          difficulty: "Medium",
          minutes: 4,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns an array of all unique values present in `a` OR `b`, using `Set`.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2
                ],
                [
                  2,
                  3
                ]
              ],
              expected: [
                1,
                2,
                3
              ]
            },
            {
              args: [
                [
                  1
                ],
                [
                  2
                ]
              ],
              expected: [
                1,
                2
              ]
            }
          ]
        },
    {
          id: "remove-set-item",
          title: "Remove an item from a Set",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(arr, item)` that builds a `Set` from `arr`, removes `item` from it with `.delete()`, and returns the remaining values as an array.",
          starter: "function solve(arr, item) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3
                ],
                2
              ],
              expected: [
                1,
                3
              ]
            },
            {
              args: [
                [
                  "a",
                  "b"
                ],
                "z"
              ],
              expected: [
                "a",
                "b"
              ]
            }
          ]
        },
    {
          id: "set-to-sorted-array",
          title: "Convert a Set to a sorted array",
          difficulty: "Medium",
          minutes: 3,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that removes duplicates from `arr` using `Set` and returns the unique values sorted ascending.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  3,
                  1,
                  2,
                  1,
                  3
                ]
              ],
              expected: [
                1,
                2,
                3
              ]
            },
            {
              args: [
                [
                  5,
                  5,
                  5
                ]
              ],
              expected: [
                5
              ]
            }
          ]
        },
    {
          id: "is-superset",
          title: "Check if a Set is a superset of another",
          difficulty: "Hard",
          minutes: 5,
          kind: "fn",
          prompt: "Write a function `solve(superArr, subArr)` that returns `true` if every element of `subArr` is contained in `superArr` (treating both as sets of unique values).",
          starter: "function solve(superArr, subArr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3,
                  4
                ],
                [
                  2,
                  4
                ]
              ],
              expected: true
            },
            {
              args: [
                [
                  1,
                  2
                ],
                [
                  1,
                  2,
                  3
                ]
              ],
              expected: false
            }
          ]
        },
    {
          id: "has-duplicates",
          title: "Check if an array has any duplicates",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(arr)` that returns `true` if `arr` contains any duplicate values, using `Set`.",
          starter: "function solve(arr) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3
                ]
              ],
              expected: false
            },
            {
              args: [
                [
                  1,
                  2,
                  2
                ]
              ],
              expected: true
            }
          ]
        },
    {
          id: "set-add-multiple",
          title: "Add several values to a Set",
          difficulty: "Easy",
          minutes: 2,
          kind: "fn",
          prompt: "Write a function `solve(values)` that adds every value from the array `values` into a new `Set` and returns its final `.size`.",
          starter: "function solve(values) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  1,
                  2,
                  3
                ]
              ],
              expected: 3
            },
            {
              args: [
                [
                  "a",
                  "a",
                  "a"
                ]
              ],
              expected: 1
            }
          ]
        },
    {
          id: "jaccard-similarity",
          title: "Compute Jaccard similarity of two sets",
          difficulty: "Hard",
          minutes: 7,
          kind: "fn",
          prompt: "Write a function `solve(a, b)` that returns the Jaccard similarity of arrays `a` and `b` — the size of their intersection divided by the size of their union — as a number.",
          starter: "function solve(a, b) {\n  \n}",
          tests: [
            {
              args: [
                [
                  1,
                  2,
                  3
                ],
                [
                  2,
                  3,
                  4
                ]
              ],
              expected: 0.5
            },
            {
              args: [
                [
                  1,
                  2
                ],
                [
                  1,
                  2
                ]
              ],
              expected: 1
            }
          ]
        }
  ]
};
