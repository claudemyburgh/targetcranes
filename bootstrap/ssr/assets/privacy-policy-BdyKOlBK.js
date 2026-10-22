import { n as SectionLabel, s as Wrapper, t as AppLayout } from "./app-layout-w-LVHpQd.js";
import { t as Seo } from "./seo-BhlX0amy.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Database, Eye, Globe, Lock, Mail, Shield, UserCheck } from "lucide-react";
// resources/js/pages/privacy-policy.tsx
function PrivacyPolicy() {
	return /* @__PURE__ */ jsxs(AppLayout, { children: [/* @__PURE__ */ jsx(Seo, {
		title: "Privacy Policy",
		description: "Target Cranes Privacy Policy. Learn how we handle, process, and protect your personal information in compliance with South African privacy standards (POPIA)."
	}), /* @__PURE__ */ jsx("section", {
		className: "pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background",
		children: /* @__PURE__ */ jsxs(Wrapper, { children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-3xl mb-12",
			children: [
				/* @__PURE__ */ jsx(SectionLabel, {
					className: "mb-4",
					children: "Legal & Privacy"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "text-4xl md:text-5xl font-black font-heading tracking-tight uppercase text-foreground mb-4",
					children: "Privacy Policy"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground text-lg leading-relaxed",
					children: "Target Cranes (Pty) Ltd (“Target Cranes”, “we”, “us”, or “our”) is committed to protecting your privacy and ensuring your personal data is handled in a safe, transparent, and responsible manner in accordance with the Protection of Personal Information Act (POPIA) of South Africa."
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "text-xs text-muted-foreground mt-2",
					children: ["Last Updated: ", (/* @__PURE__ */ new Date()).toLocaleDateString("en-ZA", {
						year: "numeric",
						month: "long",
						day: "numeric"
					})]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-4xl space-y-12",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 text-primary",
							children: [/* @__PURE__ */ jsx(Globe, { className: "w-6 h-6 shrink-0" }), /* @__PURE__ */ jsx("h2", {
								className: "text-xl font-bold font-heading uppercase text-foreground",
								children: "Who We Are"
							})]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-muted-foreground leading-relaxed text-sm md:text-base",
							children: [
								"Our website address is: ",
								/* @__PURE__ */ jsx("strong", {
									className: "text-foreground",
									children: "targetcranes.co.za"
								}),
								"."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground leading-relaxed text-sm md:text-base",
							children: "Target Cranes is a specialised mobile crane hire and managed lifting service provider based at Fabriek St, Bellville South, Cape Town, 7530, South Africa."
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 text-primary",
						children: [/* @__PURE__ */ jsx(Eye, { className: "w-6 h-6 shrink-0" }), /* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold font-heading uppercase text-foreground",
							children: "Comments"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground leading-relaxed text-sm md:text-base",
						children: "When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection."
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 text-primary",
						children: [/* @__PURE__ */ jsx(Database, { className: "w-6 h-6 shrink-0" }), /* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold font-heading uppercase text-foreground",
							children: "Media"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground leading-relaxed text-sm md:text-base",
						children: "If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website."
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 text-primary",
						children: [/* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 shrink-0" }), /* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold font-heading uppercase text-foreground",
							children: "Cookies"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-3 text-muted-foreground leading-relaxed text-sm md:text-base",
						children: [
							/* @__PURE__ */ jsx("p", { children: "If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year." }),
							/* @__PURE__ */ jsx("p", { children: "If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser." }),
							/* @__PURE__ */ jsx("p", { children: "When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed." }),
							/* @__PURE__ */ jsx("p", { children: "If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day." })
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 text-primary",
							children: [/* @__PURE__ */ jsx(Globe, { className: "w-6 h-6 shrink-0" }), /* @__PURE__ */ jsx("h2", {
								className: "text-xl font-bold font-heading uppercase text-foreground",
								children: "Embedded Content From Other Websites"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground leading-relaxed text-sm md:text-base",
							children: "Articles and media on this site may include embedded content (e.g. videos, images, articles, interactive maps, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground leading-relaxed text-sm md:text-base",
							children: "These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website."
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 text-primary",
						children: [/* @__PURE__ */ jsx(Lock, { className: "w-6 h-6 shrink-0" }), /* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold font-heading uppercase text-foreground",
							children: "Who We Share Your Data With"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground leading-relaxed text-sm md:text-base",
						children: "If you request a password reset, your IP address will be included in the reset email. We do not sell, rent, or lease customer data to third-party marketing companies. Data submitted via quotation and contact forms is solely used to facilitate crane hire services, lift assessments, and direct business communications."
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 text-primary",
							children: [/* @__PURE__ */ jsx(Database, { className: "w-6 h-6 shrink-0" }), /* @__PURE__ */ jsx("h2", {
								className: "text-xl font-bold font-heading uppercase text-foreground",
								children: "How Long We Retain Your Data"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground leading-relaxed text-sm md:text-base",
							children: "If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground leading-relaxed text-sm md:text-base",
							children: "For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information."
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 text-primary",
						children: [/* @__PURE__ */ jsx(UserCheck, { className: "w-6 h-6 shrink-0" }), /* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold font-heading uppercase text-foreground",
							children: "What Rights You Have Over Your Data"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground leading-relaxed text-sm md:text-base",
						children: "If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, regulatory, or security purposes."
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 text-primary",
						children: [/* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 shrink-0" }), /* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold font-heading uppercase text-foreground",
							children: "Where Your Data Is Sent"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground leading-relaxed text-sm md:text-base",
						children: "Visitor comments and form enquiries may be checked through an automated spam detection service."
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 space-y-3",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 text-primary",
							children: [/* @__PURE__ */ jsx(Mail, { className: "w-6 h-6 shrink-0" }), /* @__PURE__ */ jsx("h2", {
								className: "text-xl font-bold font-heading uppercase text-foreground",
								children: "Contact & POPIA Inquiries"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground leading-relaxed text-sm md:text-base",
							children: "If you have questions regarding this Privacy Policy, your personal data, or wish to exercise your rights under POPIA, please reach out directly:"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "text-sm font-medium space-y-1 text-foreground",
							children: [
								/* @__PURE__ */ jsxs("p", { children: ["Email: ", /* @__PURE__ */ jsx("a", {
									href: "mailto:enquiries@targetcranes.co.za",
									className: "text-primary hover:underline",
									children: "enquiries@targetcranes.co.za"
								})] }),
								/* @__PURE__ */ jsxs("p", { children: ["Phone: ", /* @__PURE__ */ jsx("a", {
									href: "tel:0636737500",
									className: "text-primary hover:underline",
									children: "063 673 7500"
								})] }),
								/* @__PURE__ */ jsx("p", { children: "Address: Fabriek St, Bellville South, Cape Town, 7530, South Africa" })
							]
						})
					]
				})
			]
		})] })
	})] });
}
export { PrivacyPolicy as default };
