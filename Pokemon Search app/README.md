Pokémon Search App
A simple browser-based app that lets you search for any Pokémon by name and instantly view its sprite, powered by the PokéAPI.

Features

Search any Pokémon by name
Displays the official front sprite of the Pokémon
Clean, dark-themed UI
Handles errors gracefully via the browser console


Tech Stack

HTML5 — Page structure
CSS3 — Styling and dark theme layout
JavaScript (Vanilla) — API calls and DOM manipulation
PokéAPI — Free, open Pokémon data API


Project Structure
pokemon-search-app/
├── index.html     # Main HTML file
├── style.css      # Styling
└── script.js      # Fetch logic and DOM updates

How to Use

Clone or download the repository.
Open index.html in any modern browser — no build tools or dependencies required.
Type a Pokémon name (e.g. pikachu, charizard) into the input field.
Click the Search button to fetch and display the Pokémon's sprite.


How It Works
The app calls the PokéAPI endpoint:
GET https://pokeapi.co/api/v2/pokemon/{name}
It reads the sprites.front_default field from the response and sets it as the src of the image element, making the sprite visible on the page.

API Reference
Field UsedDescriptionsprites.front_defaultURL of the Pokémon's front-facing sprite image
Full API documentation: https://pokeapi.co/docs/v2

Known Limitations

Searching on page load is called with an empty input, which will throw a console error until the user types a name. This can be fixed by adding an input validation check before fetching.
No on-screen error message is shown for invalid Pokémon names — errors are only logged to the browser console.
No loading indicator while the fetch request is in progress.


Possible Improvements

Show an error message in the UI for invalid names
Add a loading spinner while fetching
Display additional Pokémon details (name, types, stats)
Add keyboard support (press Enter to search)
Add a back sprite toggle


License
This project is open source and free to use.
