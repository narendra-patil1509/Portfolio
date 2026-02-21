import React from 'react';
import Button from '../ui/Button';
import { Sparkles } from 'lucide-react';
import { useTheme } from '../ui/ThemeProvider';

import twitterIcon from '../../assets/twitter_icon.svg';
import githubIcon from '../../assets/github_icon.svg';
import mailIcon from '../../assets/mail_icon.svg';
import linkedinIcon from '../../assets/stackoverflow_icon.svg';

const Footer = () => {
    const { theme } = useTheme();
    return (
        <footer id="contact" className="py-20 pb-10">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-card/30 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden border-2 border-transparent bg-clip-padding before:absolute before:inset-0 before:-z-10 before:p-[2px] before:bg-gradient-to-r before:from-purple-500 before:via-pink-500 before:to-blue-500 before:rounded-3xl" style={{ borderImage: 'linear-gradient(to right, rgb(168 85 247), rgb(236 72 153), rgb(59 130 246)) 1' }}>
                    {/* Decorative globs */}
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,black)] dark:bg-grid-white/[0.02] bg-grid-black/[0.02]"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                            Want me on your team?
                            <br />
                            <span className="text-primary">Let's make it happen</span> <span className="text-yellow-400">✨</span>
                        </h2>

                        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                            I'm currently available for freelance projects and open to full-time opportunities.
                        </p>

                        <Button className="w-full sm:w-auto px-6 py-3 sm:px-10 sm:py-5 text-base sm:text-lg rounded-full bg-primary hover:bg-primary/90 shadow-[0_10px_40px_-10px_rgba(124,58,237,0.6)] hover:shadow-[0_10px_40px_-5px_rgba(124,58,237,0.8)] transition-all duration-300 border-none font-bold">
                            <img
                                src={mailIcon}
                                alt="Mail"
                                className="w-5 h-5 sm:w-6 sm:h-6 mr-3 inline transition-all duration-300"
                                style={{ filter: theme === 'dark' ? 'brightness(0)' : 'none' }}
                            />
                            Get in Touch
                        </Button>
                    </div>
                </div>

                <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground text-sm">
                    <p>© 2026 Narendra Patil. All rights reserved.</p>

                    <div className="flex gap-6 items-center">
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            <img src={twitterIcon} alt="Twitter" className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
