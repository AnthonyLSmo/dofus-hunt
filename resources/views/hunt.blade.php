<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, maximum-scale=1 width=device-width, user-scalable=yes"/> 
        <meta name="description"
              content="Un outil moderne et rapide pour vous permettre de trouver vos indices de chasses aux trésors et portails"
        />
        <title>Dofus - Outil de chasse aux trésors</title>
        <link rel="icon" type="image/png" href="img/logo.png" />
        <link rel="stylesheet" type="text/css" href="{{ mix('css/app.css') }}"/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K7SJYXCBM4"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-K7SJYXCBM4');
        </script>
        <script src="https://kit.fontawesome.com/59eb2a0927.js" crossorigin="anonymous"></script>
    </head>
    <body class="dark-app">
        <div id="app-bar"></div>
        <div id="app-title"></div>
        <div class="hunt-app" id="app-hunt">
            <div id="hunt" class="dark-hunt-app"></div>
        </div>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>