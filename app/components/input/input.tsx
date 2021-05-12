import React, { InputHTMLAttributes } from 'react';
import './input.scss';

interface UIProps {
  variant: string;
}
const UncontrolInput: React.FC<
  UIProps & InputHTMLAttributes<HTMLInputElement>
> = ({ variant = 'small', ...rest }) => {
  return <input className={`input ${variant}`} {...rest}></input>;
};

export default UncontrolInput;
