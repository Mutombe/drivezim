// Footer Component
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, ChevronRight, Shield, Clock, Award, Facebook, Linkedin, Instagram, X, Eye } from 'lucide-react';
import { useLanguage } from '../lunguageContext';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);
  const [visitCount, setVisitCount] = useState(0);

  // Track visitor count
  useEffect(() => {
    const VISIT_COUNT_KEY = 'drivezim_visit_count';
    const SESSION_VISITED_KEY = 'drivezim_session_visited';

    // Get current count from localStorage
    let currentCount = parseInt(localStorage.getItem(VISIT_COUNT_KEY) || '0', 10);

    // Check if this session has already been counted
    const sessionVisited = sessionStorage.getItem(SESSION_VISITED_KEY);

    if (!sessionVisited) {
      // New session - increment the counter
      currentCount += 1;
      localStorage.setItem(VISIT_COUNT_KEY, currentCount.toString());
      sessionStorage.setItem(SESSION_VISITED_KEY, 'true');
    }

    setVisitCount(currentCount);
  }, []);

  const footerLinks = {
    company: [
      { label: 'About Us', path: '/story' },
      { label: 'Our Services', path: '/services' },
      { label: 'Gallery', path: '/gallery' },
      { label: 'Contact', path: '/contact' }
    ],
    services: [
      { label: 'Emergency Towing', path: '/services' },
      { label: 'Roadside Assistance', path: '/services' },
      { label: 'Vehicle Recovery', path: '/services' },
      { label: 'Membership', path: '/membership' }
    ],
    resources: [
      { label: 'Blog', path: '/blog' },
      { label: 'FAQs', path: '/faq' },
      { label: 'Reviews', path: '/reviews' }
    ]
  };

  const socials = [
    { icon: Facebook, href: 'https://www.facebook.com/DriveZimRoadsideAssistance/', label: 'Facebook' },
    { icon: FaXTwitter, href: 'https://x.com/drivezimbabwe', label: 'X' },
    { icon: Instagram, href: 'https://www.instagram.com/drivezim2019/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/posts/drive-zim-0aa0a3251_drive-zimbabwe-roadside-assistance-activity-7206968705946157056--40y', label: 'LinkedIn' }
  ];

  const privacyPolicyContent = {
    title: 'Privacy Policy',
    lastUpdated: 'January 2026',
    sections: [
      {
        heading: 'Information We Collect',
        content: 'We collect information you provide directly to us, such as when you create an account, request roadside assistance, or contact us for support. This may include your name, email address, phone number, vehicle information, and location data.'
      },
      {
        heading: 'How We Use Your Information',
        content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.'
      },
      {
        heading: 'Information Sharing',
        content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our business, conducting our services, or serving our users.'
      },
      {
        heading: 'Data Security',
        content: 'We implement appropriate technical and organizational measures to protect the security of your personal information. However, no method of transmission over the Internet is 100% secure.'
      },
      {
        heading: 'Your Rights',
        content: 'You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. Contact us to exercise these rights.'
      },
      {
        heading: 'Contact Us',
        content: 'If you have questions about this Privacy Policy, please contact us at info@drivezim.co.zw or call 078 057 9261.'
      }
    ]
  };

  const cookiesPolicyContent = {
    title: 'Cookie Policy',
    lastUpdated: 'January 2026',
    sections: [
      {
        heading: 'What Are Cookies',
        content: 'Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and how you use our site.'
      },
      {
        heading: 'Types of Cookies We Use',
        content: 'Essential Cookies: Required for the website to function properly. Analytics Cookies: Help us understand how visitors interact with our website. Preference Cookies: Remember your settings and preferences.'
      },
      {
        heading: 'How We Use Cookies',
        content: 'We use cookies to remember your login details, understand how you use our website, improve your browsing experience, and deliver relevant content and advertisements.'
      },
      {
        heading: 'Managing Cookies',
        content: 'Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. Note that disabling cookies may affect your experience on our website.'
      },
      {
        heading: 'Third-Party Cookies',
        content: 'Some cookies on our website are set by third-party services such as Google Analytics. These help us analyze website traffic and understand visitor behavior.'
      },
      {
        heading: 'Updates to This Policy',
        content: 'We may update this Cookie Policy from time to time. We encourage you to review this page periodically for the latest information on our cookie practices.'
      }
    ]
  };

  const termsContent = {
    title: 'Terms of Service',
    lastUpdated: 'January 2026',
    sections: [
      {
        heading: 'Acceptance of Terms',
        content: 'By accessing and using Drive Zimbabwe\'s services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.'
      },
      {
        heading: 'Services Provided',
        content: 'Drive Zimbabwe provides roadside assistance services including but not limited to towing, battery jump-starts, flat tyre assistance, fuel delivery, and vehicle recovery. Services are subject to availability and coverage area.'
      },
      {
        heading: 'Membership',
        content: 'Membership benefits are subject to the specific plan purchased. Members must provide accurate information and maintain valid contact details. Membership is non-transferable unless otherwise specified.'
      },
      {
        heading: 'Payment Terms',
        content: 'Payment is due at the time of service for non-members. Members receive services as per their plan benefits. Additional charges may apply for services outside the scope of membership coverage.'
      },
      {
        heading: 'Limitation of Liability',
        content: 'Drive Zimbabwe shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the amount paid for the specific service rendered.'
      },
      {
        heading: 'Contact Information',
        content: 'For questions about these Terms of Service, contact us at info@drivezim.co.zw or call 078 057 9261.'
      }
    ]
  };

  const getModalContent = () => {
    switch (activeModal) {
      case 'privacy':
        return privacyPolicyContent;
      case 'cookies':
        return cookiesPolicyContent;
      case 'terms':
        return termsContent;
      default:
        return null;
    }
  };

  const modalContent = getModalContent();

  return (
    <>
      <footer className="relative border-t border-white/10 pt-16 md:pt-20 pb-8 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/11.jpg)' }}
        />

        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/60 to-black/65" />

        {/* Additional Red Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-black/50" />

        {/* Geometric Pattern Overlay - Hidden on mobile */}
        <div className="absolute inset-0 opacity-5 hidden md:block">
          <div className="absolute top-20 right-20 w-64 h-64 border-4 border-white/20 rounded-full" />
          <div className="absolute bottom-20 left-20 w-96 h-96 border-4 border-red-500/20 transform rotate-45" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-4 md:mb-6">
                <div>
                  <div className="text-white font-bold text-lg md:text-xl">DRIVE ZIMBABWE</div>
                  <div className="text-red-500 text-xs font-medium">ROADSIDE ASSISTANCE</div>
                </div>
              </Link>
              <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                Zimbabwe's most trusted roadside assistance provider. Quality, reliable, and cost-effective service available 24/7.
              </p>

              {/* Emergency Contact */}
              <div className="bg-red-600/20 backdrop-blur-xl border border-red-500/30 rounded-xl p-3 md:p-4 mb-4 md:mb-6">
                <div className="flex flex-col space-y-2">
                  <div className="text-gray-300 text-xs font-semibold">Emergency Hotlines</div>
                  <a href="tel:0780579261" className="text-white font-bold text-sm md:text-base hover:text-red-500 transition-colors">
                    078 057 9261
                  </a>
                  <a href="tel:0718084297" className="text-white font-bold text-sm md:text-base hover:text-red-500 transition-colors">
                    071 808 4297
                  </a>
                  <a href="tel:0736523424" className="text-white font-bold text-sm md:text-base hover:text-red-500 transition-colors">
                    073 652 3424
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-2 md:space-x-3">
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-9 h-9 md:w-10 md:h-10 bg-white/10 hover:bg-red-600 backdrop-blur-xl border border-white/20 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">Company</h3>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.company.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-red-500 transition-colors flex items-center space-x-2 group text-sm md:text-base"
                    >
                      <ChevronRight className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">Services</h3>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.services.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-red-500 transition-colors flex items-center space-x-2 group text-sm md:text-base"
                    >
                      <ChevronRight className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">Legal</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <button
                    onClick={() => setActiveModal('privacy')}
                    className="text-gray-300 hover:text-red-500 transition-colors flex items-center space-x-2 group text-sm md:text-base"
                  >
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    <span>Privacy Policy</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('terms')}
                    className="text-gray-300 hover:text-red-500 transition-colors flex items-center space-x-2 group text-sm md:text-base"
                  >
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    <span>Terms of Service</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('cookies')}
                    className="text-gray-300 hover:text-red-500 transition-colors flex items-center space-x-2 group text-sm md:text-base"
                  >
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    <span>Cookie Policy</span>
                  </button>
                </li>
                {footerLinks.resources.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-red-500 transition-colors flex items-center space-x-2 group text-sm md:text-base"
                    >
                      <ChevronRight className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mb-4">
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                <div className="flex items-center space-x-1 md:space-x-2 text-gray-400 text-xs md:text-sm">
                  <Eye className="w-3 h-3 md:w-4 md:h-4 text-red-500" />
                  <span>Visits {visitCount.toLocaleString()}</span>
                </div>
                <div className="text-gray-400 text-xs md:text-sm text-center md:text-left">
                  &copy; {currentYear} Drive Zimbabwe Roadside Assistance Pvt. Ltd. All rights reserved.
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-400">
                <div className="flex items-center space-x-1 md:space-x-2">
                  <Shield className="w-3 h-3 md:w-4 md:h-4 text-red-500" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                  <Award className="w-3 h-3 md:w-4 md:h-4 text-red-500" />
                  <span>4.8 Rated</span>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                  <Clock className="w-3 h-3 md:w-4 md:h-4 text-red-500" />
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>

            {/* Designer Credit */}
            <div className="text-center pt-4 border-t border-white/10">
              <p className="text-gray-500 text-xs md:text-sm">
                Designed by{' '}
                <a
                  href="https://bitstudio.co.zw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  Bit Studio
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      <AnimatePresence>
        {activeModal && modalContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl overflow-y-auto"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-white/20 rounded-2xl md:rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto my-4"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 md:p-6 sticky top-0 z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white">{modalContent.title}</h2>
                    <p className="text-white/70 text-sm">Last updated: {modalContent.lastUpdated}</p>
                  </div>
                  <button
                    onClick={() => setActiveModal(null)}
                    className="w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-4 md:p-6 space-y-6">
                {modalContent.sections.map((section, index) => (
                  <div key={index} className="border-b border-white/10 pb-6 last:border-0">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3">{section.heading}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">{section.content}</p>
                  </div>
                ))}

                {/* Contact Section */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6">
                  <h4 className="text-white font-bold mb-3">Questions?</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    If you have any questions about this policy, please contact us:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                    <a
                      href="mailto:info@drivezim.co.zw"
                      className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm"
                    >
                      <Mail className="w-4 h-4" />
                      info@drivezim.co.zw
                    </a>
                    <a
                      href="tel:0780579261"
                      className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      078 057 9261
                    </a>
                    <a
                      href="tel:0718084297"
                      className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      071 808 4297
                    </a>
                    <a
                      href="tel:0736523424"
                      className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      073 652 3424
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
