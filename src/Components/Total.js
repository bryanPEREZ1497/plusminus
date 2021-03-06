import React, { useState, useRef } from 'react';
import '../style.css';
export default function Total({ total, message }) {
  return (
    <div className="total">
      <div>
        <p>Total {total}</p>

        <p
          id="message"
          style={{
            backgroundColor: 'white',
            backgroundColor: '#c4c4c4',
            margin: '10px'
          }}
        >
          {message}
        </p>
      </div>
    </div>
  );
}
