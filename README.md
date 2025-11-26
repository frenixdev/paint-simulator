<div style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
<h1> SVG Skeleton Color Customizer</h1>
<img  src="https://tenor.com/view/duong2-gif-3381597521751248348.gif"  width="200"    >

<p style="text-align: center;">An interactive SVG coloring tool built using TypeScript, HTML, and CSS.
The project allows users to dynamically apply colors to different parts of a skeleton SVG using event delegation and a color palette panel.</p>
</div>


## Features

- Skeleton SVG part coloring
- Event delegation using closest()
- Click-based color palette selection
- Cycling through skeleton shapes
- Custom cursor interaction
- Written entirely in TypeScript

## How It Works

  - The SVG is rendered directly inside a normal div element (no HTML canvas involved).
Each part of the skeleton SVG is accessed and modified using standard DOM APIs.

- A color panel is displayed as a grid of selectable colors.
When a color is clicked, it becomes active and is applied to the selected skeleton part.

- Event delegation is used to efficiently handle click events:
only valid color panel interactions are processed.

- Skeleton parts are cycled using safe modulo-based indexing to avoid boundary issues.

## UI Details

- The main display area is a div wrapper, not a canvas
- The color panel is a grid layout with an active color indicator
- A custom cursor is used for better desktop interaction
- Media queries ensure proper layout on smaller screens

## Tech Stack

- TypeScript
- HTML + (SVG)
- CSS
- Vanilla DOM APIs

## Core Concepts Practiced

- Event bubbling and delegation
- SVG manipulation via the DOM
- Type-safe state management
- Clean UI logic without frameworks
- Responsive design principles

## Possible Improvements

- Download or export colored SVG
- Undo / reset color actions
- Touch and keyboard navigation support
- Skeleton animation toggle

## Project Goal

This project is focused on strengthening frontend fundamentals by working directly with the DOM, SVGs, and events — without relying on external frameworks.
