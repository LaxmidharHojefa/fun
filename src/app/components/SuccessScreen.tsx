import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Confetti from './Confetti';
import ValentineWeek from './ValentineWeek';
import couplePic from "./public/GB.jpeg"

export default function SuccessScreen() {
  const [showContent, setShowContent] = useState(false);
  
  // Placeholder image URL - Replace with actual photo of Mohammed and Sakina
  const couplePhotoUrl = couplePic;

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 overflow-y-auto"
    >
      <Confetti />
      
      <div className="min-h-screen flex flex-col items-center justify-start py-8 md:py-12 px-4">
        {showContent && (
          <>
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="text-center mb-8 md:mb-12"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text 
                           bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 mb-4">
                Yay! You just made me the happiest person 💕
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-4xl text-rose-600 font-medium"
              >
                Happy Valentine's Day ❤️
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              className="w-full max-w-4xl mb-12"
            >
              <div className="relative group">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative"
                >
                  <img
                    src={couplePhotoUrl}
                    alt="Mohammed and Sakina"
                    className="w-full h-auto rounded-3xl shadow-2xl object-cover max-h-[600px]"
                  />
                  <div className="absolute inset-0 rounded-3xl shadow-[0_0_40px_rgba(236,72,153,0.5)] 
                                animate-glow-pulse pointer-events-none" />
                </motion.div>
                <p className="text-center mt-6 text-lg md:text-xl text-gray-600 italic">
                  Mohammed & Sakina - Forever ❤️
                </p>
                <p className="text-center text-sm text-gray-500 mt-2">
                  Our favorite moment, always.
                </p>
              </div>
            </motion.div>

            <ValentineWeek />
          </>
        )}
      </div>
    </motion.div>
  );
}
