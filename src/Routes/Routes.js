import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Nunjucks from '../components/task2/Nunjucks';
import { Thankyou } from '../components/Thankyou';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/thankyou" element={<Thankyou />} />
      <Route path="/nunjucks" element={<Nunjucks />} />

    </Routes>
  </BrowserRouter>
  )
}

export default Router;