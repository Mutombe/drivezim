// Footer Component
import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Clock, Wrench, Truck, Shield, Users, Award, ChevronRight, Star, Facebook, Twitter, Linkedin, Instagram, Globe, MessageSquare, Zap, Target, Heart, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { useLanguage } from '../lunguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', path: '/story' },
      { label: 'Our Fleet', path: '/fleet' },
      { label: 'Careers', path: '#' },
      { label: 'Contact', path: '/contact' }
    ],
    services: [
      { label: 'Emergency Towing', path: '/services' },
      { label: 'Roadside Assistance', path: '/services' },
      { label: 'Vehicle Recovery', path: '/services' },
      { label: '24/7 Support', path: '/contact' }
    ],
    legal: [
      { label: 'Privacy Policy', path: '#' },
      { label: 'Terms of Service', path: '#' },
      { label: 'Insurance Info', path: '#' },
      { label: 'FAQs', path: '#' }
    ]
  };

  const socials = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/DriveZimbabwe', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/drive-zim-drive-zimbabwe-roadside-assistance-0aa0a3251', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-xl">DRIVE ZIMBABWE</div>
                <div className="text-red-500 text-xs font-medium">ROADSIDE ASSISTANCE</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Zimbabwe's most trusted roadside assistance provider. Fast, reliable, and cost-effective service available 24/7.
            </p>
            
            {/* Emergency Contact */}
            <div className="bg-red-600/10 backdrop-blur-xl border border-red-500/20 rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs">Emergency Hotline</div>
                  <a href="tel:0780579261" className="text-white font-bold text-lg hover:text-red-500 transition-colors">
                    078 057 9261
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 bg-white/5 hover:bg-red-600 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-red-500 transition-colors flex items-center space-x-2 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-red-500 transition-colors flex items-center space-x-2 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-red-500 transition-colors flex items-center space-x-2 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © {currentYear} Drive Zimbabwe Roadside Assistance Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-red-500" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-red-500" />
                <span>4.8★ Rated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-red-500" />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;