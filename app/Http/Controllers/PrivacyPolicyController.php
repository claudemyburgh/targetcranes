<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PrivacyPolicyController extends Controller
{
    /**
     * Display the Privacy Policy page.
     */
    public function __invoke(Request $request): Response
    {
        return Inertia::render('privacy-policy');
    }
}
