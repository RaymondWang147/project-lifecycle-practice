import React, { useEffect, useRef, useState, useMemo } from 'react';
import Button from '../button/button';

interface ButtonWrapperProps {
  children: any;
}
const ButtonWrapper: React.FC<ButtonWrapperProps> = ({ children }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const increaseCount = () => {
    let sum = 0;
    console.log('increase called');
    for (let i = 1; i < 1000000; ++i) {
      sum++;
    }
    setCount((prev) => prev + sum);
  };
  useEffect(() => {
    if (divRef && divRef.current) {
      divRef.current.addEventListener('mouseover', increaseCount);
    }
    if (divRef && divRef.current) {
      return () => {
        divRef?.current?.removeEventListener('mouseover', increaseCount);
      };
    }
  }, []);
  return (
    <div>
      <div
        ref={divRef}
        style={{ height: '300px', backgroundColor: 'red' }}
      ></div>
      count: {count} <div>{children}</div>
      <Button>click here</Button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default ButtonWrapper;
