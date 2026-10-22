import React, {useState} from 'react';
import {useForm, usePage} from '@inertiajs/react';
import {Seo} from '@/components/seo';
import AppLayout from "@/layouts/app-layout";
import Wrapper from "@/components/ui/misc/wrapper";
import SectionLabel from "@/components/ui/misc/section-label";
import DotPattern from "@/components/ui/misc/dot-pattern";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {store} from "@/routes/contact-us";
import {CheckCircle2, Clock, Headset, Loader2, Mail, MapPin, Phone, Send} from "lucide-react";
import {cn} from "@/lib/utils";

interface PageProps {
    flash?: {
        success?: string;
        error?: string;
    };

    [key: string]: unknown;
}

function ContactUs() {
    const {flash} = usePage<PageProps>().props;
    const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);

    const {data, setData, post, processing, errors, reset, clearErrors} = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        clearErrors();

        post(store.url(), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setSubmittedSuccessfully(true);
            },
        });
    };

    return (
        <>
            <Seo
                title="Contact Us"
                description="Get in touch with Target Cranes for 24/7 mobile crane hire, heavy rigging, and precision lifting across South Africa. Call 063 673 7500 or email enquiries@targetcranes.co.za."
            />

            <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background relative overflow-hidden">
                <DotPattern corner="top-right"/>
                <DotPattern corner="bottom-left"/>
                <Wrapper className="relative z-10">
                    {/* Header */}
                    <div className="max-w-3xl mb-12 lg:mb-16">
                        <SectionLabel className="mb-4">Get In Touch</SectionLabel>
                        <h2>
                            <SwipeTitle
                                className="text-4xl md:text-6xl font-black font-heading tracking-tighter uppercase text-balance">
                                <SwipeLine>Ready To Lift?</SwipeLine>
                                <SwipeLine>
                                    <span
                                        className="bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent">
                                        Contact Target Cranes
                                    </span>
                                </SwipeLine>
                            </SwipeTitle>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
                            Require short- or long-term mobile crane rental, specialised lifting capacities across any
                            industry, or 24/7 emergency support? Reach out to our team directly or fill out the form
                            below.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                        {/* Left Side: Contact Details & Info (5 columns) */}
                        <div className="lg:col-span-5 h-full">
                            {/* Fast Direct Contacts */}
                            <div
                                className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8 backdrop-blur-xs flex flex-col h-full shadow-sm">
                                <div>
                                    <h3 className="text-2xl font-bold font-heading uppercase tracking-tight text-foreground flex items-center gap-2.5">
                                        <Headset className="w-6 h-6 text-primary"/>
                                        Direct Assistance
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                                        Our operational team and mobile crane dispatchers are available around the
                                        clock.
                                    </p>
                                </div>

                                <div className="flex flex-col justify-between gap-4 pt-6 flex-1">
                                    {/* Phone */}
                                    <a
                                        href="tel:0636737500"
                                        className="group flex items-start gap-4 p-4 rounded-xl border border-border/70 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 flex-1"
                                    >
                                        <div
                                            className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <Phone className="w-5 h-5"/>
                                        </div>
                                        <div>
                                            <span
                                                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                                                Call Us Directly
                                            </span>
                                            <span
                                                className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                                063 673 7500
                                            </span>
                                            <span className="text-xs text-muted-foreground block mt-0.5">
                                                24/7 Mobile & Emergency Support
                                            </span>
                                        </div>
                                    </a>

                                    {/* Email */}
                                    <a
                                        href="mailto:enquiries@targetcranes.co.za"
                                        className="group flex items-start gap-4 p-4 rounded-xl border border-border/70 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 flex-1"
                                    >
                                        <div
                                            className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <Mail className="w-5 h-5"/>
                                        </div>
                                        <div>
                                            <span
                                                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                                                Email Enquiries
                                            </span>
                                            <span
                                                className="text-lg font-bold text-foreground group-hover:text-primary transition-colors break-all">
                                                enquiries@targetcranes.co.za
                                            </span>
                                            <span className="text-xs text-muted-foreground block mt-0.5">
                                                Quotations, safety files & specs
                                            </span>
                                        </div>
                                    </a>

                                    {/* Physical Location */}
                                    <div
                                        className="flex items-start gap-4 p-4 rounded-xl border border-border/70 bg-background/50 flex-1">
                                        <div
                                            className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5"/>
                                        </div>
                                        <div>
                                            <span
                                                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                                                Main Depot & Offices
                                            </span>
                                            <p className="text-base font-semibold text-foreground mt-0.5">
                                                Fabriek St, Bellville South
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                Cape Town, 7530, South Africa
                                            </p>
                                        </div>
                                    </div>

                                    {/* Availability */}
                                    <div
                                        className="flex items-start gap-4 p-4 rounded-xl border border-border/70 bg-background/50 flex-1">
                                        <div
                                            className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5"/>
                                        </div>
                                        <div>
                                            <span
                                                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                                                Operating Hours
                                            </span>
                                            <p className="text-base font-semibold text-foreground mt-0.5">
                                                24/7 Availability
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                Rapid mobilisation nationwide
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form (7 columns) */}
                        <div className="lg:col-span-7 h-full">
                            <div
                                className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm relative overflow-hidden h-full flex flex-col">
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold font-heading uppercase tracking-tight text-foreground">
                                        Send Us A Message
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1.5">
                                        Complete the form below and an experienced rigging consultant will respond as
                                        soon as possible.
                                    </p>
                                </div>

                                {/* Success Alert */}
                                {(submittedSuccessfully || flash?.success) && (
                                    <div
                                        className="mb-8 p-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-950 dark:text-emerald-100 flex items-start gap-3.5">
                                        <CheckCircle2
                                            className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"/>
                                        <div className="text-sm leading-relaxed">
                                            <strong
                                                className="font-semibold block text-base text-emerald-900 dark:text-emerald-200">
                                                Thank you for contacting us!
                                            </strong>
                                            {flash?.success || "We have received your message and will get back to you as soon as possible. A confirmation has also been sent to your email address."}
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6 flex flex-col flex-1">
                                    {/* Name & Email Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {/* Full Name */}
                                        <div className="space-y-2">
                                            <Label htmlFor="name">
                                                Full Name <span className="text-primary font-bold">*</span>
                                            </Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                required
                                                placeholder="e.g. John Doe"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                className={cn(errors.name && 'border-destructive focus-visible:ring-destructive')}
                                            />
                                            {errors.name && (
                                                <p className="text-xs font-medium text-destructive mt-1">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        {/* Email Address */}
                                        <div className="space-y-2">
                                            <Label htmlFor="email">
                                                Email Address <span className="text-primary font-bold">*</span>
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                required
                                                placeholder="e.g. john@company.co.za"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                className={cn(errors.email && 'border-destructive focus-visible:ring-destructive')}
                                            />
                                            {errors.email && (
                                                <p className="text-xs font-medium text-destructive mt-1">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Phone (Optional) & Subject Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {/* Phone */}
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <span
                                                    className="text-xs text-muted-foreground font-normal">Optional</span>
                                            </div>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="e.g. 063 673 7500"
                                                value={data.phone}
                                                onChange={(e) => setData('phone', e.target.value)}
                                                className={cn(errors.phone && 'border-destructive focus-visible:ring-destructive')}
                                            />
                                            {errors.phone && (
                                                <p className="text-xs font-medium text-destructive mt-1">
                                                    {errors.phone}
                                                </p>
                                            )}
                                        </div>

                                        {/* Subject */}
                                        <div className="space-y-2">
                                            <Label htmlFor="subject">
                                                Subject <span className="text-primary font-bold">*</span>
                                            </Label>
                                            <Input
                                                id="subject"
                                                type="text"
                                                required
                                                placeholder="e.g. Crane Hire Quotation"
                                                value={data.subject}
                                                onChange={(e) => setData('subject', e.target.value)}
                                                className={cn(errors.subject && 'border-destructive focus-visible:ring-destructive')}
                                            />
                                            {errors.subject && (
                                                <p className="text-xs font-medium text-destructive mt-1">
                                                    {errors.subject}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2 flex flex-col flex-1">
                                        <Label htmlFor="message">
                                            Message & Project Details <span className="text-primary font-bold">*</span>
                                        </Label>
                                        <Textarea
                                            id="message"
                                            required
                                            placeholder="Provide details about your lifting requirements, location, estimated dates, load weights..."
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            className={cn('flex-1 min-h-40 p-3.5', errors.message && 'border-destructive focus-visible:ring-destructive')}
                                        />
                                        {errors.message && (
                                            <p className="text-xs font-medium text-destructive mt-1">
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-2 mt-auto">
                                        <Button
                                            type="submit"
                                            disabled={processing}
                                            className="w-full sm:w-auto h-12 px-8 text-base font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-xl shadow-md transition-all duration-200"
                                        >
                                            {processing ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin"/>
                                                    Sending Message...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="w-4 h-4 ml-1"/>
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </section>
        </>
    );
}

ContactUs.displayName = 'ContactUs';
ContactUs.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;

export default ContactUs;
