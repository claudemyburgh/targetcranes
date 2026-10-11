import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../wayfinder'
/**
* @see \App\Http\Controllers\HomeIndexController::__invoke
 * @see app/Http/Controllers/HomeIndexController.php:13
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeIndexController::__invoke
 * @see app/Http/Controllers/HomeIndexController.php:13
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeIndexController::__invoke
 * @see app/Http/Controllers/HomeIndexController.php:13
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeIndexController::__invoke
 * @see app/Http/Controllers/HomeIndexController.php:13
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AboutUsIndexController::__invoke
 * @see app/Http/Controllers/AboutUsIndexController.php:13
 * @route '/about-us'
 */
export const aboutUs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: aboutUs.url(options),
    method: 'get',
})

aboutUs.definition = {
    methods: ["get","head"],
    url: '/about-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AboutUsIndexController::__invoke
 * @see app/Http/Controllers/AboutUsIndexController.php:13
 * @route '/about-us'
 */
aboutUs.url = (options?: RouteQueryOptions) => {
    return aboutUs.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AboutUsIndexController::__invoke
 * @see app/Http/Controllers/AboutUsIndexController.php:13
 * @route '/about-us'
 */
aboutUs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: aboutUs.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AboutUsIndexController::__invoke
 * @see app/Http/Controllers/AboutUsIndexController.php:13
 * @route '/about-us'
 */
aboutUs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: aboutUs.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SafetyIndexController::__invoke
 * @see app/Http/Controllers/SafetyIndexController.php:14
 * @route '/safety'
 */
export const safety = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: safety.url(options),
    method: 'get',
})

safety.definition = {
    methods: ["get","head"],
    url: '/safety',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SafetyIndexController::__invoke
 * @see app/Http/Controllers/SafetyIndexController.php:14
 * @route '/safety'
 */
safety.url = (options?: RouteQueryOptions) => {
    return safety.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SafetyIndexController::__invoke
 * @see app/Http/Controllers/SafetyIndexController.php:14
 * @route '/safety'
 */
safety.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: safety.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SafetyIndexController::__invoke
 * @see app/Http/Controllers/SafetyIndexController.php:14
 * @route '/safety'
 */
safety.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: safety.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ContactUsIndexController::__invoke
 * @see app/Http/Controllers/ContactUsIndexController.php:13
 * @route '/contact-us'
 */
export const contactUs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contactUs.url(options),
    method: 'get',
})

contactUs.definition = {
    methods: ["get","head"],
    url: '/contact-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContactUsIndexController::__invoke
 * @see app/Http/Controllers/ContactUsIndexController.php:13
 * @route '/contact-us'
 */
contactUs.url = (options?: RouteQueryOptions) => {
    return contactUs.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactUsIndexController::__invoke
 * @see app/Http/Controllers/ContactUsIndexController.php:13
 * @route '/contact-us'
 */
contactUs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contactUs.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContactUsIndexController::__invoke
 * @see app/Http/Controllers/ContactUsIndexController.php:13
 * @route '/contact-us'
 */
contactUs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contactUs.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PrivacyPolicyController::__invoke
 * @see app/Http/Controllers/PrivacyPolicyController.php:14
 * @route '/privacy-policy'
 */
export const privacyPolicy = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacyPolicy.url(options),
    method: 'get',
})

privacyPolicy.definition = {
    methods: ["get","head"],
    url: '/privacy-policy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PrivacyPolicyController::__invoke
 * @see app/Http/Controllers/PrivacyPolicyController.php:14
 * @route '/privacy-policy'
 */
privacyPolicy.url = (options?: RouteQueryOptions) => {
    return privacyPolicy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PrivacyPolicyController::__invoke
 * @see app/Http/Controllers/PrivacyPolicyController.php:14
 * @route '/privacy-policy'
 */
privacyPolicy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacyPolicy.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PrivacyPolicyController::__invoke
 * @see app/Http/Controllers/PrivacyPolicyController.php:14
 * @route '/privacy-policy'
 */
privacyPolicy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: privacyPolicy.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TermsOfServiceController::__invoke
 * @see app/Http/Controllers/TermsOfServiceController.php:14
 * @route '/terms-of-service'
 */
export const termsOfService = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: termsOfService.url(options),
    method: 'get',
})

termsOfService.definition = {
    methods: ["get","head"],
    url: '/terms-of-service',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TermsOfServiceController::__invoke
 * @see app/Http/Controllers/TermsOfServiceController.php:14
 * @route '/terms-of-service'
 */
termsOfService.url = (options?: RouteQueryOptions) => {
    return termsOfService.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TermsOfServiceController::__invoke
 * @see app/Http/Controllers/TermsOfServiceController.php:14
 * @route '/terms-of-service'
 */
termsOfService.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: termsOfService.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TermsOfServiceController::__invoke
 * @see app/Http/Controllers/TermsOfServiceController.php:14
 * @route '/terms-of-service'
 */
termsOfService.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: termsOfService.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SitemapController::__invoke
 * @see app/Http/Controllers/SitemapController.php:13
 * @route '/sitemap.xml'
 */
export const sitemap = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sitemap.url(options),
    method: 'get',
})

sitemap.definition = {
    methods: ["get","head"],
    url: '/sitemap.xml',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SitemapController::__invoke
 * @see app/Http/Controllers/SitemapController.php:13
 * @route '/sitemap.xml'
 */
sitemap.url = (options?: RouteQueryOptions) => {
    return sitemap.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SitemapController::__invoke
 * @see app/Http/Controllers/SitemapController.php:13
 * @route '/sitemap.xml'
 */
sitemap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sitemap.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SitemapController::__invoke
 * @see app/Http/Controllers/SitemapController.php:13
 * @route '/sitemap.xml'
 */
sitemap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sitemap.url(options),
    method: 'head',
})