import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './redux/Navbar';
import Shopping from './redux/Shopping';
import Api from './redux/Api';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Api />} />
        <Route path='/shop' element={<Shopping />} />
      </Routes>
      
    </div>
  )
}

export default App;