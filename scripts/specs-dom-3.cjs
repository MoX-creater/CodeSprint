const { buildDomRead, buildDomMutate, add } = require("./generate-challenges.cjs");

// ---- dom-fundamentals ----
add("dom/dom-fundamentals", buildDomMutate({
  id: "add-and-remove-class-combo", title: "Swap one class for another", difficulty: "Medium", minutes: 3,
  setupHTML: '<div id="status" class="pending">Loading...</div>',
  prompt: "Remove the class `pending` from `#status` and add the class `done` instead.",
  starter: "const status = container.querySelector('#status');\n\n",
  modelCode: "const status = container.querySelector('#status'); status.classList.remove('pending'); status.classList.add('done');",
  tests: [
    {
      description: "#status has 'done' but not 'pending'",
      check: (container) => {
        const status = container.querySelector("#status");
        return status.classList.contains("done") && !status.classList.contains("pending");
      },
    },
  ],
}));
add("dom/dom-fundamentals", buildDomRead({
  id: "read-data-attribute-value", title: "Read a data attribute's value", difficulty: "Easy", minutes: 2,
  setupHTML: '<div id="item" data-price="42">Widget</div>',
  prompt: "Write a function `solve(container)` that returns the `data-price` attribute of `#item` as a NUMBER, using `.dataset` and `Number()`.",
  starter: "function solve(container) {\n  \n}",
  ref: (container) => Number(container.querySelector("#item").dataset.price),
}));
add("dom/dom-fundamentals", buildDomMutate({
  id: "disable-a-button", title: "Disable a button", difficulty: "Easy", minutes: 2,
  setupHTML: '<button id="submit">Submit</button>',
  prompt: "Set the `disabled` property of `#submit` to `true`.",
  starter: "const submit = container.querySelector('#submit');\n\n",
  modelCode: "const submit = container.querySelector('#submit'); submit.disabled = true;",
  tests: [
    {
      description: "#submit is disabled",
      check: (container) => container.querySelector("#submit").disabled === true,
    },
  ],
}));

// ---- dom-recursive ----
add("dom/dom-recursive", buildDomRead({
  id: "recursive-total-text-length", title: "Sum the text length of every nested element", difficulty: "Hard", minutes: 6,
  setupHTML: "<div><p>Hi</p><div><span>Yo</span><span>Ok</span></div></div>",
  prompt: "Write a function `solve(container)` that recursively sums the `.textContent.length` of every LEAF element (an element with no element children) inside `container`.",
  starter: "function solve(container) {\n  \n}",
  ref: (container) => {
    let total = 0;
    function walk(node) {
      if (node.children.length === 0) {
        total += node.textContent.length;
      } else {
        for (const child of node.children) walk(child);
      }
    }
    walk(container);
    return total;
  },
}));

