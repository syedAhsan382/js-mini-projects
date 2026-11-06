# Dice Roller

A simple dice roller web app built with HTML, CSS, and JavaScript. Choose how many dice you want, click the button, and the program rolls them at random and shows each die face as an image.

## Features

- Roll one or many dice at once
- Each die gives a random number from 1 to 6
- Shows the numbers as text (for example: `dice: 3, 6, 1`)
- Shows each die face as an image
- Styled button with hover and click effects

## Project Structure

```
dice-roller/
├── index.html      # Page structure (input, button, result areas)
├── dice.css        # Styling (fonts, colors, button, dice images)
├── dice.js         # Dice rolling logic
└── Images/
    ├── 1.png       # Die face images
    ├── 2.png
    ├── 3.png
    ├── 4.png
    ├── 5.png
    └── 6.png
```

## How to Run

1. Download or clone this project.
2. Make sure the `Images` folder contains the six dice images named `1.png` to `6.png`.
3. Open `index.html` in any web browser.
4. Type the number of dice and click **Roll dice**.

No installation or extra tools are needed.

## How It Works

When the **Roll dice** button is clicked, the `rollDice()` function in `dice.js` runs:

1. It reads the number of dice from the input box.
2. A `for` loop runs once for each die.
3. Inside the loop, a random number from 1 to 6 is made:
   ```javascript
   const value = Math.floor(Math.random() * 6) + 1;
   ```
   - `Math.random()` gives a decimal number from 0 up to (but not including) 1.
   - Multiplying by 6 makes it a number from 0 up to (but not including) 6.
   - `Math.floor()` rounds it down to a whole number (0 to 5).
   - Adding 1 makes the final result 1 to 6.
4. The number is saved in the `values` array, and an `<img>` tag for that number is saved in the `images` array.
5. After the loop, the numbers are shown as text in `#diceResult`, and the images are shown in `#diceImages`.

## Technologies Used

- **HTML** for the page structure
- **CSS** for the design (Google Fonts, gradients, button effects)
- **JavaScript** for the rolling logic and updating the page

## What I Learned

- Using `Math.random()` and `Math.floor()` to make random whole numbers
- Using a `for` loop to repeat an action
- Storing values in arrays with `push()` and combining them with `join()`
- Reading input with `document.getElementById()`
- Changing page content with `textContent` and `innerHTML`

## Possible Improvements

- Limit the number of dice so the page does not get too crowded
- Add a rolling animation
- Show the total of all dice
- Add a sound when the dice are rolled

## Author

Syed Ahsan
