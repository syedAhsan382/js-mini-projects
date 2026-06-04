# To-Do List App

A simple browser-based To-Do List web app built with HTML, CSS, and JavaScript. Integrated with Firebase for analytics tracking.

## Features

- Add new tasks by typing and clicking **Add** or pressing **Enter**
- Mark tasks as completed by clicking on them (strikes through the text)
- Delete tasks with the **X** button
- Clean, centered UI with a card layout
- Firebase Analytics integration

## Files

| File | Description |
|------|-------------|
| `index.html` | Main HTML structure |
| `style.css` | Styling and layout |
| `todo.js` | Task logic (add, complete, delete) |

## How to Use

1. Open `index.html` in your browser
2. Type a task in the input field
3. Click **Add** or press **Enter** to add the task
4. Click a task to mark it as completed
5. Click **X** to delete a task

## Tech Stack

- HTML
- CSS (Flexbox)
- JavaScript (DOM manipulation)
- Firebase (Analytics)

## Setup

No installation needed. Just open `index.html` directly in any browser.

If you want to use your own Firebase project, replace the config in `index.html`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```
