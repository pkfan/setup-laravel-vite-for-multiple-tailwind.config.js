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
