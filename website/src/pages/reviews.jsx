import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ThumbsUp, MessageCircle, ExternalLink, Filter } from 'lucide-react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { IoLogoWhatsapp } from "react-icons/io";

const ReviewsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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

  const reviews = [
    {
      id: 1,
      platform: 'google',
      name: 'Tendai Moyo',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '2 weeks ago',
      text: 'Absolutely fantastic service! My car broke down on the Harare-Bulawayo road at night and Drive Zimbabwe came to my rescue within 25 minutes. The driver was professional and got my vehicle safely to the garage. Highly recommend their 24/7 service!',
      helpful: 24,
      verified: true
    },
    {
      id: 2,
      platform: 'facebook',
      name: 'Sarah Ncube',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '1 month ago',
      text: 'Best towing service in Harare! They helped me when I had a flat tyre in Avondale. The team was quick, friendly, and very affordable. Will definitely use them again.',
      helpful: 18,
      verified: true
    },
    {
      id: 3,
      platform: 'google',
      name: 'James Chikwanha',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '3 weeks ago',
      text: 'Professional vehicle recovery service. My bakkie got stuck in mud near Chitungwiza and they handled it expertly. Great equipment and skilled service!',
      helpful: 31,
      verified: true
    },
    {
      id: 4,
      platform: 'facebook',
      name: 'Grace Mutasa',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 4,
      date: '1 month ago',
      text: 'Very reliable service. Called them for a jump start and they arrived faster than expected. The only reason for 4 stars is I wish they had a mobile app for easier booking. Otherwise excellent!',
      helpful: 12,
      verified: true
    },
    {
      id: 5,
      platform: 'google',
      name: 'Peter Zimuto',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '2 months ago',
      text: 'I\'ve used Drive Zimbabwe three times now for my vehicles. Consistent, reliable, and professional every single time. Excellent at coordinating. Highly recommended for business use!',
      helpful: 45,
      verified: true
    },
    {
      id: 6,
      platform: 'facebook',
      name: 'Ruth Chigumba',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '3 weeks ago',
      text: 'Locked my keys in the car at Eastgate Mall. Drive Zimbabwe sent someone within 20 minutes who got me back in without any damage. Lifesavers! Thank you so much.',
      helpful: 28,
      verified: true
    },
    {
      id: 7,
      platform: 'google',
      name: 'Michael Sibanda',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '1 week ago',
      text: 'Outstanding emergency response! Had an accident on Second Street and they coordinated everything - towing, police liaison, and even helped arrange a rental. Above and beyond service.',
      helpful: 52,
      verified: true
    },
    {
      id: 8,
      platform: 'facebook',
      name: 'Chipo Makoni',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '2 weeks ago',
      text: 'As a woman driving alone at night, I felt so safe with Drive Zimbabwe. The operator stayed on the phone with me until the truck arrived. Professional and caring service!',
      helpful: 67,
      verified: true
    },
    {
      id: 9,
      platform: 'google',
      name: 'David Muzorewa',
      avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '1 month ago',
      text: 'They towed my classic Mercedes with a flatbed truck, handling it with extreme care. Really appreciate the attention to detail. Fair pricing too!',
      helpful: 19,
      verified: true
    },
    {
      id: 10,
      platform: 'facebook',
      name: 'Tatenda Gumbo',
      avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face',
      rating: 4,
      date: '3 months ago',
      text: 'Good service overall. Response time was about 35 minutes which was acceptable given it was during rush hour. The tow truck driver knew his stuff. Would use again.',
      helpful: 8,
      verified: true
    },
    {
      id: 11,
      platform: 'google',
      name: 'Emmanuel Chidyausiku',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '2 weeks ago',
      text: 'Called at 2 AM when my car overheated near Borrowdale. They were there in under 30 minutes! Incredible service even at that hour. True 24/7 availability.',
      helpful: 41,
      verified: true
    },
    {
      id: 12,
      platform: 'facebook',
      name: 'Nyasha Pfende',
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '1 month ago',
      text: 'They went above and beyond when my delivery vehicle broke down with perishable goods. They prioritised my call and even helped transfer some items. True professional!',
      helpful: 33,
      verified: true
    }
  ];

  const stats = {
    totalReviews: 847,
    averageRating: 4.8,
    googleReviews: 512,
    facebookReviews: 335,
    fiveStarPercent: 89,
    recommendPercent: 97
  };

  const filteredReviews = activeFilter === 'all'
    ? reviews
    : reviews.filter(r => r.platform === activeFilter);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: 'url(/9.jpg)' }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/60 to-black/50" />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 right-20 w-96 h-96 border-4 border-white/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: [360, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-64 h-64 border-4 border-red-500/30 rounded-3xl"
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
              <div className="flex items-center space-x-1">
                {renderStars(5)}
              </div>
              <span className="text-white font-semibold">{stats.averageRating} Rating</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              What Our
              <span className="block bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Real reviews from real customers across Facebook and Google Business Profile
            </p>

            {/* Platform Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { icon: Star, label: 'Total Reviews', value: stats.totalReviews.toLocaleString(), color: 'from-yellow-500 to-orange-500' },
                { icon: FaGoogle, label: 'Google Reviews', value: stats.googleReviews, color: 'from-blue-500 to-cyan-500' },
                { icon: FaFacebook, label: 'Facebook Reviews', value: stats.facebookReviews, color: 'from-blue-600 to-blue-400' },
                { icon: ThumbsUp, label: 'Recommend Us', value: `${stats.recommendPercent}%`, color: 'from-green-500 to-emerald-500' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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

                          {/* Floating Action Elements */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
              <button
                className="group bg-gradient-to-r from-green-400 via-green-600 to-primary-dark hover:bg-green-300 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
                onClick={() => handleAction("whatsapp")}
              >
                <IoLogoWhatsapp className="w-6 h-6 group-hover:rotate-12 transition-transform text-white" />
              </button>
            </div>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-gray-400 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filter by:
            </span>
            {[
              { id: 'all', label: 'All Reviews', icon: Star },
              { id: 'google', label: 'Google', icon: FaGoogle },
              { id: 'facebook', label: 'Facebook', icon: FaFacebook },
            ].map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeFilter === filter.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <filter.icon className="w-5 h-5" />
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredReviews.map((review, i) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-white/30 transition-all h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                          />
                          <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${
                            review.platform === 'google' ? 'bg-white' : 'bg-blue-600'
                          }`}>
                            {review.platform === 'google'
                              ? <FaGoogle className="w-3 h-3 text-[#4285F4]" />
                              : <FaFacebook className="w-3 h-3 text-white" />
                            }
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-white font-semibold">{review.name}</span>
                            {review.verified && (
                              <MdVerified className="w-4 h-4 text-blue-400" />
                            )}
                          </div>
                          <div className="text-gray-500 text-sm">{review.date}</div>
                        </div>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {renderStars(review.rating)}
                    </div>

                    {/* Review Text */}
                    <div className="relative flex-grow">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-red-500/20" />
                      <p className="text-gray-300 leading-relaxed pl-4">
                        {review.text}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-gray-500">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">{review.helpful} found helpful</span>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        review.platform === 'google'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-blue-600/20 text-blue-300'
                      }`}>
                        {review.platform === 'google' ? 'Google' : 'Facebook'}
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/5 group-hover:to-orange-500/5 rounded-3xl transition-all pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Rating Breakdown
            </h2>
            <p className="text-xl text-gray-400">See how customers rate our services</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Overall Rating */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center"
            >
              <div className="text-8xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
                {stats.averageRating}
              </div>
              <div className="flex justify-center gap-2 mb-4">
                {renderStars(5)}
              </div>
              <p className="text-gray-400 text-lg">Based on {stats.totalReviews} reviews</p>

              <div className="flex justify-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <FaGoogle className="w-6 h-6 text-[#4285F4]" />
                  <span className="text-white">{stats.googleReviews}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaFacebook className="w-6 h-6 text-[#1877F2]" />
                  <span className="text-white">{stats.facebookReviews}</span>
                </div>
              </div>
            </motion.div>

            {/* Rating Bars */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { stars: 5, percent: 89 },
                { stars: 4, percent: 8 },
                { stars: 3, percent: 2 },
                { stars: 2, percent: 1 },
                { stars: 1, percent: 0 },
              ].map((rating, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex items-center gap-1 w-24">
                    <span className="text-white font-semibold">{rating.stars}</span>
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </div>
                  <div className="flex-grow h-4 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${rating.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                    />
                  </div>
                  <span className="text-gray-400 w-12 text-right">{rating.percent}%</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/19.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-red-900/50 to-black/60" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Our Service?
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Join thousands of satisfied customers who trust Drive Zimbabwe for their roadside assistance needs.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Call us: 078 057 9261 | 071 808 4297 | 073 652 3424
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="tel:0780579261"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 shadow-xl hover:shadow-white/30 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Call Us Now: 078 057 9261
              </motion.a>

              <motion.a
                href="https://g.page/r/drivezimbabwe/review"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600/80 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-red-600 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Leave Us a Review
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;
