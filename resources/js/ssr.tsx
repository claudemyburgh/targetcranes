import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';
import { AppearanceProvider } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Target Cranes';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => (title ? `${title} | ${appName}` : `${appName} | Crane Hire & Managed Lifting in South Africa`),
        resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
        setup: ({ App, props }) => (
            <AppearanceProvider>
                <App {...props} />
            </AppearanceProvider>
        ),
    })
);
