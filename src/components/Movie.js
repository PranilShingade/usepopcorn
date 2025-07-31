/**
 * Individual movie item component for search results
 * @param {Object} props
 * @param {Object} props.movie - Movie object
 * @param {Function} props.onSelectMovie - Function called when movie is selected
 */
export function Movie({movie, onSelectMovie}) {
  return (
    <li onClick={() => onSelectMovie?.(movie)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`}/>
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}