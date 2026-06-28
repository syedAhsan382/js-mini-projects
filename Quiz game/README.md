# Quiz Game

A simple browser-based multiple-choice quiz game built with vanilla HTML, CSS, and JavaScript. Test your general knowledge across 10 questions, track your score in real time, and get a result message based on how well you did.

## Features

- **Three-screen flow** — Start screen → Quiz screen → Result screen, controlled with `active` class toggling
- **10 multiple-choice questions** covering geography, science, sports, and general trivia
- **Live score tracking** displayed during the quiz
- **Progress bar** that fills up as you move through the questions
- **Answer feedback** — correct answer highlights green, your incorrect pick highlights red
- **Click protection** — answers are disabled after a selection so you can't double-click your way through
- **Dynamic result message** based on your final percentage (Perfect / Great / Good / Not bad / Keep studying)
- **Restart button** to reset state and play again
- **Responsive design** with a dedicated breakpoint for screens under 500px

## How It Works

1. **Start Screen** — Click "Start Quiz" to begin. This resets `currentQuestionIndex` and `score` to 0.
2. **Quiz Screen** — Each question is rendered dynamically:
   - `showQuestion()` pulls the current question from the `quizQuestions` array
   - Answer buttons are created on the fly and tagged with `data-correct` (true/false) via `dataset`
   - Clicking a button triggers `selectAnswer()`, which locks further clicks, reveals the correct answer, and highlights your choice if wrong
   - After a 1-second delay, it moves to the next question or shows results
3. **Result Screen** — Displays your final score out of the total and a message based on your percentage.

## Project Structure

```
quiz-game/
├── index.html      # Markup for the 3 screens
├── style.css       # Styling, layout, and responsive rules
└── quiz.js         # Quiz logic and state management
```

## Tech Used

- HTML5
- CSS3 (Flexbox, transitions, media queries)
- Vanilla JavaScript (DOM manipulation, `dataset`, `setTimeout`, array methods)

## Known Issues / To Fix

A couple of selector mismatches are currently preventing some styles from applying:

- The HTML answers wrapper uses `class="answer-container"`, but the CSS rule is written as `.answers-container` (with an "s"). One of these needs to be updated so they match.
- The result screen CSS rules `#resut-screen` and `.resut-info` are missing the "l" in "result" — these should be `#result-screen` and `.result-info` to match the HTML.

## Possible Future Improvements

- Add a timer per question
- Shuffle answer order on each load
- Add categories or difficulty levels
- Store high scores in `localStorage`
- Add keyboard support (number keys to select answers)

## Author

Built by Syed Ahsan as part of a frontend mini-projects portfolio.
