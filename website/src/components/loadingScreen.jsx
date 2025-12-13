import React from 'react';
import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-red-950 z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-64 h-64 border-4 border-white/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-40 right-40 w-96 h-96 border-4 border-red-500/20 transform rotate-45"
        />
      </div>

      <div className="text-center relative z-10">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative inline-block"
        >
          {/* Logo Container */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Rotating Border */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-2xl border-4 border-red-600/30 border-t-red-600"
            />
            
            {/* Logo - Replace with your actual logo */}
            <div className="relative z-10">
              <img
                src="/logo4.png"
                alt="Logo"
                className="w-22 h-26"
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }} className="w-20 h-20">
                <Truck className="w-20 h-20 text-red-600" />
              </div>
            </div>
          </div>

          {/* Red Glow effect behind logo */}
          <motion.div
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [0.9, 1.2, 0.9],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 -z-10 blur-3xl"
          >
            <div className="w-full h-full bg-gradient-to-r from-red-600 to-red-700 opacity-60 rounded-full" />
          </motion.div>

          {/* Additional subtle white glow */}
          <motion.div
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute inset-0 -z-20 blur-2xl"
          >
            <div className="w-full h-full bg-white opacity-20 rounded-full" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col items-center"
        >
          {/* Circular Spinner with red theme */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-12 h-12 rounded-full border-4 border-red-600/20 border-t-red-600"
          />
          
          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-white font-semibold text-lg"
          >
            Loading Your Roadside Assistance...
          </motion.p>

          {/* Pulsing Dots */}
          <div className="flex space-x-2 mt-4">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-2 h-2 bg-red-600 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;