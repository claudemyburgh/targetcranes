<?php

namespace App\Http\Controllers;

use App\Services\SitemapService;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    /**
     * Render the sitemap.xml dynamically.
     */
    public function __invoke(SitemapService $sitemapService): Response
    {
        return response($sitemapService->build()->render(), 200, [
            'Content-Type' => 'text/xml',
        ]);
    }
}
