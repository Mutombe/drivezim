import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ChevronRight, AlertCircle, Send, Facebook, Instagram, Linkedin, MessageSquare, CheckCircle, User, AtSign } from 'lucide-react';
import { MdStarPurple500 } from "react-icons/md";

// Mock translation object
const mockTranslations = {
  contact: {
    title: "Get In Touch",
    subtitle: "We're here to help 24/7. Reach out and let us assist you."
  }
};

const ContactPage = () => {
  const t = mockTranslations;
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [mapLoaded, setMapLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Initialize Leaflet map
  useEffect(() => {
    // Load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    // Load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = () => {
      setMapLoaded(true);
      initMap();
    };
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  const initMap = () => {
    if (window.L && document.getElementById('map')) {
      // Coordinates for Avondale, Harare
      const map = window.L.map('map').setView([-17.7869, 31.0471], 15);

      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Custom red marker
      const redIcon = window.L.divIcon({
        className: 'custom-marker',
        html: '<div style="background: #ef4444; width: 40px; height: 40px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 3px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.3);"><div style="width: 20px; height: 20px; background: white; border-radius: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(45deg);"></div></div>',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      window.L.marker([-17.7869, 31.0471], { icon: redIcon })
        .addTo(map)
        .bindPopup('<b>Drive Zimbabwe</b><br>15 Harrow Ave, Avondale<br>Harare, Zimbabwe')
        .openPopup();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 2000);
    }, 1500);
  };

  const contactInfo = [
    { 
      icon: Phone, 
      label: 'Call Us', 
      value: '078 057 9261', 
      subtext: 'Available 24/7',
      href: 'tel:0780579261',
      gradient: 'from-green-500 to-emerald-600'
    },
    { 
      icon: Mail, 
      label: 'Email Us', 
      value: 'info@drivezim.co.zw', 
      subtext: 'Response within 2 hours',
      href: 'mailto:info@drivezim.co.zw',
      gradient: 'from-blue-500 to-cyan-600'
    },
    { 
      icon: MapPin, 
      label: 'Visit Us', 
      value: '15 Harrow Ave, Avondale', 
      subtext: 'Harare, Zimbabwe',
      href: 'https://maps.google.com/?q=15+Harrow+Ave+Avondale+Harare',
      gradient: 'from-red-500 to-orange-600'
    },
    { 
      icon: Clock, 
      label: 'Business Hours', 
      value: 'Open 24/7', 
      subtext: 'Every day of the year',
      href: '#',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const socials = [
    { icon: Facebook, href: '#', color: 'hover:bg-blue-600', label: 'Facebook' },
    { icon: MessageSquare, href: 'https://twitter.com/DriveZimbabwe', color: 'hover:bg-sky-500', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/drive-zim-drive-zimbabwe-roadside-assistance-0aa0a3251', color: 'hover:bg-blue-700', label: 'LinkedIn' },
    { icon: Instagram, href: '#', color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500', label: 'Instagram' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/20.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 right-20 w-64 h-64 border-4 border-white/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-96 h-96 border-4 border-red-500/30 transform rotate-45"
          />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-block bg-red-600/20 backdrop-blur-xl border border-red-500/30 px-6 py-2 rounded-full mb-6"
              >
                <span className="text-red-400 font-semibold">24/7 Support Available</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                {t.contact.title}
              </h1>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                {t.contact.subtitle}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900 -mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-white/30 transition-all h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-400 text-sm font-semibold mb-2">{info.label}</div>
                  <div className="text-white text-lg font-bold mb-1">{info.value}</div>
                  <div className="text-gray-500 text-sm">{info.subtext}</div>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity blur-xl`} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form - 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Send Message</h2>
                    <p className="text-gray-400">We'll respond within 2 hours</p>
                  </div>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex flex-col items-center justify-center py-16"
                  >
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">We'll get back to you shortly</p>
                  </motion.div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white mb-2 font-semibold flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>Full Name</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-white mb-2 font-semibold flex items-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>Phone Number</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                          placeholder="+263 77 123 4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white mb-2 font-semibold flex items-center space-x-2">
                        <AtSign className="w-4 h-4" />
                        <span>Email Address</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-2 font-semibold flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4" />
                        <span>Your Message</span>
                      </label>
                      <textarea
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <motion.button
                      onClick={handleSubmit}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-red-500/50 transition-all flex items-center justify-center space-x-3"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Sidebar - 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Emergency Card */}
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 text-center shadow-2xl">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <AlertCircle className="w-16 h-16 text-white mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Emergency?</h3>
                <p className="text-white/90 mb-6">Call us immediately for 24/7 roadside assistance</p>
                <a
                  href="tel:0780579261"
                  className="inline-block bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
                >
                  078 057 9261
                </a>
              </div>

              {/* Social Media */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-white font-bold text-xl mb-6">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socials.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`bg-white/10 hover:bg-white/20 rounded-2xl p-6 flex flex-col items-center justify-center space-y-3 transition-all ${social.color}`}
                    >
                      <social.icon className="w-8 h-8 text-white" />
                      <span className="text-white font-semibold text-sm">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-gradient-to-br from-gray-800 to-black border border-white/10 rounded-3xl p-8">
                <Clock className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-white font-bold text-xl mb-4">Working Hours</h3>
                <div className="space-y-3">
                  {['Monday - Sunday', 'Public Holidays', 'Emergency Services'].map((day, i) => (
                    <div key={i} className="flex justify-between items-center text-white border-b border-white/10 pb-3">
                      <span className="text-gray-300">{day}</span>
                      <span className="font-bold text-green-500">24/7</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-4">Find Our Location</h2>
            <p className="text-xl text-gray-400">Visit us at our office in Avondale, Harare</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden"
          >
            <div id="map" className="w-full h-[500px] bg-gray-900 relative">
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-red-500 mx-auto mb-4 animate-bounce" />
                    <p className="text-white text-lg">Loading map...</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-8 bg-gradient-to-br from-gray-900 to-black">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Drive Zimbabwe Headquarters</h3>
                  <p className="text-gray-400">15 Harrow Ave, Avondale, Harare, Zimbabwe</p>
                </div>
                <a
                  href="https://maps.google.com/?q=15+Harrow+Ave+Avondale+Harare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2 justify-center"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;