import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight, Code, Sparkles } from 'lucide-react';
import { useTheme } from '../ui/ThemeProvider';

import profilePic from '../../assets/profile_picture.png';
import topBgLight from '../../assets/top_bg_light.svg';
import topBgDark from '../../assets/top_bg_dark.svg';
import topBgMobileLight from '../../assets/top_bg_mobile_light.svg';
import topBgMobileDark from '../../assets/top_bg_mobile_dark.svg';
import rocketIcon from '../../assets/rocket_icon.svg';

const Hero = () => {
    const { theme } = useTheme();

    return (
        <section id="intro" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <picture>
                    <source media="(max-width: 768px)" srcSet={theme === 'dark' ? topBgMobileDark : topBgMobileLight} />
                    <img
                        src={theme === 'dark' ? topBgDark : topBgLight}
                        alt="Background"
                        className="w-full h-full object-cover object-top opacity-50 dark:opacity-40"
                    />
                </picture>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
                {/* Text Content */}
                <div className="space-y-6 text-center md:text-left order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-muted rounded-full border border-card-border text-sm text-primary"
                    >
                        <Sparkles size={14} />
                        <span>Open to new opportunities</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
                    >
                        Hello I'm <span className="text-foreground">Narendra Patil</span>,<br />
                        I'm a <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Web Developer</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0"
                    >
                        I'm obsessed with coding and helping start-ups create unique, and helpful products.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <Button className="w-full sm:w-auto justify-center">
                            Let's Connect <ArrowRight size={18} className="ml-2 inline" />
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto justify-center">
                            View Projects
                        </Button>
                    </motion.div>
                </div>

                {/* Profile Image */}
                <div className="relative flex justify-center order-1 md:order-2 mb-8 md:mb-0">
                    {/* Floating Icons */}
                    <div className="absolute top-4 left-4 md:top-10 md:left-10 p-3 bg-card backdrop-blur-md rounded-xl animate-bounce delay-100 shadow-lg border border-primary/30">
                        <Code className="text-primary" />
                    </div>
                    <div className="absolute bottom-10 right-4 md:bottom-20 md:right-10 p-3 bg-card backdrop-blur-md rounded-xl animate-bounce delay-300 shadow-lg border border-primary/30">
                        <img src={rocketIcon} alt="Rocket" className="w-6 h-6" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative w-64 h-80 md:w-96 md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 border-card-border shadow-2xl shadow-primary/20 z-10 hover:grayscale-0 transition-all duration-500"
                    >
                        <img
                            src={profilePic}
                            alt="Narendra Patil"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>


                </div>
            </div>
        </section>
    );
};

export default Hero;
