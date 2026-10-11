import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AboutUsIndexController::__invoke
 * @see app/Http/Controllers/AboutUsIndexController.php:13
 * @route '/about-us'
 */
const AboutUsIndexController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AboutUsIndexController.url(options),
    method: 'get',
})

AboutUsIndexController.definition = {
    methods: ["get","head"],
    url: '/about-us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AboutUsIndexController::__invoke
 * @see app/Http/Controllers/AboutUsIndexController.php:13
 * @route '/about-us'
 */
AboutUsIndexController.url = (options?: RouteQueryOptions) => {
    return AboutUsIndexController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AboutUsIndexController::__invoke
 * @see app/Http/Controllers/AboutUsIndexController.php:13
 * @route '/about-us'
 */
AboutUsIndexController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AboutUsIndexController.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AboutUsIndexController::__invoke
 * @see app/Http/Controllers/AboutUsIndexController.php:13
 * @route '/about-us'
 */
AboutUsIndexController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: AboutUsIndexController.url(options),
    method: 'head',
})
export default AboutUsIndexController