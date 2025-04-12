/**
 * Navigation component that provides responsive navigation with mobile support
 * and dynamic route highlighting.
 */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code, Menu, X } from 'lucide-react';

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const location = useLocation();
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Navigation links configuration
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/events', label: 'Events' },
    { path: '/membership', label: 'Membership' },
    { path: '/resources', label: 'Resources' },
    { path: '/contact', label: 'Contact' },
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <nav className="sticky top-0 bg-[var(--background)] border-b-2 border-[var(--secondary)] z-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and brand */}
          <Link to="/" className="flex items-center group">
            <Code className="h-8 w-8 text-[var(--accent)] transform group-hover:rotate-12 transition-transform duration-200" />
            <span className="ml-2 font-bold text-lg">SAU ACM</span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Dark mode toggle - now visible on mobile */}
            {children}
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-[var(--secondary)] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link font-medium capitalize ${
                  location.pathname === path ? 'text-[var(--accent)] bg-[var(--secondary)]' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div 
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`block px-3 py-2 rounded-xl font-medium capitalize ${
                location.pathname === path 
                  ? 'text-[var(--accent)] bg-[var(--secondary)]' 
                  : 'hover:bg-[var(--secondary)]'
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;