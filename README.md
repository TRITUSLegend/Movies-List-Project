# Movies List Project

A responsive React application that allows users to search for movies and manage a personal watch list.
It uses the OMDb API to fetch movie data and serverless functions to securely handle API key requests.

## Features

* Search for movies by title and view key details like poster, release year, and rating.
* Add or remove movies from a personalized watch list.
* API key is protected using Netlify serverless functions.
* Clean and responsive UI built with React and plain CSS.

## Live Demo

Check out the live version here:
**[https://movies-list-project.netlify.app/](https://movies-list-project.netlify.app/)**

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/TRITUSLegend/Movies-List-Project.git
   cd Movies-List-Project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Get an OMDb API key:
   Visit [omdbapi.com](http://www.omdbapi.com/apikey.aspx) and request your key.

4. Create a `.env` file in the root directory:

   ```
   REACT_APP_API_KEY=your_omdb_api_key
   ```

5. Start the development server:

   ```bash
   npm start
   ```

## Project Structure

```
.
├── public/
├── src/
│   ├── components/
│   ├── services/
│   ├── App.js
│   └── index.js
├── functions/
├── .env
├── package.json
└── netlify.toml
```

## API Key Security

The OMDb API key is handled through a serverless function (`functions/` directory) to prevent exposure in client-side code.
All API requests are routed through this function to maintain security.

## Deployment

This project is configured for deployment on Netlify.

* Build command: `npm run build`
* Publish directory: `build/`
* Add environment variable `REACT_APP_API_KEY` in your Netlify dashboard.
* Netlify will automatically deploy from GitHub on each push.

## Usage

1. Use the search bar to find a movie.
2. Browse through the search results.
3. Add movies to your list with a single click.
4. View and manage your watch list directly from the interface.

---
