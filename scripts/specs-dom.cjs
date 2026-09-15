const { buildDomRead, buildDomMutate, add } = require("./generate-challenges.cjs");

// ---- selector-methods (domRead) ----
add("dom/selector-methods", buildDomRead({
  id: "select-by-class-count", title: "Count elements by class", difficulty: "Easy", minutes: 2,
  setupHTML: '<p class="msg">Hi</p><p class="msg">Bye</p><p>Other</p>',
  prompt: "Write a function `solve(container)` that returns how many elements inside `container` have the class `msg`.",
  starter: "function solve(container) {\n  \n}",
  ref: (container) => container.querySelectorAll(".msg").length,
}));
add("dom/selector-methods", buildDomRead({
  id: "select-nested-text", title: "Select a nested element's text", difficulty: "Easy", minutes: 2,
  setupHTML: '<div id="outer"><div id="inner">Hello</div></div>',
  prompt: "Write a function `solve(container)` that returns the text content of the element with id `inner`.",
  starter: "function solve(container) {\n  \n}",
  ref: (container) => container.querySelector("#inner").textContent,
}));
add("dom/selector-methods", buildDomRead({
  id: "get-href-attribute", title: "Read a link's href attribute", difficulty: "Easy", minutes: 2,
  setupHTML: '<a href="https://example.com">link</a>',
  prompt: "Write a function `solve(container)` that returns the `href` attribute of the `<a>` element inside `container`.",
  starter: "function solve(container) {\n  \n}",
  ref: (container) => container.querySelector("a").getAttribute("href"),
}));
add("dom/selector-methods", buildDomRead({
  id: "select-by-data-attribute", title: "Select elements by a data attribute", difficulty: "Medium", minutes: 3,
  setupHTML: '<div data-role="admin">Root</div><div data-role="user">Guest</div>',
  prompt: "Write a function `solve(container)` that returns the text content of the element whose `data-role` attribute is `'admin'`, using the attribute selector `[data-role=\"admin\"]`.",
  starter: "function solve(container) {\n  \n}",
  ref: (container) => container.querySelector('[data-role="admin"]').textContent,
}));
add("dom/selector-methods", buildDomRead({
  id: "count-direct-children", title: "Count an element's direct children", difficulty: "Medium", minutes: 3,
  setupHTML: "<ul><li>1</li><li>2</li><li>3</li><li>4</li></ul>",
  prompt: "Write a function `solve(container)` that returns how many direct child elements the `<ul>` inside `container` has, using `.children.length`.",
  starter: "function solve(container) {\n  \n}",
  ref: (container) => container.querySelector("ul").children.length,
}));
add("dom/selector-methods", buildDomRead({
  id: "read-input-value", title: "Read an input's value", difficulty: "Easy", minutes: 2,
  setupHTML: '<input id="name" value="Ada" />',
  prompt: "Write a function `solve(container)` that returns the `value` property of the `#name` input.",
  starter: "function solve(container) {\n  \n}",
  ref: (container) => container.querySelector("#name").value,
}));
add("dom/selector-methods", buildDomRead({
  id: "select-last-child", title: "Select the last child element", difficulty: "Medium", minutes: 3,
  setupHTML: "<ul><li>A</li><li>B</li><li>C</li></ul>",
  prompt: "Write a function `solve(container)` that returns the text content of the LAST `<li>` inside `container`.",
  starter: "function solve(container) {\n  \n}",
  ref: (container) => { const items = container.querySelectorAll("li"); return items[items.length - 1].textContent; },
}));
add("dom/selector-methods", buildDomRead({
  id: "get-all-text-array", title: "Collect text from every matching element", difficulty: "Hard", minutes: 5,
  setupHTML: "<span>a</span><span>b</span><span>c</span>",
  prompt: "Write a function `solve(container)` that returns an array of the text content of every `<span>` inside `container`, in order.",
  starter: "function solve(container) {\n  \n}",
  ref: (container) => Array.from(container.querySelectorAll("span")).map((el) => el.textContent),
}));

