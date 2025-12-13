import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap, Shield, Target, Award, Users, Clock, TrendingUp, MapPin, CheckCircle } from 'lucide-react';

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
    { icon: Heart, title: 'Customer First', desc: 'Your safety and satisfaction drive everything we do' },
    { icon: Zap, title: 'Speed & Efficiency', desc: 'Rapid response times when you need us most' },
    { icon: Shield, title: 'Trust & Reliability', desc: 'Building long-term relationships through consistency' },
    { icon: Target, title: 'Excellence', desc: 'Continuously improving our service standards' }
  ];

  const stats = [
    { value: '5000+', label: 'Vehicles Assisted', icon: TrendingUp },
    { value: '24/7', label: 'Always Available', icon: Clock },
    { value: '50+', label: 'Professional Staff', icon: Users },
    { value: '100%', label: 'Customer Satisfaction', icon: CheckCircle }
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
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/37.jpg)' }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border-4 border-white/20 rounded-full" />
          <div className="absolute bottom-40 right-40 w-96 h-96 border-4 border-red-500/20 transform rotate-45" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-red-600/20 backdrop-blur-xl border border-red-500/30 px-6 py-2 rounded-full mb-6">
                <span className="text-red-400 font-semibold">{t.about.subtitle}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{t.about.title}</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Established as Zimbabwe's premier roadside assistance provider, serving thousands of customers with dedication and expertise since day one.
              </p>
            </motion.div>
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

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-center shadow-2xl hover:shadow-red-500/50 transition-all"
              >
                <stat.icon className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-200 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Grid with Images */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Journey</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Drive Zimbabwe was founded with a simple mission: to provide fast, reliable, and affordable roadside assistance to every Zimbabwean driver. We've grown from a small team with a single tow truck to a comprehensive fleet serving the entire nation.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our commitment to excellence remains unchanged. Every day, we work tirelessly to ensure that when you're stranded on the road, help is just a phone call away.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="w-12 h-12 text-red-500" />
                <div>
                  <div className="text-3xl font-bold text-white">4.8★</div>
                  <div className="text-gray-400">Based on 500+ reviews</div>
                </div>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden"
            >
              <img
                src="/5.jpg"
                alt="Our Fleet"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-bold text-2xl mb-2">Our Modern Fleet</h3>
                <p className="text-gray-200">State-of-the-art equipment ready to serve you</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Milestones</h2>
            <p className="text-xl text-gray-400">Key moments in our journey</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all h-full">
                  <div className="text-5xl font-bold text-red-500 mb-4">{milestone.year}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.desc}</p>
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
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-3xl overflow-hidden"
            >
              <img
                src="/20.jpg"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <Users className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-white font-bold text-3xl mb-2">Professional Team</h3>
                <p className="text-gray-200">50+ certified experts at your service</p>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our experienced professionals are trained, certified, and ready to assist you 24/7. Every team member is committed to providing exceptional service with a smile.
              </p>
              
              <div className="space-y-4 mb-8">
                {teamRoles.map((role, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span className="text-white font-semibold text-lg">{role}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-red-500/50 transition-all"
              >
                Join Our Team
              </motion.a>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Experience the Difference?</h2>
            <p className="text-xl text-gray-300 mb-8">Join thousands of satisfied customers across Zimbabwe</p>
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

export default StoryPage;