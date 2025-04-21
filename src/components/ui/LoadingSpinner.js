import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] w-full">
      <div className="relative">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`absolute border-2 rounded-full ${
              index === 0 
                ? 'border-blue-500 h-16 w-16' 
                : index === 1 
                ? 'border-purple-500 h-12 w-12' 
                : 'border-pink-500 h-8 w-8'
            }`}
            style={{
              borderTopColor: 'transparent',
              borderLeftColor: 'transparent',
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
      
      <motion.p 
        className="mt-4 text-gray-600 text-sm font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {message}
      </motion.p>
    </div>
  );
};

export default LoadingSpinner;