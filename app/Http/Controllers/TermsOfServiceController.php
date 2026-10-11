<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TermsOfServiceController extends Controller
{
    /**
     * Display the Terms of Service page.
     */
    public function __invoke(Request $request): Response
    {
        return Inertia::render('terms-of-service');
    }
}
