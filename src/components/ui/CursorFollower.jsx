import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorFollower = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', updatePosition);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <motion.div
            className="pointer-events-none fixed z-[9999]"
            style={{
                left: mousePosition.x,
                top: mousePosition.y,
            }}
            animate={{
                x: -20,
                y: -20,
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0,
            }}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 150,
                mass: 0.6,
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
            }}
        >
            {/* Outer glow */}
            <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-md opacity-70 animate-pulse" />
                {/* Inner core */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400" />
            </div>
        </motion.div>
    );
};

export default CursorFollower;

