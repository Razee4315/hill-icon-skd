import * as React from 'react';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/ScrollToTop';
import Breadcrumbs from './components/Breadcrumbs';
import Loading from './components/Loading';
import './App.css';

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
            <div className="container">
                <Breadcrumbs />
            </div>
            <Suspense fallback={<Loading />}>
                <AnimatePresence mode="wait">
                    <motion.main
                        key={location.pathname}
                        className="main-content"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                    >
                        <Outlet />
                    </motion.main>
                </AnimatePresence>
            </Suspense>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
};

export default AppLayout;
