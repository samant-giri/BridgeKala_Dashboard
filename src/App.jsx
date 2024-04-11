import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import "./App.css"
import SecondPage from './components/SecondPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App