import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

  return (
      <>
      <button onClick={()=>{ navigate("/decimal") }} style={{padding: "1em", margin: "1em"}}>Convert decimal</button>
      <button onClick={()=>{ navigate("/binary") }} style={{padding: "1em", margin: "1em"}}>Convert binary</button>
      <button onClick={()=>{ navigate("/octal") }} style={{padding: "1em", margin: "1em"}}>Convert octal</button>
      <button onClick={()=>{ navigate("/hexa") }} style={{padding: "1em", margin: "1em"}}>Convert hexa</button>
      </>
  )
}
