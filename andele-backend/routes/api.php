<?php

use App\Http\Controllers\EpisodeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
*/

Route::get('/episodes/{page}', [EpisodeController::class, 'index']);
Route::get('/episode/{id}', [EpisodeController::class, 'show']);