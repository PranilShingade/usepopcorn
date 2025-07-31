import {useState} from "react";
import {Logo} from "./components/Logo";
import {Search} from "./components/Search";
import {NumResults} from "./components/NumResults";
import {NavBar} from "./components/NavBar";
import {Main} from "./components/Main";
import {Box} from "./components/Box";
import {MovieList} from "./components/MovieList";
import {WatchedMoviesList} from "./components/WatchedMoviesList";
import {WatchedSummary} from "./components/WatchedSummary";

// Sample data - in a real app, this would come from an API
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

/**
 * Utility function to calculate average of an array of numbers
 * @param {number[]} arr - Array of numbers
 * @returns {number} - Average value rounded to 1 decimal place
 */


/**
 * Main App component - manages global state and coordinates child components
 */
export default function App() {
  // State management
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  /**
   * Handle movie selection from search results
   * @param {Object} movie - Selected movie object
   */
  function handleSelectMovie(movie) {
    // In a real app, this would fetch movie details and show them
    console.log('Selected movie:', movie);
  }

  /**
   * Handle removing a movie from the watched list
   * @param {string} id - Movie ID to remove
   */
  function handleDeleteWatched(id) {
    setWatched(watched => watched.filter(movie => movie.imdbID !== id));
  }

  return (
    <>
      {/* Navigation Bar with Logo, Search, and Results Count */}
      <NavBar>
        <Logo />
        <Search query={query} onSetQuery={setQuery} />
        <NumResults count={movies.length} />
      </NavBar>

      {/* Main Content Area */}
      <Main>
        {/* Search Results Box */}
        <Box isOpen={isOpen1} onToggle={() => setIsOpen1(open => !open)}>
          <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
        </Box>

        {/* Watched Movies Box */}
        <Box isOpen={isOpen2} onToggle={() => setIsOpen2(open => !open)}>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList
            watched={watched}
            onDeleteWatched={handleDeleteWatched}
          />
        </Box>
      </Main>
    </>
  );
}