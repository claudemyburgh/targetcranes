import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PrivacyPolicyController::__invoke
 * @see app/Http/Controllers/PrivacyPolicyController.php:14
 * @route '/privacy-policy'
 */
const PrivacyPolicyController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PrivacyPolicyController.url(options),
    method: 'get',
})

PrivacyPolicyController.definition = {
    methods: ["get","head"],
    url: '/privacy-policy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PrivacyPolicyController::__invoke
 * @see app/Http/Controllers/PrivacyPolicyController.php:14
 * @route '/privacy-policy'
 */
PrivacyPolicyController.url = (options?: RouteQueryOptions) => {
    return PrivacyPolicyController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PrivacyPolicyController::__invoke
 * @see app/Http/Controllers/PrivacyPolicyController.php:14
 * @route '/privacy-policy'
 */
PrivacyPolicyController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PrivacyPolicyController.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PrivacyPolicyController::__invoke
 * @see app/Http/Controllers/PrivacyPolicyController.php:14
 * @route '/privacy-policy'
 */
PrivacyPolicyController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PrivacyPolicyController.url(options),
    method: 'head',
})
export default PrivacyPolicyController