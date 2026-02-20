import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { Quote } from 'lucide-react';

import user1 from '../../assets/user_1.png';
import user2 from '../../assets/user_2.png';
import user3 from '../../assets/user_3.png';

const Testimonials = () => {
    const reviews = [
        {
            name: "Pratik Chinchore",
            role: "CEO at StartupX",
            content: "Narendra is an exceptional developer who delivered our MVP ahead of schedule. His attention to detail is unmatched.",
            avatar: user1
        },
        {
            name: "Kunal Sandanshive",
            role: "CTO at TechFlow",
            content: "Working with Narendra was a pleasure. He writes clean, maintainable code and solves complex problems with ease.",
            avatar: user2
        },
        {
            name: "Raj Ingale",
            role: "Product Manager",
            content: "The best frontend engineer I've worked with. He has a great eye for design and user experience.",
            avatar: user3
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-12 text-center text-foreground whitespace-nowrap">
                    <span className="mr-2">📢</span>
                    Check out these <span className="bg-primary/20 text-primary px-2 py-1 rounded-md">Testimonials</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="h-full"
                        >
                            <Card className="h-full relative overflow-hidden border border-transparent bg-clip-padding before:absolute before:inset-0 before:-z-10 before:p-[1px] before:bg-gradient-to-r before:from-transparent before:via-transparent before:to-transparent hover:before:from-blue-500 hover:before:via-purple-500 hover:before:to-pink-500 before:rounded-xl before:transition-all before:duration-500 bg-card hover:shadow-[0_0_25px_-5px_oklch(var(--primary)/0.3)]">
                                <Quote className="text-primary mb-4 opacity-50" size={24} />
                                <p className="text-muted-foreground mb-6 italic">"{review.content}"</p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <img
                                        src={review.avatar}
                                        alt={review.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                                    />
                                    <div>
                                        <h4 className="font-bold text-sm text-foreground">{review.name}</h4>
                                        <p className="text-xs text-muted-foreground">{review.role}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
