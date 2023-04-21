import React, {useState} from 'react';

export default function Binary() {
    const [binary, setbinary] = useState(0); 
    
    return (
      <>
        <h3>
          Binary:{" "}
          <input
            type="number"
            onChange={(e) => {
              setbinary(Number.parseInt(e.target.value));
            }}
          />
        </h3>
        <ul>
          <li>Decimal: {parseInt(binary, 2)}</li>
          <li>Octal: {parseInt(binary, 2).toString(8)}</li>
          <li>Hexa: {parseInt(binary, 2).toString(16)}</li>
        </ul>
        <footer style={{ position: "relative", top: 100, bottom: 0 }}>
          <b>&copy; Abhigyan Chatterjee 2022</b>
        </footer>
      </>
    );
}