// ---- events ----
add("dom/events", buildDomMutate({
  id: "prevent-default-link", title: "Prevent a link's default navigation", difficulty: "Hard", minutes: 5,
  setupHTML: '<a id="link" href="https://example.com">Click</a><p id="log"></p>',
  prompt: "Add a `click` listener to `#link` that calls `event.preventDefault()` and sets `#log`'s text to `'blocked'`.",
  starter: "const link = container.querySelector('#link');\nconst log = container.querySelector('#log');\n\n",
  modelCode: "const link = container.querySelector('#link'); const log = container.querySelector('#log'); link.addEventListener('click', (e) => { e.preventDefault(); log.textContent = 'blocked'; });",
  tests: [
    {
      description: "clicking #link sets #log to 'blocked'",
      check: (container) => {
        const link = container.querySelector("#link");
        const log = container.querySelector("#log");
        link.dispatchEvent(new container.ownerDocument.defaultView.MouseEvent("click", { bubbles: true, cancelable: true }));
        return log.textContent === "blocked";
      },
    },
  ],
}));
add("dom/events", buildDomMutate({
  id: "event-delegation-list", title: "Handle clicks on list items with event delegation", difficulty: "Hard", minutes: 6,
  setupHTML: '<ul id="list"><li data-id="1">A</li><li data-id="2">B</li></ul><p id="selected"></p>',
  prompt: "Add a SINGLE `click` listener to `#list` (not to each `<li>` individually) that sets `#selected`'s text to the clicked item's `data-id`, using `event.target`.",
  starter: "const list = container.querySelector('#list');\nconst selected = container.querySelector('#selected');\n\n",
  modelCode: "const list = container.querySelector('#list'); const selected = container.querySelector('#selected'); list.addEventListener('click', (e) => { if (e.target.tagName === 'LI') selected.textContent = e.target.dataset.id; });",
  tests: [
    {
      description: "clicking the second <li> sets #selected to '2'",
      check: (container) => {
        const items = container.querySelectorAll("#list li");
        const selected = container.querySelector("#selected");
        items[1].dispatchEvent(new container.ownerDocument.defaultView.MouseEvent("click", { bubbles: true }));
        return selected.textContent === "2";
      },
    },
  ],
}));

// ---- manipulation ----
add("dom/manipulation", buildDomMutate({
  id: "insert-adjacent-html", title: "Insert HTML with insertAdjacentHTML", difficulty: "Medium", minutes: 4,
  setupHTML: '<div id="box">Existing</div>',
  prompt: "Use `.insertAdjacentHTML('beforeend', ...)` to append the HTML `<span id=\"tag\">New</span>` inside `#box`.",
  starter: "const box = container.querySelector('#box');\n\n",
  modelCode: "const box = container.querySelector('#box'); box.insertAdjacentHTML('beforeend', '<span id=\"tag\">New</span>');",
  tests: [
    {
      description: "#box now contains a #tag span reading 'New'",
      check: (container) => {
        const tag = container.querySelector("#tag");
        return tag !== null && tag.textContent === "New";
      },
    },
  ],
}));
add("dom/manipulation", buildDomMutate({
  id: "set-text-vs-html", title: "Safely set text (not HTML)", difficulty: "Medium", minutes: 3,
  setupHTML: '<div id="output"></div>',
  prompt: "Set `#output`'s content to the literal text `<b>bold</b>` using `.textContent` (NOT `.innerHTML`), so it displays as plain text rather than being parsed as HTML.",
  starter: "const output = container.querySelector('#output');\n\n",
  modelCode: "const output = container.querySelector('#output'); output.textContent = '<b>bold</b>';",
  tests: [
    {
      description: "#output has no element children (the <b> was not parsed as HTML)",
      check: (container) => container.querySelector("#output").children.length === 0 && container.querySelector("#output").textContent === "<b>bold</b>",
    },
  ],
}));

// ---- selector-methods ----
add("dom/selector-methods", buildDomRead({
  id: "select-nth-child", title: "Select the nth child element", difficulty: "Medium", minutes: 3,
  setupHTML: "<ul><li>First</li><li>Second</li><li>Third</li></ul>",
  prompt: "Write a function `solve(container)` that returns the text of the SECOND `<li>` using the `:nth-child(2)` CSS selector.",
  starter: "function solve(container) {\n  \n}",
  ref: (container) => container.querySelector("li:nth-child(2)").textContent,
}));
add("dom/selector-methods", buildDomRead({
  id: "closest-ancestor", title: "Find the closest matching ancestor", difficulty: "Hard", minutes: 5,
  setupHTML: '<div class="card"><div class="body"><button id="btn">Click</button></div></div>',
  prompt: "Write a function `solve(container)` that, starting from `#btn`, returns the `class` attribute of its closest ancestor with class `card`, using `.closest()`.",
  starter: "function solve(container) {\n  \n}",
  ref: (container) => container.querySelector("#btn").closest(".card").className,
}));

module.exports = {};
