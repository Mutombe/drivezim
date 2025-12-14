import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, CheckCircle, Gauge, Weight, Shield, Zap, Wrench, Award, Clock, MapPin, ArrowRight, Info } from 'lucide-react';
import { MdStarPurple500 } from "react-icons/md";
import { FiZap } from "react-icons/fi";
import { SiFsecure } from "react-icons/si";
import { LiaAwardSolid } from "react-icons/lia";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { CiFaceSmile } from "react-icons/ci";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiSpearHook } from "react-icons/gi";
import { GiAlarmClock } from "react-icons/gi";
import { IoCheckmarkDone } from "react-icons/io5";
import { BsTruckFlatbed } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";
// Mock translation object
const mockTranslations = {
  nav: {
    fleet: "Our Fleet"
  }
};

const FleetPage = () => {
  const t = mockTranslations;
  const [selectedVehicle, setSelectedVehicle] = useState(0);

  const fleet = [
    { 
      type: 'Heavy Duty Tow', 
      capacity: '50+ tons', 
      features: ['Hydraulic Flatbed', 'Industrial Winch System', 'Air Brake System', 'GPS Tracking'],
      specs: { weight: '50+ tons', speed: '80 km/h', crew: '2-3 operators' },
      status: 'Available',
      statusColor: 'from-green-500 to-emerald-600',
      gradient: 'from-red-600 via-orange-600 to-yellow-500',
      image: '/5.jpg',
      description: 'Our flagship heavy-duty towing solution for the most demanding recovery operations.',
      icon: BsTruckFlatbed
    },
    { 
      type: 'Medium Tow', 
      capacity: '15-30 tons', 
      features: ['Wheel Lift System', 'Hydraulic Tilt Bed', 'Dolly System', 'LED Light Bar'],
      specs: { weight: '15-30 tons', speed: '90 km/h', crew: '1-2 operators' },
      status: 'Available',
      statusColor: 'from-green-500 to-emerald-600',
      gradient: 'from-blue-600 via-cyan-600 to-teal-500',
      image: '/20.jpg',
      description: 'Versatile medium-duty towing for SUVs, vans, and commercial vehicles.',
      icon: BsTruckFlatbed
    },
    { 
      type: 'Light Duty Tow', 
      capacity: 'Up to 10 tons', 
      features: ['Hook & Chain System', 'Compact Flatbed', 'Quick Response', 'Urban Maneuvering'],
      specs: { weight: 'Up to 10 tons', speed: '100 km/h', crew: '1 operator' },
      status: 'Available',
      statusColor: 'from-green-500 to-emerald-600',
      gradient: 'from-purple-600 via-pink-600 to-rose-500',
      image: '/37.jpg',
      description: 'Perfect for sedans, compact cars, and quick urban response situations.',
      icon: BsTruckFlatbed
    },
    { 
      type: 'Recovery Specialist', 
      capacity: 'Specialized', 
      features: ['Off-Road Capability', 'Heavy-Duty Winch', 'Reinforced Chains', 'All-Terrain'],
      specs: { weight: 'Variable', speed: '70 km/h', crew: '2-4 operators' },
      status: 'Available',
      statusColor: 'from-green-500 to-emerald-600',
      gradient: 'from-amber-600 via-orange-600 to-red-600',
      image: '/5.jpg',
      description: 'Specialized recovery vehicle for off-road, ditches, and challenging terrain.',
      icon: SiFsecure
    }
  ];

  const stats = [
    { icon: BsTruckFlatbed, value: '15+', label: 'Fleet Vehicles' },
    { icon: GiAlarmClock, value: '24/7', label: 'Ready to Deploy' },
    { icon: LiaAwardSolid, value: '100%', label: 'Maintained' },
    { icon: FiZap, value: '<30min', label: 'Response Time' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image with Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedVehicle}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${fleet[selectedVehicle].image})` }}
          />
        </AnimatePresence>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />
        
        {/* Animated Geometric Elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 right-20 w-96 h-96 border-4 border-white/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360, scale: [1, 1.3, 1] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-40 left-20 w-64 h-64 border-4 border-red-500/30"
          />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                Our Premium
                <span className={`block bg-gradient-to-r ${fleet[selectedVehicle].gradient} bg-clip-text text-transparent`}>
                  Fleet
                </span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                State-of-the-art towing and recovery vehicles maintained to the highest standards
              </p>
            </motion.div>

            {/* Fleet Selector Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {fleet.map((vehicle, i) => (
                <motion.button
                  key={i}
                  onClick={() => setSelectedVehicle(i)}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative overflow-hidden rounded-2xl p-6 transition-all ${
                    selectedVehicle === i
                      ? 'bg-white text-black shadow-2xl'
                      : 'bg-white/10 backdrop-blur-xl text-white border border-white/20'
                  }`}
                >
                  <vehicle.icon className={`w-10 h-10 mx-auto mb-3 ${
                    selectedVehicle === i ? 'text-black' : 'text-white'
                  }`} />
                  <div className="font-bold text-sm">{vehicle.type}</div>
                  <div className={`text-xs mt-1 ${
                    selectedVehicle === i ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {vehicle.capacity}
                  </div>
                  
                  {selectedVehicle === i && (
                    <motion.div
                      layoutId="activeFleetIndicator"
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${vehicle.gradient}`}
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

      {/* Stats Bar */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Vehicle Showcase */}
      <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedVehicle}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Left - Vehicle Details */}
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="inline-flex items-center space-x-2 mb-6"
                >
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${fleet[selectedVehicle].statusColor} animate-pulse`} />
                  <span className="text-green-500 font-semibold">{fleet[selectedVehicle].status}</span>
                </motion.div>

                <h2 className={`text-5xl font-bold mb-6 bg-gradient-to-r ${fleet[selectedVehicle].gradient} bg-clip-text text-transparent`}>
                  {fleet[selectedVehicle].type}
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {fleet[selectedVehicle].description}
                </p>

                {/* Specifications */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(fleet[selectedVehicle].specs).map(([key, value], i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center"
                    >
                      <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">
                        {key}
                      </div>
                      <div className="text-white font-bold">{value}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {fleet[selectedVehicle].features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center space-x-3 bg-white/5 backdrop-blur-xl rounded-xl p-4"
                    >
                      <IoCheckmarkDone className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${fleet[selectedVehicle].gradient} text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center space-x-2 hover:shadow-2xl transition-shadow`}
                >
                  <span>Request This Vehicle</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Right - Image Showcase */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden aspect-square">
                  <img
                    src={fleet[selectedVehicle].image}
                    alt={fleet[selectedVehicle].type}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent`} />
                  
                  {/* Floating Info Card */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-bold text-lg mb-1">Ready to Deploy</div>
                        <div className="text-gray-300 text-sm">Average response: &lt;30 minutes</div>
                      </div>
                      <div className={`w-16 h-16 bg-gradient-to-br ${fleet[selectedVehicle].gradient} rounded-2xl flex items-center justify-center`}>
                        <FiZap className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Gradient Blob */}
                <div className={`absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br ${fleet[selectedVehicle].gradient} opacity-20 blur-3xl rounded-full -z-10`} />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Fleet Comparison Table */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Complete Fleet Overview
            </h2>
            <p className="text-xl text-gray-400">All our vehicles at a glance</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleet.map((vehicle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedVehicle(i)}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.type}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent`} />
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 bg-gradient-to-r ${vehicle.statusColor} rounded-full text-white text-xs font-semibold`}>
                        {vehicle.status}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <vehicle.icon className={`w-10 h-10 mb-4 bg-gradient-to-r ${vehicle.gradient} bg-clip-text text-transparent`} />
                    <h3 className="text-xl font-bold text-white mb-2">{vehicle.type}</h3>
                    <p className="text-gray-400 text-sm mb-4">{vehicle.capacity}</p>
                    
                    <div className="space-y-2">
                      {vehicle.features.slice(0, 2).map((feature, j) => (
                        <div key={j} className="flex items-center space-x-2 text-sm text-gray-400">
                          <IoCheckmarkDone className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className={`mt-4 w-full bg-gradient-to-r ${vehicle.gradient} text-white px-4 py-2 rounded-xl font-semibold text-sm hover:shadow-lg transition-shadow`}>
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <MapPin className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Need Our Fleet?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Professional towing and recovery services available 24/7
            </p>
            <motion.a
              href="tel:0780579261"
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl"
            >
              Call 078 057 9261
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FleetPage;