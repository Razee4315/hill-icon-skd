// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/ScrollToTop';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Transport from './pages/Transport';
import Tours from './pages/Tours';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router basename="/hill-icon-skd">
      <div className="app-layout">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
