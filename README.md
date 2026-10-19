# VenueWise

VenueWise is a responsive venue-discovery web application for finding event venues by location, event type, capacity, facilities, and budget.

## Problem it solves

Finding a suitable venue often requires comparing many disconnected details. VenueWise brings venue discovery, filtering, estimated event costs, saved venues, and comparisons into one interface using clearly marked fictional demo data.

## Features

- Venue discovery by state, city, locality, venue type, event type, capacity, and budget
- Facility and space requirement filters
- Venue cards with capacity, pricing, availability, and match information
- Venue detail pages with estimated event costs
- Saved venues and venue comparison
- Budget planner and event planning flow
- Light and dark themes
- Responsive desktop and mobile layouts
- Native date selection controls
- Hash-based navigation that works without a build step

## Technologies

- HTML5
- CSS3
- React 18.3.1 loaded from CDN
- ReactDOM 18.3.1 loaded from CDN
- HTM 3.1.1 loaded from CDN
- Google Fonts: Bricolage Grotesque and DM Sans

This project does not use npm, Vite, or a bundler. The venue data is fictional demo data included in the application.

## Run locally

### Option 1: Python local server

From the project folder, run:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000/> in a browser.

### Option 2: VS Code Live Server

Install the **Live Server** extension in VS Code, right-click `index.html`, and select **Open with Live Server**.

## Project structure

```text
VenueWise/
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js
```

## Screenshots

Screenshots are not currently included in the repository.
