<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Target Cranes') }} | Crane Hire &amp; Managed Lifting in South Africa</title>

    <meta name="description"
          content="Target Cranes provides crane hire and planned lifting solutions across South Africa for construction, mining, maritime and renewable energy projects. Enquire about your lift.">
    <link rel="canonical" href="{{ url()->current() }}">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:title"
          content="Crane Hire &amp; Managed Lifting in South Africa | {{ config('app.name', 'Target Cranes') }}">
    <meta property="og:description"
          content="Target Cranes provides crane hire and planned lifting solutions across South Africa for construction, mining, maritime and renewable energy projects. Enquire about your lift.">
    <meta property="og:image" content="{{ asset('images/og-image.webp') }}">
    <meta property="og:site_name" content="{{ config('app.name', 'Target Cranes') }}">
    <meta property="og:locale" content="en_ZA">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title"
          content="Crane Hire &amp; Managed Lifting in South Africa | {{ config('app.name', 'Target Cranes') }}">
    <meta name="twitter:description"
          content="Target Cranes provides crane hire and planned lifting solutions across South Africa for construction, mining, maritime and renewable energy projects. Enquire about your lift.">
    <meta name="twitter:image" content="{{ asset('images/og-image.webp') }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700&display=swap" rel="stylesheet"/>

    <!-- Favicons & Web App Manifest -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2">
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?v=2">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2">
    <link rel="manifest" href="/site.webmanifest?v=2">
    <meta name="theme-color" content="#ffffff">

    <!-- Scripts -->
    @inertiaHead
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
</head>
<body class="font-sans antialiased text-gray-900 bg-gray-50 dark:bg-zinc-950 dark:text-gray-100">
@inertia
</body>
</html>
