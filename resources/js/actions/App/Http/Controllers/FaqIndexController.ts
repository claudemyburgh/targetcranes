import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\FaqIndexController::__invoke
 * @see app/Http/Controllers/FaqIndexController.php:15
 * @route '/faq'
 */
const FaqIndexController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FaqIndexController.url(options),
    method: 'get',
})

FaqIndexController.definition = {
    methods: ["get","head"],
    url: '/faq',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FaqIndexController::__invoke
 * @see app/Http/Controllers/FaqIndexController.php:15
 * @route '/faq'
 */
FaqIndexController.url = (options?: RouteQueryOptions) => {
    return FaqIndexController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FaqIndexController::__invoke
 * @see app/Http/Controllers/FaqIndexController.php:15
 * @route '/faq'
 */
FaqIndexController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FaqIndexController.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\FaqIndexController::__invoke
 * @see app/Http/Controllers/FaqIndexController.php:15
 * @route '/faq'
 */
FaqIndexController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: FaqIndexController.url(options),
    method: 'head',
})
export default FaqIndexController