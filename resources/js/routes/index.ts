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