import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import linkedinQR from '../../assets/Linkedinqr-code.png';
import githubQR from '../../assets/githubqr-code.png';
import whatsappQR from '../../assets/whatsappqr-code.png';
import instagramQR from '../../assets/Instagramqr-code.png';

const socialLinks = [
    { name: 'LinkedIn', qr: linkedinQR, color: 'from-blue-500 to-cyan-500' },
    { name: 'GitHub', qr: githubQR, color: 'from-gray-700 to-gray-900' },
    { name: 'WhatsApp', qr: whatsappQR, color: 'from-green-500 to-emerald-500' },
    { name: 'Instagram', qr: instagramQR, color: 'from-pink-500 via-purple-500 to-orange-500' },
];

const SocialQRModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto overflow-x-hidden p-4 sm:p-6 py-10 sm:py-20">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-background/80 backdrop-blur-md z-0"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-4xl bg-card border border-card-border rounded-[2.5rem] shadow-2xl z-10 m-auto"
                    >
                        <div className="p-8 sm:p-12 relative">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground z-20"
                            >
                                <X size={24} />
                            </button>

                            <div className="text-center mb-10">
                                <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-foreground">Let's Connect</h2>
                                <p className="text-muted-foreground">Scan any QR code to reach out to me</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {socialLinks.map((social, index) => (
                                    <motion.div
                                        key={social.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group relative"
                                    >
                                        {/* Glowing Border effect */}
                                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${social.color} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`} />

                                        <div className="relative flex flex-col items-center bg-card rounded-2xl p-4 border border-card-border">
                                            <div className="w-full aspect-square overflow-hidden rounded-xl bg-white p-2 mb-4">
                                                <img
                                                    src={social.qr}
                                                    alt={`${social.name} QR Code`}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <span className="font-semibold text-lg text-foreground">{social.name}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SocialQRModal;
