import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react"
import FrontPage from './pages/frontPage'
import AboutMe from './pages/aboutMe'

function App() {

    return (<BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />}/>
          <Route path="/about-me" element={<AboutMe />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
