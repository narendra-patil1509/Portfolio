import passwordGeneratorThumb from '../assets/passwordGeneratorThumb.png';
import myTodoAppThumb from '../assets/myTodoAppThumb.png';
import emtBuilderThumb from '../assets/emtBuilderThumb.png';
import txtExcelThumb from '../assets/txtExcelThumb.png';

export const projects = [
    {
    id: 'password-generator',
    title: 'Password Generator',
    shortDescription: 'Customizable secure password generator with real-time strength control.',
    description: 'A fast and user-friendly password generator that allows users to create secure, customizable passwords based on selected criteria. The application supports dynamic length adjustment, character type selection, and instant generation while maintaining a clean and responsive interface.',
    tags: ['React', 'Security', 'Utility'],
    image: passwordGeneratorThumb,
    features: [
        'Customizable password length',
        'Uppercase, lowercase, numbers, and symbols toggle',
        'Instant password generation',
        'Copy-to-clipboard functionality',
        'Responsive and minimal UI'
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    links: {
        demo: 'https://password-generator-by-narendra.netlify.app/',
        github: '#'
    }
},

   {
    id: 'mytodo-context',
    title: 'MyTodo Context',
    shortDescription: 'Context-based task management app with clean state handling.',
    description: 'A lightweight and intuitive task management application built with modern state management patterns. MyTodo Context demonstrates efficient global state handling using Context API, enabling seamless task creation, updates, and filtering while maintaining a clean and scalable architecture.',
    tags: ['React', 'Context API', 'Productivity'],
    image: myTodoAppThumb,
    features: [
        'Global state management using Context API',
        'Create, edit, and delete tasks',
        'Task status filtering (completed / active)',
        'Persistent state handling',
        'Minimal and responsive UI design'
    ],
    technologies: ['React', 'Context API', 'Vite', 'Tailwind CSS'],
    links: {
        demo: 'https://mytodo-context.netlify.app/',
        github: '#'
    }
},

{
    id: 'emt-builder',
    title: 'EMT Builder',
    shortDescription: 'Drag-and-drop email template builder for responsive campaigns.',
    description: 'A modern drag-and-drop email template builder designed to help teams create responsive, production-ready email campaigns with ease. It features modular components, real-time editing, and export-ready HTML output while maintaining performance and compatibility across major email clients.',
    tags: ['Vue', 'Tailwind', 'Vite'],
    image: emtBuilderThumb,
    features: [
        'Drag-and-drop email template builder',
        'Modular and reusable content blocks',
        'Real-time preview and editing',
        'Responsive email layout support',
        'Export-ready HTML output'
    ],
    technologies: ['Vue 3', 'Tailwind CSS', 'Vite', 'HTML Email Rendering'],
    links: {
        demo: 'https://emt-builder.netlify.app/',
        github: '#'
    }
},

   {
    id: 'excelizer',
    title: 'Excelizer',
    shortDescription: 'Convert text files into structured Excel spreadsheets instantly.',
    description: 'A lightweight and efficient tool that converts raw text data into structured, downloadable Excel spreadsheets. Excelizer simplifies data transformation by allowing users to paste or upload text files and instantly generate formatted Excel outputs, making it ideal for quick data processing and reporting workflows.',
    tags: ['Vue', 'Excel', 'Utility'],
    image: txtExcelThumb,
    features: [
        'Convert raw text data to Excel format',
        'Instant file processing and download',
        'Automatic data parsing and structuring',
        'Clean and user-friendly interface',
        'Lightweight and fast performance'
    ],
    technologies: ['Vue 3', 'Tailwind CSS', 'Vite', 'SheetJS (xlsx)'],
    links: {
        demo: 'https://excelizer-txt-excel.netlify.app/',
        github: '#'
    }
},

];
