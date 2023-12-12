<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    {{ Vite::useBuildDirectory('/client-dashboard') }}
    <!-- Scripts -->
    @vite(['resources/client-dashboard/css/app.css', 'resources/client-dashboard/js/app.js'])

</head>

<body>
    {{ $slot }}
</body>

</html>
