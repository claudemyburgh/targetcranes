import { Head } from "@inertiajs/react";

export interface SeoProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
}

export function Seo({
    title = "Crane Hire & Managed Lifting in South Africa",
    description = "Target Cranes provides crane hire and planned lifting solutions across South Africa for construction, mining, maritime and renewable energy projects. Enquire about your lift.",
    image = "/images/og-image.webp",
    url,
    type = "website",
}: SeoProps) {
    const fullTitle = `${title} | Target Cranes`;

    return (
        <Head title={title}>
            <meta name="description" content={description} head-key="description" />

            {/* Favicons */}
            <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" head-key="favicon" />
            <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?v=2" head-key="shortcut-icon" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" head-key="icon-32" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" head-key="icon-16" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" head-key="apple-icon" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} head-key="og:type" />
            <meta property="og:title" content={fullTitle} head-key="og:title" />
            <meta property="og:description" content={description} head-key="og:description" />
            <meta property="og:image" content={image} head-key="og:image" />
            <meta property="og:site_name" content="Target Cranes" head-key="og:site_name" />
            <meta property="og:locale" content="en_ZA" head-key="og:locale" />
            {url && <meta property="og:url" content={url} head-key="og:url" />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" head-key="twitter:card" />
            <meta name="twitter:title" content={fullTitle} head-key="twitter:title" />
            <meta name="twitter:description" content={description} head-key="twitter:description" />
            <meta name="twitter:image" content={image} head-key="twitter:image" />
        </Head>
    );
}

export default Seo;
