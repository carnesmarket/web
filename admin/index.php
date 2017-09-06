<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Carnes Market - Administrador</title>
        <link rel="shortcut icon" href="http://carnesmarket.co/favicon.png">
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1" />
        <link rel="stylesheet" type="text/css" href="inc/jquery.mobile-1.4.5/jquery.mobile.custom.structure.min.css" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <script src="inc/jquery.js"></script>
        <script src="inc/jquery.mobile-1.4.5/jquery.mobile.custom.min.js"></script>
    </head>
    <body>
        <div class="app">
            
            <!-- LOADING -->
            <div id="loading">
                <div id="loading_gif"></div>
            </div>
            
            <!-- LOADING -->
            <div id="alert">
                <div id="alert_msg">
                    <div id="alert_title"></div>
                    <div id="alert_text"></div>
                    <div id="alert_buttons">
                        
                    </div>
                </div>
            </div>
            
            <!-- PAGE LOGIN -->
            <div data-role="page" id="page_login">
                <div class="page_content">
                    <div class="page_content_960">
                        <div id="login_logo"></div>
                        <div id="login_form">
                            <div class="input_container_login">
                                <input class="admin_input" type="text" id="login_user" placeholder="Usuario">
                            </div>
                            <div class="input_container_login">
                                <input class="admin_input" type="password" id="login_pass" placeholder="Contraseña">
                            </div>
                            <div class="input_container_login">
                                <a class="app_button_red" id="btn_login_home" href="#page_login" data-transition="none"><span class="btn_1_red"><span class="btn_2_red_30">INICIAR SESIÓN</span></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <script type="text/javascript" src="js/admin.js"></script>
        <script type="text/javascript">
            app.initialize();
        </script>
    </body>
</html>