import { ViteReactSSG } from 'vite-react-ssg';
import routes from './routes';
import './index.css';

export const createRoot = ViteReactSSG(
  { routes },
  ({ isClient }) => {
    // Client-side only initialization
    if (isClient) {
      // Any client-side setup can go here
    }
  }
);
