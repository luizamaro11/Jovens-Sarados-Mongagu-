import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'white';
    icon?: boolean;
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
    children, 
    variant = 'primary', 
    icon = false, 
    fullWidth = false,
    className = '',
    ...props 
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-display font-bold transition-all duration-200 transform hover:-translate-y-1 rounded-full shadow-lg";
    
    const variants = {
        primary: "bg-js-youth text-white hover:bg-orange-600 hover:shadow-orange-500/30 border border-transparent",
        secondary: "bg-js-joy text-js-mystery hover:bg-yellow-400 hover:shadow-yellow-500/30 border border-transparent",
        outline: "bg-transparent text-js-sky border-2 border-js-sky hover:bg-js-sky hover:text-white",
        white: "bg-white text-js-sky hover:bg-gray-100 shadow-xl border border-transparent"
    };

    const widthClass = fullWidth ? "w-full" : "";

    return (
        <button 
            className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
            {...props}
        >
            {children}
            {icon && <ArrowRight className="ml-2 w-5 h-5" />}
        </button>
    );
};