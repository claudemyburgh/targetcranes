<?php

namespace App\Services;

use Carbon\Carbon;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class SitemapService
{
    /**
     * Build the sitemap with all public application pages.
     */
    public function build(): Sitemap
    {
        $baseUrl = rtrim((string) config('app.production_url', 'https://targetcranes.co.za'), '/');

        return Sitemap::create()
            ->add(
                Url::create("{$baseUrl}/")
                    ->setLastModificationDate(Carbon::now())
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                    ->setPriority(1.0)
            )
            ->add(
                Url::create("{$baseUrl}/about-us")
                    ->setLastModificationDate(Carbon::now())
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                    ->setPriority(0.8)
            )
            ->add(
                Url::create("{$baseUrl}/contact-us")
                    ->setLastModificationDate(Carbon::now())
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                    ->setPriority(0.9)
            )
            ->add(
                Url::create("{$baseUrl}/privacy-policy")
                    ->setLastModificationDate(Carbon::now())
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_YEARLY)
                    ->setPriority(0.3)
            )
            ->add(
                Url::create("{$baseUrl}/terms-of-service")
                    ->setLastModificationDate(Carbon::now())
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_YEARLY)
                    ->setPriority(0.3)
            );
    }

    /**
     * Generate and write the sitemap XML to disk.
     */
    public function writeToFile(?string $path = null): string
    {
        $targetPath = $path ?? public_path('sitemap.xml');

        $this->build()->writeToFile($targetPath);

        return $targetPath;
    }
}
