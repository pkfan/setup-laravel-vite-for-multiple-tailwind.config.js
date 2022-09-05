<!DOCTYPE html>
<html lang="en">
<head>
    {{
        Vite::useBuildDirectory('/frontendAssets')
    }}
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @vite('resources/frontend/frontend-tailwind.css')

</head>
<body>
    <div style="width:50%; margin:100px auto">
        <h1>FrontEnd Interface</h1>
        <button class="backend" style="padding: 10px; font-size:30px">
            red button for backend
        </button>
    </div>
</body>
</html>
