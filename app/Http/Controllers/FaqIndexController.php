<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class FaqIndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): Response
    {
        $faqs = Faq::query()
            ->published()
            ->ordered()
            ->get(['id', 'question', 'answer', 'sort_order']);

        return Inertia::render('faq', [
            'faqs' => $faqs,
        ]);
    }
}
