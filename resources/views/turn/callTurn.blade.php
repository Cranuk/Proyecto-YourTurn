@extends('layouts.web')

@section('title', 'Listado de turnos')

@section('content-callTurn')

<div class="container-form-turn">
    <div class="button-box-fw">
        <input type="button" value="Siguiente turno" class="buttons-fw button-lightBlue" id="button-callturn">
        <input type="button" value="limpiar turnos" class="buttons-fw button-red" id="clean">
    </div>
    <div class="container-turn-info">
        <div class="menu-list">
            <div class="card-turn">
                Turno atendido:
                <hr>
                <b id="turn-actual"></b>
            </div>
            <div class="card-turn">
                Siguiente turno:
                <hr>
                <b id="turn-next"></b>
            </div>
        </div>
    </div>
</div>

@endsection