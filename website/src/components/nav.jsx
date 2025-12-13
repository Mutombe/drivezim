import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Clock, Wrench, Truck, Shield, Users, Award, ChevronRight, Star, Facebook, Twitter, Linkedin, Instagram, Globe, MessageSquare, Zap, Target, Heart, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { useLanguage } from '../lunguageContext';

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/story', label: t.nav.about },
    { path: '/services', label: t.nav.services },
    { path: '/fleet', label: t.nav.fleet },
    { path: '/contact', label: t.nav.contact }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <div className="w-16 h-15 flex items-center justify-center ">
                <img src="/logo3.png" alt="Drive Zimbabwe Logo" className="w-15 h-15" />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 rounded-lg transition-all ${location.pathname === link.path ? 'bg-red-600 text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                >
                  {link.label}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Language & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white/10 text-white border border-white/20 rounded-lg px-3 py-2 text-sm backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="en">EN</option>
              <option value="nd">ND</option>
              <option value="fr">FR</option>
            </select>
            <motion.a
              href="tel:0780579261"
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2.5 rounded-lg font-semibold flex items-center space-x-2 shadow-xl hover:shadow-red-500/50 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>{t.nav.quote}</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/98 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
                  <div className={`block px-4 py-3 rounded-lg ${location.pathname === link.path ? 'bg-red-600 text-white' : 'text-gray-300 hover:bg-white/10'}`}>
                    {link.label}
                  </div>
                </Link>
              ))}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3"
              >
                <option value="en">English</option>
                <option value="nd">Ndebele</option>
                <option value="fr">Français</option>
              </select>
              <a href="tel:0780579261" className="block w-full bg-red-600 text-white px-4 py-3 rounded-lg text-center font-semibold">
                {t.nav.quote}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;



