import './App.css';
import Homepage from './Homepage';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './Pages/ContactPage';
import GalleryPage from './Pages/GalleryPage';
import ServicesPage from './Pages/ServicesPage';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
    <ScrollToTop />
    </>
  );
}

export default App;
