<?php

use App\Models\User;

require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

$user = User::first();
dump('Before:', $user->getMedia('avatars')->count());

$user->clearMediaCollection('avatars');

dump('After:', $user->getMedia('avatars')->count());
