<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SalariesController;

Route::view('/','welcome');

Route::get('salaries/report', [SalariesController::class, 'report'])
  ->middleware('auth')
  ->name('salaries.report');
Route::resource('salaries', SalariesController::class)
  ->middleware('auth');

//Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
//  return Inertia\Inertia::render('Dashboard');
//})->name('dashboard');
