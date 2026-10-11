<?php

use Inertia\Testing\AssertableInertia as Assert;

test('safety page can be rendered', function () {
    $response = $this->get('/safety');

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page->component('safety'));
});
