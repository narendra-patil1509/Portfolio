import weatherThumb from '../assets/weather_thumbnail.png';
import ecommerceThumb from '../assets/ecommerce_thumbnail.png';
import blogThumb from '../assets/blog_thumbnail.png';
import taskThumb from '../assets/task_thumbnail.png';

export const projects = [
    {
        id: 'weather-dashboard',
        title: 'Weather Dashboard',
        shortDescription: 'Real-time weather data visualization with interactive maps and charts.',
        description: 'A comprehensive weather tracking application that provides users with real-time updates, 7-day forecasts, and interactive radar maps. Built with ultra-responsive data fetching to ensure users always have the latest meteorological information at their fingertips.',
        tags: ['React', 'D3.js', 'API'],
        image: weatherThumb,
        features: [
            'Interactive D3.js weather charts',
            'Real-time location-based updates',
            'Severe weather alerts system',
            'Multi-city search and tracking'
        ],
        technologies: ['React 19', 'Framer Motion', 'Tailwind CSS', 'OpenWeatherMap API', 'D3.js'],
        links: {
            demo: '#',
            github: '#'
        }
    },
    {
        id: 'ecommerce-platform',
        title: 'E-commerce Platform',
        shortDescription: 'Full-featured online store with cart, checkout, and admin dashboard.',
        description: 'A robust e-commerce solution designed for modern businesses. This platform handles everything from product management and inventor tracking to secure payment processing and order fulfillment, providing a seamless shopping experience for customers.',
        tags: ['Next.js', 'Stripe', 'Prisma'],
        image: ecommerceThumb,
        features: [
            'Secure Stripe payment integration',
            'Dynamic product filtering and search',
            'Real-time inventory management',
            'Customer review and rating system'
        ],
        technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe API', 'Tailwind CSS'],
        links: {
            demo: '#',
            github: '#'
        }
    },
    {
        id: 'blog-cms',
        title: 'Blog CMS',
        shortDescription: 'Content management system for scalable blogging platforms.',
        description: 'A highly customizable content management system built for creators who need a scalable and performant blogging solution. It features a powerful markdown editor, SEO optimization tools, and a flexible layout system that adapts to any aesthetic.',
        tags: ['Vue', 'Firebase', 'Tailwind'],
        image: blogThumb,
        features: [
            'Headless CMS architecture',
            'Markdown-based content editor',
            'Image optimization and lazy loading',
            'Built-in SEO management tools'
        ],
        technologies: ['Vue 3', 'Firebase Auth/Firestore', 'Tailwind CSS', 'Vite', 'Nuxt.js'],
        links: {
            demo: '#',
            github: '#'
        }
    },
    {
        id: 'task-management-app',
        title: 'Task Management App',
        shortDescription: 'Collaborative task tool with real-time updates and team features.',
        description: 'A collaborative workspace designed for high-performance teams. This application enables real-time task tracking, team communication, and project timeline visualization, helping organizations stay organized and productive.',
        tags: ['Angular', 'Node.js', 'Socket.io'],
        image: taskThumb,
        features: [
            'Real-time WebSocket updates',
            'Drag-and-drop Kanban boards',
            'Team mentions and notifications',
            'Detailed productivity analytics'
        ],
        technologies: ['Angular', 'Node.js', 'Express', 'Socket.io', 'MongoDB', 'RxJS'],
        links: {
            demo: '#',
            github: '#'
        }
    }
];
