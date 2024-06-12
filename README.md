# Etch-a-Sketch

Welcome to the Etch-a-Sketch application! This project allows you to draw on a 16x16 grid using a color picker, a random color generator, and an eraser. 

## Features

- **Color Picker**: Select any color to draw on the grid.
- **Random Color**: Use a random color for each cell you hover over.
- **Eraser**: Clear the grid or individual cells by setting the background color to a default color.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Customization](#customization)

## Installation

1. Clone the repository or download the files.
2. Ensure you have the following files:
    - `index.html`: Contains the HTML structure.
    - `style.css`: Contains the CSS styles.
    - `scripts.js`: Contains the JavaScript functionality.

## Usage

1. Open `index.html` in your web browser.
2. You will see a 16x16 grid, a color picker, a random color button, and an erase button.
3. Use the color picker to select a color and hover over the grid cells to draw with the selected color.
4. Click the "Random" button to use random colors for drawing.
5. Click the "Erase" button to clear the grid.

## Code Structure

### HTML (`index.html`)

The HTML file contains the structure of the application:
- A title section.
- A control section with buttons and a color picker.
- A container for the grid.

### CSS (`style.css`)

The CSS file contains styles for:
- The body layout.
- The title.
- The control buttons.
- The grid and its cells.

### JavaScript (`scripts.js`)

The JavaScript file contains:
- Event listeners for the buttons and color picker.
- Functions to create the grid, apply colors, and erase the grid.
- A function to generate random colors.

## Customization

### Changing Grid Size

To change the grid size, modify the values in the nested `for` loops in `scripts.js`:

```javascript
for (let i = 1; i <= 16; i++) {
  const divOuter = document.createElement("div");
  divOuter.classList.add("row");
  for (let j = 1; j <= 16; j++) {
    const divInner = document.createElement("div");
    divInner.classList.add("cell");
    divOuter.appendChild(divInner);
  }
  container.appendChild(divOuter);
}
