import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Analytics from './pages/components/Analytics';
import Cards from './pages/components/Cards';
import Footer from './pages/components/Footer';
import Hero from './pages/components/Hero';
import Navbar from './pages/components/Navbar';
import Newsletter from './pages/components/Newsletter';
import Login from './pages/components/login';
import HouseGrid from './pages/components/Housegrid';

import Layout from './pages/Layout';
import Index from './pages/Index';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import Buildings from './pages/Buildings';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="home" element={<Home user="David"/>} />
            <Route path='home/:id' element={<Buildings />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>


      {/* <Navbar />
      <Hero />  
      <Cards />
      <Footer /> */}
    </div>
  );
}

export default App;
