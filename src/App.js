import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Decimal from "./pages/Decimal";
import Home from "./pages/Home";
import Binary from "./pages/Binary";
import Octal from "./pages/Octal";
import Hexa from "./pages/Hexa";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/decimal" element={<Decimal/>} />
      <Route exact path="/binary" element={<Binary/>} />
      <Route exact path="/octal" element={<Octal/>} />
      <Route exact path="/hexa" element={<Hexa/>} />
      <Route exact path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
