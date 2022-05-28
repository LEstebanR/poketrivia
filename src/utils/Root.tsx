import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import Game from '../views/Game';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/game" element={<Game/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Root;