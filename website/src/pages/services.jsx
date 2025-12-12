// Services Page
import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Clock, Wrench, Truck, Shield, Users, Award, ChevronRight, Star, Facebook, Twitter, Linkedin, Instagram, Globe, MessageSquare, Zap, Target, Heart, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { useLanguage } from '../lunguageContext';

const ServicesPage = () => {
  const { t } = useLanguage();

  const allServices = [
    {
      icon: Truck,
      title: 'Emergency Towing',
      desc: 'Professional towing services for all vehicle types',
      features: ['Light & Heavy Duty', 'Flatbed Towing', 'Wheel Lift Towing', 'Long Distance'],
      color: 'from-red-500 to-red-700'
    },
    {
      icon: Wrench,
      title: 'Roadside Repairs',
      desc: 'On-the-spot repairs to get you moving',
      features: ['Battery Jump Start', 'Tire Changes', 'Minor Repairs', 'Fluid Top-up'],
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: Shield,
      title: 'Vehicle Recovery',
      desc: 'Specialized recovery for challenging situations',
      features: ['Off-Road Recovery', 'Accident Recovery', 'Winch-Out Service', 'Heavy Equipment'],
      color: 'from-red-600 to-red-800'
    },
    {
      icon: Zap,
      title: 'Emergency Response',
      desc: '24/7 rapid response team',
      features: ['Accident Assistance', 'Lockout Service', 'Fuel Delivery', 'Emergency Transport'],
      color: 'from-black to-gray-800'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{t.services.title}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive roadside assistance and towing solutions designed for every emergency scenario
          </p>
        </motion.div>

        {/* Services Grid - Alternating Layout */}
        <div className="space-y-12">
          {allServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className={`bg-gradient-to-br ${service.color} rounded-3xl p-12 h-full`}>
                  <service.icon className="w-16 h-16 text-white mb-6" />
                  <h2 className="text-4xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-white/90 text-lg mb-6">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, j) => (
                      <div key={j} className="bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full text-white text-sm font-semibold">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Service Highlights</h3>
                  <div className="space-y-4">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-8 w-full bg-red-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-red-700 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Request Service</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;