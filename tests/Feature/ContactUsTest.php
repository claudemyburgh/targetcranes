<?php

use App\Mail\ContactFormConfirmationMail;
use App\Mail\ContactFormSubmittedMail;
use Illuminate\Support\Facades\Mail;

test('contact us page renders successfully', function () {
    $response = $this->get(route('contact-us'));

    $response->assertOk();
});

test('contact us form validates required fields', function () {
    $response = $this->post(route('contact-us.store'), []);

    $response->assertSessionHasErrors(['name', 'email', 'subject', 'message']);
});

test('contact us form sends email to website owner and confirmation to sender', function () {
    Mail::fake();

    $formData = [
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'phone' => '082 123 4567',
        'subject' => 'Mobile Crane Hire Inquiry',
        'message' => 'We need a 50t mobile crane for 3 days starting next week in Bellville.',
    ];

    $response = $this->post(route('contact-us.store'), $formData);

    $response->assertSessionHas('success');
    $response->assertRedirect();

    // Verify email sent to website owner
    Mail::assertSent(ContactFormSubmittedMail::class, function (ContactFormSubmittedMail $mail) use ($formData) {
        return $mail->hasTo('enquiries@targetcranes.co.za') &&
            $mail->data['name'] === $formData['name'] &&
            $mail->data['email'] === $formData['email'] &&
            $mail->data['phone'] === $formData['phone'] &&
            $mail->data['subject'] === $formData['subject'] &&
            $mail->data['message'] === $formData['message'];
    });

    // Verify confirmation email sent to the sender
    Mail::assertSent(ContactFormConfirmationMail::class, function (ContactFormConfirmationMail $mail) use ($formData) {
        return $mail->hasTo($formData['email']) &&
            $mail->data['name'] === $formData['name'] &&
            $mail->data['subject'] === $formData['subject'];
    });
});
