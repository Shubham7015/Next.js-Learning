export default function Layout({ children, team, analytics }) {
  return (
    <div className="grid grid-cols-2 gap-4 h-screen p4">
      <div className="overflow-auto">{children}</div>

      <div className="grid grid-rows-2 gap-4">
        <div className="overflow-auto">{team}</div>
        <div className="overflow-auto">{analytics}</div>
      </div>
    </div>
  );
}
