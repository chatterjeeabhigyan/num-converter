import React, { useState } from "react";

export default function Decimal() {
  const [decimal, setdecimal] = useState(0);

  return (
    <>
      <h3>
        Decimal:{" "}
        <input
          type="number"
          onChange={(e) => {
            setdecimal(Number.parseInt(e.target.value));
          }}
        />
      </h3>
      <ul>
        <li>Binary: {decimal.toString(2)}</li>
        <li>Octal: {decimal.toString(8)}</li>
        <li>Hexa: {decimal.toString(16)}</li>
      </ul>
      <footer style={{ position: "relative", top: 100, bottom: 0 }}>
        <b>&copy; Abhigyan Chatterjee 2022</b>
      </footer>
    </>
  );
}
