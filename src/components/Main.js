/**
 * Main content area component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components to render
 */
export function Main({children}) {
  return <main className="main">{children}</main>;
}