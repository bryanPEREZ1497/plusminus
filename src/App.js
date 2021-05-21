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
  const Multiplication = () => {
    const inputValue = totalRef.current.value;
    setTotal(previous => {
      return (previous *= parseInt(inputValue));
    });
    setAction(`Multiply ${totalRef.current.value}`);
    totalRef.current.value = 0;
  };
  const Division = () => {
    try {
      if (totalRef.current.value == 0) {
        throw new Error('Zero is not an allowed divider');
      }
      const inputValue = totalRef.current.value;
      setTotal(previous => {
        return previous / parseInt(inputValue);
      });
      setAction(`Divide ${totalRef.current.value}`);
      totalRef.current.value = 0;
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className="container">
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
      <Operation
        totalRef={totalRef}
        operation={{ operation: Multiplication, name: 'Multiplication' }}
      />
      <Operation
        totalRef={totalRef}
        operation={{ operation: Division, name: 'Division' }}
      />
    </div>
  );
}
