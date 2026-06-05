# ✊✋✌️ Rock Paper Scissors

A browser-based Rock Paper Scissors game with auto-play, persistent score tracking, and keyboard shortcuts.

## Features

- **Click or keyboard controls** — play using buttons or hotkeys
- **Auto-play mode** — let the computer play against itself at 1-move-per-second
- **Persistent score** — wins, losses, and ties saved to `localStorage` across sessions
- **Score reset** — clear your score anytime with a button or the Backspace key

## Project Structure

```
rps/
├── index.html        # Game layout and UI
├── style.css         # Dark theme styling
├── rps.js            # Game logic
└── Images/
    ├── rock-emoji.png
    ├── paper-emoji.png
    └── scissors-emoji.png
```

## How to Play

Open `index.html` in any modern browser — no install or build step needed.

### Controls

| Action       | Button          | Keyboard     |
|--------------|-----------------|--------------|
| Play Rock    | 🪨 button       | `R`          |
| Play Paper   | 📄 button       | `P`          |
| Play Scissors| ✂️ button       | `S`          |
| Auto-play    | Auto play button | `A`          |
| Reset score  | Reset score button | `Backspace` |

## Game Logic

- **Win**: your move beats the computer's move
- **Lose**: the computer's move beats yours
- **Tie**: both moves are the same

Standard rules apply: Rock beats Scissors, Scissors beats Paper, Paper beats Rock.

## Score Persistence

Scores are stored in the browser's `localStorage` under the key `score`. They persist between sessions and are only cleared when you click **Reset score** or press `Backspace`.

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). No dependencies or frameworks required.
