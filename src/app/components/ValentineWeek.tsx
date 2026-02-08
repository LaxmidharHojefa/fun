import { motion } from 'motion/react';

const valentineWeekMessages = [
  { emoji: '💌', day: 'Rose Day', message: 'You are the most beautiful rose in my life.' },
  { emoji: '💍', day: 'Propose Day', message: 'I choose you today and forever.' },
  { emoji: '🍫', day: 'Chocolate Day', message: 'Life is sweeter with you.' },
  { emoji: '🧸', day: 'Teddy Day', message: 'I want to hug you forever.' },
  { emoji: '🤝', day: 'Promise Day', message: 'I promise to love you always.' },
  { emoji: '💋', day: 'Kiss Day', message: 'A lifetime of love and kisses.' },
  { emoji: '❤️', day: "Valentine's Day", message: 'You are my forever.' },
];

export default function ValentineWeek() {
  return (
    <div className="w-full max-w-4xl px-4 mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="text-3xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text 
                   bg-gradient-to-r from-pink-500 to-purple-500"
      >
        Our Valentine Week 💝
      </motion.h2>

      <div className="space-y-6">
        {valentineWeekMessages.map((item, index) => (
          <motion.div
            key={item.day}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + index * 0.2 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg 
                     hover:shadow-xl transition-shadow duration-300 border border-pink-200"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl md:text-5xl flex-shrink-0">{item.emoji}</span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-rose-600 mb-2">
                  {item.day}
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {item.message}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
