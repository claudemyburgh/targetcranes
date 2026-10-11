import {ReactNode} from 'react';
import {Navigation} from '../components/navigation';
import {Footer} from '../components/footer';

import {EmergencySupport} from '../components/emergency-support';
import {AddressMap} from '../components/address-map';

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({children}: AppLayoutProps) {
    return (
        <div
            className="min-h-screen bg-background flex flex-col text-foreground selection:bg-primary/30 transition-colors duration-300">
            <Navigation/>

            <main className={`flex-1`}>
                {children}
            </main>

            <AddressMap/>
            <EmergencySupport/>
            <Footer/>
        </div>
    );
}
