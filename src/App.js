import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Cars from './Components/Cars/Cars';
import Service from './Components/Service/Service';
import AboutUs from './Components/About/AboutUs';
import News from './Components/News/News';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error/Error';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="cars" element={<Cars />} />
          <Route path="service" element={<Service />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
