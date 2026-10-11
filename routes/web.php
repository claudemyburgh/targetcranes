<?php

use App\Http\Controllers\AboutUsIndexController;
use App\Http\Controllers\ContactUsIndexController;
use App\Http\Controllers\ContactUsStoreController;
use App\Http\Controllers\HomeIndexController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeIndexController::class)->name('home');
Route::get('/about-us', AboutUsIndexController::class)->name('about-us');
Route::get('/contact-us', ContactUsIndexController::class)->name('contact-us');
Route::post('/contact-us', ContactUsStoreController::class)->name('contact-us.store');
