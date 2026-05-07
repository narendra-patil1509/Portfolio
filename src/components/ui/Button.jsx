import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden";

    const primaryStyle = "bg-primary text-primary-foreground border border-transparent hover:bg-transparent hover:text-primary hover:border-primary shadow-lg shadow-primary/25";
    
    const variants = {
        primary: primaryStyle,
        secondary: primaryStyle,
        outline: primaryStyle,
        ghost: primaryStyle
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
