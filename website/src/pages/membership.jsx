import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Check, Star, Users, Truck, Clock, Phone,
  Wrench, Mail, Award, User, X
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { toast } from 'sonner';
import { SiFsecure } from "react-icons/si";
import { MdStarBorderPurple500 } from "react-icons/md";
import { SiCssdesignawards } from "react-icons/si";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { BsTruckFlatbed } from "react-icons/bs";
import { GiMassDriver } from "react-icons/gi";


const MembershipPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [showModal, setShowModal] = useState(false);
  const [sendMethod, setSendMethod] = useState('whatsapp');
  const [formData, setFormData] = useState({
    idNumber: '',
    title: '',
    initials: '',
    firstName: '',
    lastName: '',
    email: '',
    cellphone: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    registrationNumber: '',
  });

  const plans = [
    {
      id: 'standard',
      name: 'Drive Standard',
      description: 'Includes roadside + home rescue. No extra charge for assistance at home.',
      icon: SiFsecure,
      color: 'from-gray-600 to-gray-700',
      features: [
        'On-the-spot repairs where possible',
        'Vehicle jumpstart',
        'Flat tyre change (must have a spare)',
        'Retrieval of locked-in keys',
        '4 call-outs a year',
        '50 km radius',
      ],
      notIncluded: []
    },
    {
      id: 'advance',
      name: 'Drive Advance',
      description: 'Enhanced garage support. If your car needs towing, we handle it all.',
      icon: MdStarBorderPurple500,
      color: 'from-red-600 to-red-700',
      popular: true,
      features: [
        'Call up to 4 garages to find the quickest option',
        'Obtain a repair estimate',
        'Clearly explain your choices',
        'Ensure no work starts without your approval',
        '5 call-outs a year',
        '120 km radius tow',
        'Towing, roadside assistance & home rescue',
        'Vehicle jumpstart',
        'Flat tyre change (must have a spare)',
      ],
      notIncluded: []
    },
    {
      id: 'ultimate',
      name: 'Drive Ultimate',
      description: 'Full-service garage support. From breakdown scene to workshop, we handle everything.',
      icon: SiCssdesignawards,
      color: 'from-amber-500 to-orange-600',
      features: [
        'Stay with your vehicle until it\'s loaded',
        'Tow to your preferred garage',
        'Brief the garage and ensure they contact you with a quote',
        'Guarantee no repairs proceed without your consent',
        '6 call-outs a year',
        '160 km radius',
        'Long-distance recovery',
        'Vehicle jumpstart',
        'Flat tyre change (must have a spare)',
      ],
      notIncluded: []
    },
    {
      id: 'family',
      name: 'Drive Family Breakdown Cover',
      description: 'Protect up to 5 people at the same address. Cover applies whether driving or passengers.',
      icon: LiaPeopleCarrySolid,
      color: 'from-purple-600 to-pink-600',
      features: [
        'Towing, roadside assistance & home rescue',
        'Vehicle jumpstart',
        '2 call-outs a year',
        'Retrieval of locked-in keys',
        '30 km radius tow',
        'Cover for temporary absences (e.g., students)',
      ],
      notIncluded: []
    },
    {
      id: 'business',
      name: 'Drive Business Breakdown Cover',
      description: 'Protect your business vehicle with comprehensive cover.',
      icon: BsTruckFlatbed,
      color: 'from-blue-600 to-blue-700',
      features: [
        'Any driver using your company vehicle is safeguarded',
        'Minimise downtime',
        'Protect your brand',
        'Vehicle-level cover for business',
      ],
      notIncluded: []
    },
    {
      id: 'accident',
      name: 'Drive Accident Assist Cover',
      description: 'Complimentary 24/7 accident claims support for all members.',
      icon: Phone,
      color: 'from-green-600 to-green-700',
      features: [
        '24/7 accident claims support',
        'Dedicated assistance for all members',
      ],
      notIncluded: []
    },
    {
      id: 'senior',
      name: 'Drive Senior Plus',
      description: 'For members aged 65+. 24/7 roadside and claims support tailored to your golden years.',
      icon: GiMassDriver,
      color: 'from-teal-600 to-cyan-600',
      features: [
        'Free basic car inspection',
        'Towing, roadside & home rescue',
        'Flat battery and tyre change',
        'Application required',
      ],
      notIncluded: []
    },
  ];

  const benefits = [
    { icon: Clock, title: '24/7 Availability', desc: 'Round-the-clock assistance' },
    { icon: Truck, title: 'Wide Coverage', desc: 'Help across Zimbabwe' },
    { icon: Phone, title: 'Priority Response', desc: 'Fast response times' },
    { icon: SiFsecure, title: 'No Hidden Fees', desc: 'All services included' },
    { icon: Wrench, title: 'Experienced Service', desc: 'Professional assistance' },
    { icon: Award, title: 'Member Discounts', desc: 'Exclusive deals' },
  ];

  const handleCardClick = (planId) => {
    setSelectedPlan(planId);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateMessage = () => {
    const planName = plans.find(p => p.id === selectedPlan)?.name || 'Standard';
    return `MEMBERSHIP APPLICATION - Drive Zimbabwe

Selected Plan: ${planName}

PERSONAL DETAILS:
- ID Number: ${formData.idNumber}
- Title: ${formData.title}
- Initials: ${formData.initials}
- First Name: ${formData.firstName}
- Last Name: ${formData.lastName}

CONTACT DETAILS:
- Email: ${formData.email}
- Cellphone: ${formData.cellphone}

VEHICLE DETAILS:
- Make: ${formData.vehicleMake || 'Not provided'}
- Model: ${formData.vehicleModel || 'Not provided'}
- Year: ${formData.vehicleYear || 'Not provided'}
- Registration: ${formData.registrationNumber || 'Not provided'}

I would like to apply for the ${planName} membership plan. Please contact me to proceed with the application.`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.idNumber || !formData.firstName || !formData.lastName || !formData.email || !formData.cellphone) {
      toast.error('Please fill in all required fields');
      return;
    }

    const message = generateMessage();
    const encodedMessage = encodeURIComponent(message);

    if (sendMethod === 'whatsapp') {
      const whatsappNumber = '263780579261';
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
      toast.success('Redirecting to WhatsApp...');
    } else {
      const subject = encodeURIComponent(`Membership Application - ${plans.find(p => p.id === selectedPlan)?.name} Plan`);
      window.open(`mailto:info@drivezim.co.zw?subject=${subject}&body=${encodedMessage}`, '_blank');
      toast.success('Opening email client...');
    }

    setShowModal(false);
  };

  const currentPlan = plans.find(p => p.id === selectedPlan);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/mem.jpg)' }}
        />
        <div className="absolute inset-0" />

        <div className="absolute inset-0 overflow-hidden opacity-20 hidden md:block">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-96 h-96 border-4 border-white/20 rounded-full"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8"
            >
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
              <span className="text-white font-semibold text-sm md:text-base">Become a Member</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Join Our
              <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Membership Program
              </span>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
              Get peace of mind on every journey with our comprehensive roadside assistance coverage
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 md:py-12 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-3 md:p-4"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                </div>
                <h3 className="text-white font-semibold text-xs md:text-sm mb-1">{benefit.title}</h3>
                <p className="text-gray-500 text-xs hidden sm:block">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Click on a plan to register for membership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCardClick(plan.id)}
                className={`relative cursor-pointer rounded-2xl md:rounded-3xl p-4 md:p-6 transition-all bg-white/5 border border-white/10 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/10`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 md:px-4 py-1 rounded-full whitespace-nowrap">
                    MOST POPULAR
                  </div>
                )}

                <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${plan.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4`}>
                  <plan.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">{plan.description}</p>

                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  {plan.features.slice(0, 6).map((feature, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-xs md:text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.features.length > 6 && (
                    <p className="text-gray-500 text-xs pl-6">+{plan.features.length - 6} more benefits</p>
                  )}
                </div>

                <div className="w-full py-2.5 md:py-3 rounded-xl text-center font-semibold text-sm md:text-base bg-red-600 text-white hover:bg-red-700 transition-colors">
                  Register Now
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl overflow-y-auto"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-white/20 rounded-2xl md:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto my-4"
            >
              {/* Modal Header */}
              <div className={`bg-gradient-to-r ${currentPlan?.color} p-4 md:p-6 relative`}>
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                    {currentPlan && <currentPlan.icon className="w-7 h-7 text-white" />}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{currentPlan?.name} Plan</h2>
                    <p className="text-white/80 text-sm">{currentPlan?.description}</p>
                  </div>
                </div>
              </div>

              {/* Modal Form */}
              <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-red-400" />
                    Personal Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        ID Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleInputChange}
                        placeholder="Enter your national ID number"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Title <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                        required
                      >
                        <option value="" className="bg-gray-900">Select title</option>
                        <option value="Mr" className="bg-gray-900">Mr</option>
                        <option value="Mrs" className="bg-gray-900">Mrs</option>
                        <option value="Ms" className="bg-gray-900">Ms</option>
                        <option value="Dr" className="bg-gray-900">Dr</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Initials <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="initials"
                        value={formData.initials}
                        onChange={handleInputChange}
                        placeholder="e.g. J.M."
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        First Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Last Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-red-400" />
                    Contact Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Cellphone <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="cellphone"
                        value={formData.cellphone}
                        onChange={handleInputChange}
                        placeholder="e.g. 0771234567"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Vehicle Information */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-red-400" />
                    Vehicle Information (Optional)
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Make</label>
                      <input
                        type="text"
                        name="vehicleMake"
                        value={formData.vehicleMake}
                        onChange={handleInputChange}
                        placeholder="e.g. Toyota"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Model</label>
                      <input
                        type="text"
                        name="vehicleModel"
                        value={formData.vehicleModel}
                        onChange={handleInputChange}
                        placeholder="e.g. Corolla"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Year</label>
                      <input
                        type="text"
                        name="vehicleYear"
                        value={formData.vehicleYear}
                        onChange={handleInputChange}
                        placeholder="e.g. 2020"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Registration</label>
                      <input
                        type="text"
                        name="registrationNumber"
                        value={formData.registrationNumber}
                        onChange={handleInputChange}
                        placeholder="e.g. ABC 1234"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Send Method Selection */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-3">
                    How would you like to send your application?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSendMethod('whatsapp')}
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all ${
                        sendMethod === 'whatsapp'
                          ? 'border-green-500 bg-green-500/20 text-green-400'
                          : 'border-white/20 bg-white/5 text-gray-400 hover:border-white/40'
                      }`}
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span className="font-semibold text-sm">WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSendMethod('email')}
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all ${
                        sendMethod === 'email'
                          ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                          : 'border-white/20 bg-white/5 text-gray-400 hover:border-white/40'
                      }`}
                    >
                      <Mail className="w-5 h-5" />
                      <span className="font-semibold text-sm">Email</span>
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full font-bold text-base py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 ${
                    sendMethod === 'whatsapp'
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-green-500/30'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-blue-500/30'
                  }`}
                >
                  {sendMethod === 'whatsapp' ? (
                    <>
                      <FaWhatsapp className="w-5 h-5" />
                      Send via WhatsApp
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      Send via Email
                    </>
                  )}
                </motion.button>

                <p className="text-center text-gray-500 text-xs">
                  By submitting, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/20.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-red-900/50 to-black/60" />

        <div className="max-w-4xl mx-auto relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-12"
          >
            <Phone className="w-12 h-12 md:w-16 md:h-16 text-red-400 mx-auto mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              Have Questions?
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-4">
              Our team is ready to help you choose the right membership plan.
            </p>
            <p className="text-sm md:text-lg text-gray-400 mb-6 md:mb-8">
              Call us: 078 057 9261 | 071 808 4297 | 073 652 3424
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <motion.a
                href="tel:0780579261"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg shadow-xl hover:shadow-white/30 transition-all"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                Call 078 057 9261
              </motion.a>
              <motion.a
                href="https://wa.me/263780579261"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg shadow-xl hover:shadow-green-500/30 transition-all"
              >
                <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5" />
                WhatsApp Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;
