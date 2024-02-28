import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Career from "./Pages/Career";
import Skill from "./Pages/Skill";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/ >}></Route>
        <Route path="/Career" element={<Career/ >}></Route>
        <Route path="/Skill" element={<Skill/ >}></Route>
        <Route path="/Resume" element={<Resume/ >}></Route>
        <Route path="/Portfolio" element={<Portfolio/ >}></Route>
        <Route path="/Contact" element={<Contact/ >}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
