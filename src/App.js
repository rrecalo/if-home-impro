import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './Pages/ContactPage';
import GalleryPage from './Pages/GalleryPage';
import ServicesPage from './Pages/ServicesPage';
import ScrollToTop from './ScrollToTop';
import AboutPage from './Pages/AboutPage';
import { gql } from '@apollo/client';






function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
    <ScrollToTop />
    </>
  );
}

export default App;
