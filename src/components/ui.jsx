import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-medium px-6 py-3 rounded-8px cursor-pointer transition-all duration-150 text-base border";
  
  const variants = {
    primary: "bg-brand-950 text-white border-transparent hover:bg-brand-800",
    secondary: "bg-white text-brand-950 border-brand-200 hover:bg-brand-50",
    danger: "bg-red-500 text-white border-transparent hover:bg-red-600"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const Input = ({ label, id, className = '', ...props }) => {
  return (
    <div className={`flex flex-col gap-2 mb-4 ${className}`}>
      {label && <label htmlFor={id} className="font-medium text-sm text-brand-800">{label}</label>}
      <input 
        id={id}
        className="px-4 py-3 rounded-8px border border-brand-200 outline-none w-full text-base font-sans focus:border-brand-950 focus:ring-1 focus:ring-brand-950 transition-colors"
        {...props}
      />
    </div>
  );
};

export const Card = ({ children, className = '', noPadding = false, ...props }) => {
  return (
    <div 
      className={`bg-white rounded-8px border border-brand-200 shadow-sm ${noPadding ? 'p-0' : 'p-6'} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
