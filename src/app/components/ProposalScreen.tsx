import { motion } from 'motion/react';
import EvasiveNoButton from './EvasiveNoButton';
import CountdownTimer from './CountdownTimer';
import LoveLetterModal from './LoveLetterModal';

interface ProposalScreenProps {
  onYesClick: () => void;
}

export default function ProposalScreen({ onYesClick }: ProposalScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 pb-24"
    >
      <div className="text-center px-6 max-w-4xl w-full">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 text-transparent bg-clip-text 
                     bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500"
        >
          Sakina, will you be my Valentine? ❤️
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onYesClick}
            className="relative px-16 py-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-2xl md:text-3xl
                     rounded-full shadow-2xl font-bold tracking-wide
                     hover:shadow-pink-500/60 transition-all duration-300
                     animate-pulse-glow z-10"
          >
            <span className="relative z-10">💖 Yes</span>
            <div className="absolute inset-0 rounded-full bg-pink-400 blur-xl opacity-60 animate-pulse" />
          </motion.button>

          <EvasiveNoButton />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex justify-center"
        >
          <div className="w-full max-w-3xl">
            <CountdownTimer />
          </div>
        </motion.div>
      </div>

      <LoveLetterModal />
    </motion.div>
  );
}
