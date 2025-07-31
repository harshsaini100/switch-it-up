//react imports
import { useState } from 'react';

//third party imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages import
import Home from './pages/Home';

//components import
import Layout from './components/Layout';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/contact_us" element={<h1>Contact Us</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
