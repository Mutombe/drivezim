// Home Page
import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Clock, Wrench, Truck, Shield, Users, Award, ChevronRight, Star, Facebook, Twitter, Linkedin, Instagram, Globe, MessageSquare, Zap, Target, Heart, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { useLanguage } from '../lunguageContext';

const HomePage = () => {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { icon: Truck, title: t.services.towing, desc: 'Fast & reliable towing across Zimbabwe', color: 'from-red-500 to-red-600' },
    { icon: Wrench, title: t.services.roadside, desc: 'Immediate roadside assistance', color: 'from-gray-700 to-gray-800' },
    { icon: Shield, title: t.services.recovery, desc: 'Professional vehicle recovery', color: 'from-red-600 to-red-700' },
    { icon: Zap, title: t.services.emergency, desc: '24/7 emergency response team', color: 'from-gray-800 to-black' }
  ];

  const stats = [
    { value: '5000+', label: 'Vehicles Assisted', icon: Truck },
    { value: '24/7', label: 'Always Available', icon: Clock },
    { value: '< 30min', label: 'Average Response', icon: Zap },
    { value: '4.8★', label: 'Customer Rating', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Inspired by bicycle design */}
      <section className="relative h-screen overflow-hidden">
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(135deg, #ff0000 0%, #2c2f36 50%, #000000 100%)',
              'linear-gradient(135deg, #2c2f36 0%, #ff0000 50%, #000000 100%)',
              'linear-gradient(135deg, #000000 0%, #ff0000 50%, #2c2f36 100%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border-4 border-white/20 rounded-full" />
          <div className="absolute bottom-40 right-40 w-96 h-96 border-4 border-red-500/20 transform rotate-45" />
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white/5 backdrop-blur-3xl rounded-3xl" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-white space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block bg-red-600/20 backdrop-blur-xl border border-red-500/30 px-6 py-2 rounded-full"
                >
                  <span className="text-red-400 font-semibold">{t.hero.subtitle}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl md:text-7xl font-bold leading-tight"
                >
                  {t.hero.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl text-gray-300"
                >
                  Fast, reliable, cost-effective service you can count on, without breaking the bank.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.a
                    href="tel:0780579261"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 shadow-2xl hover:shadow-red-500/50 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{t.hero.cta}</span>
                  </motion.a>
                  <motion.a
                    href="#services"
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 hover:bg-white/20 transition-all"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex items-center space-x-6 pt-4"
                >
                  <div className="flex -space-x-3">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full border-2 border-black flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-bold">5000+ Happy Customers</div>
                    <div className="text-gray-400">Trusted across Zimbabwe</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right - Vehicle Visualization */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative hidden md:block"
              >
                <div className="relative">
                  {/* Glassmorphism Card */}
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl"
                  >
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center">
                            <Truck className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-bold text-xl">Tow Truck Fleet</div>
                            <div className="text-gray-400">Available 24/7</div>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {['Heavy Duty', 'Medium Tow', 'Light Tow', 'Recovery'].map((type, i) => (
                          <div key={i} className="bg-black/40 rounded-xl p-4 border border-white/10">
                            <div className="text-white font-semibold">{type}</div>
                            <div className="text-green-400 text-sm">✓ Ready</div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-black/40 rounded-xl p-4 border border-white/10">
                        <div className="text-gray-400 text-sm mb-2">Response Time</div>
                        <div className="flex items-center justify-between">
                          <div className="text-white text-2xl font-bold">{'< 30 min'}</div>
                          <Zap className="w-6 h-6 text-yellow-400" />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-6 -right-6 w-24 h-24 bg-red-600 rounded-2xl flex items-center justify-center shadow-2xl"
                  >
                    <Shield className="w-12 h-12 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Bar - Bento Style */}
      <section className="relative -mt-20 z-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-2xl hover:shadow-red-500/20 transition-all"
              >
                <stat.icon className="w-8 h-8 text-red-600 mb-3" />
                <div className="text-3xl font-bold text-black mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Mixed Design Styles */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">{t.services.title}</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Comprehensive roadside solutions tailored to your emergency needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className={`bg-gradient-to-br ${service.color} p-8 h-full`}>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/80">{service.desc}</p>
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="mt-6 flex items-center space-x-2 text-white font-semibold"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Glassmorphism */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-black opacity-90" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12"
          >
            <AlertCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Need Immediate Assistance?</h2>
            <p className="text-xl text-gray-300 mb-8">Our team is standing by 24/7 to help you get back on the road safely</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:0780579261"
                whileHover={{ scale: 1.05 }}
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 shadow-2xl"
              >
                <Phone className="w-5 h-5" />
                <span>Call {t.hero.phone}</span>
              </motion.a>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/40 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;