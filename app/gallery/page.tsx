import type { Metadata } from "next";

export const metadata: Metadata = { title: "Gallery" };

const placeholders = [
  { label: "Hotel Exterior", span: "md:col-span-2 md:row-span-2", height: "h-72", gradient: "from-purple-500 to-purple-400" },
  { label: "Indoor Pool", span: "", height: "h-32", gradient: "from-purple-700 to-purple-500" },
  { label: "Deluxe Room", span: "", height: "h-32", gradient: "from-purple-400 to-purple-300" },
  { label: "Restaurant", span: "", height: "h-32", gradient: "from-purple-800 to-purple-600" },
  { label: "Rooftop Bar", span: "", height: "h-32", gradient: "from-purple-600 to-purple-400" },
  { label: "Conference Hall", span: "md:col-span-2", height: "h-48", gradient: "from-purple-700 to-purple-500" },
];

export default function GalleryPage() {
  return (
    <div>
      <section className="bg-purple-700 pt-20 pb-16 px-6 text-center">
        <p className="font-inter text-xs font-semibold text-gold-400 uppercase tracking-widest mb-4">Visual Tour</p>
        <h1 className="font-playfair text-5xl md:text-6xl font-semibold text-white mb-4">Hotel Gallery</h1>
        <p className="font-inter text-purple-200 max-w-xl mx-auto">
          A glimpse of what awaits you at Vinpy Hotels.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
          {placeholders.map((item) => (
            <div
              key={item.label}
              className={`${item.span} rounded-2xl overflow-hidden cursor-pointer group`}
            >
              <div
                className={`${item.height} bg-gradient-to-br ${item.gradient} flex items-center justify-center relative group-hover:brightness-110 transition-all duration-300`}
              >
                <div className="text-center">
                  <div className="font-playfair text-4xl text-white/20 mb-2">V</div>
                  <p className="font-inter text-xs text-white/40 uppercase tracking-widest">{item.label}</p>
                  <p className="font-inter text-xs text-white/25 mt-1">Replace with photo</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-inter text-sm text-gray-500">
            Follow us on{" "}
            
              href="https://www.instagram.com/vinpyhotels/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 font-medium hover:text-purple-700 transition-colors"
            >
              @vinpyhotels on Instagram
            </a>{" "}
            for more photos and videos.
          </p>
        </div>
      </section>
    </div>
  );
}
