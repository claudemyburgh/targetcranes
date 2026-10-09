import { r as buttonVariants, t as AppLayout } from "./app-layout-a01gcPpr.js";
import { Head } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, BookOpen, Code, Compass, Layout, Lock, Sparkles, Terminal } from "lucide-react";
//#region resources/js/pages/welcome.tsx
function Welcome() {
	return /* @__PURE__ */ jsxs(AppLayout, { children: [/* @__PURE__ */ jsx(Head, { title: "Welcome to StarterKit" }), /* @__PURE__ */ jsxs("div", {
		className: "relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pb-28 lg:px-8 lg:pt-32",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse",
							children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5" }), "Laravel 13 + Filament v5 + Inertia React 19"]
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60",
							children: "The Ultimate Full-Stack Starter Kit"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto",
							children: "A production-ready foundation combining Laravel 13, Filament v5 for the administration system, and Inertia React 19 for the public-facing application, styled with Tailwind CSS v4."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-10 flex items-center justify-center gap-x-6",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "/admin",
								className: buttonVariants({
									size: "lg",
									className: "group shadow-lg hover:-translate-y-0.5 transition-all"
								}),
								children: ["Access Panel ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" })]
							}), /* @__PURE__ */ jsxs("a", {
								href: "#features",
								className: buttonVariants({
									variant: "ghost",
									className: "group"
								}),
								children: ["Learn more ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" })]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				id: "features",
				className: "mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24 border-t border-border",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-2xl lg:text-center",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-base font-semibold leading-7 text-primary",
							children: "Robust Architecture"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
							children: "What does this Starter Kit do?"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-lg text-muted-foreground",
							children: "It merges the absolute best parts of the Laravel ecosystem into a single unified workspace."
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-2",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex gap-x-4 rounded-2xl border border-border bg-card p-6 shadow-sm",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary",
									children: /* @__PURE__ */ jsx(Lock, { className: "w-6 h-6" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									className: "text-lg font-semibold text-foreground",
									children: "Unified Authentication"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Authentication belongs exclusively to Filament. Users log in via Filament's native administration system, leaving the public Inertia React frontend clean of authentication logic."
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex gap-x-4 rounded-2xl border border-border bg-card p-6 shadow-sm",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary",
									children: /* @__PURE__ */ jsx(Compass, { className: "w-6 h-6" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									className: "text-lg font-semibold text-foreground",
									children: "Laravel Wayfinder"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Complete type-safety. Using Laravel Wayfinder, TypeScript definitions of your Laravel controllers and routes are auto-generated. No more hardcoded URLs or out-of-sync paths."
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex gap-x-4 rounded-2xl border border-border bg-card p-6 shadow-sm",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary",
									children: /* @__PURE__ */ jsx(Layout, { className: "w-6 h-6" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									className: "text-lg font-semibold text-foreground",
									children: "Tailwind CSS v4"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Vastly simplified style configuration, out-of-the-box CSS nesting, and fully responsive layouts. The package includes native light and dark mode toggling support."
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex gap-x-4 rounded-2xl border border-border bg-card p-6 shadow-sm",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary",
									children: /* @__PURE__ */ jsx(Code, { className: "w-6 h-6" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									className: "text-lg font-semibold text-foreground",
									children: "React 19 & SSR"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Optimized performance using React 19's virtual DOM structure combined with Inertia Server Side Rendering (SSR) for lightning-fast first contentful paint and SEO optimization."
								})] })]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24 border-t border-border",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-2xl lg:text-center mb-16",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-base font-semibold leading-7 text-primary",
						children: "Developer Guide"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
						children: "How to Use this Package"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-16",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-5",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx("span", {
										className: "flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm",
										children: "1"
									}), /* @__PURE__ */ jsx("h3", {
										className: "text-xl font-bold text-foreground",
										children: "Running Development Services"
									})]
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-4 text-sm text-muted-foreground",
									children: "Start the Vite server to get Hot Module Replacement (HMR) for your Inertia React frontend. In another window, run the Laravel development server."
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-7 bg-zinc-950 text-zinc-100 p-6 rounded-2xl shadow-inner border border-zinc-800 font-mono text-xs",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5 pb-3 mb-3 border-b border-zinc-800",
										children: [/* @__PURE__ */ jsx(Terminal, { className: "w-4 h-4 text-gray-400" }), /* @__PURE__ */ jsx("span", { children: "Vite Dev & Serve" })]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-400",
										children: "# Start the frontend asset builder"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-primary-foreground mb-4",
										children: "npm run dev"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-400",
										children: "# Start your Laravel backend"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-primary-foreground",
										children: "php artisan serve"
									})
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-5",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx("span", {
										className: "flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm",
										children: "2"
									}), /* @__PURE__ */ jsx("h3", {
										className: "text-xl font-bold text-foreground",
										children: "Type-Safe Routing with Wayfinder"
									})]
								}), /* @__PURE__ */ jsxs("p", {
									className: "mt-4 text-sm text-muted-foreground",
									children: [
										"Wayfinder automatically generates JS functions from named Laravel routes. You don't need Ziggy anymore. Import the route directly from ",
										/* @__PURE__ */ jsx("code", {
											className: "px-1.5 py-0.5 rounded bg-muted text-foreground",
											children: "@/routes"
										}),
										"."
									]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-7 bg-zinc-950 text-zinc-100 p-6 rounded-2xl shadow-inner border border-zinc-800 font-mono text-xs",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5 pb-3 mb-3 border-b border-zinc-800",
										children: [/* @__PURE__ */ jsx(Code, { className: "w-4 h-4 text-gray-400" }), /* @__PURE__ */ jsx("span", { children: "resources/js/pages/welcome.tsx" })]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-emerald-400",
										children: "import { Link } from '@inertiajs/react';"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-emerald-400",
										children: "import { home } from '../routes';"
									}),
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-400",
										children: "// Rendering in JSX:"
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-gray-300",
										children: [
											"<",
											/* @__PURE__ */ jsx("span", {
												className: "text-blue-400",
												children: "Link"
											}),
											" href={home.url()}>Home</",
											/* @__PURE__ */ jsx("span", {
												className: "text-blue-400",
												children: "Link"
											}),
											">"
										]
									})
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-5",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx("span", {
										className: "flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm",
										children: "3"
									}), /* @__PURE__ */ jsx("h3", {
										className: "text-xl font-bold text-foreground",
										children: "Creating New Pages"
									})]
								}), /* @__PURE__ */ jsxs("p", {
									className: "mt-4 text-sm text-muted-foreground",
									children: [
										"Simply create a new React component file inside ",
										/* @__PURE__ */ jsx("code", {
											className: "px-1.5 py-0.5 rounded bg-muted text-foreground",
											children: "resources/js/pages"
										}),
										" using kebab-case. Then render it using Inertia from your web routes."
									]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-7 bg-zinc-950 text-zinc-100 p-6 rounded-2xl shadow-inner border border-zinc-800 font-mono text-xs",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5 pb-3 mb-3 border-b border-zinc-800",
										children: [/* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4 text-gray-400" }), /* @__PURE__ */ jsx("span", { children: "routes/web.php" })]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-purple-400",
										children: "use Inertia\\Inertia;"
									}),
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-300",
										children: "Route::get('/about', function () {"
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-gray-300",
										children: ["    ", "return Inertia::render('about-page');"]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-300",
										children: "})->name('about');"
									})
								]
							})]
						})
					]
				})]
			})
		]
	})] });
}
//#endregion
export { Welcome as default };
