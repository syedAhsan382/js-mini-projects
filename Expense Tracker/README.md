# Expense Tracker

A simple, responsive expense tracker built with vanilla HTML, CSS, and JavaScript. Add income and expenses, see your running balance update in real time, and everything persists locally in your browser — no backend required.

Images

## Features

- Add transactions with a description and amount
- Enter positive numbers for income, negative numbers for expenses
- Live-updating balance, total income, and total expenses
- Transaction list with newest entries shown first
- Delete individual transactions
- Data persists in `localStorage`, so your transactions are still there after a page refresh
- Fully responsive layout for mobile, tablet, and desktop
- Smooth hover effects and slide-in animation for new transactions

## Demo
> `https://daily-spend-vert.vercel.app/`

## Tech stack

- **HTML5** – semantic structure
- **CSS3** – Flexbox, CSS Grid, custom scrollbar styling, media queries for responsiveness
- **JavaScript (Vanilla)** – DOM manipulation, `localStorage` API, `Intl.NumberFormat` for currency formatting

## Project structure

```
expense-tracker/
├── index.html      # Markup
├── style.css       # Styling
├── expense.js      # App logic
└── README.md
```

## Getting started

### Run locally

1. Clone the repository
   ```bash
   git clone https://github.com/syedAhsan382/js-mini-projects/tree/main/Expense%20Tracker
   ```
2. Navigate into the project folder
   ```bash
   cd expense-tracker
   ```
3. Open `index.html` in your browser — no build step or dependencies needed.

### Usage

1. Enter a description (e.g. "Groceries" or "Salary")
2. Enter an amount:
   - Positive number → treated as income
   - Negative number → treated as an expense
3. Click **Add Transaction**
4. View your updated balance, income, and expense totals
5. Hover over any transaction to reveal the delete (×) button

## Roadmap / possible improvements

- [ ] Input validation for empty or non-numeric amounts
- [ ] Category tags for transactions (e.g. Food, Rent, Salary)
- [ ] Filter/search transactions
- [ ] Export transactions to CSV
- [ ] Dark mode toggle

## License

This project is licensed under the [MIT License](LICENSE).

## Author
Built by [Syed Muhammad Ahsan](https://github.com/syedAhsan382/js-mini-projects) as part of a personal JavaScript mini-projects series.
