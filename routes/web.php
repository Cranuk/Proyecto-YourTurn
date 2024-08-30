<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\turnController;
use Illuminate\Support\Facades\Route;

Route::get('/', [Controller::class, 'index'])->name('index');

//NOTE: Rutas de turnos
Route::get('/turn/index', [TurnController::class, 'index'])->name('turnList');
Route::get('/turn/call', [TurnController::class, 'call'])->name('turnCall');
Route::get('/turn/order', [TurnController::class, 'order'])->name('turnOrder');
