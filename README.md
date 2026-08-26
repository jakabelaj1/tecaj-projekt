
# Movie & Series Tracker

A web application designed to help users track their watched movies and series. The app allows manual addition of content as well as searching and adding items from the TMDB API.

## Features

- **Library Management**: View, add, remove, and mark movies/series as watched
- **TMDB Integration**: Search for movies and series using the TMDB API
- **Detailed Content Views**: View detailed information about each movie or series
- **Responsive Design**: Works on desktop and mobile devices

## Technologies Used

### Frontend
- **React** (v19.2.7)
- **JavaScript** (ES6+)
- **SCSS** (with sass-embedded v1.100.0)
- **React DOM** (v19.2.7)

### Backend & Development
- **json-server** (v1.0.0-beta.15) - Local JSON database server
- **Vite** (v8.1.1) - Build tool and development server
- **ESLint** (v10.6.0) - Code linting
- **React Hooks** - State management and side effects
- **React Refresh** - Fast refresh during development

### Styling
- **normalize.scss** (v0.1.0) - CSS normalization
- **sass-reset** (v1.0.9) - SCSS reset styles
- **SCSS** for component styling with responsive design

## Installation

To install and run the project locally:

1. Clone or download the repository
2. Navigate to the project directory
3. Run `npm install` to install all dependencies

## Running the Project

### Development Server
To start the development server:

run `npm run dev`


This will start the Vite development server.

### Database Server
To run the local database server:

run ``json-server data.json``


The application will be accessible at `http://localhost:5173` and the database will be available at `http://localhost:3000`.

## Project Structure

- `src/` - Main source code directory
    - `app/` - React components
    - `data.json` - Local database file
    - `main.jsx` - Entry point for the application

## Usage

1. **Library View**: Browse your collection of movies and series
2. **Search View**: Search for new movies or series using TMDB API
3. **Add Content**: Manually add new items to your library
4. **Manage Items**: Mark as watched/unwatched, remove items, and view details

## Contributing

This project is intended for educational purposes within the "tecaj projekt" context. Contributions are not accepted.

## License

This project is licensed under the MIT License.