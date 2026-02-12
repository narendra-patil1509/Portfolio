import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Cpu, Layout, Rocket } from 'lucide-react';
import { projects } from '../../data/projects';
import Button from '../ui/Button';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been moved.</p>
                <Link to="/">
                    <Button>Back to Portfolio</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pt-28 pb-20">
            <div className="max-w-6xl mx-auto px-6">
                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors gap-2 group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Portfolio</span>
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button className="flex items-center gap-2">
                                <ExternalLink size={18} /> Live Demo
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Github size={18} /> Source Code
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-video rounded-3xl overflow-hidden border border-card-border shadow-2xl relative z-10">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-purple-500/10 to-transparent blur-3xl -z-10 rounded-full" />
                    </motion.div>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Key Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-2 space-y-12"
                    >
                        <section>
                            <div className="flex items-center gap-3 mb-6 text-primary">
                                <Rocket size={24} />
                                <h2 className="text-2xl font-bold text-foreground">Key Features</h2>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {project.features.map((feature, index) => (
                                    <div key={index} className="flex gap-3 p-4 bg-muted/50 rounded-2xl border border-card-border">
                                        <CheckCircle2 className="text-primary shrink-0" size={20} />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-3 mb-6 text-primary">
                                <Layout size={24} />
                                <h2 className="text-2xl font-bold text-foreground">Project Overview</h2>
                            </div>
                            <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                                <p>
                                    This project represents a significant milestone in exploring {project.tags[0]} and {project.tags[1]} architectures.
                                    The primary focus was on delivering an ultra-smooth user experience while maintaining high performance and accessibility standards.
                                </p>
                                <p className="mt-4">
                                    Every component was carefully crafted to be reusable and efficient, utilizing modern React patterns and the latest features of the technology stack.
                                </p>
                            </div>
                        </section>
                    </motion.div>

                    {/* Tech Stack Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-card/50 p-8 rounded-3xl border border-card-border sticky top-32">
                            <div className="flex items-center gap-3 mb-6 text-primary">
                                <Cpu size={24} />
                                <h2 className="text-xl font-bold text-foreground">Stack</h2>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-background border border-card-border rounded-xl text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-12 p-6 bg-primary/10 rounded-2xl border border-primary/20">
                                <h3 className="font-bold mb-2">Interested in this project?</h3>
                                <p className="text-sm text-muted-foreground mb-4">Let's discuss how I can bring similar value to your team.</p>
                                <Link to="/#contact">
                                    <Button className="w-full">Get in Touch</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
