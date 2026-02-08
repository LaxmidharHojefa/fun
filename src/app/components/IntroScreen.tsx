import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface IntroScreenProps {
  onContinue: () => void;
}

export default function IntroScreen({ onContinue }: IntroScreenProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  
  const messages = [
    "Hi Sakina… ❤️",
    "There's something I've been wanting to ask you…"
  ];

  useEffect(() => {
    if (currentMessageIndex >= messages.length) {
      setTimeout(() => setShowButton(true), 800);
      return;
    }

    const currentMessage = messages[currentMessageIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentMessage.length) {
        setDisplayedText(currentMessage.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentMessageIndex(currentMessageIndex + 1);
        }, 1500);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [currentMessageIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
    >
      <div className="text-center px-6 max-w-2xl">
        <motion.p
          className="text-3xl md:text-5xl text-white font-light mb-8 min-h-[120px] md:min-h-[180px]"
          key={displayedText}
        >
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-1 h-8 md:h-12 bg-pink-400 ml-1 align-middle"
          />
        </motion.p>

        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onContinue}
            className="px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xl rounded-full
                     shadow-lg shadow-pink-500/50 hover:shadow-pink-500/80 transition-all duration-300
                     font-medium tracking-wide"
          >
            Continue 💕
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
