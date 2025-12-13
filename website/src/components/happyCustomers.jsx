import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import React from 'react';
// Happy Customers Component
const HappyCustomers = () => {
  // Array of customer images - replace with your actual customer photos
  const customerImages = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="flex items-center space-x-6 pt-4"
    >
      <div className="flex -space-x-3">
        {customerImages.map((image, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 + (i * 0.1), type: "spring" }}
            className="relative"
          >
            <img
              src={image}
              alt={`Happy customer ${i + 1}`}
              className="w-12 h-12 rounded-full border-3 border-black object-cover ring-2 ring-red-500/50"
            />
            {/* Optional: Add verified badge on first customer */}
            {i === 0 && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-black">
                <Star className="w-3 h-3 text-white fill-white" />
              </div>
            )}
          </motion.div>
        ))}
        {/* +More indicator */}
        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full border-3 border-black flex items-center justify-center ring-2 ring-red-500/50">
          <span className="text-white text-xs font-bold">+5K</span>
        </div>
      </div>
      <div className="text-sm">
        <div className="font-bold text-white flex items-center space-x-1">
          <span>5000+ Happy Customers</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
        </div>
        <div className="text-gray-400">Trusted across Zimbabwe</div>
      </div>
    </motion.div>
  );
};

export default HappyCustomers;
