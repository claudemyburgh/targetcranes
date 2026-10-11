<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Target Cranes') }} | Crane Hire &amp; Managed Lifting in South Africa</title>

        <meta name="description" content="Target Cranes provides crane hire and planned lifting solutions across South Africa for construction, mining, maritime and renewable energy projects. Enquire about your lift.">
        <link rel="canonical" href="{{ url()->current() }}">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:title" content="Crane Hire &amp; Managed Lifting in South Africa | {{ config('app.name', 'Target Cranes') }}">
        <meta property="og:description" content="Target Cranes provides crane hire and planned lifting solutions across South Africa for construction, mining, maritime and renewable energy projects. Enquire about your lift.">
        <meta property="og:image" content="{{ asset('images/og-image.webp') }}">
        <meta property="og:site_name" content="{{ config('app.name', 'Target Cranes') }}">
        <meta property="og:locale" content="en_ZA">

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Crane Hire &amp; Managed Lifting in South Africa | {{ config('app.name', 'Target Cranes') }}">
        <meta name="twitter:description" content="Target Cranes provides crane hire and planned lifting solutions across South Africa for construction, mining, maritime and renewable energy projects. Enquire about your lift.">
        <meta name="twitter:image" content="{{ asset('images/og-image.webp') }}">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @inertiaHead
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    </head>
    <body class="font-sans antialiased text-gray-900 bg-gray-50 dark:bg-zinc-950 dark:text-gray-100">
        @inertia
    </body>
</html>
