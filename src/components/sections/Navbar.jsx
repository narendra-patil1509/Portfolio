import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Type, ChevronDown } from 'lucide-react';
import { useTheme, useFont } from '../ui/ThemeProvider';
import profilePic from '../../assets/profile_picture.png';

const fonts = [
    { id: 'inter', name: 'Inter' },
    { id: 'roboto', name: 'Roboto' },
    { id: 'poppins', name: 'Poppins' },
    { id: 'playfair', name: 'Playfair Display' },
    { id: 'roboto-mono', name: 'Roboto Mono' },
    { id: 'noto-sans', name: 'Noto Sans' },
    { id: 'roboto-condensed', name: 'Roboto Condensed' },
    { id: 'oswald', name: 'Oswald' },
    { id: 'raleway', name: 'Raleway' },
    { id: 'nunito', name: 'Nunito' },
    { id: 'dm-sans', name: 'DM Sans' },
    { id: 'nunito-sans', name: 'Nunito Sans' },
    { id: 'roboto-slab', name: 'Roboto Slab' },
    { id: 'work-sans', name: 'Work Sans' },
    { id: 'archivo-black', name: 'Archivo Black' },
    { id: 'manrope', name: 'Manrope' },
    { id: 'mono', name: 'Space Mono' },
];

const fontFamilies = {
    'inter': 'Inter, sans-serif',
    'roboto': 'Roboto, sans-serif',
    'poppins': 'Poppins, sans-serif',
    'playfair': '"Playfair Display", serif',
    'roboto-mono': '"Roboto Mono", monospace',
    'noto-sans': '"Noto Sans", sans-serif',
    'roboto-condensed': '"Roboto Condensed", sans-serif',
    'oswald': 'Oswald, sans-serif',
    'raleway': 'Raleway, sans-serif',
    'nunito': 'Nunito, sans-serif',
    'dm-sans': '"DM Sans", sans-serif',
    'nunito-sans': '"Nunito Sans", sans-serif',
    'roboto-slab': '"Roboto Slab", serif',
    'work-sans': '"Work Sans", sans-serif',
    'archivo-black': '"Archivo Black", sans-serif',
    'manrope': 'Manrope, sans-serif',
    'mono': '"Space Mono", monospace',
};

const FontSwitcher = () => {
    const { font, changeFont } = useFont();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative pointer-events-auto mt-1 md:mt-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 md:gap-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm text-gray-300 hover:text-white transition-colors"
            >
                <Type size={14} />
                <span className="hidden lg:inline">{fonts.find(f => f.id === font)?.name || 'Font'}</span>
                <ChevronDown size={14} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        data-lenis-prevent="true"
                        className="absolute top-full left-0 md:left-auto md:right-0 lg:left-0 lg:right-auto mt-2 w-40 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-y-auto shadow-xl z-50 max-h-64 custom-scrollbar"
                    >
                        {fonts.map((f) => (
                            <button
                                key={f.id}
                                onClick={() => {
                                    changeFont(f.id);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-3 md:px-4 py-2 text-xs md:text-sm transition-colors ${font === f.id ? 'bg-primary/20 text-primary' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`}
                                style={{ fontFamily: fontFamilies[f.id] }}
                            >
                                {f.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


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
            {/* Desktop Left Font Switcher */}
            <div className="hidden md:block absolute left-4 lg:left-10 top-0 pointer-events-auto">
                <FontSwitcher />
            </div>

            {/* Desktop Center Pill */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="hidden md:flex bg-black/80 backdrop-blur-md border-[0.5px] border-white/20 rounded-full p-1.5 items-center gap-1 shadow-2xl pointer-events-auto"
            >
                {/* Profile Pic & Name */}
                <div className="flex items-center gap-3 pl-2 pr-4 py-1">
                    <img src={profilePic} alt="Narendra" className="w-8 h-8 rounded-full object-cover border border-white/20" />
                    <span className="text-white font-bold text-base tracking-wide">Narendra</span>
                </div>

                {/* Nav Items */}
                <div className="flex items-center gap-1 border-l border-white/10 pl-2">
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
                </div>
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
            <div className="md:hidden w-full flex justify-between items-center bg-black/80 backdrop-blur-md rounded-full px-4 py-3 border-[0.5px] border-white/20 pointer-events-auto">
                <Link to="/" className="flex items-center gap-2">
                    <img src={profilePic} alt="Narendra" className="w-8 h-8 rounded-full object-cover border border-white/20" />
                    <span className="text-white font-bold text-lg">Narendra</span>
                </Link>

                <div className="flex items-center gap-2 md:gap-4">
                    <FontSwitcher />
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
