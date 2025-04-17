
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tattoo-dark py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="font-display text-2xl font-bold text-white inline-block">
              <span className="text-accent">NOVA</span> Tattoos & Beauty
            </Link>
            <p className="text-gray-400">Transforming your vision into permanent artistry. Your body, our canvas.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/tattoos" className="text-gray-400 hover:text-accent transition-colors">Custom Tattoos</Link>
              </li>
              <li>
                <Link to="/services/eyebrows" className="text-gray-400 hover:text-accent transition-colors">Permanent Eyebrows</Link>
              </li>
              <li>
                <Link to="/services/piercings" className="text-gray-400 hover:text-accent transition-colors">Piercings</Link>
              </li>
              <li>
                <Link to="/services/touch-ups" className="text-gray-400 hover:text-accent transition-colors">Touch Ups</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-accent transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-accent transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/aftercare" className="text-gray-400 hover:text-accent transition-colors">Aftercare</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Ink Street</p>
              <p>Art District, Cape Town 8001</p>
              <p>Phone: (021) 123-4567</p>
              <p>Email: info@novatattoos.co.za</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} NOVA Tattoos & Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
