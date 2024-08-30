<?php

namespace App\Http\Controllers;

class TurnController extends Controller
{
    // ANCHOR: Aqui tendra los metodos encargados de controlar los turnos

    public function index(){
        return view('turn.listTurn');
    }

    public function call(){
        return view('turn.callTurn');
    }

    public function order(){
        return view('turn.orderTurn');
    }
}
