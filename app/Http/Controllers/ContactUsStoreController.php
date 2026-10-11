<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactUsStoreRequest;
use App\Mail\ContactFormConfirmationMail;
use App\Mail\ContactFormSubmittedMail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;

class ContactUsStoreController extends Controller
{
    /**
     * Handle the incoming contact form request.
     */
    public function __invoke(ContactUsStoreRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        // Send email with form data to the website owner
        Mail::to('enquiries@targetcranes.co.za')->send(new ContactFormSubmittedMail($validated));

        // Send confirmation email to the person who submitted the message
        Mail::to($validated['email'])->send(new ContactFormConfirmationMail($validated));

        return back()->with('success', 'Thank you for getting in touch! We have received your message and will get back to you as soon as possible.');
    }
}
