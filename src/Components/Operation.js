import React, { useState, useRef } from 'react';
import '../style.css';

export default function Operation({ totalRef, operation }) {
  return (
    <div className="operation">
      <p onClick={operation.operation}>{operation.name}</p>
      <input ref={totalRef} type="number" />
    </div>
  );
}
