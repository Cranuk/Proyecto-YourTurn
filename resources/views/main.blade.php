@extends('layouts.web')

@section('title', 'Pagina de inicio')

@section('content-main')
    <h3>Bienvenidos al turnador</h3>
    <a href="{{route("turnOrder")}}">Pedir turno</a>
    <a href="{{route("turnCall")}}">Llamar turno</a>
    <a href="{{route("turnList")}}">Lista de turno</a>
@endsection