import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { ExternalLink } from 'lucide-react';

const AWSLogo = () => (
    <img 
        src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
        alt="AWS Logo" 
        className="w-10 h-10 object-contain shrink-0 dark:invert" 
    />
);

const OpenAILogo = () => (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" className="w-10 h-10 shrink-0 text-foreground">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2057 5.9847 5.9847 0 0 0 3.998-2.9002 6.0462 6.0462 0 0 0-.7478-7.073zm-9.022 12.108a4.365 4.365 0 0 1-2.7144-.9337V14.692a4.27 4.27 0 0 0-.8226-2.5168l-5.4614-9.444a4.4782 4.4782 0 0 1 3.5365-1.9368 4.37 4.37 0 0 1 3.454 1.7248l4.4326 7.6883v5.6231a4.27 4.27 0 0 0 2.1384 3.7011l1.4552.8427a4.365 4.365 0 0 1-6.0183 1.5544zm-7.4856-3.642a4.37 4.37 0 0 1-1.3533-2.5215 4.4782 4.4782 0 0 1 .5932-3.9928l4.4326-7.6883 4.87-2.812a4.27 4.27 0 0 0 2.1336-3.701v-1.681a4.365 4.365 0 0 1 6.2238-3.0881l-5.466 9.4533a4.27 4.27 0 0 0-.0047 2.6263L11.77 15.4746a4.27 4.27 0 0 0-3.701-2.1337h-5.623a4.4782 4.4782 0 0 1-1.464-.8427l1.0968-1.9056a4.37 4.37 0 0 1 3.6963-2.1432zM3.4923 10.0242a4.4782 4.4782 0 0 1 1.9463-3.527L9.8712 3.931a4.37 4.37 0 0 1 3.9928-.593l-4.4326 7.6883v5.623a4.27 4.27 0 0 0 2.1337 3.7012l1.681.9723a4.365 4.365 0 0 1 1.0366 6.8403l-5.466-9.4534a4.27 4.27 0 0 0-1.8037-1.91l-5.452-3.1492a4.27 4.27 0 0 0 2.1337-3.7012V10.024z" />
    </svg>
);

const GitHubActionsLogo = () => (
    <img 
        src="https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg" 
        alt="GitHub Actions Logo" 
        className="w-10 h-10 object-contain shrink-0" 
    />
);

const CurrentlyLearning = () => {
    const topics = [
        {
            title: "Cloud Architecture & AWS Deployment",
            description: "Moving beyond standard platform-as-a-service providers. I am currently learning how to manually provision, configure, and deploy full-stack applications using AWS services (EC2, S3) to understand scalable cloud infrastructure.",
            icon: <AWSLogo />,
            status: "Active Focus"
        },
        {
            title: "Generative AI & Prompt Engineering",
            description: "Exploring the practical applications of Large Language Models (LLMs). I am focusing on advanced prompt design, controlling model hallucinations, and understanding how to integrate GenAI APIs into web applications for real-world use cases.",
            icon: <OpenAILogo />,
            status: "In Progress"
        },
        {
            title: "CI/CD Pipelines via GitHub Actions",
            description: "Automating the development workflow. I am currently learning how to write custom YAML workflows in GitHub Actions to automate code testing, manage environment variables, and trigger seamless deployments.",
            icon: <GitHubActionsLogo />,
            status: "Active Focus"
        }
    ];

    return (
        <section id="currently-learning" className="py-24 relative bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
                        <span className="mr-3">🚀</span>
                        What I'm <span className="bg-primary/20 text-primary px-3 py-1 rounded-md">Learning Now</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl">
                        Continuously expanding my skill set to build more scalable, intelligent, and efficient applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {topics.map((topic, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="h-full"
                        >
                            <Card className="h-full relative overflow-hidden border border-primary/10 bg-gradient-to-b from-card to-card/50 hover:border-primary/30 transition-colors duration-300 flex flex-col p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)]">
                                <div className="absolute top-6 right-6">
                                    <span className="text-[10px] uppercase tracking-wider font-bold bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20">
                                        {topic.status}
                                    </span>
                                </div>
                                <div className="flex flex-col mb-6">
                                    <div className="p-3 rounded-xl bg-background border border-primary/10 inline-flex w-fit mb-6 shadow-sm">
                                        {topic.icon}
                                    </div>
                                    <h3 className="font-bold text-xl text-foreground">{topic.title}</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed flex-grow text-sm md:text-base">
                                    {topic.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <a
                        href="https://github.com/narendra-patil1509"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
                    >
                        I regularly push my learning experiments and projects to my GitHub Profile
                        <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default CurrentlyLearning;
