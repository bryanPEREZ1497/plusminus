import React, { useState, useRef } from 'react';
import '../style.css';
export default function Total({ total, action }) {
  return (
    <div className="total">
      <div>
        <p>Total {total}</p>

        <p id="action"
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
