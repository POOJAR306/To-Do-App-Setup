# Vanilla JavaScript To-Do App (Front-end only)

## What this is
A simple, front-end only To-Do list application built with plain (vanilla) JavaScript, HTML and CSS.
Features:
- Add tasks
- Mark tasks complete (toggle)
- Delete tasks
- Clear all completed tasks
- Instant UI updates (no page reload)
- Persists tasks in `localStorage` so tasks survive page reloads (optional)

## Files
- `index.html` — the markup
- `styles.css` — styling
- `script.js` — app logic (DOM manipulation, event handling)
- `README.md` — this file

## How to run (two easy ways)
### Option A — VS Code + Live Server (recommended)
1. Open the project folder in VS Code.
2. Install the **Live Server** extension if you don't have it.
3. Right-click `index.html` and choose **Open with Live Server**.
4. The app opens in your browser. Add, complete, and delete tasks.

### Option B — Chrome + local file
1. Open `index.html` in Chrome (double-click). The app works, but `localStorage` still functions.
2. For best development experience prefer Live Server.

## Interview questions (related to this task)
1. How do you select elements in the DOM?
   - `document.getElementById`, `querySelector`, `querySelectorAll`, etc.
2. What are event listeners?
   - Functions attached to DOM nodes that run when events occur, e.g., `element.addEventListener('click', fn)`.
3. Explain event delegation.
   - Attach a single listener to a common ancestor and handle events from its children using `event.target` or `closest`.
4. How do you prevent default behavior in JS?
   - `event.preventDefault()`.
5. Difference between `var`, `let`, and `const`?
   - `var` is function-scoped and hoisted; `let`/`const` are block-scoped; `const` cannot be reassigned.
6. How does bubbling and capturing work?
   - Capturing goes top-down, bubbling goes bottom-up. Use `addEventListener(type, fn, {capture: true})` to capture.
7. How do you add/remove classes in JS?
   - `el.classList.add('foo')`, `el.classList.remove('foo')`, `el.classList.toggle('foo')`.
8. What is closure in JavaScript?
   - A function retains access to the scope in which it was created, even after that scope has finished executing.
9. Explain arrow functions.
   - Concise syntax; lexical `this`; cannot be used as constructors.
10. Difference between `==` and `===`?
    - `==` does type coercion before comparison; `===` is strict equality (no coercion).

## Notes
- This app uses `localStorage` key `vanilla_todos_v1`.
- You can easily extend it to support: edit tasks, filters (all/active/completed), due dates, priorities, or syncing with a backend.

Enjoy! 🚀
