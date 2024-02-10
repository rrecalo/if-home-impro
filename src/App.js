import './App.css';
import HomePage from './Components/Pages/HomePage';
import Navbar from './Components/Navigation/Navbar';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './Components/Pages/ContactPage';
import GalleryPage from './Components/Pages/GalleryPage';
import ServicesPage from './Components/Pages/ServicesPage';
import ScrollToTop from './Components/ScrollToTop';
import AboutPage from './Components/Pages/AboutPage';
import Footer from './Components/Footer';
import PrivacyPage from './Components/Pages/PrivacyPage';
import TermsPage from './Components/Pages/TermsPage';





function App() {
  return (
    <>
    <Navbar />
    <div className='2xl:w-[75%] 2xl:mx-auto 2xl:border-l 2xl:border-r 2xl:border-black'>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/gallery" element={<GalleryPage />} />
    <Route path="/privacy" element={<PrivacyPage />} />
    <Route path="/tos" element={<TermsPage />} />
    <Route path="/*" element={<HomePage />} />
    </Routes>
    </div>
    <Footer />
    <ScrollToTop />
    </>
  );
}

export default App;
