import React, { useState, useRef } from 'react';
import Total from './Components/Total';
import Operation from './Components/Operation';
import './style.css';

export default function App() {
  const [total, setTotal] = useState(0);
  const [action, setAction] = useState('');
  const sumRef = useRef();
  const subtractionRef = useRef();
  const multiplicationRef = useRef();
  const divisionRef = useRef();
  const Sum = () => {
    const inputValue = sumRef.current.value;
    setTotal(previous => {
      return (previous += parseInt(inputValue));
    });
    setAction(`Plus ${sumRef.current.value}`);
    sumRef.current.value = 0;
  };
  const Subtract = () => {
    const inputValue = subtractionRef.current.value;
    setTotal(previous => {
      return (previous -= parseInt(inputValue));
    });
    setAction(`Minus ${subtractionRef.current.value}`);
    subtractionRef.current.value = 0;
  };
  const Multiplication = () => {
    const inputValue = multiplicationRef.current.value;
    setTotal(previous => {
      return (previous *= parseInt(inputValue));
    });
    setAction(`Multiply ${multiplicationRef.current.value}`);
    multiplicationRef.current.value = 0;
  };
  const Division = () => {
    try {
      if (divisionRef.current.value == 0) {
        throw new Error('Zero is not an allowed divider');
      }
      const inputValue = divisionRef.current.value;
      setTotal(previous => {
        return previous / parseInt(inputValue);
      });
      setAction(`Divide ${divisionRef.current.value}`);
      divisionRef.current.value = 0;
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className="container">
      <Total total={total} action={action} />
      <br />
      <Operation
        totalRef={sumRef}
        operation={{ operation: Sum, name: 'Sum' }}
      />
      <Operation
        totalRef={subtractionRef}
        operation={{ operation: Subtract, name: 'Subtract' }}
      />
      <Operation
        totalRef={multiplicationRef}
        operation={{ operation: Multiplication, name: 'Multiplication' }}
      />
      <Operation
        totalRef={divisionRef}
        operation={{ operation: Division, name: 'Division' }}
      />
    </div>
  );
}
