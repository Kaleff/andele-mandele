<?php

use App\Http\Controllers\CharacterController;
use App\Http\Controllers\EpisodeController;
use App\Http\Controllers\LocationController;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
*/

Route::get('/episodes/{page}', [EpisodeController::class, 'index']);
Route::get('/episode/{id}', [EpisodeController::class, 'show']);
Route::get('/locations/{page}', [LocationController::class, 'index']);
Route::get('/characters/{page}', [CharacterController::class, 'index']);
Route::get('/character/{id}', [CharacterController::class, 'show']);