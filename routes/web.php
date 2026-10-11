<?php

use App\Http\Controllers\AboutUsIndexController;
use App\Http\Controllers\ContactUsIndexController;
use App\Http\Controllers\ContactUsStoreController;
use App\Http\Controllers\HomeIndexController;
use App\Http\Controllers\PrivacyPolicyController;
use App\Http\Controllers\SafetyIndexController;
use App\Http\Controllers\SitemapController;
use App\Http\Controllers\TermsOfServiceController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeIndexController::class)->name('home');
Route::get('/about-us', AboutUsIndexController::class)->name('about-us');
Route::get('/safety', SafetyIndexController::class)->name('safety');
Route::get('/contact-us', ContactUsIndexController::class)->name('contact-us');
Route::post('/contact-us', ContactUsStoreController::class)->name('contact-us.store');
Route::get('/privacy-policy', PrivacyPolicyController::class)->name('privacy-policy');
Route::get('/terms-of-service', TermsOfServiceController::class)->name('terms-of-service');
Route::get('/sitemap.xml', SitemapController::class)->name('sitemap');
