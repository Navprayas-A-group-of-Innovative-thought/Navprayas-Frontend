import React from 'react';
import './button.css';

const CustomButton = ({
    children,
    onClick,
    type,
    disabled,
    buttonStyle,
    buttonSize,
    className}) => {
    return (
        <button className={`btn ${buttonSize} ${buttonStyle} ${className}`}
        onClick={onClick}
        type={type}
        disabled={disabled}>
            {children}
        </button>
    );
};

export default CustomButton;