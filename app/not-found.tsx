import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p className="font-playfair text-9xl font-semibold text-purple-100 mb-4">404</p>
      <h2 className="font-playfair text-4xl font-semibold text-purple-700 mb-3">
        Page not found
      </h2>
      <p className="font-inter text-gray-500 mb-8 max-w-sm">
        This page checked out. Let us take you back to the lobby.
      </p>
      <Link
        href="/"
        className="bg-purple-500 text-white font-inter text-sm px-6 py-3.5 rounded-lg hover:bg-purple-600 transition-colors"
      >
        Back to Home
      </Link>
    </section>
  );
}
