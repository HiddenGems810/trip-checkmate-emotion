import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-void text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="text-[10px] font-mono tracking-ultra uppercase text-neutral-500 mb-2">
        Error 404 // Off The Board
      </div>
      <h1 className="font-display-condensed text-7xl sm:text-9xl tracking-tightest mb-4">
        OUT OF BOUNDS
      </h1>
      <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-8 max-w-sm">
        This coordinate does not exist in the collection matrix.
      </p>
      <Link
        href="/"
        className="bg-white text-black px-8 py-3 text-xs font-mono font-bold tracking-ultra uppercase hover:bg-neutral-200 transition-colors"
      >
        Return To Board
      </Link>
    </div>
  );
}
