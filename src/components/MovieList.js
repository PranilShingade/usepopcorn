import {Movie} from "./Movie";

/**
 * List of movies component
 * @param {Object} props
 * @param {Array} props.movies - Array of movie objects
 * @param {Function} props.onSelectMovie - Function called when a movie is selected
 */
export function MovieList({movies, onSelectMovie}) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          key={movie.imdbID}
          movie={movie}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
}