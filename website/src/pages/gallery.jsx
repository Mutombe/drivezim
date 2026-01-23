import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Truck,
  Wrench,
  Shield,
  Users,
  Phone,
  Camera,
  Grid,
  Layers,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'masonry'

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

  // Gallery images using available images
  const galleryImages = [
    {
      id: 1,
      src: "/1.jpg",
      category: "towing",
      title: "Heavy Duty Towing",
      description: "Professional towing services",
    },
    {
      id: 2,
      src: "/2.jpg",
      category: "equipment",
      title: "Our Tow Truck",
      description: "Our well-maintained tow truck",
    },
    {
      id: 3,
      src: "/3.jpg",
      category: "recovery",
      title: "Vehicle Recovery",
      description: "Expert recovery operations",
    },
    {
      id: 4,
      src: "/4.jpg",
      category: "towing",
      title: "Emergency Response",
      description: "Quick emergency towing service",
    },
    {
      id: 5,
      src: "/5.jpg",
      category: "equipment",
      title: "Flatbed Towing",
      description: "Safe flatbed transport",
    },
    {
      id: 6,
      src: "/6.jpg",
      category: "service",
      title: "In Action",
      description: "Dedicated service at work",
    },
    {
      id: 7,
      src: "/7.jpg",
      category: "recovery",
      title: "Roadside Rescue",
      description: "Roadside assistance in action",
    },
    {
      id: 8,
      src: "/8.jpg",
      category: "towing",
      title: "Night Operations",
      description: "24/7 towing services",
    },
    {
      id: 9,
      src: "/9.jpg",
      category: "equipment",
      title: "Service Vehicle",
      description: "Well-maintained service vehicle",
    },
    {
      id: 10,
      src: "/10.jpg",
      category: "service",
      title: "Customer Care",
      description: "Always ready to help",
    },
    {
      id: 11,
      src: "/11.jpg",
      category: "recovery",
      title: "Off-Road Recovery",
      description: "All-terrain vehicle recovery",
    },
    {
      id: 12,
      src: "/12.jpg",
      category: "towing",
      title: "Long Distance Towing",
      description: "Long-distance towing service",
    },
    {
      id: 13,
      src: "/13.jpg",
      category: "equipment",
      title: "Equipment Check",
      description: "Regular maintenance routines",
    },
    {
      id: 14,
      src: "/14.jpg",
      category: "service",
      title: "Skill Development",
      description: "Continuous improvement",
    },
    {
      id: 15,
      src: "/15.jpg",
      category: "recovery",
      title: "Accident Recovery",
      description: "Professional accident scene recovery",
    },
    {
      id: 16,
      src: "/16.jpg",
      category: "towing",
      title: "Urban Towing",
      description: "City towing solutions",
    },
    {
      id: 17,
      src: "/17.jpg",
      category: "equipment",
      title: "Tow Truck",
      description: "Ready to assist",
    },
    {
      id: 18,
      src: "/18.jpg",
      category: "recovery",
      title: "Winch Operations",
      description: "Heavy-duty winching service",
    },
    {
      id: 19,
      src: "/19.jpg",
      category: "service",
      title: "Support",
      description: "Customer support",
    },
    {
      id: 20,
      src: "/20.jpg",
      category: "equipment",
      title: "Main Vehicle",
      description: "Primary service vehicle",
    },
    {
      id: 21,
      src: "/21.jpg",
      category: "towing",
      title: "Highway Assistance",
      description: "Highway roadside help",
    },
    {
      id: 22,
      src: "/22.jpg",
      category: "recovery",
      title: "Stuck Vehicle Recovery",
      description: "Getting you unstuck",
    },
    {
      id: 23,
      src: "/23.jpg",
      category: "equipment",
      title: "Recovery Gear",
      description: "Specialised recovery gear",
    },
    {
      id: 24,
      src: "/24.jpg",
      category: "towing",
      title: "Quick Response",
      description: "Fast towing arrival",
    },
    {
      id: 25,
      src: "/25.jpg",
      category: "service",
      title: "Field Operations",
      description: "Service in the field",
    },
    {
      id: 26,
      src: "/26.jpg",
      category: "recovery",
      title: "Emergency Recovery",
      description: "Emergency vehicle recovery",
    },
    {
      id: 27,
      src: "/27.jpg",
      category: "equipment",
      title: "Service Range",
      description: "Wide service coverage",
    },
    {
      id: 28,
      src: "/28.jpg",
      category: "towing",
      title: "Safe Transport",
      description: "Secure vehicle transport",
    },
    {
      id: 29,
      src: "/29.jpg",
      category: "service",
      title: "Coordination",
      description: "Coordinating responses",
    },
    {
      id: 30,
      src: "/30.jpg",
      category: "recovery",
      title: "Difficult Terrain",
      description: "Challenging recoveries",
    },
    {
      id: 31,
      src: "/31.jpg",
      category: "equipment",
      title: "Night Operations",
      description: "24/7 operational readiness",
    },
    {
      id: 32,
      src: "/32.jpg",
      category: "towing",
      title: "Commercial Towing",
      description: "Business vehicle services",
    },
    {
      id: 33,
      src: "/33.jpg",
      category: "recovery",
      title: "Precision Recovery",
      description: "Careful vehicle handling",
    },
    {
      id: 34,
      src: "/34.jpg",
      category: "equipment",
      title: "Maintenance",
      description: "Keeping equipment ready",
    },
    {
      id: 35,
      src: "/35.jpg",
      category: "towing",
      title: "Breakdown Service",
      description: "Breakdown assistance",
    },
    {
      id: 36,
      src: "/36.jpg",
      category: "service",
      title: "Expertise",
      description: "Skilled and experienced",
    },
    {
      id: 37,
      src: "/37.jpg",
      category: "recovery",
      title: "Complete Recovery",
      description: "Full recovery solutions",
    },
    {
      id: 38,
      src: "/38.jpg",
      category: "equipment",
      title: "Quality Equipment",
      description: "Well-maintained gear",
    },
    {
      id: 39,
      src: "/39.jpg",
      category: "towing",
      title: "Reliable Service",
      description: "Dependable assistance",
    },
  ];

  const categories = [
    {
      id: "all",
      label: "All Photos",
      icon: Camera,
      count: galleryImages.length,
    },
    {
      id: "towing",
      label: "Towing",
      icon: Truck,
      count: galleryImages.filter((img) => img.category === "towing").length,
    },
    {
      id: "equipment",
      label: "Equipment",
      icon: Wrench,
      count: galleryImages.filter((img) => img.category === "equipment").length,
    },
    {
      id: "recovery",
      label: "Recovery",
      icon: Shield,
      count: galleryImages.filter((img) => img.category === "recovery").length,
    },
    {
      id: "service",
      label: "Service",
      icon: Users,
      count: galleryImages.filter((img) => img.category === "service").length,
    },
  ];

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const handlePrevious = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id,
    );
    const prevIndex =
      currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id,
    );
    const nextIndex =
      currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex]);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/20.jpg)" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10 hidden md:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-64 h-64 border-4 border-white/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-96 h-96 border-4 border-red-500/20 transform rotate-45"
          />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center pt-16 md:pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-red-600/20 backdrop-blur-xl border border-red-500/30 rounded-full px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6"
              >
                <Camera className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
                <span className="text-white font-semibold text-sm md:text-base">
                  {galleryImages.length}+ Photos
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-3 md:mb-4">
                Our Gallery
              </h1>
              <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                See our equipment and services in action across Zimbabwe
              </p>
            </motion.div>
          </div>
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

      {/* Filter & View Toggle Section */}
      <section className="py-6 md:py-10 px-4 bg-gradient-to-b from-black to-gray-900 sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-6">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-2 md:px-5 md:py-3 rounded-lg md:rounded-xl font-semibold flex items-center space-x-1 md:space-x-2 transition-all text-xs md:text-base ${
                  filter === cat.id
                    ? "bg-red-600 text-white shadow-lg shadow-red-500/50"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-xl border border-white/10"
                }`}
              >
                <cat.icon className="w-3 h-3 md:w-4 md:h-4" />
                <span>{cat.label}</span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    filter === cat.id ? "bg-white/20" : "bg-white/10"
                  }`}
                >
                  {cat.count}
                </span>
              </motion.button>
            ))}
          </div>

          {/* View Mode Toggle - Desktop only */}
          <div className="hidden md:flex justify-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-all ${
                viewMode === "grid"
                  ? "bg-red-600 text-white"
                  : "bg-white/10 text-gray-400 hover:bg-white/20"
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("masonry")}
              className={`p-2 rounded-lg transition-all ${
                viewMode === "masonry"
                  ? "bg-red-600 text-white"
                  : "bg-white/10 text-gray-400 hover:bg-white/20"
              }`}
            >
              <Layers className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-6 md:py-12 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          {/* Results count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 text-center"
          >
            Showing {filteredImages.length}{" "}
            {filteredImages.length === 1 ? "photo" : "photos"}
            {filter !== "all" &&
              ` in ${categories.find((c) => c.id === filter)?.label}`}
          </motion.p>

          {/* Grid View */}
          {viewMode === "grid" ? (
            <motion.div
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedImage(image)}
                    className="group relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer aspect-[4/3] bg-gray-800"
                  >
                    {/* Image */}
                    <img
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-sm md:text-base mb-0.5">
                        {image.title}
                      </h3>
                      <p className="text-gray-300 text-xs hidden md:block">
                        {image.description}
                      </p>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-2 left-2 md:top-3 md:left-3">
                      <span className="bg-red-600/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full capitalize opacity-0 group-hover:opacity-100 transition-opacity">
                        {image.category}
                      </span>
                    </div>

                    {/* Expand Icon */}
                    <div className="absolute top-2 right-2 md:top-3 md:right-3 w-8 h-8 md:w-10 md:h-10 bg-red-600/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Masonry View */
            <motion.div
              layout
              className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    onClick={() => setSelectedImage(image)}
                    className="group relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer mb-3 md:mb-4 break-inside-avoid bg-gray-800"
                    style={{ height: `${200 + (index % 3) * 50}px` }}
                  >
                    {/* Image */}
                    <img
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-sm md:text-base mb-0.5">
                        {image.title}
                      </h3>
                      <p className="text-gray-300 text-xs hidden md:block">
                        {image.description}
                      </p>
                    </div>

                    {/* Expand Icon */}
                    <div className="absolute top-2 right-2 md:top-3 md:right-3 w-8 h-8 md:w-10 md:h-10 bg-red-600/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* No Results */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Camera className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-xl">
                No images found in this category
              </p>
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
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-xl flex items-center justify-center"
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
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white z-10 transition-colors"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-sm">
              {filteredImages.findIndex((img) => img.id === selectedImage.id) +
                1}{" "}
              / {filteredImages.length}
            </div>

            {/* Previous Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white z-10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
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
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white z-10 transition-colors"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="max-w-6xl max-h-[85vh] w-full px-4 md:px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain rounded-xl md:rounded-2xl"
              />

              {/* Image Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 md:mt-6 text-center"
              >
                <span className="bg-red-600/80 text-white text-xs px-3 py-1 rounded-full capitalize mb-2 inline-block">
                  {selectedImage.category}
                </span>
                <h3 className="text-white font-bold text-lg md:text-2xl mb-1">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {selectedImage.description}
                </p>
              </motion.div>
            </motion.div>

            {/* Keyboard hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-500 text-xs hidden md:block">
              Use ← → arrow keys to navigate • ESC to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-black/50" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-12"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              Need Roadside Assistance?
            </h2>
            <p className="text-sm md:text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
              Our professional team is ready to help you 24/7. Don't get
              stranded - call us now!
            </p>
            <p className="text-sm md:text-lg text-gray-400 mb-6 md:mb-8">
              078 057 9261 | 071 808 4297 | 073 652 3424
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <motion.a
                href="tel:0780579261"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-2 bg-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-2xl hover:shadow-red-500/50 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Call 078 057 9261</span>
              </motion.a>
              <motion.a
                href="https://wa.me/263780579261?text=Hi%2C%20I%20need%20roadside%20assistance!"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-2xl hover:shadow-green-500/50 transition-all"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
