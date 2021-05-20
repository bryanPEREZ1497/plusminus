import React, { useState, useRef } from 'react';
import '../style.css';

export default function Operation({ totalRef, operation }) {
  return (
    <div
      style={{
        backgroundColor: '#c4c4c4',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      <p onClick={operation.operation}>{operation.name}</p>
      <input
        ref={totalRef}
        type="number"
        style={{
          backgroundColor: 'black',
          width: '40px',
          marginLeft: '10px',
          height: '20px',
          color: 'white'
        }}
      />
    </div>
  );
}
