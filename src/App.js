import React, { useState, useRef } from 'react';
import Total from './Components/Total';
import Operation from './Components/Operation';
import './style.css';

export default function App() {
  const [total, setTotal] = useState(0);
  const [action, setAction] = useState('');
  const totalRef = useRef();
  const Sum = () => {
    const inputValue = totalRef.current.value;
    setTotal(previous => {
      return (previous += parseInt(inputValue));
    });
    setAction(`Plus ${totalRef.current.value}`);
    totalRef.current.value = 0;
  };
  const Subtract = () => {
    const inputValue = totalRef.current.value;
    setTotal(previous => {
      return (previous -= parseInt(inputValue));
    });
    setAction(`Minus ${totalRef.current.value}`);
    totalRef.current.value = 0;
  };
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Total total={total} action={action} />
      <br />
      <Operation
        totalRef={totalRef}
        operation={{ operation: Sum, name: 'Sum' }}
      />
      <Operation
        totalRef={totalRef}
        operation={{ operation: Subtract, name: 'Subtract' }}
      />
    </div>
  );
}
