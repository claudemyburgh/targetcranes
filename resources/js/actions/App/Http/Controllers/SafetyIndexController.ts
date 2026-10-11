import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SafetyIndexController::__invoke
 * @see app/Http/Controllers/SafetyIndexController.php:14
 * @route '/safety'
 */
const SafetyIndexController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SafetyIndexController.url(options),
    method: 'get',
})

SafetyIndexController.definition = {
    methods: ["get","head"],
    url: '/safety',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SafetyIndexController::__invoke
 * @see app/Http/Controllers/SafetyIndexController.php:14
 * @route '/safety'
 */
SafetyIndexController.url = (options?: RouteQueryOptions) => {
    return SafetyIndexController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SafetyIndexController::__invoke
 * @see app/Http/Controllers/SafetyIndexController.php:14
 * @route '/safety'
 */
SafetyIndexController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SafetyIndexController.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SafetyIndexController::__invoke
 * @see app/Http/Controllers/SafetyIndexController.php:14
 * @route '/safety'
 */
SafetyIndexController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SafetyIndexController.url(options),
    method: 'head',
})
export default SafetyIndexController