<!-- NOTE: Plantilla predeterminada sobre el diseño de la web-->
<!-- NOTE: layouts.web-->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;900&display=swap">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <link rel="icon" href="{{ asset('Proyectos.png')}}">
        <title>YourTurn - @yield('title')</title>
        @vite([
            'resources/css/app.css',
            'resources/js/app.js',
            ])
    </head>
    <body>
        @include('includes.header')

        <!--NOTE: agregamos el audio para que sea accesible para el resto de las vistas-->
        <audio id="update-turn" src="{{ asset('audio/sonido-turno.mp3')}}" preload="auto"></audio>

        <main>
            @yield('content-main')
            <div class="container-content">
                @yield('content-listTurn')
                @yield('content-callTurn')
                @yield('content-orderTurn')
            </div>
        </main>

        @include('includes.footer')
    </body>
</html>
