/**
 * Navigation bar component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components to render
 */
export function NavBar({children}) {
  return <nav className="nav-bar">{children}</nav>;
}