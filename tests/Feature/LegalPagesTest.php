<?php

use Inertia\Testing\AssertableInertia as Assert;

test('privacy policy page can be rendered', function () {
    $this->get(route('privacy-policy'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('privacy-policy'));
});

test('terms of service page can be rendered', function () {
    $this->get(route('terms-of-service'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('terms-of-service'));
});
