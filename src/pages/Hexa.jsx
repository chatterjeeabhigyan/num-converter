import React, {useState} from 'react';

export default function Hexa() {
    const [hexa, sethexa] = useState(""); 
    
    return (
      <>
        <h3>
          Hexa:{" "}
          <input
            type="text"
            onChange={(e) => {
              sethexa(e.target.value);
            }}
          />
        </h3>
        <ul>
          <li>Decimal: {parseInt(hexa, 16)}</li>
          <li>Binary: {parseInt(hexa, 16).toString(2)}</li>
          <li>Octal: {parseInt(hexa, 16).toString(8)}</li>
        </ul>
        <footer style={{ position: "relative", top: 100, bottom: 0 }}>
          <b>&copy; Abhigyan Chatterjee 2022</b>
        </footer>
      </>
    );
}
