import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TermsOfServiceController::__invoke
 * @see app/Http/Controllers/TermsOfServiceController.php:14
 * @route '/terms-of-service'
 */
const TermsOfServiceController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TermsOfServiceController.url(options),
    method: 'get',
})

TermsOfServiceController.definition = {
    methods: ["get","head"],
    url: '/terms-of-service',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TermsOfServiceController::__invoke
 * @see app/Http/Controllers/TermsOfServiceController.php:14
 * @route '/terms-of-service'
 */
TermsOfServiceController.url = (options?: RouteQueryOptions) => {
    return TermsOfServiceController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TermsOfServiceController::__invoke
 * @see app/Http/Controllers/TermsOfServiceController.php:14
 * @route '/terms-of-service'
 */
TermsOfServiceController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TermsOfServiceController.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TermsOfServiceController::__invoke
 * @see app/Http/Controllers/TermsOfServiceController.php:14
 * @route '/terms-of-service'
 */
TermsOfServiceController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: TermsOfServiceController.url(options),
    method: 'head',
})
export default TermsOfServiceController