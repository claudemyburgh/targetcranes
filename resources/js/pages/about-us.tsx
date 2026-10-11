import { Seo } from '@/components/seo';
import AppLayout from '@/layouts/app-layout';

export default function AboutUs() {
    return (
        <AppLayout>
            <Seo
                title="About Us"
                description="Learn more about Target Cranes, Cape Town's premier mobile crane hire, rigging, and precision lifting service company with 25+ years of excellence."
            />
            <div className="py-24">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold">About Us</h1>
                    <p className="mt-4">This is the about us page.</p>
                </div>
            </div>
        </AppLayout>
    );
}
