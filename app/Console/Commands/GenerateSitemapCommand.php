<?php

namespace App\Console\Commands;

use App\Services\SitemapService;
use Illuminate\Console\Command;

class GenerateSitemapCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sitemap:generate {--path= : Custom file path to write sitemap to}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate the sitemap.xml file using Spatie Sitemap';

    /**
     * Execute the console command.
     */
    public function handle(SitemapService $sitemapService): int
    {
        $this->info('Generating sitemap for Target Cranes...');

        $customPath = $this->option('path');
        $path = $sitemapService->writeToFile($customPath ? (string) $customPath : null);

        $this->info("Sitemap successfully generated at: {$path}");

        return Command::SUCCESS;
    }
}
