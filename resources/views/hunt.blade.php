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
        <div class="container-fluid navbar">
            <div class="d-flex col-6 justify-content-start">
                <div class="p-0 brand-link" ><a href="#" class="brand-link">dofus-hunt</a></div>
            </div>
            <div class="d-flex col-6 justify-content-end">
                <div class="p-0 first-link"><a href="#">Hunt</a></div>
                <div class="p-0 other-link"><a href="#soon">Nos thèmes</a></div>
            </div>   
        </div> 
        <div class="hunt-app" id="app-hunt">
            <div class="hunt-title"><h1>Chasse au trésor</h1></div>
            <div class="hunt-link">
                <a href="http://www.twitter.com/Smoyzi" class="hunt-icon" target='blank'>
                    <i class="fab fa-twitter-square"></i>
                </a>
                <a href="https://github.com/Smoyz/themes" class="hunt-icon" target='blank'>
                    <i class="fab fa-github-square"></i>
                </a>
                <a href="#" class="hunt-icon">
                    <i class="fab fa-discord"></i>
                </a>
            </div>
            <hr/>
            <div id="hunt" class="dark-hunt-app"></div>
        </div>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>