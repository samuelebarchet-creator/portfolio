/* CSS, not JS: the fade must start with the first paint. A hydration-time
   animation hides content the visitor is already looking at. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
