import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react"
import FrontPage from './pages/frontPage'

function App() {

    return (<BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />}/>
        
        </Routes>
      </BrowserRouter>
  );
}

export default App;
