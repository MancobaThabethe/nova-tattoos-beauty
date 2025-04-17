
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, LayoutDashboard } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="font-display text-2xl font-bold text-white">
              <span className="text-accent">NOVA</span> Tattoos & Beauty
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <NavLink 
                key={item.name}
                to={item.href}
                className={({ isActive }) => 
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button asChild>
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible'}`}>
        <div className="container-custom py-4 space-y-3 bg-background/95 backdrop-blur-md">
          {navigation.map((item) => (
            <NavLink 
              key={item.name}
              to={item.href}
              className={({ isActive }) => 
                `block py-2 ${isActive ? "text-accent font-medium" : "text-foreground/80 hover:text-accent"}`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink 
            to="/dashboard"
            className={({ isActive }) => 
              `block py-2 ${isActive ? "text-accent font-medium" : "text-foreground/80 hover:text-accent"}`
            }
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </NavLink>
          <div className="pt-2">
            <Button asChild className="w-full">
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
