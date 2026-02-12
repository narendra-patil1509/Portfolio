import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    const jobs = [
        {
            company: "Ondirect Marketing",
            role: "PHP Developer",
            period: "2023 - Present",
            description: "Leading the frontend team in rebuilding the core product using React and Next.js. Improved performance by 40%."
        },
        {
            company: "Innovative Startup",
            role: "Full Stack Developer",
            period: "2021 - 2023",
            description: "Developed and launched multiple features for the SaaS platform. Implemented real-time collaboration using WebSockets."
        },
        {
            company: "Digital Agency",
            role: "Web Developer",
            period: "2020 - 2021",
            description: "Built responsive websites for various clients using modern web technologies. Collaborated closely with designers."
        }
    ];

    return (
        <section id="experience" className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-12 text-center text-foreground whitespace-nowrap">
                    <span className="mr-2">💼</span>
                    My prior <span className="bg-primary/20 text-primary px-2 py-1 rounded-md">Work Experience</span>
                </h2>

                <div className="space-y-6">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            tabIndex={0}
                            role="article"
                            className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-xl transition-all"
                        >
                            <Card className="flex gap-6 items-start bg-card/40 relative overflow-hidden border border-transparent bg-clip-padding before:absolute before:inset-0 before:-z-10 before:p-[1px] before:bg-gradient-to-r before:from-transparent before:via-transparent before:to-transparent hover:before:from-cyan-500 hover:before:via-primary hover:before:to-purple-500 focus-within:before:from-cyan-500 focus-within:before:via-primary focus-within:before:to-purple-500 before:rounded-xl before:transition-all before:duration-500 hover:shadow-[0_0_25px_-5px_oklch(var(--primary)/0.3)] focus-within:shadow-[0_0_25px_-5px_oklch(var(--primary)/0.3)] cursor-pointer">
                                <div className="hidden md:flex flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full items-center justify-center text-primary">
                                    <Briefcase size={20} />
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                        <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                                        <span className="text-sm font-semibold text-primary px-3 py-1 rounded-full bg-primary/10 border-2 border-primary/50 shadow-[0_0_12px_-2px_oklch(var(--primary)/0.6)]">{job.period}</span>
                                    </div>
                                    <h4 className="text-primary font-medium mb-2">{job.company}</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {job.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
