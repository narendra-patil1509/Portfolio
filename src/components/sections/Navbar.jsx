import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../ui/ThemeProvider';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('intro');
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const navItems = [
        { name: 'Home', href: '#intro' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact Me', href: '#contact' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Update active section on scroll
    useEffect(() => {
        if (!isHomePage) return;

        const handleScroll = () => {
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const isNearBottom = windowHeight + window.scrollY >= documentHeight - 100;

            if (isNearBottom) {
                setActiveSection('contact');
                return;
            }

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center items-start px-4 pointer-events-none">
            {/* Desktop Center Pill */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="hidden md:flex bg-black/80 backdrop-blur-md border border-white/10 rounded-full p-1 items-center gap-1 shadow-2xl pointer-events-auto"
            >
                {navItems.map((item) => {
                    const sectionId = item.href.substring(1);
                    const isActive = isHomePage && activeSection === sectionId;
                    const href = isHomePage ? item.href : `/${item.href}`;

                    return (
                        <a
                            key={item.name}
                            href={href}
                            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${isActive
                                ? 'text-primary-foreground'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-lg shadow-primary/25"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            {item.name}
                        </a>
                    );
                })}
            </motion.div>

            {/* Desktop Right Toggle */}
            <div className="hidden md:block absolute right-10 top-0 pointer-events-auto">
                <div
                    className={`relative w-14 h-7 rounded-full flex items-center p-1 cursor-pointer transition-colors duration-300 border ${theme === 'dark' ? 'bg-black/50 border-white/10' : 'bg-neutral-200/50 border-black/5'
                        }`}
                    onClick={toggleTheme}
                >
                    <div className="absolute left-2 text-yellow-500">
                        <Sun size={14} />
                    </div>
                    <div className="absolute right-2 text-white">
                        <Moon size={14} />
                    </div>
                    <div
                        className={`w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center z-10 ${theme === 'dark' ? 'translate-x-7 bg-white' : 'translate-x-0 bg-yellow-400'
                            }`}
                    >
                    </div>
                </div>
            </div>

            {/* Mobile Header (Pill-ish container) */}
            <div className="md:hidden w-full flex justify-between items-center bg-black/80 backdrop-blur-md rounded-full px-4 py-3 border border-white/10 pointer-events-auto">
                <Link to="/" className="text-white font-bold text-lg px-2">NP</Link>

                <div className="flex items-center gap-4">
                    {/* Mobile Toggle */}
                    <div
                        className={`relative w-14 h-7 rounded-full flex items-center p-0.5 cursor-pointer transition-colors duration-300 border ${theme === 'dark' ? 'bg-black/50 border-white/10' : 'bg-neutral-200/50 border-black/5'
                            }`}
                        onClick={toggleTheme}
                    >
                        <div className="absolute left-1.5 text-yellow-500">
                            <Sun size={12} />
                        </div>
                        <div className="absolute right-1.5 text-white">
                            <Moon size={12} />
                        </div>
                        <div
                            className={`w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center z-10 ${theme === 'dark' ? 'translate-x-7 bg-white' : 'translate-x-0 bg-yellow-400'
                                }`}
                        ></div>
                    </div>

                    <button className="text-white" onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-20 left-4 right-4 bg-black/90 border border-white/10 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl pointer-events-auto z-50 backdrop-blur-xl"
                    >
                        {navItems.map((item) => {
                            const sectionId = item.href.substring(1);
                            const isActive = isHomePage && activeSection === sectionId;
                            const href = isHomePage ? item.href : `/${item.href}`;

                            return (
                                <a
                                    key={item.name}
                                    href={href}
                                    className={`text-sm font-medium px-4 py-3 rounded-xl transition-all ${isActive
                                        ? 'bg-primary/20 text-primary'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
