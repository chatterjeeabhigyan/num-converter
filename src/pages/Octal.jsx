import React, {useState} from 'react';

export default function Octal() {
    const [octal, setoctal] = useState(0); 
    
    return (
      <>
        <h3>
          Octal:{" "}
          <input
            type="number"
            onChange={(e) => {
              setoctal(Number.parseInt(e.target.value));
            }}
          />
        </h3>
        <ul>
          <li>Decimal: {parseInt(octal, 8)}</li>
          <li>Binary: {parseInt(octal, 8).toString(2)}</li>
          <li>Hexa: {parseInt(octal, 8).toString(16)}</li>
        </ul>
        <footer style={{ position: "relative", top: 100, bottom: 0 }}>
          <b>&copy; Abhigyan Chatterjee 2022</b>
        </footer>
      </>
    );
}
