import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

export default function EvasiveNoButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPositioned, setIsPositioned] = useState(false);
  const [interaction, setInteraction] = useState<'hover' | 'click'>('hover');
  const buttonRef = useRef<HTMLButtonElement>(null);

  const moveButton = () => {
    const button = buttonRef.current;
    if (!button) return;

    const buttonRect = button.getBoundingClientRect();
    const buttonWidth = buttonRect.width;
    const buttonHeight = buttonRect.height;

    // Calculate safe random position within viewport
    const maxX = window.innerWidth - buttonWidth - 20;
    const safeBottom = 180;
    const maxY = window.innerHeight - buttonHeight - safeBottom;
    
    const randomX = Math.max(0, Math.random() * maxX);
    const randomY = Math.max(0, Math.random() * maxY);

    setPosition({ x: randomX, y: randomY });
    setIsPositioned(true);
  };

  const handleMouseEnter = () => {
    setInteraction('hover');
    moveButton();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setInteraction('click');
    moveButton();
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setInteraction('click');
    moveButton();
  };

  useEffect(() => {
    // Set initial position
    if (buttonRef.current && !isPositioned) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setPosition({ x: buttonRect.left, y: buttonRect.top });
      setIsPositioned(true);
    }
  }, [isPositioned]);

  return (
    <motion.button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      animate={isPositioned ? { x: position.x, y: position.y } : {}}
      transition={
        interaction === 'click'
          ? { type: 'tween', duration: 0.12, ease: 'easeOut' }
          : { type: 'spring', stiffness: 900, damping: 24 }
      }
      className={`px-16 py-6 bg-gray-200 text-gray-600 text-2xl md:text-3xl rounded-full shadow-lg 
                 font-bold tracking-wide cursor-pointer select-none touch-none
                 hover:shadow-xl hover:bg-gray-100 transition-shadow duration-150
                 ${isPositioned ? 'fixed' : 'relative'}`}
      style={isPositioned ? { left: 0, top: 0 } : {}}
    >
      ?? No
    </motion.button>
  );
}
