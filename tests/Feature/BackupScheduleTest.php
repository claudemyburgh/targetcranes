<?php

use Illuminate\Console\Scheduling\Schedule;

test('backup commands are scheduled in the application schedule', function () {
    $schedule = app()->make(Schedule::class);
    $events = collect($schedule->events());

    $commands = $events->map(fn ($event) => $event->command);

    $hasBackupClean = $commands->contains(fn ($cmd) => is_string($cmd) && str_contains($cmd, 'backup:clean'));
    $hasBackupRun = $commands->contains(fn ($cmd) => is_string($cmd) && str_contains($cmd, 'backup:run'));
    $hasBackupMonitor = $commands->contains(fn ($cmd) => is_string($cmd) && str_contains($cmd, 'backup:monitor'));

    expect($hasBackupClean)->toBeTrue()
        ->and($hasBackupRun)->toBeTrue()
        ->and($hasBackupMonitor)->toBeTrue();
});

test('backup configuration contains expected database and exclude paths', function () {
    $config = config('backup.backup');

    expect($config)->not->toBeNull()
        ->and($config['source']['files']['exclude'])->toContain(base_path('.git'))
        ->and($config['source']['files']['exclude'])->toContain(base_path('vendor'))
        ->and($config['source']['files']['exclude'])->toContain(base_path('node_modules'))
        ->and($config['destination']['disks'])->toContain('local');
});
