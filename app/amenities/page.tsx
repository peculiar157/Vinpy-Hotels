import type { Metadata } from "next";
import { Waves, UtensilsCrossed, Wine, Dumbbell, Wifi, Zap, Coffee, Users, Monitor, Leaf, Car, Circle } from "lucide-react";

export const metadata: Metadata = { title: "Amenities" };

const amenities = [
  { icon: Waves, label: "Indoor Pool" },
  { icon: UtensilsCrossed, label: "Restaurant" },
  { icon: Wine, label: "Rooftop Bar" },
  { icon: Dumbbell, label: "Gym" },
  { icon: Wifi, label: "Free WiFi" },
  { icon: Zap, label: "24hr Power" },
  { icon: Coffee, label: "Coffee Bar" },
  { icon: Users, label: "Event Hall" },
  { icon: Monitor, label: "Conference Room" },
  { icon: Leaf, label: "Green Lounge" },
  { icon: Car, label: "Free Parking" },
  { icon: Circle, label: "Snooker" },
];

const events = [
  { title: "500-Seat Conference Hall", sub: "Corporate & government events" },
  { title: "Banquet & Dining Hall", sub: "Weddings, birthdays, celebrations" },
  { title: "Boardroom", sub: "Executive meetings & seminars" },
];

export default function AmenitiesPage() {
  return (
    <div>
      <section className="bg-purple-700 pt-20 pb-16 px-6 text-center">
        <p className="font-inter text-xs font-semibold text-gold-400 uppercase tracking-widest mb-4">Facilities</p>
        <h1 className="font-playfair text-5xl md:text-6xl font-semibold text-white mb-4">Hotel Amenities</h1>
        <p className="font-inter text-purple-200 max-w-xl mx-auto">
          Everything you need for a perfect stay — all under one roof.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {amenities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-white border border-purple-100 rounded-xl p-5 text-center hover:border-purple-500 hover:bg-purple-50 transition-all duration-200"
            >
              <Icon className="w-7 h-7 text-purple-500 mx-auto mb-3" />
              <p className="font-inter text-sm font-medium text-purple-700">{label}</p>
            </div>
          ))}
        </div>

        <div className="bg-purple-700 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-inter text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">Event Hosting</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-white mb-4">
              Exquisite halls for your events
            </h2>
            <p className="font-inter text-purple-200 leading-relaxed text-sm">
              Our 500-seater conference hall is equipped with a modern PA system, projector, and digital trace board — built for corporate retreats, weddings, and banqueting.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {events.map((e) => (
              <div key={e.title} className="bg-white/10 border border-gold-400/20 rounded-xl p-4 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-gold-400 flex-shrink-0" />
                <div>
                  <p className="font-inter text-sm font-medium text-white">{e.title}</p>
                  <p className="font-inter text-xs text-purple-200">{e.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
