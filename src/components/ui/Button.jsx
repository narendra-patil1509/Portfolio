import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden";

    const variants = {
        primary: "bg-primary hover:bg-violet-600 text-primary-foreground shadow-lg shadow-primary/25 border border-transparent bg-clip-padding before:absolute before:inset-0 before:-z-10 before:p-[1px] before:bg-gradient-to-r before:from-primary before:via-purple-500 before:to-blue-500 hover:before:opacity-100 before:opacity-70 before:rounded-full before:transition-opacity before:duration-300 hover:shadow-[0_0_25px_-5px_oklch(var(--primary)/0.5)]",
        secondary: "bg-secondary/10 hover:bg-secondary/20 text-secondary relative overflow-hidden border border-transparent bg-clip-padding before:absolute before:inset-0 before:-z-10 before:p-[1px] before:bg-gradient-to-r before:from-secondary/40 before:via-purple-500/40 before:to-primary/40 hover:before:from-secondary hover:before:via-purple-500 hover:before:to-primary before:rounded-full before:transition-all before:duration-300",
        outline: "text-foreground relative overflow-hidden border border-transparent bg-clip-padding before:absolute before:inset-0 before:-z-10 before:p-[1px] before:bg-gradient-to-r before:from-gray-300 before:via-gray-400 before:to-gray-300 dark:before:from-white/30 dark:before:via-white/30 dark:before:to-white/30 hover:before:from-primary hover:before:via-purple-500 hover:before:to-blue-500 before:rounded-full before:transition-all before:duration-300 hover:bg-gray-100 dark:hover:bg-white/10 dark:text-foreground/90 font-semibold",
        ghost: "hover:bg-gray-100 dark:hover:bg-white/5 text-gray-500 dark:text-gray-300 hover:text-foreground font-medium"
    };

    const Component = props.href ? 'a' : 'button';
    const dynamicProps = props.href ? { target: "_blank", rel: "noopener noreferrer", ...props } : props;

    return (
        <Component
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...dynamicProps}
        >
            {children}
        </Component>
    );
};

export default Button;
