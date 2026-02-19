import * as React from 'react';
import { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/ScrollToTop';
import Breadcrumbs from './components/Breadcrumbs';
import Loading from './components/Loading';
import './App.css';

// Eagerly import Home since it's the landing page (prevents footer flash)
import Home from './pages/Home';

// Lazy load other pages for code splitting
const Rooms = React.lazy(() => import('./pages/Rooms'));
const Transport = React.lazy(() => import('./pages/Transport'));
const Tours = React.lazy(() => import('./pages/Tours'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Policy = React.lazy(() => import('./pages/Policy'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const AppLayout: React.FC = () => {
    const location = useLocation();

    // Handle redirect from 404.html (GitHub Pages SPA fix)
    React.useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const redirectPath = urlParams.get('redirect');

        if (redirectPath) {
            const newUrl = new URL(window.location.href);
            newUrl.searchParams.delete('redirect');
            window.history.replaceState({}, '', newUrl.toString());
            window.location.pathname = redirectPath;
        }
    }, []);

    return (
        <div className="app-layout">
            <Navbar />
            <Suspense fallback={<Loading size="large" fullScreen />}>
                <main key={location.pathname} className="main-content">
                    <div className="container">
                        <Breadcrumbs />
                    </div>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="rooms" element={<Rooms />} />
                        <Route path="rooms/:id" element={<Rooms />} />
                        <Route path="transport" element={<Transport />} />
                        <Route path="transport/:id" element={<Transport />} />
                        <Route path="tours" element={<Tours />} />
                        <Route path="tours/:id" element={<Tours />} />
                        <Route path="gallery" element={<Gallery />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="policy" element={<Policy />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </Suspense>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
};

export default AppLayout;
