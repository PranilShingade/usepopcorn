import {WatchedMovie} from "./WatchedMovie";

/**
 * List of watched movies component
 * @param {Object} props
 * @param {Array} props.watched - Array of watched movie objects
 * @param {Function} props.onDeleteWatched - Function to delete movie from watched list
 */
export function WatchedMoviesList({watched, onDeleteWatched}) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}