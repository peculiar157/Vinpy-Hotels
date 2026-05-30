"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", checkin: "", checkout: "", room: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div>
      <section className="bg-purple-700 pt-20 pb-16 px-6 text-center">
        <p className="font-inter text-xs font-semibold text-gold-400 uppercase tracking-widest mb-4">Get in Touch</p>
        <h1 className="font-playfair text-5xl md:text-6xl font-semibold text-white mb-4">Book Your Stay</h1>
        <p className="font-inter text-purple-200 max-w-md mx-auto">
          Reach out directly or fill the form — we confirm reservations within hours.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h2 className="font-playfair text-2xl font-semibold text-purple-700">Contact Information</h2>

            {[
              { icon: MapPin, label: "Address", value: "10 Udo Udoma Avenue, Off Oron Road, Uyo, Akwa Ibom State, Nigeria" },
              { icon: Phone, label: "Reservations", value: "+234 813 477 9599\n+234 901 387 4290" },
              { icon: Mail, label: "Email", value: "reservations@vinpyhotels.com" },
              { icon: Clock, label: "Check-in / Check-out", value: "Check-in: 1:00 PM\nCheck-out: 12:00 PM (noon)" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="font-inter text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">{label}</p>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed whitespace-pre-line">{value}</p>
                </div>
              </div>
            ))}

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-5">
              <p className="font-inter text-xs font-semibold text-purple-500 mb-2">Follow Us</p>
              <p className="font-inter text-sm text-gray-500">@vinpyhotels on Instagram & Facebook</p>
              <a href="https://vinpyhotels.com" className="font-inter text-sm text-purple-500 font-medium mt-1 block hover:text-purple-700 transition-colors">
                vinpyhotels.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="font-playfair text-4xl font-semibold text-purple-700 mb-3">Request Sent!</h3>
                <p className="font-inter text-gray-500">
                  Thank you for reaching out. Our reservations team will be in touch within a few hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-playfair text-2xl font-semibold text-purple-700 mb-6">Send a Reservation Request</h2>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-inter text-xs font-medium text-gray-600 mb-1.5">Full Name</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className="w-full border border-purple-100 rounded-xl px-4 py-3 font-inter text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all bg-white" />
                  </div>
                  <div>
                    <label className="block font-inter text-xs font-medium text-gray-600 mb-1.5">Phone Number</label>
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+234 800 000 0000" className="w-full border border-purple-100 rounded-xl px-4 py-3 font-inter text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block font-inter text-xs font-medium text-gray-600 mb-1.5">Email Address</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" className="w-full border border-purple-100 rounded-xl px-4 py-3 font-inter text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all bg-white" />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-inter text-xs font-medium text-gray-600 mb-1.5">Check-in Date</label>
                    <input type="date" value={form.checkin} onChange={(e) => setForm({ ...form, checkin: e.target.value })} className="w-full border border-purple-100 rounded-xl px-4 py-3 font-inter text-sm text-gray-700 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all bg-white" />
                  </div>
                  <div>
                    <label className="block font-inter text-xs font-medium text-gray-600 mb-1.5">Check-out Date</label>
                    <input type="date" value={form.checkout} onChange={(e) => setForm({ ...form, checkout: e.target.value })} className="w-full border border-purple-100 rounded-xl px-4 py-3 font-inter text-sm text-gray-700 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block font-inter text-xs font-medium text-gray-600 mb-1.5">Room Type</label>
                  <select value={form.room} onChange={(e) => setForm({ ...form, room: e.target.value })} required className="w-full border border-purple-100 rounded-xl px-4 py-3 font-inter text-sm text-gray-700 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all bg-white">
                    <option value="">Select a room type...</option>
                    <option>Standard Room — ₦35,000/night</option>
                    <option>Deluxe Room — ₦55,000/night</option>
                    <option>Luxury Suite — ₦85,000/night</option>
                    <option>Event / Conference Hall</option>
                  </select>
                </div>
                <div>
                  <label className="block font-inter text-xs font-medium text-gray-600 mb-1.5">Message (optional)</label>
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Any special requests or questions..." className="w-full border border-purple-100 rounded-xl px-4 py-3 font-inter text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all bg-white resize-none" />
                </div>
                <button type="submit" disabled={loading} className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-inter text-sm font-medium px-8 py-3.5 rounded-xl transition-colors disabled:opacity-70">
                  {loading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send className="w-4 h-4" />}
                  {loading ? "Sending..." : "Send Reservation Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
