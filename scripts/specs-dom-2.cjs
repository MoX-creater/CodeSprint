const { buildDomRead, buildDomMutate, add } = require("./generate-challenges.cjs");

// ---- selector-methods ----
add("dom/selector-methods", buildDomRead({
  id: "select-by-tag-name", title: "Select elements by tag name", difficulty: "Easy", minutes: 2,
  setupHTML: "<p>One</p><p>Two</p><span>Three</span>",
  prompt: "Write a function `solve(container)` that returns how many `<p>` elements are inside `container`, using `getElementsByTagName` or `querySelectorAll`.",
  starter: "function solve(container) {\n  \n}",
  ref: (container) => container.querySelectorAll("p").length,
}));
add("dom/selector-methods", buildDomRead({
  id: "select-checked-checkbox", title: "Find a checked checkbox", difficulty: "Medium", minutes: 3,
  setupHTML: '<input type="checkbox" id="a" /><input type="checkbox" id="b" checked />',
  prompt: "Write a function `solve(container)` that returns the `id` of the checkbox that is currently checked, using the `:checked` selector.",
  starter: "function solve(container) {\n  \n}",
  ref: (container) => container.querySelector(":checked").id,
}));

// ---- events ----
add("dom/events", buildDomMutate({
  id: "focus-adds-highlight", title: "Highlight an input on focus", difficulty: "Medium", minutes: 4,
  setupHTML: '<input id="field" />',
  prompt: "Add a `focus` listener to `#field` that adds the class `highlighted` to it.",
  starter: "const field = container.querySelector('#field');\n\n",
  modelCode: "const field = container.querySelector('#field'); field.addEventListener('focus', () => { field.classList.add('highlighted'); });",
  tests: [
    {
      description: "focusing #field adds the 'highlighted' class",
      check: (container) => {
        const field = container.querySelector("#field");
        field.dispatchEvent(new container.ownerDocument.defaultView.FocusEvent("focus", { bubbles: false }));
        return field.classList.contains("highlighted");
      },
    },
  ],
}));
add("dom/events", buildDomMutate({
  id: "mouseover-shows-tooltip", title: "Show text on mouseover", difficulty: "Medium", minutes: 4,
  setupHTML: '<div id="icon">?</div><span id="tooltip"></span>',
  prompt: "Add a `mouseover` listener to `#icon` that sets `#tooltip`'s text to `'Help info'`.",
  starter: "const icon = container.querySelector('#icon');\nconst tooltip = container.querySelector('#tooltip');\n\n",
  modelCode: "const icon = container.querySelector('#icon'); const tooltip = container.querySelector('#tooltip'); icon.addEventListener('mouseover', () => { tooltip.textContent = 'Help info'; });",
  tests: [
    {
      description: "hovering #icon sets #tooltip's text to 'Help info'",
      check: (container) => {
        const icon = container.querySelector("#icon");
        const tooltip = container.querySelector("#tooltip");
        icon.dispatchEvent(new container.ownerDocument.defaultView.MouseEvent("mouseover", { bubbles: true }));
        return tooltip.textContent === "Help info";
      },
    },
  ],
}));

// ---- manipulation ----
add("dom/manipulation", buildDomMutate({
  id: "add-multiple-classes", title: "Add multiple classes at once", difficulty: "Easy", minutes: 2,
  setupHTML: '<div id="card">Card</div>',
  prompt: "Add both the classes `rounded` and `shadow` to `#card` in a single `classList.add()` call.",
  starter: "const card = container.querySelector('#card');\n\n",
  modelCode: "const card = container.querySelector('#card'); card.classList.add('rounded', 'shadow');",
  tests: [
    {
      description: "#card has both 'rounded' and 'shadow' classes",
      check: (container) => {
        const card = container.querySelector("#card");
        return card.classList.contains("rounded") && card.classList.contains("shadow");
      },
    },
  ],
}));
add("dom/manipulation", buildDomMutate({
  id: "clone-an-element", title: "Clone an element", difficulty: "Hard", minutes: 5,
  setupHTML: '<ul id="list"><li id="template">Item</li></ul>',
  prompt: "Clone the `#template` list item with `.cloneNode(true)`, and append the clone to `#list` (so there are 2 items total).",
  starter: "const template = container.querySelector('#template');\nconst list = container.querySelector('#list');\n\n",
  modelCode: "const template = container.querySelector('#template'); const list = container.querySelector('#list'); const clone = template.cloneNode(true); list.appendChild(clone);",
  tests: [
    {
      description: "#list now has 2 <li> items",
      check: (container) => container.querySelectorAll("#list li").length === 2,
    },
  ],
}));

// ---- dom-fundamentals ----
add("dom/dom-fundamentals", buildDomMutate({
  id: "empty-a-container", title: "Remove all children from a container", difficulty: "Medium", minutes: 3,
  setupHTML: '<div id="box"><p>A</p><p>B</p><p>C</p></div>',
  prompt: "Remove every child element from `#box`, leaving it empty.",
  starter: "const box = container.querySelector('#box');\n\n",
  modelCode: "const box = container.querySelector('#box'); box.innerHTML = '';",
  tests: [
    {
      description: "#box has no children left",
      check: (container) => container.querySelector("#box").children.length === 0,
    },
  ],
}));

// ---- dom-recursive ----
add("dom/dom-recursive", buildDomRead({
  id: "collect-all-tag-names", title: "Recursively collect every tag name", difficulty: "Hard", minutes: 6,
  setupHTML: "<div><p>A</p><span><b>B</b></span></div>",
  prompt: "Write a function `solve(container)` that recursively collects the tag name (uppercase, e.g. `'P'`) of every element nested inside `container`, returning them as an array in document order.",
  starter: "function solve(container) {\n  \n}",
  ref: (container) => {
    const out = [];
    function walk(node) {
      for (const child of node.children) {
        out.push(child.tagName);
        walk(child);
      }
    }
    walk(container);
    return out;
  },
}));

module.exports = {};
