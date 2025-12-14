import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap, Shield, Target, Award, Users, Clock, TrendingUp, MapPin, CheckCircle } from 'lucide-react';
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

// Mock translation object
const mockTranslations = {
  about: {
    subtitle: "Our Story",
    title: "Driving Zimbabwe Forward"
  }
};

const StoryPage = () => {
  const t = mockTranslations; // Replace with: const { t } = useLanguage();

  const values = [
    { icon: RiCustomerService2Line, title: 'Customer First', desc: 'Your safety and satisfaction drive everything we do' },
    { icon: FiZap, title: 'Speed & Efficiency', desc: 'Rapid response times when you need us most' },
    { icon: SiFsecure, title: 'Trust & Reliability', desc: 'Building long-term relationships through consistency' },
    { icon: GiSpearHook, title: 'Excellence', desc: 'Continuously improving our service standards' }
  ];

  const stats = [
    { value: '5000+', label: 'Vehicles Assisted', icon: HiArrowTrendingUp },
    { value: '24/7', label: 'Always Available', icon: GiAlarmClock },
    { value: '50+', label: 'Professional Staff', icon: LiaPeopleCarrySolid },
    { value: '100%', label: 'Customer Satisfaction', icon: IoCheckmarkDone }
  ];

  const milestones = [
    { year: '2018', title: 'Founded', desc: 'Started with a vision to revolutionize roadside assistance in Zimbabwe' },
    { year: '2020', title: 'Expansion', desc: 'Grew our fleet to 10 vehicles and expanded across major cities' },
    { year: '2022', title: 'Recognition', desc: 'Awarded Best Roadside Service Provider by Zimbabwe Auto Association' },
    { year: '2024', title: 'Innovation', desc: 'Launched 24/7 digital dispatch system for faster response times' }
  ];

  const teamRoles = [
    'Certified Technicians', 
    '24/7 Dispatchers', 
    'Recovery Specialists', 
    'Customer Support'
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/37.jpg)' }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 md:top-20 left-5 md:left-20 w-32 h-32 md:w-64 md:h-64 border-2 md:border-4 border-white/20 rounded-full" />
          <div className="absolute bottom-20 md:bottom-40 right-5 md:right-40 w-48 h-48 md:w-96 md:h-96 border-2 md:border-4 border-red-500/20 transform rotate-45" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center pt-20 md:pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="py-8"
            >
              <div className="inline-block bg-red-600/20 backdrop-blur-xl border border-red-500/30 px-4 md:px-6 py-2 rounded-full mb-4 md:mb-6">
                <span className="text-red-400 font-semibold text-sm md:text-base">{t.about.subtitle}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 px-2">
                {t.about.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Established as Zimbabwe's premier roadside assistance provider, serving thousands of customers with dedication and expertise since day one.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
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

      {/* Stats Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-2xl hover:shadow-red-500/50 transition-all"
              >
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white mx-auto mb-2 md:mb-3" />
                <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
                <div className="text-gray-200 text-xs md:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Grid with Images */}
      <section className="py-12 md:py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">Our Journey</h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6">
                Drive Zimbabwe was founded with a simple mission: to provide fast, reliable, and affordable roadside assistance to every Zimbabwean driver. We've grown from a small team with a single tow truck to a comprehensive fleet serving the entire nation.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6">
                Our commitment to excellence remains unchanged. Every day, we work tirelessly to ensure that when you're stranded on the road, help is just a phone call away.
              </p>
              <div className="flex items-center space-x-4">
                <LiaAwardSolid className="w-10 h-10 md:w-12 md:h-12 text-red-500" />
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white">4.8★</div>
                  <div className="text-sm md:text-base text-gray-400">Based on 500+ reviews</div>
                </div>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden order-1 md:order-2"
            >
              <img
                src="/5.jpg"
                alt="Our Fleet"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                <h3 className="text-white font-bold text-lg md:text-2xl mb-1 md:mb-2">Our Modern Fleet</h3>
                <p className="text-gray-200 text-sm md:text-base">State-of-the-art equipment ready to serve you</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">Our Milestones</h2>
            <p className="text-base md:text-xl text-gray-400">Key moments in our journey</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-all h-full">
                  <div className="text-4xl md:text-5xl font-bold text-red-500 mb-3 md:mb-4">{milestone.year}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">{milestone.title}</h3>
                  <p className="text-sm md:text-base text-gray-400">{milestone.desc}</p>
                </div>
                {i < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-red-500/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 shadow-xl hover:shadow-red-500/50 transition-all"
              >
                <value.icon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/90">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Image */}
      <section className="py-12 md:py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden"
            >
              <img
                src="/20.jpg"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8">
                <LiaPeopleCarrySolid className="w-10 h-10 md:w-12 md:h-12 text-red-500 mb-3 md:mb-4" />
                <h3 className="text-white font-bold text-2xl md:text-3xl mb-1 md:mb-2">Professional Team</h3>
                <p className="text-gray-200 text-sm md:text-base">50+ certified experts at your service</p>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">Meet Our Team</h2>
              <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                Our experienced professionals are trained, certified, and ready to assist you 24/7. Every team member is committed to providing exceptional service with a smile.
              </p>
              
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {teamRoles.map((role, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <IoCheckmarkDone className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0" />
                    <span className="text-white font-semibold text-base md:text-lg">{role}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-2xl hover:shadow-red-500/50 transition-all"
              >
                Join Our Team
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-black opacity-90" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl md:rounded-3xl p-8 md:p-12"
          >
            <MapPin className="w-12 h-12 md:w-16 md:h-16 text-white mx-auto mb-4 md:mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 px-2">
              Join thousands of satisfied customers across Zimbabwe
            </p>
            <motion.a
              href="tel:0780579261"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-red-600 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-2xl"
            >
              Call 078 057 9261
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StoryPage;