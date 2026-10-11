import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ContactUsStoreController::__invoke
 * @see app/Http/Controllers/ContactUsStoreController.php:16
 * @route '/contact-us'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/contact-us',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContactUsStoreController::__invoke
 * @see app/Http/Controllers/ContactUsStoreController.php:16
 * @route '/contact-us'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactUsStoreController::__invoke
 * @see app/Http/Controllers/ContactUsStoreController.php:16
 * @route '/contact-us'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})
const contactUs = {
    store: Object.assign(store, store),
}

export default contactUs