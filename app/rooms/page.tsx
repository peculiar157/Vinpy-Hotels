import Link from "next/link";
import { ArrowRight, MapPin, Sparkles, Wifi, Zap, Wine, UtensilsCrossed, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vinpy Hotels — Your Comfort, Our Priority",
};

const features = [
  { icon: Sparkles, title: "Indoor Pool", desc: "Clean water, lovely ambience — designed with exclusivity and guest comfort in mind." },
  { icon: UtensilsCrossed, title: "Fine Dining", desc: "African and continental cuisine served daily, spiced with exceptional customer service." },
  { icon: Users, title: "Event Halls", desc: "500-seat conference hall with modern PA system, projector, and digital trace board." },
  { icon: Wifi, title: "Free High-Speed WiFi", desc: "Stay connected with fast WiFi available throughout the entire property." },
  { icon: Wine, title: "Rooftop Bar", desc: "Unwind with drinks and panoramic city views at our exclusive rooftop bar." },
  { icon: Zap, title: "24-Hour Power", desc: "Uninterrupted power supply around the clock — no disruptions, ever." },
];

const stats = [
  { num: "38", label: "Exquisite Rooms" },
  { num: "4★", label: "Star Hotel" },
  { num: "500", label: "Seat Event Hall" },
];

const testimonials = [
  {
    stars: 5,
    text: "I had a nice experience in Vinpy hotel's pool. Clean water and lovely ambience. Staff were courteous, meals were delicious, rooms were spotless. I can't wait to visit again when I'm in Uyo.",
    name: "Ruth Gregory",
    date: "September 2023",
    initials: "RG",
  },
  {
    stars: 5,
    text: "Vinpy Hotels has an amazing environment and lovely scenery. Their poolside is also pretty good. The general ambiance at the hotel was excellent — highly recommended.",
    name: "Daniel James",
    date: "September 2023",
    initials: "DJ",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-purple-700 py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-400/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-purple-500/30 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold-400/15 border border-gold-400/30 text-gold-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded mb-6">
              <MapPin className="w-3 h-3" />
              10 Udo Udoma Avenue, Uyo, Akwa Ibom
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6">
              Your comfort,<br />
              <span className="italic text-gold-400">our priority.</span>
            </h1>
            <p className="font-inter text-lg text-purple-200 leading-relaxed mb-8 max-w-md">
              An exquisitely finished boutique hotel in the heart of Uyo — where modern luxury meets warm Nigerian hospitality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-400 text-purple-800 font-inter text-sm font-semibold px-6 py-3.5 rounded-lg hover:bg-gold-300 transition-colors"
              >
                Book a Room <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/amenities"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-inter text-sm px-6 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                Explore Amenities
              </Link>
            </div>
            <div className="flex gap-10 mt-10 pt-10 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-playfair text-3xl font-semibold text-gold-400">{s.num}</div>
                  <div className="font-inter text-xs text-purple-200 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="h-[400px] bg-gradient-to-br from-purple-500 via-purple-400 to-purple-700 flex items-center justify-center">
              <div className="text-center text-white/20">
                <div className="font-playfair text-9xl">V</div>
                <div className="font-inter text-sm tracking-widest mt-2 text-white/30 uppercase">Add your hotel photo here</div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-purple-800/90 border border-gold-400/30 rounded-xl p-4">
              <div className="font-playfair text-2xl font-semibold text-gold-400">4★</div>
              <div className="font-inter text-xs text-purple-200 mt-0.5">Rated Hotel in Uyo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-purple-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-inter text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-purple-700 mb-12">
            Everything you need,<br />all in one place
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-white border border-purple-100 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-purple-500" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-purple-700 mb-2">{f.title}</h3>
                  <p className="font-inter text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="h-[380px] bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
              <div className="text-center text-white/20">
                <div className="font-playfair text-8xl">V</div>
                <div className="font-inter text-xs tracking-widest mt-2 text-white/30 uppercase">Add hotel photo here</div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-purple-800/90 border border-gold-400/20 rounded-xl p-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-playfair text-xl font-semibold text-gold-400">38</div>
                <div className="font-inter text-xs text-purple-200">Rooms</div>
              </div>
              <div>
                <div className="font-playfair text-xl font-semibold text-gold-400">4★</div>
                <div className="font-inter text-xs text-purple-200">Rating</div>
              </div>
              <div>
                <div className="font-playfair text-xl font-semibold text-gold-400">500</div>
                <div className="font-inter text-xs text-purple-200">Seats</div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-inter text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">About Vinpy Hotels</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-purple-700 mb-6">
              A masterpiece in<br />the heart of Uyo
            </h2>
            <p className="font-inter text-gray-500 leading-relaxed mb-4">
              Vinpy Hotels is an exquisitely finished boutique hotel situated adjacent the Dakkada Secretariat on Udo Udoma Avenue — a four-storey building with 38 rooms styled with fine craftsmanship and uncompromising attention to detail.
            </p>
            <p className="font-inter text-gray-500 leading-relaxed mb-8">
              Just 2 minutes from Tropicana Mall and 25 minutes from Victor Attah International Airport.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { num: "38", label: "Rooms & Suites" },
                { num: "4★", label: "Star Rating" },
                { num: "25km", label: "From Airport" },
                { num: "500", label: "Seat Capacity" },
              ].map((f) => (
                <div key={f.label} className="bg-purple-50 rounded-xl p-4">
                  <div className="font-playfair text-2xl font-semibold text-purple-500">{f.num}</div>
                  <div className="font-inter text-xs text-purple-400 mt-1">{f.label}</div>
                </div>
              ))}
            </div>
            <Link
              href="/amenities"
              className="inline-flex items-center gap-2 bg-purple-500 text-white font-inter text-sm px-6 py-3.5 rounded-lg hover:bg-purple-600 transition-colors"
            >
              Explore Amenities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-purple-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-inter text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">Guest Reviews</p>
          <h2 className="font-playfair text-4xl font-semibold text-purple-700 mb-10">What our guests say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-purple-100 rounded-xl p-6">
                <div className="text-gold-400 text-lg tracking-widest mb-4">{"★".repeat(t.stars)}</div>
                <p className="font-inter text-sm text-gray-500 italic leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center font-inter text-xs font-semibold text-gold-400">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-inter text-sm font-semibold text-purple-700">{t.name}</p>
                    <p className="font-inter text-xs text-gray-400">{t.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple-700 py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-white mb-4">
            Ready to experience<br />
            <span className="italic text-gold-400">Vinpy Hotels?</span>
          </h2>
          <p className="font-inter text-purple-200 mb-8">
            Call us directly or fill out our booking form — we confirm reservations within hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-400 text-purple-800 font-inter text-sm font-semibold px-6 py-3.5 rounded-lg hover:bg-gold-300 transition-colors"
            >
              Make a Reservation <ArrowRight className="w-4 h-4" />
            </Link>
            
              href="tel:+2348134779599"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-inter text-sm px-6 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              +234 813 477 9599
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
