// Fleet Page
import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Clock, Wrench, Truck, Shield, Users, Award, ChevronRight, Star, Facebook, Twitter, Linkedin, Instagram, Globe, MessageSquare, Zap, Target, Heart, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { useLanguage } from '../lunguageContext';

const FleetPage = () => {
  const { t } = useLanguage();

  const fleet = [
    { type: 'Heavy Duty Tow', capacity: '50+ tons', features: ['Flatbed', 'Winch System', 'Air Brakes'], status: 'Available' },
    { type: 'Medium Tow', capacity: '15-30 tons', features: ['Wheel Lift', 'Tilt Bed', 'Dolly System'], status: 'Available' },
    { type: 'Light Tow', capacity: 'Up to 10 tons', features: ['Hook & Chain', 'Flatbed', 'Compact'], status: 'Available' },
    { type: 'Recovery Truck', capacity: 'Specialized', features: ['Off-Road', 'Winch', 'Heavy Chains'], status: 'Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{t.nav.fleet}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            State-of-the-art towing and recovery vehicles maintained to the highest standards
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {fleet.map((vehicle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden"
            >
              <div className="bg-gradient-to-br from-red-600 to-black p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{vehicle.type}</h3>
                  <div className="px-4 py-1 bg-green-500 rounded-full text-white text-sm font-semibold">
                    {vehicle.status}
                  </div>
                </div>
                <div className="flex items-center space-x-2 mb-6">
                  <Truck className="w-5 h-5 text-white/70" />
                  <span className="text-white/70">Capacity: {vehicle.capacity}</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-white font-semibold mb-4">Equipment & Features</h4>
                <div className="space-y-3">
                  {vehicle.features.map((feature, j) => (
                    <div key={j} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FleetPage;