
## Compile multiple tailwind css from different tailwind.config.js files using laravel-vite
#### updated to laravel 10 and fixed bugs:

If do you want to compile two or more tailwind css from different tailwind.config.js files, then you will have to follow this guide.

#### SCENARIO:
I want to create two or more **tailwind.config.js** files for different roles e.g. (1) admin dashboard (2) client dashboard.

How can I do it with laravel-vite, because it is new tool for asset bundling but I am familiar with laravel mix package?


Yes, it is possible to compile tailwind css from different tailwind.config.js.


just follow these steps with me to implement this in laravel project.

let's start!!!

### STEP 1:
install fresh laravel with jetstream 

### STEP 2:
open (app\Providers\AppServiceProvider.php) file and add following code in [ public function boot() ] method
```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        \Illuminate\Support\Facades\Blade::anonymousComponentNamespace('client-dashboard.components', 'client');
        \Illuminate\Support\Facades\Blade::anonymousComponentNamespace('admin-dashboard.components', 'admin');
    }
}

```

### STEP 3:
Create two files of **vite.config.js**. One for admin and second for client

#### file 1: vite-admin-dashboard.config.js
```javascript
import { defineConfig } from 'vite';
import laravel, { refreshPaths } from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/admin-dashboard/css/app.css',
                'resources/admin-dashboard/js/app.js',
            ],
            refresh: [
                ...refreshPaths,
            ],
            buildDirectory: '/admin-dashboard',
        }),
    ],
});

```
#### file 2: vite-client-dashboard.config.js
```javascript
import { defineConfig } from 'vite';
import laravel, { refreshPaths } from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/client-dashboard/css/app.css',
                'resources/client-dashboard/js/app.js',
            ],
            refresh: [
                ...refreshPaths,
            ],
            buildDirectory: '/client-dashboard',
        }),
    ],
});

```
### STEP 4: 
Create two **tailwind.config.js** files, One for admin and second for client.

#### file 1: tailwind-admin-dashboard.config.js
```javascript

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/views/admin-dashboard/**/*.blade.php",
    ],

    theme: {
        extend: { },
    },

    plugins: [],
};

  ```
#### file 2: tailwind-client-dashboard.config.js
```javascript

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/views/client-dashboard/**/*.blade.php",
    ],

    theme: {
        extend: { },
    },

    plugins: [],
};

  ```
### STEP 5:
Now open **package.json** and add follwoing scripts
```json
"scripts": {
        "dev": "vite",
        "build": "vite build",
        "dev:admin": "vite --config vite-admin-dashboard.config.js",
        "build:admin": "vite build --config vite-admin-dashboard.config.js",
        "dev:client": "vite --config vite-client-dashboard.config.js",
        "build:client": "vite build --config vite-client-dashboard.config.js"
    },
```
### STEP 6:
Open **/routes/web.php** file and create follwoing two routes
```php
Route::get('/admin-dashboard1', function () {
    return view('admin-dashboard.index');
});
Route::get('/client-dashboard1', function () {
    return view('client-dashboard.index');
});
```
### STEP 7:
Create OR add following **blade.php** files with folders
```bash
for admin:
    1) resources\views\admin-dashboard\index.blade.php
    2)resources\views\admin-dashboard\components\layouts\app.blade.php
    3)resources\views\admin-dashboard\components\common\button.blade.php

for client:
    1) resources\views\client-dashboard\index.blade.php
    2)resources\views\client-dashboard\components\layouts\app.blade.php
    3)resources\views\client-dashboard\components\common\button.blade.php
```

### STEP 8:
Create OR add following **resources** files with folders
```bash
for admin:
    1) resources\admin-dashboard\css\app.css
    2) resources\admin-dashboard\js\app.js
    3) resources\admin-dashboard\js\bootstrap.js [note: laravel default bootstrap.js file just copy past]

for client:
    1) resources\client-dashboard\css\app.css
    2) resources\client-dashboard\js\app.js
    3) resources\client-dashboard\js\bootstrap.js [note: laravel default bootstrap.js file just copy past]
```

### STEP 9:
so we have setup a demo laravel app, just run follwoing **command in terminal** and run your project.
```bash
for admin:
   npm run build:admin
   npm run dev:admin

for client:
   npm run build:client
   npm run dev:client

```

## License

The software licensed under the [MIT license](https://opensource.org/licenses/MIT).
