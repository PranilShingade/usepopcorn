/**
 * Component to display number of search results
 * @param {Object} props
 * @param {number} props.count - Number of results
 */
export function NumResults({count}) {
  return (
    <p className="num-results">
      Found <strong>{count}</strong> results
    </p>
  );
}