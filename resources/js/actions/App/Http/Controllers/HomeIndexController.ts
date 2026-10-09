import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\HomeIndexController::__invoke
 * @see app/Http/Controllers/HomeIndexController.php:13
 * @route '/'
 */
const HomeIndexController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: HomeIndexController.url(options),
    method: 'get',
})

HomeIndexController.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeIndexController::__invoke
 * @see app/Http/Controllers/HomeIndexController.php:13
 * @route '/'
 */
HomeIndexController.url = (options?: RouteQueryOptions) => {
    return HomeIndexController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeIndexController::__invoke
 * @see app/Http/Controllers/HomeIndexController.php:13
 * @route '/'
 */
HomeIndexController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: HomeIndexController.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeIndexController::__invoke
 * @see app/Http/Controllers/HomeIndexController.php:13
 * @route '/'
 */
HomeIndexController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: HomeIndexController.url(options),
    method: 'head',
})
export default HomeIndexController