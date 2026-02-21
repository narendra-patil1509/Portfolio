import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import { ArrowUpRight, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { projects } from '../../data/projects';

const PROJECTS_PER_PAGE = 6;

const AllProjects = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    // Smooth scroll to top when page changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const paginatedProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">All Projects</h1>
                        <p className="text-muted-foreground">A collection of my work, experiments, and open-source contributions.</p>
                    </div>

                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search projects or tags..."
                            className="w-full pl-10 pr-4 py-2 bg-card border border-card-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage + searchTerm}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                    >
                        {paginatedProjects.length > 0 ? (
                            paginatedProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
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
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center">
                                <p className="text-xl text-muted-foreground">No projects found matching your search.</p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className="p-3 rounded-xl bg-card border border-card-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted transition-colors text-foreground"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <div className="flex gap-2">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-10 h-10 rounded-xl border transition-all duration-300 ${currentPage === i + 1
                                            ? 'bg-primary border-primary text-white shadow-lg shadow-primary/25'
                                            : 'bg-card border-card-border text-foreground hover:bg-muted'
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            disabled={currentPage === totalPages}
                            className="p-3 rounded-xl bg-card border border-card-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted transition-colors text-foreground"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllProjects;
