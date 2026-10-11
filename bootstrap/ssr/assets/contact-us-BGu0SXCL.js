import { c as Button, i as SwipeTitle, n as SectionLabel, o as queryParams, r as SwipeLine, s as Wrapper, t as AppLayout, u as cn } from "./app-layout-Coy9jip_.js";
import { t as Seo } from "./seo-C6a5S63n.js";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2, Clock, Headset, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Input } from "@base-ui/react/input";
//#region resources/js/components/ui/input.tsx
function Input$1({ className, type, ...props }) {
	return /* @__PURE__ */ jsx(Input, {
		type,
		"data-slot": "input",
		className: cn("h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
//#endregion
//#region resources/js/components/ui/textarea.tsx
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ jsx("textarea", {
		"data-slot": "textarea",
		className: cn("flex min-h-28 w-full rounded-lg border border-input bg-transparent px-3 py-2.5 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
//#endregion
//#region resources/js/components/ui/label.tsx
function Label({ className, ...props }) {
	return /* @__PURE__ */ jsx("label", {
		"data-slot": "label",
		className: cn("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
		...props
	});
}
//#endregion
//#region resources/js/routes/contact-us/index.ts
/**
* @see \App\Http\Controllers\ContactUsStoreController::__invoke
* @see app/Http/Controllers/ContactUsStoreController.php:16
* @route '/contact-us'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/contact-us"
};
/**
* @see \App\Http\Controllers\ContactUsStoreController::__invoke
* @see app/Http/Controllers/ContactUsStoreController.php:16
* @route '/contact-us'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\ContactUsStoreController::__invoke
* @see app/Http/Controllers/ContactUsStoreController.php:16
* @route '/contact-us'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
Object.assign(store, store);
//#endregion
//#region resources/js/pages/contact-us.tsx
function ContactUs() {
	const { flash } = usePage().props;
	const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
	const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: ""
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		clearErrors();
		post(store.url(), {
			preserveScroll: true,
			onSuccess: () => {
				reset();
				setSubmittedSuccessfully(true);
			}
		});
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Seo, {
		title: "Contact Us",
		description: "Get in touch with Target Cranes for 24/7 mobile crane hire, heavy rigging, and precision lifting across South Africa. Call 063 673 7500 or email enquiries@targetcranes.co.za."
	}), /* @__PURE__ */ jsx("section", {
		className: "pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background",
		children: /* @__PURE__ */ jsxs(Wrapper, { children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-3xl mb-12 lg:mb-16",
			children: [
				/* @__PURE__ */ jsx(SectionLabel, {
					className: "mb-4",
					children: "Get In Touch"
				}),
				/* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsxs(SwipeTitle, {
					className: "text-4xl md:text-6xl font-black font-heading tracking-tighter uppercase text-balance",
					children: [/* @__PURE__ */ jsx(SwipeLine, { children: "Ready To Lift?" }), /* @__PURE__ */ jsx(SwipeLine, { children: /* @__PURE__ */ jsx("span", {
						className: "bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent",
						children: "Contact Target Cranes"
					}) })]
				}) }),
				/* @__PURE__ */ jsx("p", {
					className: "text-lg md:text-xl text-muted-foreground leading-relaxed mt-4",
					children: "Have an upcoming project, need specialized lifting capacities, or require 24/7 emergency support? Reach out to our team directly or fill out the form below."
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch",
			children: [/* @__PURE__ */ jsx("div", {
				className: "lg:col-span-5 h-full",
				children: /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card/60 p-6 sm:p-8 backdrop-blur-xs flex flex-col h-full shadow-sm",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h3", {
						className: "text-2xl font-bold font-heading uppercase tracking-tight text-foreground flex items-center gap-2.5",
						children: [/* @__PURE__ */ jsx(Headset, { className: "w-6 h-6 text-primary" }), "Direct Assistance"]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground leading-relaxed mt-2",
						children: "Our operational team and mobile crane dispatchers are available around the clock."
					})] }), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col justify-between gap-4 pt-6 flex-1",
						children: [
							/* @__PURE__ */ jsxs("a", {
								href: "tel:0636737500",
								className: "group flex items-start gap-4 p-4 rounded-xl border border-border/70 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 flex-1",
								children: [/* @__PURE__ */ jsx("div", {
									className: "w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors",
									children: /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5" })
								}), /* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground block",
										children: "Call Us Directly"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-lg font-bold text-foreground group-hover:text-primary transition-colors",
										children: "063 673 7500"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-xs text-muted-foreground block mt-0.5",
										children: "24/7 Mobile & Emergency Support"
									})
								] })]
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "mailto:enquiries@targetcranes.co.za",
								className: "group flex items-start gap-4 p-4 rounded-xl border border-border/70 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 flex-1",
								children: [/* @__PURE__ */ jsx("div", {
									className: "w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors",
									children: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" })
								}), /* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground block",
										children: "Email Inquiries"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-lg font-bold text-foreground group-hover:text-primary transition-colors break-all",
										children: "enquiries@targetcranes.co.za"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-xs text-muted-foreground block mt-0.5",
										children: "Quotations, safety files & specs"
									})
								] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-4 p-4 rounded-xl border border-border/70 bg-background/50 flex-1",
								children: [/* @__PURE__ */ jsx("div", {
									className: "w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0",
									children: /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5" })
								}), /* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground block",
										children: "Main Depot & Offices"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-base font-semibold text-foreground mt-0.5",
										children: "Fabriek St, Bellville South"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground",
										children: "Cape Town, 7530, South Africa"
									})
								] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-4 p-4 rounded-xl border border-border/70 bg-background/50 flex-1",
								children: [/* @__PURE__ */ jsx("div", {
									className: "w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0",
									children: /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5" })
								}), /* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground block",
										children: "Operating Hours"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-base font-semibold text-foreground mt-0.5",
										children: "24/7 Availability"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground",
										children: "Rapid mobilization nationwide"
									})
								] })]
							})
						]
					})]
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "lg:col-span-7 h-full",
				children: /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm relative overflow-hidden h-full flex flex-col",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-8",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-2xl font-bold font-heading uppercase tracking-tight text-foreground",
								children: "Send Us A Message"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground mt-1.5",
								children: "Complete the form below and an experienced rigging consultant will respond as soon as possible."
							})]
						}),
						(submittedSuccessfully || flash?.success) && /* @__PURE__ */ jsxs("div", {
							className: "mb-8 p-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-950 dark:text-emerald-100 flex items-start gap-3.5",
							children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("div", {
								className: "text-sm leading-relaxed",
								children: [/* @__PURE__ */ jsx("strong", {
									className: "font-semibold block text-base text-emerald-900 dark:text-emerald-200",
									children: "Thank you for contacting us!"
								}), flash?.success || "We have received your message and will get back to you as soon as possible. A confirmation has also been sent to your email address."]
							})]
						}),
						/* @__PURE__ */ jsxs("form", {
							onSubmit: handleSubmit,
							className: "space-y-6 flex flex-col flex-1",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ jsxs(Label, {
												htmlFor: "name",
												children: ["Full Name ", /* @__PURE__ */ jsx("span", {
													className: "text-primary font-bold",
													children: "*"
												})]
											}),
											/* @__PURE__ */ jsx(Input$1, {
												id: "name",
												type: "text",
												required: true,
												placeholder: "e.g. John Doe",
												value: data.name,
												onChange: (e) => setData("name", e.target.value),
												className: cn(errors.name && "border-destructive focus-visible:ring-destructive")
											}),
											errors.name && /* @__PURE__ */ jsx("p", {
												className: "text-xs font-medium text-destructive mt-1",
												children: errors.name
											})
										]
									}), /* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ jsxs(Label, {
												htmlFor: "email",
												children: ["Email Address ", /* @__PURE__ */ jsx("span", {
													className: "text-primary font-bold",
													children: "*"
												})]
											}),
											/* @__PURE__ */ jsx(Input$1, {
												id: "email",
												type: "email",
												required: true,
												placeholder: "e.g. john@company.co.za",
												value: data.email,
												onChange: (e) => setData("email", e.target.value),
												className: cn(errors.email && "border-destructive focus-visible:ring-destructive")
											}),
											errors.email && /* @__PURE__ */ jsx("p", {
												className: "text-xs font-medium text-destructive mt-1",
												children: errors.email
											})
										]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ jsx(Label, {
													htmlFor: "phone",
													children: "Phone Number"
												}), /* @__PURE__ */ jsx("span", {
													className: "text-xs text-muted-foreground font-normal",
													children: "Optional"
												})]
											}),
											/* @__PURE__ */ jsx(Input$1, {
												id: "phone",
												type: "tel",
												placeholder: "e.g. 063 673 7500",
												value: data.phone,
												onChange: (e) => setData("phone", e.target.value),
												className: cn(errors.phone && "border-destructive focus-visible:ring-destructive")
											}),
											errors.phone && /* @__PURE__ */ jsx("p", {
												className: "text-xs font-medium text-destructive mt-1",
												children: errors.phone
											})
										]
									}), /* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ jsxs(Label, {
												htmlFor: "subject",
												children: ["Subject ", /* @__PURE__ */ jsx("span", {
													className: "text-primary font-bold",
													children: "*"
												})]
											}),
											/* @__PURE__ */ jsx(Input$1, {
												id: "subject",
												type: "text",
												required: true,
												placeholder: "e.g. Crane Hire Quotation",
												value: data.subject,
												onChange: (e) => setData("subject", e.target.value),
												className: cn(errors.subject && "border-destructive focus-visible:ring-destructive")
											}),
											errors.subject && /* @__PURE__ */ jsx("p", {
												className: "text-xs font-medium text-destructive mt-1",
												children: errors.subject
											})
										]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2 flex flex-col flex-1",
									children: [
										/* @__PURE__ */ jsxs(Label, {
											htmlFor: "message",
											children: ["Message & Project Details ", /* @__PURE__ */ jsx("span", {
												className: "text-primary font-bold",
												children: "*"
											})]
										}),
										/* @__PURE__ */ jsx(Textarea, {
											id: "message",
											required: true,
											placeholder: "Provide details about your lifting requirements, location, estimated dates, load weights...",
											value: data.message,
											onChange: (e) => setData("message", e.target.value),
											className: cn("flex-1 min-h-40 p-3.5", errors.message && "border-destructive focus-visible:ring-destructive")
										}),
										errors.message && /* @__PURE__ */ jsx("p", {
											className: "text-xs font-medium text-destructive mt-1",
											children: errors.message
										})
									]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "pt-2 mt-auto",
									children: /* @__PURE__ */ jsx(Button, {
										type: "submit",
										disabled: processing,
										className: "w-full sm:w-auto h-12 px-8 text-base font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-xl shadow-md transition-all duration-200",
										children: processing ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Loader2, { className: "w-5 h-5 animate-spin" }), "Sending Message..."] }) : /* @__PURE__ */ jsxs(Fragment, { children: ["Send Message", /* @__PURE__ */ jsx(Send, { className: "w-4 h-4 ml-1" })] })
									})
								})
							]
						})
					]
				})
			})]
		})] })
	})] });
}
ContactUs.displayName = "ContactUs";
ContactUs.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
//#endregion
export { ContactUs as default };
