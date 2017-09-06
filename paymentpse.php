<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Carnes Market</title>
        <link rel="shortcut icon" href="http://carnesmarket.co/favicon.png">
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1" />
        <link rel="stylesheet" type="text/css" href="http://carnesmarket.co/css/pse.css" />
        <script src="http://carnesmarket.co/inc/jquery.js"></script>
        <script>
            var url_pse = null;
            <?php
            if (isset($_GET['id'])) {
            ?>
            url_pse = "<?php echo $_GET['id']; ?>";
            <?php
            }
            ?>
        </script>
    </head>
    <body>
        <div id="container">
            <div id="logo"><img src="images/login_logo.png"></div>
            <div id="status">Recibiendo...</div>
            <div id="datos"></div>
            <div id="datos_fijos">
                CONCEPTOS FRESCOS SAS<br>
                Nit. 900954095-8<br>
                Si tienes alguna duda puedes comunicarte al 315 8248462
            </div>
            <div id="print">
                <a class="app_button_red_full btn_30" id="btn_print" onclick="window.print();"><span class="btn_1_red"><span class="btn_2_red_30">IMPRIMIR</span></span></a>
                <a class="app_button_red_full btn_30" href="index.php"><span class="btn_1_red"><span class="btn_2_red_30">VOLVER</span></span></a>
            </div>
        </div>
        <script type="text/javascript" src="http://carnesmarket.co/js/pse.js"></script>
        <script type="text/javascript">
            app.initialize();
        </script>
    </body>
</html>