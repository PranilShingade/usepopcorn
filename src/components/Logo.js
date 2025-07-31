/**
 * Reusable Logo component
 * @param {Object} props
 * @param {string} props.emoji - Emoji to display
 * @param {string} props.title - Title text
 */
export function Logo({emoji = "🍿", title = "usePopcorn"}) {
  return (
    <div className="logo">
      <span role="img">{emoji}</span>
      <h1>{title}</h1>
    </div>
  );
}