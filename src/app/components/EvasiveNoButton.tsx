import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

export default function EvasiveNoButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPositioned, setIsPositioned] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const moveButton = () => {
    const button = buttonRef.current;
    if (!button) return;

    const buttonRect = button.getBoundingClientRect();
    const buttonWidth = buttonRect.width;
    const buttonHeight = buttonRect.height;

    // Calculate safe random position within viewport
    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setPosition({ x: randomX, y: randomY });
    setIsPositioned(true);
  };

  const handleMouseEnter = () => {
    moveButton();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    moveButton();
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
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
      animate={isPositioned ? { x: position.x, y: position.y } : {}}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className={`px-16 py-6 bg-gray-200 text-gray-600 text-2xl md:text-3xl rounded-full shadow-lg 
                 font-bold tracking-wide cursor-pointer select-none touch-none
                 ${isPositioned ? 'fixed' : 'relative'}`}
      style={isPositioned ? { left: 0, top: 0 } : {}}
    >
      💔 No
    </motion.button>
  );
}
