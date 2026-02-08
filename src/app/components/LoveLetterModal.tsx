import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, X } from 'lucide-react';

export default function LoveLetterModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Secret button in bottom right corner */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        whileHover={{ opacity: 1, scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-3 bg-pink-500 text-white rounded-full shadow-lg 
                 hover:shadow-pink-500/50 transition-all duration-300 z-40"
        title="Open Love Letter"
      >
        <Heart className="w-6 h-6" fill="currentColor" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
                       md:w-full md:max-w-2xl bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl 
                       shadow-2xl z-50 overflow-hidden"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white 
                         transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              <div className="p-8 md:p-12 max-h-[90vh] overflow-y-auto">
                <div className="text-center mb-8">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block text-6xl mb-4"
                  >
                    💌
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text 
                               bg-gradient-to-r from-pink-500 to-purple-500">
                    A Letter to Sakina
                  </h2>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">My Dearest Sakina,</p>
                  
                  <p>
                    Every moment I spend with you feels like a beautiful dream I never want to wake up from. 
                    You light up my world in ways I never thought possible.
                  </p>
                  
                  <p>
                    From the first time I saw your smile, I knew there was something special about you. 
                    Your kindness, your laughter, your beautiful soul – everything about you captivates me.
                  </p>
                  
                  <p>
                    Being with you feels like home. You make ordinary moments extraordinary, and every day 
                    with you is an adventure I cherish.
                  </p>
                  
                  <p>
                    I promise to always be there for you, to support your dreams, to make you laugh when 
                    you're sad, and to love you more with each passing day.
                  </p>
                  
                  <p>
                    This Valentine's Day, I want you to know that you are the love of my life, my best friend, 
                    and my everything.
                  </p>
                  
                  <p className="text-lg font-medium pt-4">
                    Forever yours,<br />
                    Mohammed ❤️
                  </p>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-500 italic">
                    Keep this letter close to your heart.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
