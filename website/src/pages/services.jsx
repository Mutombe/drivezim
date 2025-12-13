import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Clock, Wrench, Truck, Shield, Zap, Battery, Key, Fuel, MapPin, CheckCircle, ArrowRight, Star, Award } from 'lucide-react';

// Mock translation object
const mockTranslations = {
  services: {
    title: "Our Services"
  }
};

const ServicesPage = () => {
  const t = mockTranslations;
  const [activeService, setActiveService] = useState(0);

  const allServices = [
    {
      icon: Truck,
      title: 'Emergency Towing',
      desc: 'Professional towing services for all vehicle types, anywhere, anytime',
      features: ['Light & Heavy Duty Towing', 'Flatbed Towing Service', 'Wheel Lift Towing', 'Long Distance Transport'],
      stats: { response: '< 30min', availability: '24/7', fleet: '15+ Trucks' },
      gradient: 'from-red-600 via-orange-600 to-yellow-500',
      bgImage: '/5.jpg',
      accentColor: 'red'
    },
    {
      icon: Wrench,
      title: 'Roadside Repairs',
      desc: 'Expert on-the-spot repairs to get you back on the road quickly',
      features: ['Battery Jump Start', 'Tire Changes & Repair', 'Minor Mechanical Fixes', 'Fluid Top-up Service'],
      stats: { response: '< 25min', availability: '24/7', rate: '98% Success' },
      gradient: 'from-blue-600 via-cyan-600 to-teal-500',
      bgImage: '/20.jpg',
      accentColor: 'blue'
    },
    {
      icon: Shield,
      title: 'Vehicle Recovery',
      desc: 'Specialized recovery services for the most challenging situations',
      features: ['Off-Road Recovery', 'Accident Scene Recovery', 'Winch-Out Service', 'Heavy Equipment Recovery'],
      stats: { response: '< 35min', availability: '24/7', equipment: 'Heavy Duty' },
      gradient: 'from-purple-600 via-pink-600 to-rose-500',
      bgImage: '/37.jpg',
      accentColor: 'purple'
    },
    {
      icon: Zap,
      title: 'Emergency Response',
      desc: 'Rapid 24/7 emergency assistance for critical roadside situations',
      features: ['Accident Assistance', 'Vehicle Lockout Service', 'Emergency Fuel Delivery', 'Priority Transport'],
      stats: { response: '< 20min', availability: '24/7', rating: '4.8★' },
      gradient: 'from-green-600 via-emerald-600 to-lime-500',
      bgImage: '/5.jpg',
      accentColor: 'green'
    }
  ];

  const quickServices = [
    { icon: Battery, label: 'Jump Start', color: 'from-yellow-500 to-orange-500' },
    { icon: Wrench, label: 'Tire Change', color: 'from-blue-500 to-cyan-500' },
    { icon: Key, label: 'Lockout', color: 'from-purple-500 to-pink-500' },
    { icon: Fuel, label: 'Fuel Delivery', color: 'from-green-500 to-emerald-500' },
  ];

  const accentColors = {
    red: 'text-red-500 bg-red-500',
    blue: 'text-blue-500 bg-blue-500',
    purple: 'text-purple-500 bg-purple-500',
    green: 'text-green-500 bg-green-500',
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Animated Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Animated Background Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${allServices[activeService].bgImage})` }}
          />
        </AnimatePresence>

        {/* Gradient Overlay */}
        <motion.div 
          key={`gradient-${activeService}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-transparent"
        />

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 right-20 w-96 h-96 border-4 border-white/30 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-64 h-64 border-4 border-red-500/30 rounded-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                Premium Roadside
                <span className={`block bg-gradient-to-r ${allServices[activeService].gradient} bg-clip-text text-transparent`}>
                  Services
                </span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                Professional assistance when you need it most
              </p>
            </motion.div>

            {/* Service Selector Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {allServices.map((service, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveService(i)}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative overflow-hidden rounded-2xl p-6 transition-all ${
                    activeService === i
                      ? 'bg-white text-black shadow-2xl'
                      : 'bg-white/10 backdrop-blur-xl text-white border border-white/20'
                  }`}
                >
                  <service.icon className={`w-10 h-10 mx-auto mb-3 ${
                    activeService === i ? 'text-black' : 'text-white'
                  }`} />
                  <div className="font-bold text-sm">{service.title}</div>
                  
                  {activeService === i && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}
                    />
                  )}
                </motion.button>
              ))}
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

      {/* Quick Services Bar */}
      <section className="py-8 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickServices.map((service, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-semibold">{service.label}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section - Bento Grid Style */}
      <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {/* Main Service Card - Spans 2 columns */}
              <div className="md:col-span-2 relative overflow-hidden rounded-3xl">
                <div className={`bg-gradient-to-br ${allServices[activeService].gradient} p-12 h-full`}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                  >
                    {React.createElement(allServices[activeService].icon, {
                      className: "w-20 h-20 text-white mb-6"
                    })}
                  </motion.div>
                  
                  <h2 className="text-5xl font-bold text-white mb-4">
                    {allServices[activeService].title}
                  </h2>
                  <p className="text-white/90 text-xl mb-8 leading-relaxed">
                    {allServices[activeService].desc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {allServices[activeService].features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                        <span className="text-white font-medium text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg flex items-center space-x-2 hover:shadow-2xl transition-shadow"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Request This Service</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-3xl" />
              </div>

              {/* Stats Cards */}
              <div className="space-y-6">
                {Object.entries(allServices[activeService].stats).map(([key, value], i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                  >
                    <div className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className={`text-4xl font-bold bg-gradient-to-r ${allServices[activeService].gradient} bg-clip-text text-transparent`}>
                      {value}
                    </div>
                  </motion.div>
                ))}

                {/* CTA Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-2xl p-6 text-center"
                >
                  <Clock className="w-12 h-12 text-black mx-auto mb-3" />
                  <div className="font-bold text-black text-lg mb-2">Available Now</div>
                  <div className="text-gray-600 text-sm mb-4">24/7 Emergency Service</div>
                  <a
                    href="tel:0780579261"
                    className={`block bg-gradient-to-r ${allServices[activeService].gradient} text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-shadow`}
                  >
                    Call 078 057 9261
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-400">Excellence in every service, every time</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: '4.8★ Rating', desc: '500+ satisfied customers', color: 'from-yellow-500 to-orange-500' },
              { icon: Clock, title: 'Fast Response', desc: 'Average < 30 minutes', color: 'from-blue-500 to-cyan-500' },
              { icon: Award, title: 'Certified Experts', desc: 'Trained professionals', color: 'from-purple-500 to-pink-500' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.desc}</p>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity blur-xl`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;