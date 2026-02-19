import * as React from 'react';
import { roomsData, transportData, toursData } from './data/servicesData';

interface RouteRecord {
  path?: string;
  index?: boolean;
  element?: React.ReactNode;
  entry?: string;
  children?: RouteRecord[];
  getStaticPaths?: () => string[];
}

// Layout wrapper for all pages
const AppLayout = React.lazy(() => import('./AppLayout'));

// Static pages
const Home = React.lazy(() => import('./pages/Home'));
const Rooms = React.lazy(() => import('./pages/Rooms'));
const Transport = React.lazy(() => import('./pages/Transport'));
const Tours = React.lazy(() => import('./pages/Tours'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Policy = React.lazy(() => import('./pages/Policy'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Get static paths for dynamic routes
const getRoomPaths = () => roomsData.map(room => `rooms/${room.id}`);
const getTransportPaths = () => transportData.map(vehicle => `transport/${vehicle.id}`);
const getTourPaths = () => toursData.map(tour => `tours/${tour.id}`);

export const routes: RouteRecord[] = [
    {
        path: '/',
        element: <AppLayout />,
        entry: 'src/AppLayout.tsx',
        children: [
            {
                index: true,
                element: <Home />,
                entry: 'src/pages/Home.tsx',
            },
            {
                path: 'rooms',
                element: <Rooms />,
                entry: 'src/pages/Rooms.tsx',
            },
            {
                path: 'rooms/:id',
                element: <Rooms />,
                entry: 'src/pages/Rooms.tsx',
                getStaticPaths: getRoomPaths,
            },
            {
                path: 'transport',
                element: <Transport />,
                entry: 'src/pages/Transport.tsx',
            },
            {
                path: 'transport/:id',
                element: <Transport />,
                entry: 'src/pages/Transport.tsx',
                getStaticPaths: getTransportPaths,
            },
            {
                path: 'tours',
                element: <Tours />,
                entry: 'src/pages/Tours.tsx',
            },
            {
                path: 'tours/:id',
                element: <Tours />,
                entry: 'src/pages/Tours.tsx',
                getStaticPaths: getTourPaths,
            },
            {
                path: 'gallery',
                element: <Gallery />,
                entry: 'src/pages/Gallery.tsx',
            },
            {
                path: 'contact',
                element: <Contact />,
                entry: 'src/pages/Contact.tsx',
            },
            {
                path: 'policy',
                element: <Policy />,
                entry: 'src/pages/Policy.tsx',
            },
            {
                path: '*',
                element: <NotFound />,
                entry: 'src/pages/NotFound.tsx',
            },
        ],
    },
];

export default routes;
