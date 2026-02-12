import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-12 text-center text-foreground whitespace-nowrap">
                    <span className="mr-2">😎</span>
                    Some of my <span className="bg-primary/20 text-primary px-2 py-1 rounded-md">Best Works</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="h-full"
                        >
                            <Link to={`/project/${project.id}`} className="block h-full">
                                <Card className="group h-full flex flex-col relative overflow-hidden border border-transparent bg-clip-padding before:absolute before:inset-0 before:-z-10 before:p-[1px] before:bg-gradient-to-r before:from-transparent before:via-transparent before:to-transparent hover:before:from-primary hover:before:via-purple-500 hover:before:to-blue-500 before:rounded-xl before:transition-all before:duration-500 bg-card hover:shadow-[0_0_30px_-5px_oklch(var(--primary)/0.3)]">
                                    <div className="aspect-video mb-6 overflow-hidden rounded-lg bg-muted border border-card-border relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <ArrowUpRight className="text-white w-12 h-12" />
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                                    </div>

                                    <p className="text-muted-foreground text-sm mb-6 flex-grow">
                                        {project.shortDescription}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs px-3 py-1.5 rounded-full text-primary font-medium bg-primary/10 border-2 border-primary/50 hover:border-primary hover:bg-primary/20 transition-all duration-300 shadow-[0_0_10px_-2px_oklch(var(--primary)/0.5)] hover:shadow-[0_0_15px_-2px_oklch(var(--primary)/0.8)]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
