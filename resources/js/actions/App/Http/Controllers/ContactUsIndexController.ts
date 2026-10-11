import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ContactUsIndexController::__invoke
 * @see app/Http/Controllers/ContactUsIndexController.php:13
 * @route '/contact-us'
 */
const ContactUsIndexController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ContactUsIndexController.url(options),
    method: 'get',
})

ContactUsIndexController.definition = {
    methods: ["get","head"],
    url: '/contact-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContactUsIndexController::__invoke
 * @see app/Http/Controllers/ContactUsIndexController.php:13
 * @route '/contact-us'
 */
ContactUsIndexController.url = (options?: RouteQueryOptions) => {
    return ContactUsIndexController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactUsIndexController::__invoke
 * @see app/Http/Controllers/ContactUsIndexController.php:13
 * @route '/contact-us'
 */
ContactUsIndexController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ContactUsIndexController.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContactUsIndexController::__invoke
 * @see app/Http/Controllers/ContactUsIndexController.php:13
 * @route '/contact-us'
 */
ContactUsIndexController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ContactUsIndexController.url(options),
    method: 'head',
})
export default ContactUsIndexController