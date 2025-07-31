/**
 * Individual watched movie item component
 * @param {Object} props
 * @param {Object} props.movie - Watched movie object
 * @param {Function} props.onDeleteWatched - Function to delete movie from watched list
 */
export function WatchedMovie({movie, onDeleteWatched}) {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`}/>
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
      {onDeleteWatched && (
        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          ×
        </button>
      )}
    </li>
  );
}