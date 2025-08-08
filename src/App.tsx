// import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import { AnimatePresence, motion } from 'framer-motion';
import Policy from './pages/Policy';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.main
              className="main-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Home />
            </motion.main>
          }
        />
        <Route
          path="/rooms"
          element={
            <motion.main
              className="main-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Rooms />
            </motion.main>
          }
        />
        <Route
          path="/rooms/:id"
          element={
            <motion.main
              className="main-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Rooms />
            </motion.main>
          }
        />
        <Route
          path="/transport"
          element={
            <motion.main
              className="main-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Transport />
            </motion.main>
          }
        />
        <Route
          path="/transport/:id"
          element={
            <motion.main
              className="main-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Transport />
            </motion.main>
          }
        />
        <Route
          path="/tours"
          element={
            <motion.main
              className="main-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Tours />
            </motion.main>
          }
        />
        <Route
          path="/tours/:id"
          element={
            <motion.main
              className="main-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Tours />
            </motion.main>
          }
        />
        <Route
          path="/gallery"
          element={
            <motion.main
              className="main-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Gallery />
            </motion.main>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.main
              className="main-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Contact />
            </motion.main>
          }
        />
        <Route
          path="/policy"
          element={
            <motion.main
              className="main-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Policy />
            </motion.main>
          }
        />
        <Route
          path="*"
          element={
            <motion.main
              className="main-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <NotFound />
            </motion.main>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const basename = '/';
  return (
    <Router basename={basename}>
      <div className="app-layout">
        <Navbar />
        {/* Animated routed pages */}
        <AnimatedRoutes />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
