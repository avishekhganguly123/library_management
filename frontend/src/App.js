import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import Store from './Screens/Store';
import Rentals from './Screens/Rentals';
import Available from './Screens/Available';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/rental" element={<Rentals />} />
        <Route path="/available" element={<Available />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;