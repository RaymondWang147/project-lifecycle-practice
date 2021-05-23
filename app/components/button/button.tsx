import React, { memo, useRef } from 'react';
import './button.scss';

interface ButtonProps {
  variant?: string;
  children?: any;
}
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  ...rest
}) => {
  const myRef = useRef(0);
  return (
    <button data-testid="button" className={`button ${variant}`} {...rest}>
      {myRef.current++}
      {children}
    </button>
  );
};

export default memo(Button);
