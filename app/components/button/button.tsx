import React from 'react';
import './button.scss';

interface ButtonProps {
  variant?: string;
}
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  ...rest
}) => (
  <button className={`button ${variant}`} {...rest}>
    {children}
  </button>
);

export default Button;
