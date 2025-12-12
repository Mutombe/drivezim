// About/Story Page
import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Clock, Wrench, Truck, Shield, Users, Award, ChevronRight, Star, Facebook, Twitter, Linkedin, Instagram, Globe, MessageSquare, Zap, Target, Heart, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { useLanguage } from '../lunguageContext';

const StoryPage = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, title: 'Customer First', desc: 'Your safety and satisfaction drive everything we do' },
    { icon: Zap, title: 'Speed & Efficiency', desc: 'Rapid response times when you need us most' },
    { icon: Shield, title: 'Trust & Reliability', desc: 'Building long-term relationships through consistency' },
    { icon: Target, title: 'Excellence', desc: 'Continuously improving our service standards' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-red-600/20 backdrop-blur-xl border border-red-500/30 px-6 py-2 rounded-full mb-6">
            <span className="text-red-400 font-semibold">{t.about.subtitle}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{t.about.title}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Established as Zimbabwe's premier roadside assistance provider, serving thousands of customers with dedication and expertise since day one.
          </p>
        </motion.div>

        {/* Story Grid - Asymmetric Bento Layout */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Drive Zimbabwe was founded with a simple mission: to provide fast, reliable, and affordable roadside assistance to every Zimbabwean driver. We've grown from a small team with a single tow truck to a comprehensive fleet serving the entire nation, but our commitment to excellence remains unchanged.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 flex flex-col justify-center"
          >
            <Award className="w-16 h-16 text-red-600 mb-4" />
            <h3 className="text-3xl font-bold text-black mb-2">4.8★</h3>
            <p className="text-gray-600">Customer Rating</p>
            <p className="text-sm text-gray-500 mt-2">Based on 500+ Google reviews</p>
          </motion.div>
        </div>

        {/* Values - Card Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all"
              >
                <value.icon className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section - Neumorphism Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 text-center shadow-2xl"
        >
          <Users className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Our experienced professionals are trained, certified, and ready to assist you 24/7. Every team member is committed to providing exceptional service with a smile.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Certified Technicians', '24/7 Dispatchers', 'Recovery Specialists', 'Customer Support'].map((role, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full text-white font-semibold">
                {role}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StoryPage;