import React from "react";
import { Routes, Route } from 'react-router-dom'
import AppRoutes from "./AppRoutes";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/contact" element={<Contact />}/>
  </Routes>
  )
}

export default App