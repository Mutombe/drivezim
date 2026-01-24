import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, HelpCircle, Truck, Clock, CreditCard, Shield, MapPin, Wrench, AlertTriangle, MessageCircle } from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'services', label: 'Services', icon: Truck },
    { id: 'pricing', label: 'Pricing', icon: CreditCard },
    { id: 'emergency', label: 'Emergency', icon: AlertTriangle },
    { id: 'coverage', label: 'Coverage', icon: MapPin },
  ];

      const handleAction = (action) => {
    if (action === "call") {
      window.location.href = "tel:+263785948128";
    } else if (action === "email") {
      window.location.href = "mailto:info@biddulphs.co.zw";
    } else if (action === "whatsapp") {
      window.location.href =
        "https://wa.me/263780579261?text=Hello%20Drive%20Zimbabwe%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.";
    }
  };

  const faqs = [
    {
      category: 'services',
      question: 'What types of vehicles do you tow?',
      answer: 'We tow all types of vehicles including sedans, SUVs, bakkies, motorcycles, and light commercial vehicles. Our tow truck is equipped to handle most standard vehicles safely and efficiently.'
    },
    {
      category: 'services',
      question: 'Do you offer roadside assistance besides towing?',
      answer: 'Yes! Our roadside assistance services include battery jump-starts, tyre changes, fuel delivery, lockout assistance, and minor mechanical repairs. We carry essential tools and parts to get you back on the road quickly.'
    },
    {
      category: 'services',
      question: 'Can you recover vehicles from off-road locations?',
      answer: 'Absolutely. Our tow truck is equipped with a winch and recovery capabilities. Whether your vehicle is stuck in mud, sand, a ditch, or has gone off an embankment, we can safely retrieve it.'
    },
    {
      category: 'emergency',
      question: 'How quickly can you respond to an emergency?',
      answer: 'We respond as quickly as possible to all emergencies within Harare and surrounding areas. For urgent situations, we prioritize dispatch and aim to reach you promptly. Response times may vary based on location and traffic conditions, but we always communicate estimated arrival times clearly.'
    },
    {
      category: 'emergency',
      question: 'Are your services available 24/7?',
      answer: 'Yes, Drive Zimbabwe operates 24 hours a day, 7 days a week, 365 days a year. Whether it\'s 3 AM on a holiday or rush hour on a Monday, we are ready to assist you.'
    },
    {
      category: 'emergency',
      question: 'What should I do while waiting for assistance?',
      answer: 'Stay safe by moving to the side of the road if possible. Turn on your hazard lights, set up warning triangles if you have them, and stay inside your vehicle if you\'re on a busy road. Keep your phone charged and stay in contact with our dispatch team who will update you on the driver\'s location.'
    },
    {
      category: 'pricing',
      question: 'How much does towing cost?',
      answer: 'Towing costs depend on several factors including distance, vehicle type, and time of service. We offer transparent pricing with no hidden fees. Basic towing within Harare typically starts from $30 USD. We always provide a quote before service begins so you know exactly what to expect.'
    },
    {
      category: 'pricing',
      question: 'Do you accept insurance claims?',
      answer: 'Yes, we work with most major insurance companies in Zimbabwe. If your policy covers roadside assistance or towing, we can bill your insurance directly or provide detailed receipts for reimbursement. Contact us with your insurance details and we\'ll help facilitate the process.'
    },
    {
      category: 'pricing',
      question: 'What payment methods do you accept?',
      answer: 'We accept cash (USD and ZWL), mobile money (EcoCash, OneMoney), bank transfers, and major credit/debit cards. Payment can be made on-site after service completion or invoiced for corporate accounts.'
    },
    {
      category: 'coverage',
      question: 'What areas do you service?',
      answer: 'We primarily serve Harare and all surrounding areas including Chitungwiza, Norton, Ruwa, and Epworth. We also provide long-distance towing services to all major cities in Zimbabwe including Bulawayo, Mutare, Gweru, and Masvingo. Additional charges apply for long-distance services.'
    },
    {
      category: 'coverage',
      question: 'Do you offer services outside Harare?',
      answer: 'Yes! While we are based in Harare, we provide services throughout Zimbabwe. For locations outside our immediate service area, we can arrange assistance. Contact us for availability in your specific area.'
    },
    {
      category: 'services',
      question: 'Can you transport my vehicle to a specific garage?',
      answer: 'Absolutely. You can choose any destination for your vehicle - whether it\'s your preferred mechanic, dealership, or home. Just provide the address when you call, and we\'ll deliver your vehicle safely to your chosen location.'
    },
    {
      category: 'emergency',
      question: 'What if I\'m involved in an accident?',
      answer: 'First, ensure everyone\'s safety and call emergency services if needed. Then call us at 078 057 9261. We\'ll come to you as quickly as possible and can help coordinate with police if required. We handle accident scenes professionally and can assist with documentation for insurance purposes.'
    },
    {
      category: 'services',
      question: 'Do you offer corporate accounts?',
      answer: 'Yes, we offer corporate accounts with preferential rates for businesses. Benefits include priority service, monthly billing, and detailed reporting. Contact us to discuss a customized solution for your business.'
    },
    {
      category: 'pricing',
      question: 'Are there any hidden fees I should know about?',
      answer: 'No hidden fees. We believe in transparent pricing. The quote we provide includes all charges. Additional costs only apply if the situation differs significantly from what was described (e.g., vehicle is heavier than stated, requires special equipment, or destination changes). We always communicate any changes before proceeding.'
    },
  ];

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/24.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/80 to-red-900/50" />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-96 h-96 border-4 border-white/20 rounded-full"
          />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <HelpCircle className="w-5 h-5 text-red-400" />
              <span className="text-white font-semibold">Got Questions?</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Frequently Asked
              <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our roadside assistance services
            </p>
          </motion.div>
        </div>
      </section>

                          {/* Floating Action Elements */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
              <button
                className="group bg-gradient-to-r from-green-400 via-green-600 to-primary-dark hover:bg-green-300 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
                onClick={() => handleAction("whatsapp")}
              >
                <IoLogoWhatsapp className="w-6 h-6 group-hover:rotate-12 transition-transform text-white" />
              </button>
            </div>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/30'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-left hover:border-white/30 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          openIndex === index ? 'bg-red-600' : 'bg-white/10'
                        } transition-colors`}>
                          <HelpCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                      </div>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className={`w-6 h-6 ${openIndex === index ? 'text-red-400' : 'text-gray-400'}`} />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-white/10">
                            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/26.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-red-900/50 to-black/60" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-3xl p-12"
          >
            <MessageCircle className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is here to help. Reach out and we'll get back to you as soon as possible.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Call us: 078 057 9261 | 071 808 4297 | 073 652 3424
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:0780579261"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 shadow-2xl"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us Now</span>
              </motion.a>

              <Link to="/membership">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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

export default FAQPage;
