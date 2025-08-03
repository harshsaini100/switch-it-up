//react imports
import { useState } from 'react';

//third party imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages import
import Home from './pages/Home';
import Categories from './pages/Categories';
import Category from './pages/Category';
//components import
import Layout from './components/Layout';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/categories" element={<Categories />} />
             <Route path="/category/:id" element={<Category/>}/>
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/contact_us" element={<h1>Contact Us</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
