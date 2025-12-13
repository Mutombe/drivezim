import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Truck, Wrench, Shield, Users } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  // Gallery images - Replace with your actual images
  const galleryImages = [
    { id: 1, src: '/5.jpg', category: 'towing', title: 'Emergency Towing Service', description: 'Professional towing in action' },
    { id: 2, src: '/20.jpg', category: 'fleet', title: 'Our Modern Fleet', description: 'State-of-the-art tow trucks' },
    { id: 3, src: '/37.jpg', category: 'recovery', title: 'Vehicle Recovery', description: 'Expert recovery operations' },
    { id: 4, src: '/5.jpg', category: 'towing', title: 'Highway Assistance', description: '24/7 highway support' },
    { id: 5, src: '/20.jpg', category: 'fleet', title: 'Heavy Duty Equipment', description: 'Specialized recovery vehicles' },
    { id: 6, src: '/37.jpg', category: 'team', title: 'Professional Team', description: 'Trained and certified staff' },
    { id: 7, src: '/5.jpg', category: 'recovery', title: 'Off-Road Recovery', description: 'All-terrain assistance' },
    { id: 8, src: '/20.jpg', category: 'towing', title: 'City Towing', description: 'Urban roadside assistance' },
    { id: 9, src: '/37.jpg', category: 'fleet', title: 'Latest Technology', description: 'Modern equipment' },
  ];

  const categories = [
    { id: 'all', label: 'All Photos', icon: Maximize2 },
    { id: 'towing', label: 'Towing', icon: Truck },
    { id: 'fleet', label: 'Our Fleet', icon: Wrench },
    { id: 'recovery', label: 'Recovery', icon: Shield },
    { id: 'team', label: 'Our Team', icon: Users },
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const handlePrevious = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/20.jpg)' }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border-4 border-white/20 rounded-full" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border-4 border-red-500/20 transform rotate-45" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Our Gallery
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See our fleet, team, and services in action across Zimbabwe
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-all ${
                  filter === cat.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/50'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-xl border border-white/10'
                }`}
              >
                <cat.icon className="w-5 h-5" />
                <span>{cat.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedImage(image)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
                >
                  {/* Image */}
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.description}</p>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-xl">No images found in this category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white z-10 transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Previous Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white z-10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white z-10 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-2xl"
              />
              
              {/* Image Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center"
              >
                <h3 className="text-white font-bold text-2xl mb-2">{selectedImage.title}</h3>
                <p className="text-gray-400">{selectedImage.description}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-black/50" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Need Roadside Assistance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our professional team is ready to help you 24/7
            </p>
            <motion.a
              href="tel:0780579261"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-red-500/50 transition-all"
            >
              Call 078 057 9261
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;