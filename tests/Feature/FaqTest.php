<?php

use App\Filament\Resources\Faqs\FaqResource;
use App\Models\Faq;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

test('faq page can be rendered', function () {
    $this->get(route('faq'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('faq'));
});

test('faq page passes published faqs in correct sort order', function () {
    $faq3 = Faq::factory()->create([
        'question' => 'Question 3',
        'sort_order' => 30,
        'is_published' => true,
    ]);

    $faq1 = Faq::factory()->create([
        'question' => 'Question 1',
        'sort_order' => 10,
        'is_published' => true,
    ]);

    $faq2 = Faq::factory()->create([
        'question' => 'Question 2',
        'sort_order' => 20,
        'is_published' => true,
    ]);

    $unpublishedFaq = Faq::factory()->unpublished()->create([
        'question' => 'Unpublished Question',
        'sort_order' => 5,
    ]);

    $this->get(route('faq'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('faq')
            ->has('faqs', 3)
            ->where('faqs.0.id', $faq1->id)
            ->where('faqs.1.id', $faq2->id)
            ->where('faqs.2.id', $faq3->id)
        );
});

test('authenticated user can view filament faq resource', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(FaqResource::getUrl('index'))
        ->assertOk();
});
