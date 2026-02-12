import React from 'react';
import { motion } from 'framer-motion';
import Badge from '../ui/Badge';

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

    return (
        <section id="skills" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-12 text-foreground flex justify-center items-center gap-2 whitespace-nowrap">
                    <span className="text-2xl sm:text-3xl">💻</span>
                    <span>This is my</span> <span className="bg-primary text-primary-foreground px-3 py-1 rounded-md transform rotate-1 inline-block">Tech Stack</span>
                </h2>

                <div className="bg-[#101010]/80 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto shadow-2xl">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center gap-3 px-5 py-3 bg-[#1a1a1a] rounded-3xl cursor-default group relative overflow-hidden border border-transparent bg-clip-padding before:absolute before:inset-0 before:-z-10 before:p-[1px] before:bg-gradient-to-r before:from-primary/40 before:via-purple-500/40 before:to-blue-500/40 hover:before:from-primary hover:before:via-purple-500 hover:before:to-blue-500 before:rounded-3xl before:transition-all before:duration-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                            >
                                <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain group-hover:scale-110 transition-transform" />
                                <span className="text-sm md:text-base font-medium text-gray-200 group-hover:text-white transition-colors">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
