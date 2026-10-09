import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \Livewire\Features\SupportFileUploads\FileUploadController::handle
 * @see vendor/livewire/livewire/src/Features/SupportFileUploads/FileUploadController.php:27
 * @route '/livewire-e02541a8/upload-file'
 */
export const handle = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handle.url(options),
    method: 'post',
})

handle.definition = {
    methods: ["post"],
    url: '/livewire-e02541a8/upload-file',
} satisfies RouteDefinition<["post"]>

/**
* @see \Livewire\Features\SupportFileUploads\FileUploadController::handle
 * @see vendor/livewire/livewire/src/Features/SupportFileUploads/FileUploadController.php:27
 * @route '/livewire-e02541a8/upload-file'
 */
handle.url = (options?: RouteQueryOptions) => {
    return handle.definition.url + queryParams(options)
}

/**
* @see \Livewire\Features\SupportFileUploads\FileUploadController::handle
 * @see vendor/livewire/livewire/src/Features/SupportFileUploads/FileUploadController.php:27
 * @route '/livewire-e02541a8/upload-file'
 */
handle.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handle.url(options),
    method: 'post',
})
const FileUploadController = { handle }

export default FileUploadController