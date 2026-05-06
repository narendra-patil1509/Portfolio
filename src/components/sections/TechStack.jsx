import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import javaIcon from '../../assets/java_icon.png';
import tsIcon from '../../assets/ts_icon.png';
import kotlinIcon from '../../assets/kotlin_icon.png';
import goIcon from '../../assets/go_icon.png';
import cssIcon from '../../assets/css_icon.png';
import jsIcon from '../../assets/js_icon.png';
import htmlIcon from '../../assets/html_icon.png';
import reactIcon from '../../assets/react_icon.png';

const TechStack = () => {
    const technologies = [
        { name: 'Java', icon: javaIcon },
        { name: 'TypeScript', icon: tsIcon },
        { name: 'Kotlin', icon: kotlinIcon },
        { name: 'Golang', icon: goIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'JavaScript', icon: jsIcon },
        { name: 'HTML', icon: htmlIcon },
        { name: 'React.js', icon: reactIcon },
        { name: 'PHP', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' },
        { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
        { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
        { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
    ];

    const row1Tech = technologies.slice(0, 6);
    const row2Tech = technologies.slice(6, 12);

    // Duplicate multiple times to ensure enough width for smooth scrolling
    const duplicatedRow1 = [...row1Tech, ...row1Tech, ...row1Tech, ...row1Tech, ...row1Tech, ...row1Tech];
    const duplicatedRow2 = [...row2Tech, ...row2Tech, ...row2Tech, ...row2Tech, ...row2Tech, ...row2Tech];
    
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Slower speeds, opposite directions
    const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["-15%", "0%"]);

    return (
        <section id="skills" ref={sectionRef} className="py-20 bg-muted/30 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-12 text-foreground flex justify-center items-center gap-2 whitespace-nowrap">
                    <span className="text-2xl sm:text-3xl">💻</span>
                    <span>This is my</span> <span className="bg-primary text-primary-foreground px-3 py-1 rounded-md transform rotate-1 inline-block">Tech Stack</span>
                </h2>

                <div className="relative w-full max-w-5xl mx-auto py-8 bg-[#101010]/80 backdrop-blur-sm border border-white/5 rounded-3xl shadow-2xl overflow-hidden flex flex-col gap-6">
                    {/* Gradient masks for smooth edges */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#101010]/80 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#101010]/80 to-transparent z-10 pointer-events-none"></div>
                    
                    {/* Row 1 */}
                    <motion.div 
                        style={{ x: x1 }}
                        className="flex gap-4 md:gap-6 w-max px-4"
                    >
                        {duplicatedRow1.map((tech, index) => (
                            <div
                                key={`row1-${index}`}
                                className="flex shrink-0 items-center gap-3 px-5 py-3 bg-[#1a1a1a] rounded-3xl cursor-default group relative overflow-hidden border border-transparent bg-clip-padding before:absolute before:inset-0 before:-z-10 before:p-[1px] before:bg-gradient-to-r before:from-primary/40 before:via-purple-500/40 before:to-blue-500/40 hover:before:from-primary hover:before:via-purple-500 hover:before:to-blue-500 before:rounded-3xl before:transition-all before:duration-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                            >
                                <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain group-hover:scale-110 transition-transform" />
                                <span className="text-sm md:text-base font-medium text-gray-200 group-hover:text-white transition-colors">{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Row 2 */}
                    <motion.div 
                        style={{ x: x2 }}
                        className="flex gap-4 md:gap-6 w-max px-4"
                    >
                        {duplicatedRow2.map((tech, index) => (
                            <div
                                key={`row2-${index}`}
                                className="flex shrink-0 items-center gap-3 px-5 py-3 bg-[#1a1a1a] rounded-3xl cursor-default group relative overflow-hidden border border-transparent bg-clip-padding before:absolute before:inset-0 before:-z-10 before:p-[1px] before:bg-gradient-to-r before:from-primary/40 before:via-purple-500/40 before:to-blue-500/40 hover:before:from-primary hover:before:via-purple-500 hover:before:to-blue-500 before:rounded-3xl before:transition-all before:duration-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                            >
                                <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain group-hover:scale-110 transition-transform" />
                                <span className="text-sm md:text-base font-medium text-gray-200 group-hover:text-white transition-colors">{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
