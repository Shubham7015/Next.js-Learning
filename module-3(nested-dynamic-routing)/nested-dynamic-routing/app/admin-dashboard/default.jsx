// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center mb-6 text-muted-foreground">
        {/* replace with any icon lib you're using */}
        <span className="text-2xl">⊘</span>
      </div>

      <p className="text-7xl font-medium tracking-tight leading-none mb-2">404</p>
      <h1 className="text-xl font-medium mb-2">Page not found</h1>
      <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-8">
        The page you're looking for doesn't exist or has been moved somewhere else.
      </p>

      <div className="flex gap-3 flex-wrap justify-center">
        <Link
          href="/admin-dashboard"
          className="inline-flex items-center gap-2 bg-foreground text-background rounded-lg px-4 py-2 text-sm font-medium"
        >
          Go back to dashboard
        </Link>
      </div>
    </div>
  );
}