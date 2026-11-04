# Testimonial Slider

A small project that shows customer testimonials one after another. Every 3 seconds, the photo, name, and review text change automatically to the next testimonial, and it loops back to the first one at the end.

<!-- Add a screenshot here: -->
<!-- ![Testimonial Slider screenshot](screenshot.png) -->

## Features

- Shows 3 testimonials, each with a photo, name, and review
- Changes automatically every 3 seconds
- Loops forever (after the last testimonial, it starts again from the first)
- Centered card with a round profile image

## Built With

- HTML
- CSS
- JavaScript (no libraries or frameworks)

## How to Run

1. Clone or download this repository.
2. Open `index.html` in your browser.

No install or build step is needed.

## Project Structure

```
testimonial-slider/
├── index.html    # Page structure
├── style.css     # Styling
└── script.js     # Testimonial data and slider logic
```

## How It Works

The testimonials are stored in an array of objects in `script.js`. A function called `updateTestimonial()` does the following:

1. Takes the testimonial at the current index (`idx`) and puts its image, text, and name on the page.
2. Increases the index by 1, and sets it back to 0 after the last testimonial.
3. Uses `setTimeout` to call itself again after 3 seconds, which keeps the slider running.

## Customizing

To change the testimonials, edit the `testimonials` array in `script.js`. To change the speed, change `3000` (milliseconds) in the `setTimeout` call.

## Author

**Ahsan**

- GitHub: [@your-username](https://github.com/your-username)
