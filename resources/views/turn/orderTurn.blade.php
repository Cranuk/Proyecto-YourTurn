@extends('layouts.web')

@section('title', 'Listado de turnos')

@section('content-orderTurn')

<div class="container-form-turn">
    <div class="button-box-fw">
        <input type="button" value="Particular" class="buttons-fw button-lightBlue" id="order-particular" data-order="0">
        <input type="button" value="Pami" class="buttons-fw button-lightBlue" id="order-retirees" data-order="1">
        <input type="button" value="Obra social" class="buttons-fw button-lightBlue" id="order-socialWork" data-order="2">
    </div>
</div>

@endsection