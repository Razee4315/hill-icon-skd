import { Link, useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import './Breadcrumbs.css';

interface BreadcrumbItem {
    label: string;
    path: string;
}

const routeLabels: Record<string, string> = {
    '': 'Home',
    'rooms': 'Rooms',
    'transport': 'Transport',
    'tours': 'Tours',
    'gallery': 'Gallery',
    'contact': 'Contact',
    'policy': 'Privacy Policy',
};

const Breadcrumbs: React.FC = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);

    // Don't show on home page
    if (pathSegments.length === 0) return null;

    const breadcrumbs: BreadcrumbItem[] = [
        { label: 'Home', path: '/' },
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`;

        // Check if it's a dynamic ID (number)
        const isId = /^\d+$/.test(segment);

        if (isId) {
            // For detail pages, label as "Details" or use parent context
            const parentLabel = routeLabels[pathSegments[index - 1]] || 'Details';
            breadcrumbs.push({
                label: `${parentLabel.slice(0, -1)} ${segment}`, // "Room 1", "Tour 2", etc.
                path: currentPath,
            });
        } else {
            breadcrumbs.push({
                label: routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
                path: currentPath,
            });
        }
    });

    // JSON-LD BreadcrumbList schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.label,
            "item": `https://hilliconskardu.com${crumb.path}`
        }))
    };

    return (
        <>
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Head>
            <nav className="breadcrumbs" aria-label="Breadcrumb">
                <ol className="breadcrumb-list">
                    {breadcrumbs.map((crumb, index) => (
                        <li key={crumb.path} className="breadcrumb-item">
                            {index < breadcrumbs.length - 1 ? (
                                <>
                                    <Link to={crumb.path} className="breadcrumb-link">
                                        {crumb.label}
                                    </Link>
                                    <span className="breadcrumb-separator" aria-hidden="true">/</span>
                                </>
                            ) : (
                                <span className="breadcrumb-current" aria-current="page">
                                    {crumb.label}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
};

export default Breadcrumbs;
