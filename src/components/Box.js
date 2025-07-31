/**
 * Reusable collapsible box component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to display when expanded
 * @param {boolean} props.isOpen - Whether the box is open/expanded
 * @param {Function} props.onToggle - Function to toggle open/closed state
 */
export function Box({children, isOpen, onToggle}) {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={onToggle}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}