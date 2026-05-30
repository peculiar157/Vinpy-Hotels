import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms & Suites" },
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="font-playfair text-lg font-bold text-gold-400">V</span>
              </div>
              <span className="font-playfair text-xl font-semibold text-white">
                Vinpy <span className="text-gold-400">Hotels</span>
              </span>
            </div>
            <p className="font-inter text-xs text-purple-200 uppercase tracking-widest mb-3">
              Your comfort, our priority
            </p>
            <p className="font-inter text-sm text-purple-300 leading-relaxed mb-6 max-w-xs">
              An exquisitely finished boutique hotel in the heart of Uyo, Akwa Ibom State, Nigeria.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-purple-500 transition-colors">
                <Facebook className="w-4 h-4 text-gold-400" />
              </a>
              <a href="https://www.instagram.com/vinpyhotels/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-purple-500 transition-colors">
                <Instagram className="w-4 h-4 text-gold-400" />
              </a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-purple-500 transition-colors">
                <Twitter className="w-4 h-4 text-gold-400" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-inter text-xs font-semibold text-gold-400 uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-purple-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-inter text-xs font-semibold text-gold-400 uppercase tracking-widest mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <p className="font-inter text-sm text-purple-300 leading-relaxed">
                  10 Udo Udoma Avenue, Off Oron Road,<br />
                  Uyo, Akwa Ibom State, Nigeria
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <div>
                  <p className="font-inter text-sm text-purple-300">+234 813 477 9599</p>
                  <p className="font-inter text-sm text-purple-300">+234 901 387 4290</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <p className="font-inter text-sm text-purple-300">reservations@vinpyhotels.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-purple-600">
            © {new Date().getFullYear()} Vinpy Hotels. All rights reserved.
          </p>
          <p className="font-playfair text-xs italic text-purple-600">
            Your comfort, our priority.
          </p>
        </div>
      </div>
    </footer>
  );
}
