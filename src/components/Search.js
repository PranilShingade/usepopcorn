/**
 * Reusable Search input component
 * @param {Object} props
 * @param {string} props.query - Current search query
 * @param {Function} props.onSetQuery - Function to update search query
 * @param {string} props.placeholder - Placeholder text
 */
export function Search({query, onSetQuery, placeholder = "Search movies..."}) {
  return (
    <input
      className="search"
      type="text"
      placeholder={placeholder}
      value={query}
      onChange={(e) => onSetQuery(e.target.value)}
    />
  );
}