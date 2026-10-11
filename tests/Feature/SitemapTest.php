<?php

use Illuminate\Support\Facades\File;

test('sitemap route returns xml with all expected production URLs', function () {
    $response = $this->get('/sitemap.xml');

    $response->assertStatus(200);
    $response->assertHeader('Content-Type', 'text/xml; charset=UTF-8');

    $content = $response->getContent();

    expect($content)->toContain('<urlset')
        ->toContain('https://targetcranes.co.za/')
        ->toContain('https://targetcranes.co.za/about-us')
        ->toContain('https://targetcranes.co.za/contact-us')
        ->toContain('https://targetcranes.co.za/privacy-policy')
        ->toContain('https://targetcranes.co.za/terms-of-service')
        ->not->toContain('.test');
});

test('sitemap generate artisan command creates a valid sitemap file', function () {
    $testPath = storage_path('app/temp-sitemap.xml');

    if (File::exists($testPath)) {
        File::delete($testPath);
    }

    $this->artisan('sitemap:generate', ['--path' => $testPath])
        ->expectsOutputToContain('Sitemap successfully generated at:')
        ->assertSuccessful();

    expect(File::exists($testPath))->toBeTrue();

    $content = File::get($testPath);
    expect($content)->toContain('<urlset')
        ->toContain('https://targetcranes.co.za/')
        ->toContain('https://targetcranes.co.za/about-us')
        ->toContain('https://targetcranes.co.za/contact-us')
        ->toContain('https://targetcranes.co.za/privacy-policy')
        ->toContain('https://targetcranes.co.za/terms-of-service');

    File::delete($testPath);
});

test('robots txt references the production sitemap', function () {
    $robotsPath = public_path('robots.txt');

    expect(File::exists($robotsPath))->toBeTrue();

    $content = File::get($robotsPath);
    expect($content)->toContain('Sitemap: https://targetcranes.co.za/sitemap.xml');
});