// ---- events (domMutate) ----
add("dom/events", buildDomMutate({
  id: "double-click-resets", title: "Reset a counter on double click", difficulty: "Medium", minutes: 4,
  setupHTML: '<button id="btn">+1</button><span id="count">3</span>',
  prompt: "Add a `dblclick` listener to `#btn` that resets `#count`'s text to `'0'`.",
  starter: "const btn = container.querySelector('#btn');\nconst count = container.querySelector('#count');\n\n",
  modelCode: "const btn = container.querySelector('#btn'); const count = container.querySelector('#count'); btn.addEventListener('dblclick', () => { count.textContent = '0'; });",
  tests: [
    {
      description: "double-clicking #btn resets #count to '0'",
      check: (container) => {
        const btn = container.querySelector("#btn");
        const count = container.querySelector("#count");
        btn.dispatchEvent(new container.ownerDocument.defaultView.MouseEvent("dblclick", { bubbles: true }));
        return count.textContent.trim() === "0";
      },
    },
  ],
}));
add("dom/events", buildDomMutate({
  id: "input-updates-preview", title: "Live preview from an input", difficulty: "Medium", minutes: 4,
  setupHTML: '<input id="name" /><p id="preview"></p>',
  prompt: "Add an `input` listener to `#name` that updates `#preview`'s text to match whatever is typed.",
  starter: "const nameInput = container.querySelector('#name');\nconst preview = container.querySelector('#preview');\n\n",
  modelCode: "const nameInput = container.querySelector('#name'); const preview = container.querySelector('#preview'); nameInput.addEventListener('input', () => { preview.textContent = nameInput.value; });",
  tests: [
    {
      description: "typing into #name updates #preview to match",
      check: (container) => {
        const input = container.querySelector("#name");
        const preview = container.querySelector("#preview");
        input.value = "Ada";
        input.dispatchEvent(new container.ownerDocument.defaultView.Event("input", { bubbles: true }));
        return preview.textContent === "Ada";
      },
    },
  ],
}));
add("dom/events", buildDomMutate({
  id: "checkbox-toggles-text", title: "Toggle text based on a checkbox", difficulty: "Medium", minutes: 4,
  setupHTML: '<input type="checkbox" id="toggle" /><p id="status">Off</p>',
  prompt: "Add a `change` listener to `#toggle` that sets `#status`'s text to `'On'` when checked, `'Off'` when unchecked.",
  starter: "const toggle = container.querySelector('#toggle');\nconst status = container.querySelector('#status');\n\n",
  modelCode: "const toggle = container.querySelector('#toggle'); const status = container.querySelector('#status'); toggle.addEventListener('change', () => { status.textContent = toggle.checked ? 'On' : 'Off'; });",
  tests: [
    {
      description: "checking #toggle sets #status to 'On'",
      check: (container) => {
        const toggle = container.querySelector("#toggle");
        const status = container.querySelector("#status");
        toggle.checked = true;
        toggle.dispatchEvent(new container.ownerDocument.defaultView.Event("change", { bubbles: true }));
        return status.textContent === "On";
      },
    },
  ],
}));
add("dom/events", buildDomMutate({
  id: "keydown-detects-enter", title: "Detect the Enter key", difficulty: "Hard", minutes: 5,
  setupHTML: '<input id="field" /><p id="msg"></p>',
  prompt: "Add a `keydown` listener to `#field` that sets `#msg`'s text to `'submitted'` when the Enter key (`event.key === 'Enter'`) is pressed.",
  starter: "const field = container.querySelector('#field');\nconst msg = container.querySelector('#msg');\n\n",
  modelCode: "const field = container.querySelector('#field'); const msg = container.querySelector('#msg'); field.addEventListener('keydown', (e) => { if (e.key === 'Enter') msg.textContent = 'submitted'; });",
  tests: [
    {
      description: "pressing Enter in #field sets #msg to 'submitted'",
      check: (container) => {
        const field = container.querySelector("#field");
        const msg = container.querySelector("#msg");
        field.dispatchEvent(new container.ownerDocument.defaultView.KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
        return msg.textContent === "submitted";
      },
    },
  ],
}));

// ---- manipulation (domMutate) ----
add("dom/manipulation", buildDomMutate({
  id: "remove-element", title: "Remove an element", difficulty: "Easy", minutes: 2,
  setupHTML: '<p id="doomed">Remove me</p><p id="stays">Keep me</p>',
  prompt: "Remove the element with id `doomed` from `container` entirely.",
  starter: "const doomed = container.querySelector('#doomed');\n\n",
  modelCode: "const doomed = container.querySelector('#doomed'); doomed.remove();",
  tests: [
    {
      description: "#doomed no longer exists in the container",
      check: (container) => container.querySelector("#doomed") === null,
    },
  ],
}));
add("dom/manipulation", buildDomMutate({
  id: "change-text-content", title: "Change an element's text", difficulty: "Easy", minutes: 2,
  setupHTML: '<h1 id="title">Old Title</h1>',
  prompt: "Change the text content of `#title` to `'New Title'`.",
  starter: "const title = container.querySelector('#title');\n\n",
  modelCode: "const title = container.querySelector('#title'); title.textContent = 'New Title';",
  tests: [
    {
      description: "#title now reads 'New Title'",
      check: (container) => container.querySelector("#title").textContent === "New Title",
    },
  ],
}));
add("dom/manipulation", buildDomMutate({
  id: "wrap-in-new-parent", title: "Insert a new element before another", difficulty: "Medium", minutes: 4,
  setupHTML: '<div id="target">Target</div>',
  prompt: "Create a new `<p>` with the text `'Label'` and insert it directly BEFORE `#target` inside `container`, using `.before()` or `insertBefore()`.",
  starter: "const target = container.querySelector('#target');\n\n",
  modelCode: "const target = container.querySelector('#target'); const label = document.createElement('p'); label.textContent = 'Label'; target.before(label);",
  tests: [
    {
      description: "container's first child is a <p> with text 'Label'",
      check: (container) => container.firstElementChild.tagName === "P" && container.firstElementChild.textContent === "Label",
    },
  ],
}));
add("dom/manipulation", buildDomMutate({
  id: "toggle-visibility-style", title: "Hide an element with inline style", difficulty: "Medium", minutes: 3,
  setupHTML: '<div id="panel">Panel content</div>',
  prompt: "Set the inline style of `#panel` so it is hidden (`display: none`).",
  starter: "const panel = container.querySelector('#panel');\n\n",
  modelCode: "const panel = container.querySelector('#panel'); panel.style.display = 'none';",
  tests: [
    {
      description: "#panel has display: none",
      check: (container) => container.querySelector("#panel").style.display === "none",
    },
  ],
}));
add("dom/manipulation", buildDomMutate({
  id: "remove-class", title: "Remove a CSS class", difficulty: "Easy", minutes: 2,
  setupHTML: '<div id="box" class="active highlighted">Box</div>',
  prompt: "Remove the class `active` from `#box`, while leaving any other classes untouched.",
  starter: "const box = container.querySelector('#box');\n\n",
  modelCode: "const box = container.querySelector('#box'); box.classList.remove('active');",
  tests: [
    {
      description: "#box no longer has the 'active' class, but keeps 'highlighted'",
      check: (container) => {
        const box = container.querySelector("#box");
        return !box.classList.contains("active") && box.classList.contains("highlighted");
      },
    },
  ],
}));

// ---- dom-fundamentals (domMutate) ----
add("dom/dom-fundamentals", buildDomMutate({
  id: "build-list-from-scratch", title: "Build a list from an empty container", difficulty: "Hard", minutes: 6,
  setupHTML: '<ul id="list"></ul>',
  prompt: "Create three `<li>` elements with the text `'One'`, `'Two'`, and `'Three'`, and append all of them to `#list`, in order.",
  starter: "const list = container.querySelector('#list');\n\n",
  modelCode: "const list = container.querySelector('#list'); ['One', 'Two', 'Three'].forEach((text) => { const li = document.createElement('li'); li.textContent = text; list.appendChild(li); });",
  tests: [
    {
      description: "#list has 3 items reading 'One', 'Two', 'Three'",
      check: (container) => {
        const items = Array.from(container.querySelectorAll("#list li")).map((li) => li.textContent);
        return items.length === 3 && items[0] === "One" && items[1] === "Two" && items[2] === "Three";
      },
    },
  ],
}));
add("dom/dom-fundamentals", buildDomMutate({
  id: "set-multiple-attributes", title: "Set multiple attributes at once", difficulty: "Medium", minutes: 3,
  setupHTML: '<img id="photo" />',
  prompt: "Set the `src` attribute of `#photo` to `'cat.jpg'` and the `alt` attribute to `'A cat'`.",
  starter: "const photo = container.querySelector('#photo');\n\n",
  modelCode: "const photo = container.querySelector('#photo'); photo.setAttribute('src', 'cat.jpg'); photo.setAttribute('alt', 'A cat');",
  tests: [
    {
      description: "#photo has src='cat.jpg' and alt='A cat'",
      check: (container) => {
        const photo = container.querySelector("#photo");
        return photo.getAttribute("src") === "cat.jpg" && photo.getAttribute("alt") === "A cat";
      },
    },
  ],
}));
add("dom/dom-fundamentals", buildDomMutate({
  id: "replace-element", title: "Replace one element with another", difficulty: "Hard", minutes: 5,
  setupHTML: '<div id="old">Old content</div>',
  prompt: "Create a new `<p>` with the text `'New content'` and use `.replaceWith()` to swap it in for `#old`.",
  starter: "const old = container.querySelector('#old');\n\n",
  modelCode: "const old = container.querySelector('#old'); const p = document.createElement('p'); p.textContent = 'New content'; old.replaceWith(p);",
  tests: [
    {
      description: "container's first child is now a <p> reading 'New content', and #old is gone",
      check: (container) =>
        container.querySelector("#old") === null &&
        container.firstElementChild.tagName === "P" &&
        container.firstElementChild.textContent === "New content",
    },
  ],
}));

// ---- dom-recursive (domRead) ----
add("dom/dom-recursive", buildDomRead({
  id: "sum-numeric-text-nodes", title: "Sum numeric text across nested elements", difficulty: "Hard", minutes: 6,
  setupHTML: "<div><span>1</span><div><span>2</span><span>3</span></div></div>",
  prompt: "Write a function `solve(container)` that recursively walks every element inside `container` and sums up the numeric value of any element's DIRECT text (elements with only text and no element children), returning the total.",
  starter: "function solve(container) {\n  \n}",
  ref: (container) => {
    function walk(node) {
      let sum = 0;
      for (const child of node.children) {
        if (child.children.length === 0) {
          const n = Number(child.textContent);
          if (!Number.isNaN(n)) sum += n;
        } else {
          sum += walk(child);
        }
      }
      return sum;
    }
    return walk(container);
  },
}));
add("dom/dom-recursive", buildDomRead({
  id: "find-deepest-text", title: "Find the text of the most deeply nested element", difficulty: "Hard", minutes: 6,
  setupHTML: "<div><p>Shallow</p><div><span><b>Deepest</b></span></div></div>",
  prompt: "Write a function `solve(container)` that recursively finds the most deeply nested element inside `container` and returns its text content.",
  starter: "function solve(container) {\n  \n}",
  ref: (container) => {
    function deepest(node, depth) {
      let best = { el: node, depth };
      for (const child of node.children) {
        const candidate = deepest(child, depth + 1);
        if (candidate.depth > best.depth) best = candidate;
      }
      return best;
    }
    return deepest(container, 0).el.textContent;
  },
}));

module.exports = {};
