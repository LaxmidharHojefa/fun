import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 30,
        duration: 8 + Math.random() * 10,
        delay: Math.random() * 5,
      });
    }
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ 
            x: `${particle.x}vw`, 
            y: `${particle.y}vh`,
            opacity: 0.3,
          }}
          animate={{
            y: [`${particle.y}vh`, `${particle.y - 30}vh`, `${particle.y}vh`],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            fontSize: particle.size,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Additional glow particles */}
      {particles.slice(0, 15).map((particle) => (
        <motion.div
          key={`glow-${particle.id}`}
          initial={{ 
            x: `${particle.x}vw`, 
            y: `${particle.y}vh`,
          }}
          animate={{
            y: [`${particle.y}vh`, `${particle.y + 20}vh`, `${particle.y}vh`],
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: particle.duration + 2,
            delay: particle.delay + 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-24 h-24 bg-pink-400 rounded-full blur-3xl"
        />
      ))}
    </div>
  );
}
