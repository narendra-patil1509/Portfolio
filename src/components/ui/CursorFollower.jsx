import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Bubble = ({ cursorX, cursorY, stiffness, mass, size, opacity, isVisible }) => {
    const springConfig = { damping: 25, stiffness, mass };
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    return (
        <motion.div
            className="pointer-events-none fixed z-[9998] flex items-center justify-center mix-blend-difference"
            style={{
                x,
                y,
                translateX: "-50%",
                translateY: "-50%",
                width: size,
                height: size,
            }}
            animate={{
                opacity: isVisible ? opacity : 0,
                scale: isVisible ? 1 : 0.5,
            }}
            transition={{
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
            }}
        >
            <div className="w-full h-full rounded-full border border-white" style={{ opacity: 0.6 }} />
        </motion.div>
    );
};

const CursorFollower = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    
    // Smooth spring configuration
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
    
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };
        
        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        window.addEventListener('mousemove', updatePosition);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        document.body.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    const bubbleConfigs = Array.from({ length: 20 }, (_, i) => {
        const progress = i / 19; // 0 to 1
        return {
            id: i + 1,
            size: 40 - (progress * 32), // 40 down to 8
            stiffness: 120 - (progress * 115), // 120 down to 5
            mass: 0.8 + (progress * 4.2), // 0.8 up to 5.0
            opacity: 1.0 - (progress * 0.7), // 1.0 down to 0.3
        };
    });

    return (
        <>
            {bubbleConfigs.map(config => (
                <Bubble
                    key={config.id}
                    cursorX={cursorX}
                    cursorY={cursorY}
                    isVisible={isVisible}
                    {...config}
                />
            ))}
            <motion.div
                className="pointer-events-none fixed z-[9999] flex items-center justify-center mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0.8,
                }}
                transition={{
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 },
                }}
            >
                {/* Whitish clean cursor */}
                <div className="relative flex items-center justify-center w-8 h-8">
                    {/* Subtle outer whitish glow/ring */}
                    <div className="absolute inset-0 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm" />
                    {/* Solid white inner core */}
                    <div className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </div>
            </motion.div>
        </>
    );
};

export default CursorFollower;
