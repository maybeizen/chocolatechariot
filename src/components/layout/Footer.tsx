import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-black pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif mb-4">Chocolate Chariot</h3>
            <p className="mb-4 text-black">
              Bringing gourmet chocolate experiences to the streets. Premium,
              affordable treats for every chocolate lover.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-black">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-black">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-black">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-black hover:text-black transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-black hover:text-black transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#build-a-box"
                  className="text-black hover:text-black transition-colors"
                >
                  Build-A-Box
                </a>
              </li>
              <li>
                <a
                  href="#locations"
                  className="text-black hover:text-black transition-colors"
                >
                  Locations
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-black hover:text-black transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                <span>info@chocolatechariot.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                <span>Multiple locations - Check our schedule</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <ul className="space-y-2">
              <li>Monday - Friday: 11:00 AM - 8:00 PM</li>
              <li>Saturday: 10:00 AM - 9:00 PM</li>
              <li>Sunday: 12:00 PM - 6:00 PM</li>
              <li className="text-black mt-4 italic">
                *Hours may vary by location
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Chocolate Chariot. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
