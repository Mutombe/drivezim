// Home Page
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  ChevronRight,
  Shield,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "../lunguageContext";
import HappyCustomers from "../components/happyCustomers";
import { IoCarSportOutline } from "react-icons/io5";
import { BsTruckFlatbed } from "react-icons/bs";
import { GiAlarmClock } from "react-icons/gi";
import { MdStarPurple500 } from "react-icons/md";
import { FiZap } from "react-icons/fi";
import { SiFsecure } from "react-icons/si";
import { MdOutlineSettings } from "react-icons/md";

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
    {
      icon: BsTruckFlatbed,
      title: t.services.towing,
      desc: "Quality & reliable towing across Zimbabwe",
      image: "/5.jpg",
      hoverGlow: "group-hover:shadow-red-500/50",
      accentColor: "bg-red-600",
    },
    {
      icon: MdOutlineSettings,
      title: t.services.roadside,
      desc: "Reliable roadside assistance",
      image: "/20.jpg",
      hoverGlow: "group-hover:shadow-blue-500/50",
      accentColor: "bg-blue-600",
    },
    {
      icon: SiFsecure,
      title: t.services.recovery,
      desc: "Quality vehicle recovery services",
      image: "/37.jpg",
      hoverGlow: "group-hover:shadow-purple-500/50",
      accentColor: "bg-purple-600",
    },
    {
      icon: FiZap,
      title: t.services.emergency,
      desc: "24/7 emergency response team",
      image: "/26.jpg",
      hoverGlow: "group-hover:shadow-emerald-500/50",
      accentColor: "bg-emerald-600",
    },
  ];

  const stats = [
    { value: "1000+", label: "Vehicles Assisted", icon: IoCarSportOutline },
    { value: "24/7", label: "Always Available", icon: GiAlarmClock },
    { value: "4.8", label: "Customer Rating", icon: MdStarPurple500 },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
{/* Hero Section */}
<section className="relative h-screen overflow-hidden">
  {/* Image Carousel Background */}
  <div className="absolute inset-0">
    {/* Base layer to prevent black flash */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(/26.jpg)` }}
    />
    <AnimatePresence>
      <motion.div
        key={activeSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/${
            [
              "26.jpg",
              "20.jpg",
              "21.jpg",
              "5.jpg",
              "37.jpg",
              "15.jpg",
              "18.jpg",
              "22.jpg",
              "25.jpg",
              "30.jpg"
            ][activeSlide]
          })`,
        }}
      />
    </AnimatePresence>
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Geometric Patterns */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-20 w-64 h-64 border-4 border-white/20 rounded-full" />
    <div className="absolute bottom-40 right-40 w-96 h-96 border-4 border-white/20 transform rotate-45" />
    <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white/5 backdrop-blur-3xl rounded-3xl" />
  </div>

  {/* Content */}
  <div className="relative h-full flex items-center pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-300"
          >
            Quality, reliable, and cost-effective service you can count on,
            without breaking the bank.
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
            <Link to="/services">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 hover:bg-white/20 transition-all"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center space-x-6 pt-4"
          >
            <HappyCustomers />
          </motion.div>
        </motion.div>
      </div>
    </div>
  </div>

  {/* Angled Stats Bar - Connected to Hero */}
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.8 }}
    className="absolute bottom-0 left-0 right-0"
  >
    <div className="relative h-20 md:h-24 flex">
      {/* Location Section */}
      <div className="flex-1 bg-zinc-900 flex items-center justify-center relative">
        <div className="text-center px-4">
          <div className="text-white font-bold text-sm md:text-lg">Harare, Zimbabwe</div>
          <div className="text-gray-400 text-xs md:text-sm hidden sm:block">Nationwide Coverage</div>
        </div>
        {/* Angled edge */}
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-16 bg-zinc-900 transform skew-x-[-12deg] translate-x-6 md:translate-x-8 z-10" />
      </div>

      {/* Call Section - Red Accent */}
      <div className="flex-1 bg-red-600 flex items-center justify-center relative z-20">
        <a href="tel:0780579261" className="text-center px-4 hover:scale-105 transition-transform">
          <div className="text-white font-bold text-sm md:text-lg flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 md:w-5 md:h-5" />
            <span>078 057 9261</span>
          </div>
          <div className="text-white/80 text-xs md:text-sm hidden sm:block">24/7 Emergency</div>
        </a>
        {/* Angled edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-16 bg-red-600 transform skew-x-[-12deg] -translate-x-6 md:-translate-x-8" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-16 bg-red-600 transform skew-x-[-12deg] translate-x-6 md:translate-x-8" />
      </div>

      {/* Stats Section */}
      <div className="flex-1 bg-zinc-900 flex items-center justify-center relative z-10">
        <div className="text-center px-4">
          <div className="text-white font-bold text-sm md:text-lg">1000+ Rescues</div>
          <div className="text-gray-400 text-xs md:text-sm hidden sm:block">6+ Years Experience</div>
        </div>
        {/* Angled edge */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-16 bg-zinc-900 transform skew-x-[-12deg] -translate-x-6 md:-translate-x-8" />
      </div>
    </div>
  </motion.div>
</section>

      {/* Services Grid */}
      <section
        id="services"
        className="py-24 px-4 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive roadside solutions tailored to your emergency needs
            </p>
          </motion.div>

{/* Stats Bar */}
<div className="grid grid-cols-3 gap-4 mb-16">
  {stats.map((stat, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
      className="relative bg-black/50 rounded-2xl p-6 overflow-hidden group"
    >
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all" />
      <stat.icon className="w-8 h-8 text-white mb-3 relative z-10" />
      <div className="text-3xl font-bold text-white mb-1 relative z-10">{stat.value}</div>
      <div className="text-gray-400 text-sm relative z-10">{stat.label}</div>
    </motion.div>
  ))}
</div>

          {/* Service Cards with Vivid BG Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`group relative overflow-hidden rounded-3xl h-80 shadow-2xl ${service.hoverGlow} transition-all`}
              >
                {/* Background Image - Full visibility */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Subtle gradient only at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-16 h-16 ${service.accentColor}/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="text-white/90 drop-shadow-md mb-4">{service.desc}</p>

                    <Link to="/services">
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <span>Learn More</span>
                        <ChevronRight className="w-5 h-5" />
                      </motion.div>
                    </Link>
                  </div>
                </div>

                {/* Bottom Highlight */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${service.accentColor} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(/10.jpg)' }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/60 via-red-800/50 to-black/60" />

        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-96 h-96 border-4 border-white/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-72 h-72 border-4 border-white/20 rounded-full"
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-3xl p-12"
          >
            <AlertCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Our team is standing by 24/7 to help you get back on the road
              safely
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Call us: 078 057 9261 | 071 808 4297 | 073 652 3424
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:0780579261"
                whileHover={{ scale: 1.05 }}
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 shadow-2xl hover:shadow-white/30 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Call {t.hero.phone}</span>
              </motion.a>
              <Link to="/membership">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-red-600/80 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 hover:bg-red-600 transition-all"
                >
                  <Shield className="w-5 h-5" />
                  <span>Join Membership</span>
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
