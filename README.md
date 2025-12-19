
# Movies App

## Deployed Link

[Live Demo](https://browseflix.netlify.app/)

---
## Project Title & Description

A React-based movie discovery application that fetches and displays popular movies using **The Movie Database (TMDB) API**. Users can browse a responsive grid of movie posters and click to view detailed information about each film.


**Tech Stack:**

- React with Hooks (`useState`, `useEffect`, `useParams`)
- React Router for multi-page navigation
- Styled Components
- TMDB API for movie data
- Vite as the build tool

**Key Features:**

- Browse popular movies in popular movies page
- View detailed movie information (title, rating, overview, backdrop) in the movie details page


**Challenges Overcome:**

- Extracting and using API data structure effectively
- Responsive image handling and Lighthouse optimization
- Using `$` prefix in styled-components to avoid React DOM warnings
- Nested component hover effects without class names in styled-components
- Used environment variables (`import.meta.env.VITE_TMDB_API_KEY`) for secure API key storage
- Fixed an issue with Netlify’s secret scanning when deploying a Vite app by telling it to ignore a public API key, since Vite makes VITE_* variables available in the browser.

## Work Progress - 

### Movies.jsx
**Implemented features:**
- Created main Movies page displaying popular movies from TMDB API
- Implemented state management with `useState` hooks:
  - `movies` - stores fetched movie data
  - `loading` - handles loading state
  - `error` - manages error states
- Added API integration using `fetch` to retrieve popular movies from TMDB
- Implemented error handling with HTTP status validation
- Created conditional rendering:
  - Shows `Loader` component during data fetching
  - Displays error message if API call fails
  - Renders movie grid when data is successfully loaded
- Styled with `styled-components` in MovieCard.jsx
- Mapped through movie results and rendered `MovieCard` component for each movie
- Used React Router's `Link` component 

### NotFound.jsx
**Implemented features:**
- Created custom 404 error page
- Built with `styled-components` for styling:
  - `NotFoundWrapper` - full-screen centered container with gradient background
  - `ErrorCode` - large animated "404" text with gradient effect
  - `Title` - styled heading with text shadow
  - `Message` - user-friendly error message with emoji
  - `BackButton` - styled Link component with hover effects
- Added navigation back to home page using React Router's `Link` component

### MovieDetails.jsx
**Implemented features:**
- Created dynamic movie details page using `UseParams`
- Implemented state management with `useState` hooks:
  - `movie` - stored fetched movie details data
  - `loading` - handles loading state
  - `error` - manages 404 error page
- Fetched movie details from TMDB API using `fetch`
- Implemented `useEffect` to trigger data fetch when movie ID changes
- Implemented conditional rendering:
  - Displays loader component while fetching data
  - Renders NotFound page on error
  - Shows MovieDetailContent when data i successfully loaded
  - Separated concerns by delegating UI rendering to MovieDetailContent

### Roadmap

1. **Phase 1** - Basic list + detail pages with routing
2. **Phase 2** - Responsive design & performance optimization
3. **Phase 3** - Styled Components refactor

### Team Contributions
- **Jennifer Jansson**
- **Sandra Hagevall**
