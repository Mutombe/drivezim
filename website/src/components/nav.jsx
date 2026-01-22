import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Shield, User, Car, CreditCard, MessageSquare, Twitter } from 'lucide-react';
import { useLanguage } from '../lunguageContext';
import { TiThMenuOutline } from "react-icons/ti";
import { FaWhatsapp } from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMembershipModal, setShowMembershipModal] = useState(false);
  const [sendMethod, setSendMethod] = useState('whatsapp');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    licensePlate: '',
    selectedPlan: 'standard'
  });
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const membershipPlans = {
    standard: { name: 'Drive Standard' },
    advance: { name: 'Drive Advance' },
    ultimate: { name: 'Drive Ultimate' },
    family: { name: 'Drive Family Breakdown Cover' },
    business: { name: 'Drive Business Breakdown Cover' },
    accident: { name: 'Drive Accident Assist Cover' },
    senior: { name: 'Drive Senior Plus' }
  };

  const generateMembershipMessage = () => {
    const plan = membershipPlans[formData.selectedPlan];
    return `MEMBERSHIP REGISTRATION - DRIVE ZIMBABWE
=====================================

SELECTED PLAN: ${plan.name}

PERSONAL INFORMATION
-------------------
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}

VEHICLE INFORMATION
------------------
Make: ${formData.vehicleMake}
Model: ${formData.vehicleModel}
Year: ${formData.vehicleYear}
License Plate: ${formData.licensePlate}

=====================================
Sent via Drive Zimbabwe Website`;
  };

  const handleMembershipSubmit = (e) => {
    e.preventDefault();
    const message = generateMembershipMessage();
    const encodedMessage = encodeURIComponent(message);

    if (sendMethod === 'whatsapp') {
      window.open(`https://wa.me/263780579261?text=${encodedMessage}`, '_blank');
    } else {
      const subject = encodeURIComponent(`Membership Registration - ${membershipPlans[formData.selectedPlan].name}`);
      window.open(`mailto:info@drivezim.co.zw?subject=${subject}&body=${encodedMessage}`, '_blank');
    }
    setShowMembershipModal(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/story', label: t.nav.about },
    { path: '/services', label: t.nav.services },
    { path: '/blog', label: t.nav.blog || 'Blog' },
    { path: '/faq', label: t.nav.faq || 'FAQ' },
    { path: '/gallery', label: "Gallery" },
    { path: '/reviews', label: t.nav.reviews || "Reviews" },
    { path: '/membership', label: 'Membership' },
    { path: '/contact', label: t.nav.contact }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-10 text-sm">
              {/* Left - Contact Info */}
              <div className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-2 hover:text-gray-200 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  <span>078 057 9261 | 071 808 4297 | 073 652 3424</span>
                </div>
                <a href="mailto:info@drivezim.co.zw" className="flex items-center space-x-2 hover:text-gray-200 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  <span>info@drivezim.co.zw</span>
                </a>
              </div>

              {/* Center - 24/7 Badge (Mobile) */}
              <div className="md:hidden flex items-center space-x-2">
                <Clock className="w-3.5 h-3.5" />
                <span className="font-semibold">24/7 Emergency Service</span>
              </div>

              {/* Right - Social & Hours */}
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center space-x-2 text-gray-200">
                  <Clock className="w-3.5 h-3.5" />
                  <span>24/7 Service</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-white/30" />
                <div className="flex items-center space-x-3">
                  <a href="https://www.facebook.com/DriveZimRoadsideAssistance/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="https://x.com/drivezimbabwe" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="https://www.instagram.com/drivezim2019/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/posts/drive-zim-0aa0a3251_drive-zimbabwe-roadside-assistance-activity-7206968705946157056--40y" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'top-0 bg-black/95 backdrop-blur-xl shadow-2xl' : 'top-10 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <div className="w-16 h-15 flex items-center justify-center">
                  <img src="/logo3.png" alt="Drive Zimbabwe Logo" className="w-15 h-15" />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-lg transition-all text-sm ${location.pathname === link.path ? 'bg-red-600 text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Language & CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-white/10 text-white border border-white/20 rounded-lg px-3 py-2 text-sm backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="en">EN</option>
                <option value="nd">ND</option>
                <option value="fr">FR</option>
              </select>
              <motion.button
                onClick={() => setShowMembershipModal(true)}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2.5 rounded-lg font-semibold flex items-center space-x-2 shadow-xl hover:shadow-red-500/50 transition-all"
              >
                <Shield className="w-4 h-4" />
                <span>Join Membership</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
              {isOpen ? <X className="w-6 h-6" /> : <TiThMenuOutline className="w-6 h-6" />}
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
              className="lg:hidden bg-black/98 backdrop-blur-xl border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-3">
                {navLinks.map((link) => (
                  <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
                    <div className={`block px-4 py-3 rounded-lg ${location.pathname === link.path ? 'bg-red-600 text-white' : 'text-gray-300 hover:bg-white/10'}`}>
                      {link.label}
                    </div>
                  </Link>
                ))}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <a href="tel:0780579261" className="flex items-center space-x-2 text-gray-300 px-4 py-2">
                    <Phone className="w-4 h-4" />
                    <span>078 057 9261</span>
                  </a>
                  <a href="tel:0718084297" className="flex items-center space-x-2 text-gray-300 px-4 py-2">
                    <Phone className="w-4 h-4" />
                    <span>071 808 4297</span>
                  </a>
                  <a href="tel:0736523424" className="flex items-center space-x-2 text-gray-300 px-4 py-2">
                    <Phone className="w-4 h-4" />
                    <span>073 652 3424</span>
                  </a>
                  <a href="mailto:info@drivezim.co.zw" className="flex items-center space-x-2 text-gray-300 px-4 py-2">
                    <Mail className="w-4 h-4" />
                    <span>info@drivezim.co.zw</span>
                  </a>
                </div>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3"
                >
                  <option value="en">English</option>
                  <option value="nd">Ndebele</option>
                  <option value="fr">Français</option>
                </select>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowMembershipModal(true);
                  }}
                  className="block w-full bg-red-600 text-white px-4 py-3 rounded-lg text-center font-semibold flex items-center justify-center space-x-2"
                >
                  <Shield className="w-4 h-4" />
                  <span>Join Membership</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Membership Modal */}
      <AnimatePresence>
        {showMembershipModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setShowMembershipModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl md:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto my-4"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-red-600 to-red-700 p-4 md:p-6 rounded-t-2xl md:rounded-t-3xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-white">Join Membership</h2>
                      <p className="text-white/80 text-xs md:text-sm">Get 24/7 roadside assistance coverage</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowMembershipModal(false)}
                    className="text-white/80 hover:text-white p-1"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <form onSubmit={handleMembershipSubmit} className="p-4 md:p-6 space-y-4 md:space-y-6">
                {/* Plan Selection */}
                <div>
                  <label className="block text-white mb-2 font-semibold text-sm md:text-base">Select Plan</label>
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {Object.entries(membershipPlans).map(([key, plan]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setFormData({ ...formData, selectedPlan: key })}
                        className={`p-3 rounded-xl border-2 transition-all text-left ${
                          formData.selectedPlan === key
                            ? 'border-red-500 bg-red-500/20'
                            : 'border-white/20 bg-white/5 hover:border-white/40'
                        }`}
                      >
                        <div className="text-white font-semibold text-sm md:text-base">{plan.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-white font-semibold flex items-center space-x-2 text-sm md:text-base">
                    <User className="w-4 h-4" />
                    <span>Personal Information</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                    />
                  </div>
                </div>

                {/* Vehicle Information */}
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-white font-semibold flex items-center space-x-2 text-sm md:text-base">
                    <Car className="w-4 h-4" />
                    <span>Vehicle Information</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Vehicle Make *"
                      value={formData.vehicleMake}
                      onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Vehicle Model *"
                      value={formData.vehicleModel}
                      onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Year"
                      value={formData.vehicleYear}
                      onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="License Plate"
                      value={formData.licensePlate}
                      onChange={(e) => setFormData({ ...formData, licensePlate: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                    />
                  </div>
                </div>

                {/* Send Method Selection */}
                <div>
                  <label className="block text-white mb-2 font-semibold text-sm md:text-base">Send via:</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSendMethod('whatsapp')}
                      className={`p-3 rounded-xl border-2 transition-all flex items-center justify-center space-x-2 ${
                        sendMethod === 'whatsapp'
                          ? 'border-green-500 bg-green-500/20 text-white'
                          : 'border-white/20 bg-white/5 text-gray-400 hover:border-white/40'
                      }`}
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span className="font-semibold text-sm">WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSendMethod('email')}
                      className={`p-3 rounded-xl border-2 transition-all flex items-center justify-center space-x-2 ${
                        sendMethod === 'email'
                          ? 'border-blue-500 bg-blue-500/20 text-white'
                          : 'border-white/20 bg-white/5 text-gray-400 hover:border-white/40'
                      }`}
                    >
                      <Mail className="w-5 h-5" />
                      <span className="font-semibold text-sm">Email</span>
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full py-4 rounded-xl font-bold text-lg shadow-xl transition-all flex items-center justify-center space-x-2 ${
                    sendMethod === 'whatsapp'
                      ? 'bg-gradient-to-r from-green-600 to-green-700 hover:shadow-green-500/50'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-blue-500/50'
                  } text-white`}
                >
                  {sendMethod === 'whatsapp' ? (
                    <>
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Register via WhatsApp</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      <span>Register via Email</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
