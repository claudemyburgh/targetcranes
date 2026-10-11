import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ContactUsStoreController::__invoke
 * @see app/Http/Controllers/ContactUsStoreController.php:16
 * @route '/contact-us'
 */
const ContactUsStoreController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ContactUsStoreController.url(options),
    method: 'post',
})

ContactUsStoreController.definition = {
    methods: ["post"],
    url: '/contact-us',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContactUsStoreController::__invoke
 * @see app/Http/Controllers/ContactUsStoreController.php:16
 * @route '/contact-us'
 */
ContactUsStoreController.url = (options?: RouteQueryOptions) => {
    return ContactUsStoreController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactUsStoreController::__invoke
 * @see app/Http/Controllers/ContactUsStoreController.php:16
 * @route '/contact-us'
 */
ContactUsStoreController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ContactUsStoreController.url(options),
    method: 'post',
})
export default ContactUsStoreController