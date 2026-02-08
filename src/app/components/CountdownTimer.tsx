import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Valentine's Day 2026 - February 14, 2026
      const valentinesDay = new Date('2026-02-14T00:00:00');
      const now = new Date();
      const difference = valentinesDay.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="flex flex-col items-center bg-white/50 backdrop-blur-sm rounded-xl p-3 md:p-4 
               shadow-lg min-w-[60px] md:min-w-[80px]"
    >
      <span className="text-2xl md:text-4xl font-bold text-rose-600">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-xs md:text-sm text-gray-600 mt-1">{label}</span>
    </motion.div>
  );

  return (
    <div className="text-center">
      <p className="text-lg md:text-xl text-gray-700 mb-4 font-medium">
        Countdown to Valentine's Day 💕
      </p>
      <div className="flex gap-2 md:gap-4 justify-center">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}
