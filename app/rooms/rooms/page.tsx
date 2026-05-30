import Link from "next/link";
import { Wifi, Wind, Tv, Shield, Coffee, Crown } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Rooms & Suites" };

const rooms = [
  {
    type: "Standard",
    title: "Standard Room",
    desc: "Comfortable, air-conditioned room with flat-screen TV, free WiFi, and private bathroom. Perfect for solo travelers and couples.",
    price: "₦35,000",
    gradient: "from-purple-500 to-purple-400",
    features: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Wind, label: "Air Conditioning" },
      { icon: Tv, label: "Flat-Screen TV" },
    ],
  },
  {
    type: "Deluxe",
    title: "Deluxe Room",
    desc: "Spacious room with city view, premium bed, laptop workspace, and in-room safe. Ideal for business travelers.",
    price: "₦55,000",
    gradient: "from-purple-400 to-purple-300",
    features: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Wind, label: "Air Conditioning" },
      { icon: Shield, label: "In-Room Safe" },
    ],
  },
  {
    type: "Suite",
    title: "Luxury Suite",
    desc: "Our finest accommodation — separate sitting area, city view, VIP lounge access, and pillow menu included.",
    price: "₦85,000",
    gradient: "from-purple-700 to-purple-500",
    features: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Crown, label: "VIP Access" },
      { icon: Coffee, label: "In-Room Bar" },
    ],
  },
];

export default function RoomsPage() {
  return (
    <div>
      <section className="bg-purple-700 pt-20 pb-16 px-6 text-center">
        <p className="font-inter text-xs font-semibold text-gold-400 uppercase tracking-widest mb-4">Accommodation</p>
        <h1 className="font-playfair text-5xl md:text-6xl font-semibold text-white mb-4">
          Our Rooms & Suites
        </h1>
        <p className="font-inter text-purple-200 max-w-xl mx-auto">
          38 exquisite rooms styled with fine craftsmanship, impeccable taste, and uncompromising dedication to detail.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.title} className="bg-white border border-purple-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`h-48 bg-gradient-to-br ${room.gradient} flex items-center justify-center relative`}>
                <div className="text-white/20 font-playfair text-7xl">{room.type[0]}</div>
                <div className="absolute top-4 left-4 bg-purple-800/80 text-gold-400 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded">
                  {room.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-purple-700 mb-2">{room.title}</h3>
                <p className="font-inter text-sm text-gray-500 leading-relaxed mb-4">{room.desc}</p>
                <div className="font-playfair text-2xl font-semibold text-purple-500 mb-4">
                  {room.price} <span className="font-inter text-sm font-normal text-gray-400">/ night</span>
                </div>
                <div className="flex gap-4 mb-5 pb-5 border-b border-purple-50">
                  {room.features.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-1.5 font-inter text-xs text-gray-500">
                      <Icon className="w-3.5 h-3.5 text-purple-500" />
                      {label}
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="block text-center bg-purple-500 text-white font-inter text-sm font-medium py-3 rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Book This Room
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-purple-50 border border-purple-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-playfair text-2xl font-semibold text-purple-700 mb-2">Need help choosing?</h3>
            <p className="font-inter text-sm text-gray-500">Call us and our team will help you find the perfect room for your stay.</p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link href="/contact" className="bg-purple-500 text-white font-inter text-sm px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors">
              Contact Us
            </Link>
            <a href="tel:+2348134779599" className="border border-purple-500 text-purple-500 font-inter text-sm px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
