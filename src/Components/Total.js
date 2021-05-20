import React, { useState, useRef } from 'react';
import '../style.css';
export default function Total({ total, action }) {
  return (
    <div
      style={{
        backgroundColor: '#c4c4c4',
        padding: '25px'
      }}
    >
      <div style={{ backgroundColor: 'white', display: 'flex' }}>
        <p style={{ margin: '10px' }}>Total {total}</p>

        <p
          style={{
            backgroundColor: 'white',
            backgroundColor: '#c4c4c4',
            margin: '10px'
          }}
        >
          {action}
        </p>
      </div>
    </div>
  );
}
