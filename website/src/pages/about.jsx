import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Shield, Phone, MapPin, Quote, ChevronRight, Star } from 'lucide-react';
import { LiaAwardSolid, LiaPeopleCarrySolid } from "react-icons/lia";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { GiAlarmClock, GiRoad } from "react-icons/gi";
import { IoCheckmarkDone } from "react-icons/io5";
import { FaHeart, FaHandshake, FaUsers } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { BsLightningCharge, BsTruck } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const StoryPage = () => {
  const coreValues = [
    {
      icon: FaHeart,
      title: 'Care First, Always',
      desc: 'We understand that a breakdown is more than a mechanical issue—it\'s a stressful and sometimes frightening moment. We treat every motorist with compassion, patience, and respect, ensuring no one feels alone on the roadside.',
      gradient: 'from-pink-300 to-red-400',
      bgImage: '/5.jpg'
    },
    {
      icon: FaHandshake,
      title: 'Integrity & Trust',
      desc: 'We operate with honesty, transparency, and accountability in every call we answer. Motorists trust us with their safety, their vehicles, and their families—and we honour that trust without compromise.',
      gradient: 'from-blue-300 to-cyan-400',
      bgImage: '/20.jpg'
    },
    {
      icon: BsLightningCharge,
      title: 'Reliability When It Matters Most',
      desc: 'When you call, we respond. Day or night, rain or shine, we are committed to being there when Zimbabwean motorists need us most, delivering dependable assistance without excuses.',
      gradient: 'from-yellow-300 to-orange-400',
      bgImage: '/26.jpg'
    },
    {
      icon: MdVerified,
      title: 'Professional Excellence',
      desc: 'Our trained operator, modern equipment, and strict safety standards ensure every recovery, tow, and assist is carried out with precision and care. We don\'t cut corners—because lives and livelihoods matter.',
      gradient: 'from-purple-300 to-indigo-400',
      bgImage: '/37.jpg'
    },
    {
      icon: FaUsers,
      title: 'Community & Responsibility',
      desc: 'We are more than a roadside assistance service; we are part of the Zimbabwean community. We take pride in keeping our roads safer and supporting fellow citizens when they need it most.',
      gradient: 'from-green-300 to-emerald-400',
      bgImage: '/2.jpg'
    }
  ];

      const handleAction = (action) => {
    if (action === "call") {
      window.location.href = "tel:+263785948128";
    } else if (action === "email") {
      window.location.href = "mailto:info@biddulphs.co.zw";
    } else if (action === "whatsapp") {
      window.location.href =
        "https://wa.me/263780579261text=Hello%20Drive%20Zimbabwe%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.";
    }
  };

const stats = [
  { value: '1000+', label: 'Vehicles Assisted', icon: HiArrowTrendingUp },
  { value: '24/7', label: 'Always Available', icon: GiAlarmClock },
  { value: '100%', label: 'Dedicated Service', icon: LiaPeopleCarrySolid },
  { value: '6+', label: 'Years of Service', icon: LiaAwardSolid }
];
  const milestones = [
    { year: '2019', title: 'Founded', desc: 'Drive Zimbabwe was established with a clear mission: to promote care, courtesy, and concentration on our roads.', icon: '🚀' },
    { year: '2020', title: 'Perseverance', desc: 'Continued serving Zimbabweans through challenging times, committed to being there when needed most.', icon: '📈' },
    { year: '2022', title: 'Expansion', desc: 'Extended our coverage across major cities and highways, bringing reliable assistance to more communities.', icon: '🗺️' },
    { year: '2024', title: 'Innovation', desc: 'Launched membership programs to better serve our growing customer base.', icon: '💡' }
  ];

  const teamRoles = [
    { title: 'Experienced Operator', desc: 'Expert ready to diagnose and fix' },
    { title: '24/7 Availability', desc: 'Always on call to coordinate your rescue' },
    { title: 'Recovery Expertise', desc: 'Trained for the most challenging situations' },
    { title: 'Customer Focus', desc: 'Friendly service guiding you through' }
  ];

  const whyChooseUs = [
    { title: 'Rapid Response', desc: 'Quick arrival when you need help most', icon: '⚡' },
    { title: 'Transparent Pricing', desc: 'No hidden fees - you know exactly what you\'re paying before we start', icon: '💎' },
    { title: 'Professional Service', desc: 'Trained and experienced to handle your vehicle with care', icon: '👨‍🔧' },
    { title: 'Wide Coverage', desc: 'Serving Harare and surrounding areas, plus long-distance assistance', icon: '🗺️' },
    { title: 'Quality Equipment', desc: 'Well-maintained tow truck with recovery capabilities', icon: '🚛' },
    { title: 'Customer First', desc: 'Your satisfaction drives everything we do', icon: '❤️' }
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/d7.jpeg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-red-900/30" />

        {/* Animated Circles - Desktop only */}
        <div className="absolute inset-0 opacity-20 hidden lg:block overflow-hidden">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-64 h-64 border-4 border-white/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-40 left-20 w-96 h-96 border-4 border-red-500/20 transform rotate-45"
          />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center min-h-[80vh] md:min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center py-20 md:py-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-red-600/20 backdrop-blur-xl border border-red-500/30 px-4 py-2 md:px-6 md:py-3 rounded-full mb-4 md:mb-6"
              >
                <GiRoad className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm md:text-base">Since 2019</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 px-2">
                We keep Zimbabwe
                <span className="block text-red-500">Moving</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 mb-6 md:mb-8">
                Founded in 2019 with a clear purpose: to promote care, courtesy, and concentration on Zimbabwe's roads—values that continue to shape everything we do today.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                <motion.a
                  href="tel:0780579261"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center space-x-2 bg-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold shadow-2xl hover:shadow-red-500/50 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us Now</span>
                </motion.a>
                <Link to="/membership">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold hover:bg-white/20 transition-all w-full sm:w-auto"
                  >
                    <Shield className="w-5 h-5" />
                    <span>Join Membership</span>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5 md:p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
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
{/* Stats Section */}
<section className="py-10 md:py-16 px-4 bg-gradient-to-b from-black to-gray-900 -mt-10 md:-mt-0 relative z-10">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-white/20 hover:bg-white/15 transition-all"
        >
          <stat.icon className="w-6 h-6 md:w-10 md:h-10 text-white mx-auto mb-2 md:mb-3" />
          <div className="text-2xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-white/70 text-xs md:text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Our Journey Section */}
      <section className="py-12 md:py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <span className="text-red-500 font-semibold text-sm md:text-base mb-2 block">OUR STORY</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                A Journey Built on Trust
              </h2>

              <div className="space-y-4 md:space-y-6 text-gray-300">
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  Drive Zimbabwe Roadside Assistance was founded in 2019 with a clear purpose: to promote <span className="text-red-400 font-semibold">care, courtesy, and concentration</span> on our roads—values that continue to shape everything we do today.
                </p>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  What started as a small operation with a dedicated team has grown into Zimbabwe's trusted roadside assistance provider. We deliver <span className="text-red-400 font-semibold">quality, reliable, and cost-effective</span> services, helping thousands of stranded motorists get back on the road safely.
                </p>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  Our commitment to excellence remains unchanged. Every day, we work tirelessly to ensure that when you're stranded on the road, help is just a phone call away.
                </p>
              </div>

              {/* Rating */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-6 md:mt-8 flex items-center space-x-4 bg-white/5 rounded-xl p-4"
              >
                <div className="flex -space-x-2">
                  {['/5.jpg', '/20.jpg', '/26.jpg'].map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt=""
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-900 object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-white font-bold ml-2">4.8</span>
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm">Based on 500+ reviews</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 grid grid-cols-2 gap-3 md:gap-4"
            >
              <div className="space-y-3 md:space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-xl md:rounded-2xl overflow-hidden h-32 md:h-48"
                >
                  <img src="/5.jpg" alt="Fleet" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-xl md:rounded-2xl overflow-hidden h-40 md:h-64"
                >
                  <img src="/20.jpg" alt="Team" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
              </div>
              <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-xl md:rounded-2xl overflow-hidden h-40 md:h-64"
                >
                  <img src="/26.jpg" alt="Service" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-xl md:rounded-2xl overflow-hidden h-32 md:h-48"
                >
                  <img src="/37.jpg" alt="Recovery" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 md:py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="text-red-500 font-semibold text-sm md:text-base mb-2 block">THE 3 C'S</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">Our Core Values</h2>
            <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              Care, Courtesy, and Concentration guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl md:rounded-3xl h-64 md:h-80"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${value.bgImage})` }}
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-90`} />

                {/* Content */}
                <div className="relative z-10 p-5 md:p-6 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-xl rounded-xl md:rounded-2xl flex items-center justify-center">
                    <value.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-white/90 text-sm md:text-base">{value.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="text-red-500 font-semibold text-sm md:text-base mb-2 block">OUR JOURNEY</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">Key Milestones</h2>
            <p className="text-sm md:text-lg text-gray-400">Our journey of growth since 2019</p>
          </motion.div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-4">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-2xl">
                  {milestone.icon}
                </div>
                <div>
                  <div className="text-red-500 font-bold text-lg">{milestone.year}</div>
                  <h3 className="text-white font-bold text-base mb-1">{milestone.title}</h3>
                  <p className="text-gray-400 text-sm">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:grid grid-cols-4 gap-6">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all h-full">
                  <div className="text-4xl mb-3">{milestone.icon}</div>
                  <div className="text-4xl font-bold text-red-500 mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-400 text-sm">{milestone.desc}</p>
                </div>
                {i < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-red-500/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="text-red-500 font-semibold text-sm md:text-base mb-2 block">WHY US</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">Why Choose Drive Zimbabwe?</h2>
            <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              We're not just a towing company—we're your roadside partner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 hover:border-red-500/30 transition-all"
              >
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0 text-xl md:text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-xs md:text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden h-64 md:h-[500px]"
            >
              <img
                src="/20.jpg"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8">
                <LiaPeopleCarrySolid className="w-8 h-8 md:w-12 md:h-12 text-red-500 mb-2 md:mb-4" />
                <h3 className="text-white font-bold text-xl md:text-3xl mb-1">Professional Service</h3>
                <p className="text-gray-200 text-sm md:text-base">Experienced and dedicated to helping you</p>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-red-500 font-semibold text-sm md:text-base mb-2 block">OUR SERVICE</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                What We Offer
              </h2>
              <p className="text-sm md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">
                Experienced, trained, and ready to assist you 24/7. We embody our values of care, courtesy, and concentration in everything we do.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                {teamRoles.map((role, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 bg-white/5 rounded-xl p-3 md:p-4"
                  >
                    <IoCheckmarkDone className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold text-sm md:text-base block">{role.title}</span>
                      <span className="text-gray-400 text-xs md:text-sm">{role.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg shadow-2xl hover:shadow-red-500/50 transition-all flex items-center space-x-2"
                >
                  <span>Get In Touch</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 md:py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Quote className="w-12 h-12 md:w-16 md:h-16 text-red-500 mx-auto mb-4 md:mb-6" />
            <p className="text-xl md:text-3xl lg:text-4xl text-white font-medium mb-4 md:mb-6 leading-relaxed px-4">
              "We don't just tow vehicles—we rescue people from stressful situations and get them safely back on the road."
            </p>
            <div className="text-red-400 font-semibold text-sm md:text-base">— Drive Zimbabwe Team</div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/26.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/60 via-red-800/50 to-black/60" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-12"
          >
            <BsTruck className="w-12 h-12 md:w-16 md:h-16 text-white mx-auto mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-sm md:text-xl text-gray-300 mb-4 px-2">
              Join thousands of satisfied customers who trust Drive Zimbabwe for their roadside needs
            </p>
            <p className="text-sm md:text-lg text-gray-400 mb-6 md:mb-8">
              Call us: 078 057 9261 | 071 808 4297 | 073 652 3424
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <motion.a
                href="tel:0780579261"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-2 bg-white text-red-600 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold shadow-2xl"
              >
                <Phone className="w-5 h-5" />
                <span>Call 078 057 9261</span>
              </motion.a>
              <Link to="/membership">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-red-600/80 backdrop-blur-xl border border-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold hover:bg-red-600 transition-all"
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

export default StoryPage;
