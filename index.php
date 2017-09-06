<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Carnes Market</title>
        <link rel="shortcut icon" href="http://carnesmarket.co/favicon.png">
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1" />
        <link rel="stylesheet" type="text/css" href="http://carnesmarket.co/inc/jquery.mobile-1.4.5/jquery.mobile.custom.structure.min.css" />
        <link rel="stylesheet" type="text/css" href="http://carnesmarket.co/inc/jquery-ui/jquery-ui.min.css" />
        <link rel="stylesheet" type="text/css" href="http://carnesmarket.co/inc/jquery-ui/jquery-ui.structure.min.css" />
        <link rel="stylesheet" type="text/css" href="http://carnesmarket.co/inc/jquery-ui/jquery-ui.theme.min.css" />
        <link rel="stylesheet" type="text/css" href="http://carnesmarket.co/css/style.css" />
        <link rel="stylesheet" type="text/css" href="http://carnesmarket.co/css/responsive.css" />
        <script src="http://carnesmarket.co/inc/jquery.js"></script>
        <script src="http://carnesmarket.co/inc/jquery-ui/jquery-ui.min.js"></script>
        <script>
            $(document).bind("mobileinit", function(){
                $.mobile.changePage.defaults.changeHash = false;
            });
        </script>
        <script src="http://carnesmarket.co/inc/jquery.mobile-1.4.5/jquery.mobile.custom.min.js"></script>
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async='async'></script>
        <script>
            var url_tipo = null;
            var url_categoria = null;
            var url_marca = null;
            var url_producto = null;
            var url_pse = null;
            <?php
            if (isset($_GET['pseid'])) {
            ?>
            url_pse = "<?php echo $_GET['pseid']; ?>";
            <?php
            }
            ?>
            <?php
            if (isset($_GET['tipo'])) {
            ?>
            url_tipo = "<?php echo $_GET['tipo']; ?>";
            <?php
            }
            ?>
            <?php
            if (isset($_GET['categoria'])) {
            ?>
            url_categoria = "<?php echo $_GET['categoria']; ?>";
            <?php
            }
            ?>
            <?php 
            if (isset($_GET['marca'])) {
            ?>
            url_marca = "<?php echo $_GET['marca']; ?>";
            <?php
            }
            ?>
            <?php
            if (isset($_GET['producto'])) {
            ?>
            url_producto = "<?php echo $_GET['producto']; ?>";
            <?php
            }
            ?>
        </script>
        <!-- Start of carnesmarket Zendesk Widget script -->
        <script>/*<![CDATA[*/window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src="javascript:false",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="display: none",d=document.getElementsByTagName("script"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(e){n=document.domain,r.src='javascript:var d=document.open();d.domain="'+n+'";void(0);',o=s}o.open()._l=function(){var o=this.createElement("script");n&&(this.domain=n),o.id="js-iframe-async",o.src=e,this.t=+new Date,this.zendeskHost=t,this.zEQueue=a,this.body.appendChild(o)},o.write('<body onload="document._l();">'),o.close()}("https://assets.zendesk.com/embeddable_framework/main.js","carnesmarket.zendesk.com");
        /*]]>*/</script>
        <!-- End of carnesmarket Zendesk Widget script -->
    </head>
    <body>
        <script>
          window.fbAsyncInit = function() {
            FB.init({
              appId      : '1766257156978381',
              xfbml      : true,
              version    : 'v2.6'
            });
          };

          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = "//connect.facebook.net/en_US/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));
        </script>
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
            
            <!-- MENÚ BOTTOM -->
            <div class="menu_bottom">
                <div class="menu_bottom_item">
                    <a class="menu_bottom_btn menu_bottom_btn_selected" id="menu_bottom_tienda" href="#page_tienda" data-transition="none"></a>
                </div>
                <div class="menu_bottom_item menu_bottom_sep">
                    <a class="menu_bottom_btn" id="menu_bottom_marcas" href="#page_marcas" data-transition="none"></a>
                </div>
                <div class="menu_bottom_item">
                    <a class="menu_bottom_btn" id="menu_bottom_promos" href="#page_promos" data-transition="none"></a>
                </div>
                <div class="menu_bottom_item menu_bottom_sep">
                    <a class="menu_bottom_btn" id="menu_bottom_pedidos" href="#page_pedidos" data-transition="none"></a>
                </div>
                <div class="menu_bottom_item">
                    <a class="menu_bottom_btn" id="menu_bottom_perfil" href="#page_perfil" data-transition="none"></a>
                </div>
            </div>
            
            <!-- MENU WEB -->
            <div class="menu_web_internas">
                <div id="menu_web_logo"><a class="logo_linkhome"><img src="http://carnesmarket.co/images/login_logo.png"></a></div>
                <div class="menu_web_carrito">
                    <a class="menu_bottom_btn btn_cart" id="menu_bottom_carrito" data-transition="none"><div class="btn_cart_count btn_cart_count_web"></div></a>
                </div>
                <div class="menu_web_buscar">
                    <div id="buscador_input">
                        <div class="canasta_input_container"><input type="text" class="canasta_input web_searchfield" placeholder="¿Qué buscas?" autocapitalize="none"></div>
                    </div>
                    <div id="buscador_btn">
                        <a class="app_button_black_full btn_30 btn_search_web" id="btn_search"><span class="btn_1_red"><span class="btn_2_black">BUSCAR</span></span></a>
                    </div>
                </div>
                <div id="menu_tienda_home">
                    <div class="menu_tienda_item" id="menu_tienda_item_chef"><a class="menu_gotochef" id="menu_tienda_chef" href="#page_chef" data-transition="none"><span id="cheffix">Chef virtual</span></a></div>
                    <div class="menu_tienda_item">
                        <a class="menu_tienda_btn" id="menu_tienda_cerdo" href="#page_categoria_cerdo" data-transition="none">
                            Cerdo
                        </a>
                        <div class="submenu">
                            <div class="categoria_menu_item" data-categoria="Magros cotidianos de cerdo">Magros cotidianos de cerdo</div>
                            <div class="categoria_menu_item" data-categoria="Costillas de cerdo">Costillas de cerdo</div>
                            <div class="categoria_menu_item" data-categoria="Charcutería de cerdo">Charcutería de cerdo</div>
                            <div class="categoria_menu_item" data-categoria="Chuletas de cerdo">Chuletas de cerdo</div>
                            <div class="categoria_menu_item" data-categoria="Prácticos de cerdo">Prácticos de cerdo</div>
                        </div>
                    </div>
                    <div class="menu_tienda_item">
                        <a class="menu_tienda_btn" id="menu_tienda_res" href="#page_categoria_res" data-transition="none">
                            Res
                        </a>
                        <div class="submenu">
                            <div class="categoria_menu_item" data-categoria="Cortes Premium de res">Cortes Premium de res</div>
                            <div class="categoria_menu_item" data-categoria="Parrilla de res">Parrilla de res</div>
                            <div class="categoria_menu_item" data-categoria="Cotidianos de res">Cotidianos de res</div>
                            <div class="categoria_menu_item" data-categoria="Prácticos de res">Prácticos de res</div>
                            <div class="categoria_menu_item" data-categoria="Charcutería de res">Charcutería de res</div>
                        </div>
                    </div>
                    <div class="menu_tienda_item">
                        <a class="menu_tienda_btn" id="menu_tienda_pollo" href="#page_categoria_pollo" data-transition="none">
                            Pollo
                        </a>
                        <div class="submenu">
                            <div class="categoria_menu_item" data-categoria="Cotidianos de pollo">Cotidianos de pollo</div>
                            <div class="categoria_menu_item" data-categoria="Filetes de pollo">Filetes de pollo</div>
                            <div class="categoria_menu_item" data-categoria="Charcutería de pollo">Charcutería de pollo</div>
                        </div>
                    </div>
                    <div class="menu_tienda_item">
                        <a class="menu_tienda_btn" id="menu_tienda_pez" href="#page_categoria_pez" data-transition="none">
                            Pez
                        </a>
                        <div class="submenu">
                            <div class="categoria_menu_item" data-categoria="Pescados">Pescados</div>
                            <div class="categoria_menu_item" data-categoria="Mariscos">Mariscos</div>
                        </div>
                    </div>
                    <div class="menu_tienda_item">
                        <a class="menu_tienda_btn" id="menu_tienda_charc" href="#page_categoria_charc" data-transition="none">
                            <span id="charc_fix">Charcutería</span>
                        </a>
                        <div class="submenu">
                            <div class="categoria_menu_item" data-categoria="Charcutería Koller">Charcutería Koller</div>
                            <div class="categoria_menu_item" data-categoria="Charcutería de cerdo">Charcutería de cerdo</div>
                            <div class="categoria_menu_item" data-categoria="Charcutería de res">Charcutería de res</div>
                            <div class="categoria_menu_item" data-categoria="Charcutería de pollo">Charcutería de pollo</div>
                            <div class="categoria_menu_item" data-categoria="Charcutería de pavo">Charcutería de pavo</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="menu_web_botones">
                <div class="menu_bottom_item">
                    <a class="menu_bottom_btn" id="menu_bottom_tienda" href="#page_tienda" data-transition="none"></a>
                </div>
                <div class="menu_bottom_item menu_bottom_sep">
                    <a class="menu_bottom_btn" id="menu_bottom_marcas" href="#page_marcas" data-transition="none"></a>
                </div>
                <div class="menu_bottom_item">
                    <a class="menu_bottom_btn menu_web_promos" id="menu_bottom_promos" href="#page_promos" data-transition="none"></a>
                </div>
                <div class="menu_bottom_item menu_bottom_sep">
                    <a class="menu_bottom_btn menu_web_pedidos" id="menu_bottom_pedidos" href="#page_pedidos" data-transition="none"></a>
                </div>
                <div class="menu_bottom_item">
                    <a class="menu_bottom_btn" id="menu_bottom_perfil" href="#page_perfil" data-transition="none"></a>
                </div>
                <div class="menu_bottom_item menu_bottom_sep">
                    <a class="menu_bottom_btn btn_cart" id="menu_bottom_carrito" data-transition="none"><div class="btn_cart_count btn_cart_count_web"></div></a>
                </div>
            </div>
            
            <!-- BUSCADOR -->
            <div id="buscador_cont">
                <div id="buscador_input">
                    <div class="app_input_container"><input type="text" class="app_input" id="search_term" placeholder="¿Qué buscas?" autocapitalize="none"></div>
                </div>
                <div id="buscador_btn">
                    <a class="app_button_black_full btn_30" id="btn_search"><span class="btn_1_red"><span class="btn_2_black">BUSCAR</span></span></a>
                </div>
                <div id="buscador_cerrar_cont">
                    <div id="buscador_cerrar">X</div>
                </div>
            </div>
            
            <!-- MENU LATERAL -->
            <div id="menuLateral_cont">
                <div id="menuLateral_cerrar_cont">
                    <div id="menuLateral_cerrar">X</div>
                </div>
                <div class="page_content" id="page_content_info">
                    <div class="info_item">
                        <div class="info_item_img contact_whatsapp"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/btn_wapp.png"></a></div>
                        <div class="info_item_text contact_whatsapp"><a class="linkcontact" href="tel:+57315824846">Whatsapp<br>315 824 8462</a></div>
                    </div>
                    <div class="info_item">
                        <div class="info_item_img contact_email"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/btn_mail.png"></a></div>
                        <div class="info_item_text contact_email"><a class="linkcontact" href="mailto:info@carnesmarket.co">Contáctanos</a></div>
                        <div class="info_item_text contact_chat">Chat</div>
                    </div>
                    <div class="info_item">
                        <div class="info_item_img"><img src="http://carnesmarket.co/images/btn_info.png"></div>
                        <div class="info_item_text"><a class="info_link" id="ver_terminos" href="#page_terminos" data-transition="none">Términos y condiciones</a></div>
                    </div>
                    <div class="info_item">
                        <div class="info_item_text"><a class="info_link" id="ver_privacidad" href="#page_privacidad" data-transition="none">Política de privacidad</a></div>
                    </div>
                </div>
            </div>
            
            <!-- MENÚ TIENDA -->
            <div id="menu_tienda">
                <div class="menu_tienda_item" id="menu_tienda_item_chef"><a class="menu_gotochef" id="menu_tienda_chef" href="#page_chef" data-transition="none"></a></div>
                <div class="menu_tienda_item"><a class="menu_tienda_btn" id="menu_tienda_cerdo" href="#page_categoria_cerdo" data-transition="none"></a></div>
                <div class="menu_tienda_item"><a class="menu_tienda_btn" id="menu_tienda_res" href="#page_categoria_res" data-transition="none"></a></div>
                <div class="menu_tienda_item"><a class="menu_tienda_btn" id="menu_tienda_pollo" href="#page_categoria_pollo" data-transition="none"></a></div>
                <div class="menu_tienda_item"><a class="menu_tienda_btn" id="menu_tienda_pez" href="#page_categoria_pez" data-transition="none"></a></div>
                <div class="menu_tienda_item"><a class="menu_tienda_btn" id="menu_tienda_charc" href="#page_categoria_charc" data-transition="none"></a></div>
            </div>
            
            <!-- PAGE TIENDA -->
            <div data-role="page" id="page_tienda">
                <div class="page_head" id="head_tienda">
                    <div class="page_head_title" id="title_tienda"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                    <a class="btn_displayMenu"></a>
                </div>
                <div class="page_content page_content_tienda">
                    <div id="home_banner">
                        <div id="home_banner_buttons">
                            <div class="full">
                                <a class="app_button_red_full btn_30" id="btn_login_home" href="#page_login" data-transition="none"><span class="btn_1_red"><span class="btn_2_red_30">INICIAR SESIÓN</span></span></a>
                            </div>
                        </div>
                        <div id="home_banner_items">
                            <div class="home_banner_item" id="home_banner_1">
                                <div id="banner_left">
                                    <div id="banner_left_1">La nueva manera</div>
                                    <div id="banner_left_2">de comprar<br>tus carnes</div>
                                    <div id="home_banner_tiendas">
                                        <a href="#" class="home_tiendas_item"><img src="http://carnesmarket.co/images/web/app_appstore.png"></a>
                                        <a href="#" class="home_tiendas_item"><img src="http://carnesmarket.co/images/web/app_gplay.png"></a>
                                    </div>
                                </div>
                                <div id="banner_right">
                                    <div id="banner_marcas"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="full" id="tienda_items_title">Lo más vendido</div>
                    <div class="full" id="masVendidos_items">

                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <form action="//carnesmarket.us13.list-manage.com/subscribe/post?u=6bdfacfee29b215e113270db8&amp;id=fcb0f45ba8" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            </form>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE CATEGORÍA CERDO -->
            <div data-role="page" id="page_categoria_cerdo">
                <div class="page_head" id="head_tienda">
                    <a class="btn_back backTo_tienda" href="#page_tienda" data-transition="none"></a>
                    <div class="page_head_title" id="title_tienda"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                </div>
                <div class="page_content page_content_tienda">
                    <div class="full" id="categoria_items">
                        <div class="categoria_item" data-categoria="Magros cotidianos de cerdo">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/cerdo_magros_cotidianos.jpg)"></div>
                            <div class="categoria_title">Magros cotidianos de cerdo</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                        <div class="categoria_item" data-categoria="Costillas de cerdo">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/cerdo_costillas.jpg)"></div>
                            <div class="categoria_title">Costillas de cerdo</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                        <div class="categoria_item" data-categoria="Charcutería de cerdo">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/cerdo_charcuteria.jpg)"></div>
                            <div class="categoria_title">Charcutería de cerdo</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                        <div class="categoria_item" data-categoria="Chuletas de cerdo">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/cerdo_chuletas.jpg)"></div>
                            <div class="categoria_title">Chuletas de cerdo</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                        <div class="categoria_item" data-categoria="Prácticos de cerdo">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/cerdo_practicos.jpg)"></div>
                            <div class="categoria_title">Prácticos de cerdo</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE CATEGORÍA RES -->
            <div data-role="page" id="page_categoria_res">
                <div class="page_head" id="head_tienda">
                    <a class="btn_back backTo_tienda" href="#page_tienda" data-transition="none"></a>
                    <div class="page_head_title" id="title_tienda"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                </div>
                <div class="page_content page_content_tienda">
                    <div class="full" id="categoria_items">
                        <div class="categoria_item" data-categoria="Cortes Premium de res">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/res_cortes_premium.jpg)"></div>
                            <div class="categoria_title">Cortes Premium de res</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                        <div class="categoria_item" data-categoria="Parrilla de res">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/res_parrilla.jpg)"></div>
                            <div class="categoria_title">Parrilla de res</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                        <div class="categoria_item" data-categoria="Cotidianos de res">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/res_cotidianos.jpg)"></div>
                            <div class="categoria_title">Cotidianos de res</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                        <div class="categoria_item" data-categoria="Prácticos de res">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/res_practicos.jpg)"></div>
                            <div class="categoria_title">Prácticos de res</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                        <div class="categoria_item" data-categoria="Charcutería de res">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/res_charcuteria.jpg)"></div>
                            <div class="categoria_title">Charcutería de res</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE CATEGORÍA POLLO -->
            <div data-role="page" id="page_categoria_pollo">
                <div class="page_head backTo_tienda" id="head_tienda">
                    <a class="btn_back" href="#page_tienda" data-transition="none"></a>
                    <div class="page_head_title" id="title_tienda"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                </div>
                <div class="page_content page_content_tienda">
                    <div class="full" id="categoria_items">
                        <div class="categoria_item" data-categoria="Cotidianos de pollo">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/pollo_cotidianos.jpg)"></div>
                            <div class="categoria_title">Cotidianos de pollo</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                        <div class="categoria_item" data-categoria="Filetes de pollo">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/pollo_filetes.jpg)"></div>
                            <div class="categoria_title">Filetes de pollo</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                        <div class="categoria_item" data-categoria="Charcutería de pollo">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/pollo_charcuteria.jpg)"></div>
                            <div class="categoria_title">Charcutería Mac Pollo</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE CATEGORÍA PEZ -->
            <div data-role="page" id="page_categoria_pez">
                <div class="page_head" id="head_tienda">
                    <a class="btn_back backTo_tienda" href="#page_tienda" data-transition="none"></a>
                    <div class="page_head_title" id="title_tienda"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                </div>
                <div class="page_content page_content_tienda">
                    <div class="full" id="categoria_items">
                        <div class="categoria_item" data-categoria="Pescados">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/pez_pescado.jpg)"></div>
                            <div class="categoria_title">Pescados</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                        <div class="categoria_item" data-categoria="Mariscos">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/pez_mariscos.jpg)"></div>
                            <div class="categoria_title">Mariscos</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE CATEGORÍA CHARCUTERÍA -->
            <div data-role="page" id="page_categoria_charc">
                <div class="page_head" id="head_tienda">
                    <a class="btn_back backTo_tienda" href="#page_tienda" data-transition="none"></a>
                    <div class="page_head_title" id="title_tienda"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                </div>
                <div class="page_content page_content_tienda">
                    <div class="full" id="categoria_items">
                        <div class="categoria_item" data-categoria="Charcutería Koller">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/charcuteria_koller.jpg)"></div>
                            <div class="categoria_title">Charcutería Koller</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                        <div class="categoria_item" data-categoria="Charcutería de cerdo">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/charcuteria_cerdo.jpg)"></div>
                            <div class="categoria_title">Charcutería de cerdo</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                        <div class="categoria_item" data-categoria="Charcutería de res">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/charcuteria_res.jpg)"></div>
                            <div class="categoria_title">Charcutería de res</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                        <div class="categoria_item" data-categoria="Charcutería de pollo">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/charcuteria_pollo.jpg)"></div>
                            <div class="categoria_title">Charcutería Mac Pollo</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                        <div class="categoria_item" data-categoria="Charcutería de pavo">
                            <div class="categoria_img" style="background-image:url(http://carnesmarket.co/images/categorias/charcuteria_pavo.jpg)"></div>
                            <div class="categoria_title">Charcutería Delipavo</div>
                            <div class="categoria_item_btn"></div>
                        </div>
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE PRODUCTOS -->
            <div data-role="page" id="page_productos">
                <div class="page_head" id="head_tienda">
                    <a class="btn_back" data-rel="back" data-transition="none"></a>
                    <div class="page_head_title" id="title_tienda"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                </div>
                <div class="page_content page_content_tienda">
                    <div class="full" id="productos_items">
                        
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE PRODUCTOS DETALLE -->
            <div data-role="page" id="page_productos_detalle">
                <div class="page_head" id="head_tienda">
                    <a class="btn_back" data-rel="back" data-transition="none"></a>
                    <div class="page_head_title" id="title_tienda"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                </div>
                <div class="page_content page_content_tienda" id="page_content_productos_detalle">
                    <div class="full" id="producto_detalle_web">
                        <div id="product_img">
                            <div id="product_category"></div>
                            <a class="app_button_black btn_30" id="btn_shareProduct"><span class="btn_1_red"><span class="btn_2_black">COMPARTIR</span></span></a>
                            <div id="product_share_select">
                                <a class="share_prod_ico" id="share_on_facebook"></a>
                                <a class="share_prod_ico" id="share_on_twitter"></a>
                            </div>
                        </div>
                        <div id="product_title"></div>
                        <div id="product_price"></div>
                        <div id="product_presentation"></div>
                        <div id="product_agregar">
                            <div class="half">
                                <div id="product_agregar_title">Cant.</div>
                                <div class="count_input_container"><input type="number" pattern="[0-9]*" class="count_input" id="product_cantidad" placeholder="0"></div>
                            </div>
                            <div class="half">
                                <div id="product_agregar_btn"></div>
                                <div id="product_agregar_btnTitle">Añadir</div>
                            </div>
                        </div>
                        <div id="product_description"></div>
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE CHEF -->
            <div data-role="page" id="page_chef">
                <div class="page_head" id="head_tienda">
                    <div class="page_head_title" id="title_chef"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                    <a class="btn_displayMenu"></a>
                </div>
                <div class="page_content" id="page_content_chef1">
                    <div class="padding_5" id="page_chef_web">
                        <div class="full" id="chef_content_web">
                            <div class="page_title_web">
                                <div class="page_title_web_left"></div>
                                <div class="page_title_web_img"><img src="http://carnesmarket.co/images/web/title_chef.png"></div>
                                <div class="page_title_web_right"></div>
                            </div>
                            <div class="full" id="chef_title_web">
                                <div id="chef_img_web"></div>
                                <div id="chef_title">
                                    <div id="chef_title_top">CALCULADORA DEL CHEF</div>
                                    <div id="chef_title_bottom">¿No sabes cuánta y<br>qué carne comprar?</div>
                                </div>
                                <div id="chef_description">
                                    Nuestro Chef Virtual te asesora<br>para armar tu mercado
                                </div>
                            </div>
                            <div id="chef_form_cont">
                                <div id="chef_circle"></div>
                                <div class="chef_btn chef_btn_selected" id="chef_gotoPersonas"></div>
                                <div class="chef_btn" id="chef_gotoPreferencias"></div>
                                <div class="chef_btn" id="chef_gotoDias"></div>
                                <div class="chef_btn" id="chef_gotoComidas"></div>
                                <div class="chef_part" id="chef_personas">
                                    <div class="chef_agregarbtn" id="chef_agregarPersonas"></div>
                                    <div class="chef_quitarbtn" id="chef_quitarPersonas"></div>
                                    <div id="chef_PersonasCant" data-personas="1">1</div>
                                </div>
                                <div class="chef_part" id="chef_preferencias">
                                    <div class="chef_preferencias_btn" id="chef_preferencias_cerdo" data-preferencia="Cerdo"></div>
                                    <div class="chef_preferencias_btn" id="chef_preferencias_res" data-preferencia="Res"></div>
                                    <div class="chef_preferencias_btn" id="chef_preferencias_pollo" data-preferencia="Pollo"></div>
                                    <div class="chef_preferencias_btn" id="chef_preferencias_pez" data-preferencia="Pescado"></div>
                                    <div class="chef_preferencias_btn" id="chef_preferencias_charc" data-preferencia="Charcutería"></div>
                                </div>
                                <div class="chef_part" id="chef_dias">
                                    <div class="chef_agregarbtn" id="chef_agregarDias"></div>
                                    <div class="chef_quitarbtn" id="chef_quitarDias"></div>
                                    <div id="chef_DiasCant" data-dias="1">1</div>
                                </div>
                                <div class="chef_part" id="chef_comidas">
                                    <div id="chef_comidas_selCont">
                                        <select id="chef_comidasCant">
                                            <option value="1">Solo almuerzo</option>
                                            <option value="2">Almuerzo y cena</option>
                                            <option value="3">Desayuno, almuerzo y cena</option>
                                        </select>
                                        <div id="chef_comidasCant_text">Solo almuerzo</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                        <div id="chef_btn_cont">
                            <a class="app_button_red btn_44" id="btn_verSugerencias"><span class="btn_1_red"><span class="btn_2_red">ARMAR PAQUETE</span></span></a>
                        </div>
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE CHEF SUGERENCIAS -->
            <div data-role="page" id="page_chef_sugerencias">
                <div class="page_head" id="head_tienda">
                    <a class="btn_back" data-rel="back" data-transition="none"></a>
                    <div class="page_head_title" id="title_chef"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                </div>
                <div id="chef_filtros">
                    <div class="chef_filtro" id="chef_variedad">Variedad</div>
                    <div class="chef_filtro" id="chef_premium">Premium</div>
                    <div class="chef_filtro" id="chef_fit">Fit</div>
                    <div class="chef_filtro" id="chef_economico">Económico</div>
                </div>
                <div class="page_content" id="page_content_sugerencias">
                    <div class="full" id="sugerencias_items">
                        
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
                <div id="chef_agregar">
                    <div id="chef_agregar_info_personas">
                        <div class="chef_agregar_img"><img src="http://carnesmarket.co/images/chef_1_ico.png"></div>
                        <div class="chef_agregar_info_num" id="chef_agregar_personas"></div>
                        <div class="chef_agregar_info_sub">Personas</div>
                    </div>
                    <div id="chef_agregar_info_preferencias">
                        <div class="chef_agregar_img"><img src="http://carnesmarket.co/images/chef_2_ico.png"></div>
                        <table>
                            <tr>
                                <td id="chef_info_prefs">
                                    
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div id="chef_agregar_info_dias">
                        <div class="chef_agregar_img"><img src="http://carnesmarket.co/images/chef_3_ico.png"></div>
                        <div class="chef_agregar_info_num" id="chef_agregar_dias"></div>
                        <div class="chef_agregar_info_sub">Días</div>
                    </div>
                    <div id="chef_agregar_info_comidas">
                        <div class="chef_agregar_img"><img src="http://carnesmarket.co/images/chef_4_ico.png"></div>
                        <div id="chef_agregar_comidas"></div>
                    </div>
                    <div id="chef_agregar_info_total">
                        <div id="chef_agregar_info_total_title">TOTAL</div>
                        <div id="chef_agregar_info_total_precio">$250.000</div>
                        <a class="app_button_red_full btn_30" id="agregar_chef"><span class="btn_1_red"><span class="btn_2_red_30">AGREGAR</span></span></a>
                    </div>
                </div>
            </div>
            
            <!-- PAGE MARCAS -->
            <div data-role="page" id="page_marcas">
                <div class="page_head" id="head_tienda">
                    <div class="page_head_title" id="title_marcas"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                    <a class="btn_displayMenu"></a>
                </div>
                <div class="page_content">
                    <div class="full" id="marcas_items">
                        
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE PROMOS -->
            <div data-role="page" id="page_promos">
                <div class="page_head" id="head_tienda">
                    <div class="page_head_title" id="title_promos"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                    <a class="btn_displayMenu"></a>
                </div>
                <div class="page_content" id="page_content_promos">
                    <div class="full" id="promos_items">
                        
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE CANASTA -->
            <div data-role="page" id="page_canasta_1">
                <div class="page_head" id="head_tienda">
                    <div class="page_head_title" id="title_canasta"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                    <a class="btn_displayMenu"></a>
                </div>
                <div class="page_content padding_5" id="page_content_canasta_1">
                    <div class="full" id="cont_canasta_1">
                        <div class="page_title_web" id="page_title_canasta">
                            <div class="page_title_web_left"></div>
                            <div class="page_title_web_img"><img src="http://carnesmarket.co/images/web/title_carrito.png"></div>
                            <div class="page_title_web_right"></div>
                        </div>
                        <div class="canasta_title">Descripción del pedido </div>
                        <div class="carrito_titles">
                            <div class="carrito_title_agregar">&nbsp;</div>
                            <div class="carrito_title_cantidad">Cant.</div>
                            <div class="carrito_title_producto">Producto</div>
                            <div class="carrito_title_costo">Costo</div>
                        </div>
                        <div class="canasta_items" id="canasta_1_items">

                        </div>
                        <div class="full" id="canasta_1_footer">
                            <div class="half" id="canasta_1_total_title">
                                Total
                            </div>
                            <div class="half" id="canasta_1_total">

                            </div>
                            <div class="half canasta_continuar_cont">
                                <a class="app_button_red btn_30" id="goto_canasta_2" data-transition="none"><span class="btn_1_red"><span class="btn_2_red_30">CONTINUAR</span></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE CANASTA 2 -->
            <div data-role="page" id="page_canasta_2">
                <div class="page_head" id="head_tienda">
                    <a class="btn_back" href="#page_canasta_1" data-transition="none"></a>
                    <div class="page_head_title" id="title_canasta"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                </div>
                <div class="page_content padding_5" id="page_content_canasta_2">
                    <div class="full" id="cont_canasta_2">
                        <div class="page_title_web" id="page_title_canasta">
                            <div class="page_title_web_left"></div>
                            <div class="page_title_web_img"><img src="http://carnesmarket.co/images/web/title_carrito.png"></div>
                            <div class="page_title_web_right"></div>
                        </div>
                        <div class="canasta_title">Datos de la entrega</div>
                        <div class="full" id="canasta_2_form">
                            <div class="half_web">
                                <div class="input_title td_web_title">fecha de entrega</div>
                                <div class="canasta_input_container"><input type="date" class="canasta_input" id="pedido_fechaEntrega" placeholder="Fecha de entrega"></div>
                                <div class="canasta_input_container">
                                    <select class="canasta_input" id="pedido_horaEntrega">
                                        <option value="1">10:00am - 12:00pm</option>
                                        <option value="2">02:00pm - 04:00pm</option>
                                        <option value="3">04:00pm - 06:00pm</option>
                                        <option value="4">06:00pm - 08:00pm</option>
                                    </select>
                                </div>
                                <div id="anuncioMismoDia">* Los pedidos el mismo día tienen un costo de envío de $10.000</div>
                                <div class="canasta_input_container"><input type="text" class="canasta_input" id="pedido_direccionEntrega" placeholder="Dirección de entrega"></div>
                            </div>
                            <div class="half_web">
                                <div id="canasta_modopago_cont">
                                    <table>
                                        <tr class="tr_web">
                                            <td colspan="3" class="td_web_title">Modo de pago</td>
                                        </tr>
                                        <tr>
                                            <td class="canasta_mosopago_title">Datáfono</td>
                                            <td class="canasta_mosopago_title">Online</td>
                                            <td class="canasta_mosopago_title">PSE</td>
                                        </tr>
                                        <tr>
                                            <td><a class="modopago_opt modopago_opt_selected" data-modopago="0"></a></td>
                                            <td><a class="modopago_opt" data-modopago="1"></a></td>
                                            <td><a class="modopago_opt" data-modopago="2"></a></td>
                                        </tr>
                                    </table>
                                    <input type="hidden" id="pedido_modoPago" value="0">
                                </div>
                            </div>
                        </div>
                        <div class="full">
                            <div class="half canasta_continuar_cont">
                                <a class="app_button_red btn_30" id="goto_canasta_3" data-transition="none"><span class="btn_1_red"><span class="btn_2_red_30">CONTINUAR</span></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE CANASTA DIRECCIONES -->
            <div data-role="page" id="page_canasta_direcciones">
                <div class="page_head" id="head_tienda">
                    <a class="btn_back" href="#page_canasta_2" data-transition="none"></a>
                    <div class="page_head_title" id="title_canasta"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                </div>
                <div class="page_content" id="page_content_direcciones">
                    <div class="full" id="cont_canasta_dir">
                        <div class="padding_5" id="canasta_direcciones_items">

                        </div>
                        <div class="padding_5 perfil_actions perfil_centrar" id="perfil_actions_2">
                            <a class="app_button_red btn_44" id="btn_nuevaDireccion" href="#page_canasta_map" data-transition="none"><span class="btn_1_red"><span class="btn_2_red">NUEVA DIRECCIÓN</span></span></a>
                        </div>
                    </div>
                </div>
                <div class="footer_web footer_web_fixed">
                    <div id="footer_left">
                        <table>
                            <tr>
                                <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                            </tr>
                            <tr>
                                <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                            </tr>
                        </table>
                    </div>
                    <div id="footer_right">
                        <div id="footer_nwslt">
                            <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                        </div>
                        <div id="footer_smm">
                            <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                            <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                            <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                        </div>
                        <div id="footer_modospago">
                            <img src="http://carnesmarket.co/images/web/modospago.png">
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE CANASTA MAPA -->
            <div data-role="page" id="page_canasta_map">
                <div class="page_head" id="head_tienda">
                    <a class="btn_back" data-rel="back" data-transition="none"></a>
                    <div class="page_head_title" id="title_canasta"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                </div>
                <div class="page_content" id="page_content_map">
                    <div id="canasta_map"></div>
                    <div id="map_direccion">
                        <div id="pedido_direccionMapa_1">
                            <div class="geo_input_container">
                                <select class="app_input geodeco_field" id="geo_dir_1">
                                    <option value="Calle">Cll.</option>
                                    <option value="Carrera">Cra.</option>
                                    <option value="Avenida">Av.</option>
                                    <option value="Avenida Carrera">Av. Cra.</option>
                                    <option value="Avenida Calle">Av. Cll.</option>
                                    <option value="Circular">Circular</option>
                                    <option value="Circunvalar">Circunv.</option>
                                    <option value="Diagonal">Diag.</option>
                                    <option value="Manzana">Manz.</option>
                                    <option value="Transversal">Transv.</option>
                                    <option value="Vía">Via</option>
                                </select>
                            </div>
                        </div>
                        <div id="pedido_direccionMapa_2">
                            <div class="geo_input_container"><input type="text" class="app_input geodeco_field" id="geo_dir_2"></div>
                            <input type="hidden" id="geo_dir_3" value="Norte">
                        </div>
                        <div id="pedido_direccionMapa_3">
                            #
                        </div>
                        <div id="pedido_direccionMapa_4">
                            <div class="geo_input_container"><input type="text" class="app_input geodeco_field" id="geo_dir_4"></div>
                        </div>
                        <div id="pedido_direccionMapa_5">
                            -
                        </div>
                        <div id="pedido_direccionMapa_6">
                            <div class="geo_input_container"><input type="text" class="app_input geodeco_field" id="geo_dir_5"></div>
                        </div>
                        <div id="pedido_direccionMapa_7">
                            <div class="app_input_container"><input type="text" class="app_input" id="geo_dir_6" placeholder="Interior/Apto/Oficina..."></div>
                        </div>
                    </div>
                    <div id="map_footer">
                        <div class="half">
                            <a class="app_button_black_full btn_30" id="btn_showMisDirecciones"><span class="btn_1_red"><span class="btn_2_black">MIS DIRECCIONES</span></span></a>
                        </div>
                        <div class="half">
                            <a class="app_button_red_full btn_30" id="btn_saveAddress"><span class="btn_1_red"><span class="btn_2_red_30">CONTINUAR</span></span></a>
                        </div>
                    </div>
                    <div id="direcciones_save_cont">
                        <a class="app_button_red_full btn_30" id="btn_saveNewAddress"><span class="btn_1_red"><span class="btn_2_red_30">GUARDAR ESTA DIRECCIÓN</span></span></a>
                    </div>
                </div>
                <div class="footer_web footer_web_fixed">
                    <div id="footer_left">
                        <table>
                            <tr>
                                <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                            </tr>
                            <tr>
                                <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                            </tr>
                        </table>
                    </div>
                    <div id="footer_right">
                        <div id="footer_nwslt">
                            <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                        </div>
                        <div id="footer_smm">
                            <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                            <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                            <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                        </div>
                        <div id="footer_modospago">
                            <img src="http://carnesmarket.co/images/web/modospago.png">
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE CANASTA 3 -->
            <div data-role="page" id="page_canasta_3">
                <div class="page_head" id="head_tienda">
                    <a class="btn_back" href="#page_canasta_2" data-transition="none"></a>
                    <div class="page_head_title" id="title_canasta"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                </div>
                <div class="page_content" id="page_content_canasta_3">
                    <div class="full" id="canasta_3_cnts">
                        <div class="canasta_title canasta_title_padding">Revisión del pedido</div>
                        <div class="full">
                            <div class="carrito_titles">
                                <div class="carrito_title_cantidad">Cant.</div>
                                <div class="carrito_title_producto">Producto</div>
                                <div class="carrito_title_costo">Costo</div>
                            </div>
                            <div class="canasta_items" id="canasta_3_items">

                            </div>
                        </div>
                        <div class="full" id="carrito_3_datos">
                            <div class="half border_red_left">
                                <div class="carrito_3_datos_title">Subtotal</div>
                                <div class="carrito_3_datos_text" id="carrito_3_datos_subtotal"></div>
                            </div>
                            <div class="half border_red_right">
                                <div class="carrito_3_datos_title">Envío</div>
                                <div class="carrito_3_datos_text" id="carrito_3_datos_envio"></div>
                            </div>
                            <div class="full border_red_bottom">
                                <div class="carrito_3_datos_title">Descuento</div>
                                <div class="carrito_3_datos_text" id="carrito_3_datos_descuento"></div>
                            </div>
                            <div class="full border_red_bottom">
                                <div class="carrito_3_datos_title">TOTAL</div>
                                <div class="carrito_3_datos_text" id="carrito_3_datos_total"></div>
                            </div>
                            <div class="half border_red_left">
                                <div class="carrito_3_datos_title">Fecha de entrega</div>
                                <div class="carrito_3_datos_text" id="carrito_3_datos_fecha"></div>
                            </div>
                            <div class="half border_red_right">
                                <div class="carrito_3_datos_title">Hora de entrega</div>
                                <div class="carrito_3_datos_text" id="carrito_3_datos_hora"></div>
                            </div>
                            <div class="full border_red_bottom">
                                <div class="carrito_3_datos_title">Dirección</div>
                                <div class="carrito_3_datos_text" id="carrito_3_datos_direccion"></div>
                            </div>
                            <div class="full border_red_bottom">
                                <div class="carrito_3_datos_title">Modo de pago</div>
                                <div class="carrito_3_datos_text" id="carrito_3_datos_modopago"></div>
                            </div>
                        </div>
                        <div class="padding_5" id="carrito_3_cupon_cont">
                            <div class="half_first">
                                <div class="canasta_input_container">
                                    <input type="text" class="canasta_input" id="pagar_cupon" placeholder="Cupón" autocapitalize="none">
                                </div>
                            </div>
                            <div class="half_last">
                                <a class="app_button_black_full btn_30" id="btn_aplicarCupon"><span class="btn_1_red"><span class="btn_2_black">APLICAR</span></span></a>
                            </div>
                        </div>
                        <div class="full" id="carrito_3_pagoToken_cont">
                            <div class="carrito_3_datos_title">Tu modo de pago</div>
                            <div class="full padding_5">
                                <div class="canasta_input_container">
                                    <select class="canasta_input" id="carrito3_modopago">

                                    </select>
                                </div>
                            </div>
                            <div class="half_first">
                                <div class="canasta_input_container"><input type="number" pattern="[0-9]*" class="canasta_input" id="pagar_codigoSeguridad" placeholder="Cód. seguridad"></div>
                            </div>
                            <div class="half_last">
                                <div class="canasta_input_container"><input type="number" pattern="[0-9]*" class="canasta_input" id="pagar_cuotas" placeholder="Cuotas"></div>
                            </div>
                        </div>
                        <div class="full" id="canasta_3_footer">
                            <a class="app_button_red btn_44" id="btn_realizarPedido"><span class="btn_1_red"><span class="btn_2_red">HACER PEDIDO</span></span></a>
                        </div>
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                    <div id="info_iatai"></div>
                </div>
            </div>
            
            <!-- PAGE CANASTA PSE -->
            <div data-role="page" id="page_canasta_PSE">
                <div class="page_head" id="head_tienda">
                    <a class="btn_back" href="#page_canasta_3" data-transition="none"></a>
                    <div class="page_head_title" id="title_canasta"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                </div>
                <div class="page_content padding_5" id="page_content_canasta_pse">
                    <div class="full" id="cont_canasta_3">
                        <div class="page_title_web" id="page_title_canasta">
                            <div class="page_title_web_left"></div>
                            <div class="page_title_web_img"><img src="http://carnesmarket.co/images/web/title_carrito.png"></div>
                            <div class="page_title_web_right"></div>
                        </div>
                        <div class="full" id="canasta_2_form">
                            <div class="half_web">
                                <div class="input_title td_web_title">Datos del titular PSE</div>
                                <div class="canasta_input_container">
                                    <input type="text" class="canasta_input" id="pedido_PSE_Nombre" placeholder="Nombre">
                                </div>
                                <div class="canasta_input_container">
                                    <input type="text" class="canasta_input" id="pedido_PSE_Apellido" placeholder="Apellido">
                                </div>
                                <div class="canasta_input_container">
                                    <input type="number" class="canasta_input" id="pedido_PSE_cedula" placeholder="Cédula">
                                </div>
                            </div>
                            <div class="half_web">
                                <div class="input_title td_web_title">Selecciona el banco</div>
                                <div class="canasta_input_container">
                                    <select class="canasta_input" id="pedido_PSE_banco">
                                        
                                    </select>
                                </div>
                                <div class="canasta_input_container">
                                    <select class="canasta_input" id="pedido_PSE_persona">
                                        <option value="true">Persona Natural</option>
                                        <option value="false">Persona Jurídica</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="full">
                            <div class="half canasta_continuar_cont">
                                <a id="pagar_PSE" data-transition="none"><img src="images/web/onepocket-btn-desktop.png"></a>
                            </div>
                        </div>
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE CANASTA 4 -->
            <div data-role="page" id="page_canasta_4">
                <div class="page_head" id="head_tienda">
                    <div class="page_head_title" id="title_canasta"></div>
                </div>
                <div class="page_content">
                    <div class="full" id="canasta_completo">
                        <div id="canasta_completo_1">Confirmación del pedido</div>
                        <div id="canasta_completo_2">Su pedido ha sido<br>registrado éxitosamente</div>
                        <div id="canasta_completo_volver">
                            <a class="app_button_red btn_44" href="#page_tienda" data-transition="none"><span class="btn_1_red"><span class="btn_2_red">VOLVER A LA TIENDA</span></span></a>
                        </div>
                    </div>
                    <div class="footer_web footer_web_nobg footer_web_fixed">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE PEDIDOS -->
            <div data-role="page" id="page_pedidos">
                <div class="page_head" id="head_tienda">
                    <div class="page_head_title" id="title_pedidos"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                    <a class="btn_displayMenu"></a>
                </div>
                <div class="page_content" id="page_content_pedidos_web">
                    <div class="full" id="pedidos_web_cont">
                        <div class="full" id="pedidos_title">
                            <div class="pedido_title_estado">Estado</div>
                            <div class="pedido_title_fecha">Fecha</div>
                            <div class="pedido_title_id">ID</div>
                        </div>
                        <div class="full" id="pedidos_items">

                        </div>
                    </div>
                </div>
                <div class="footer_web footer_web_fixed">
                    <div id="footer_left">
                        <table>
                            <tr>
                                <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                            </tr>
                            <tr>
                                <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                            </tr>
                        </table>
                    </div>
                    <div id="footer_right">
                        <div id="footer_nwslt">
                            <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                        </div>
                        <div id="footer_smm">
                            <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                            <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                            <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                        </div>
                        <div id="footer_modospago">
                            <img src="http://carnesmarket.co/images/web/modospago.png">
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE PEDIDOS DETALLE -->
            <div data-role="page" id="page_pedidos_detalle">
                <div class="page_head" id="head_tienda">
                    <a class="btn_back" href="#page_pedidos" data-transition="none"></a>
                    <div class="page_head_title" id="title_pedidos"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                </div>
                <div class="page_content">
                    <div class="full" id="pedido_detalle_web">
                        <div id="pedido_detalle_id"></div>
                        <div class="full">
                            <div class="carrito_titles">
                                <div class="carrito_title_cantidad">Cant.</div>
                                <div class="carrito_title_producto">Producto</div>
                                <div class="carrito_title_costo">Costo</div>
                            </div>
                            <div class="canasta_items" id="canasta_pedido_items">

                            </div>
                        </div>
                        <div class="full" id="carrito_3_datos">
                            <div class="half border_red_left">
                                <div class="carrito_3_datos_title">Subtotal</div>
                                <div class="carrito_3_datos_text" id="pedido_datos_subtotal"></div>
                            </div>
                            <div class="half border_red_right">
                                <div class="carrito_3_datos_title">Envío</div>
                                <div class="carrito_3_datos_text" id="pedido_datos_envio"></div>
                            </div>
                            <div class="full border_red_bottom">
                                <div class="carrito_3_datos_title">Descuento</div>
                                <div class="carrito_3_datos_text" id="pedido_datos_descuento"></div>
                            </div>
                            <div class="full border_red_bottom">
                                <div class="carrito_3_datos_title">TOTAL</div>
                                <div class="carrito_3_datos_text" id="pedido_datos_total"></div>
                            </div>
                            <div class="half border_red_left">
                                <div class="carrito_3_datos_title">Fecha de entrega</div>
                                <div class="carrito_3_datos_text" id="pedido_datos_fecha"></div>
                            </div>
                            <div class="half border_red_right">
                                <div class="carrito_3_datos_title">Hora de entrega</div>
                                <div class="carrito_3_datos_text" id="pedido_datos_hora"></div>
                            </div>
                            <div class="full border_red_bottom">
                                <div class="carrito_3_datos_title">Dirección</div>
                                <div class="carrito_3_datos_text" id="pedido_datos_direccion"></div>
                            </div>
                            <div class="half border_red_left">
                                <div class="carrito_3_datos_title">Modo de pago</div>
                                <div class="carrito_3_datos_text" id="pedido_datos_modopago"></div>
                            </div>
                            <div class="half border_red_right">
                                <div class="carrito_3_datos_title">Estado pago</div>
                                <div class="carrito_3_datos_text" id="pedido_datos_estadoPago"></div>
                            </div>
                        </div>
                    </div>
                    <div class="full" id="pedido_detalle_footer">
                        <div class="full">
                            <a class="app_button_red btn_44" id="btn_pedirDeNuevo"><span class="btn_1_red"><span class="btn_2_red">PEDIR DE NUEVO</span></span></a>
                        </div>
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE PERFIL -->
            <div data-role="page" id="page_perfil">
                <div class="page_head" id="head_tienda">
                    <div class="page_head_title" id="title_perfil"></div>
                    <a class="btn_displayMenu"></a>
                </div>
                <div class="page_content" id="page_content_perfil">
                    <div id="perfil_bg"></div>
                    <div id="perfil_info">
                        <div class="page_title_web">
                            <div class="page_title_web_left"></div>
                            <div class="page_title_web_img"><img src="http://carnesmarket.co/images/web/title_perfil.png"></div>
                            <div class="page_title_web_right"></div>
                        </div>
                        <div id="perfil_profilePic">
                            <div id="perfil_camera"><input type="file" id="input_foto"></div>
                        </div>
                        <div class="padding_5 perfil_actions">
                            <div class="half">
                                <a class="app_button_black_full btn_30" id="btn_gotomodopago"><span class="btn_1_red"><span class="btn_2_black">MODO DE PAGO</span></span></a>
                            </div>
                            <div class="half">
                                <a class="app_button_black_full btn_30" id="btn_gotoDirecciones"><span class="btn_1_red"><span class="btn_2_black">MIS DIRECCIONES</span></span></a>
                            </div>
                        </div>
                        <div id="perfil_nombre"></div>
                        <div id="perfil_correo"></div>
                        <div id="perfil_celular"></div>
                        <div class="padding_5 perfil_actions" id="perfil_web_abajo">
                            <div class="half">
                                <a class="app_button_black_full btn_30" id="btn_cerrarSesion"><span class="btn_1_red"><span class="btn_2_black">CERRAR SESIÓN</span></span></a>
                            </div>
                            <div class="half">
                                <a class="app_button_red_full btn_30" id="btn_editarPerfil" href="#page_editarPerfil" data-transition="none"><span class="btn_1_red"><span class="btn_2_red_30">EDITAR PERFIL</span></span></a>
                            </div>
                        </div>
                        <div class="full" id="perfil_noregistrado_Registrarse">
                            <a class="app_button_red btn_44" id="btn_noreg_gotoLogin"><span class="btn_1_red"><span class="btn_2_red">REGISTRARSE</span></span></a>
                        </div>
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE MIS DIRECCIONES -->
            <div data-role="page" id="page_perfilDirecciones">
                <div class="page_head" id="head_tienda">
                    <a class="btn_back" href="#page_perfil" data-transition="none"></a>
                    <div class="page_head_title" id="title_perfil"></div>
                </div>
                <div class="page_content" id="page_content_dir_web">
                    <div class="full" id="direcciones_items">
                        
                    </div>
                    <div class="padding_5 perfil_actions" id="direcciones_web_actions">
                        <div class="half half_minheight">
                            <a class="app_button_black_full btn_30" id="btn_gotoAgregarDir" data-transition="none"><span class="btn_1_red"><span class="btn_2_black">AGREGAR NUEVA</span></span></a>
                        </div>
                        <div class="half">
                            <a class="app_button_red_full btn_30" id="btn_guardarDirecciones" data-transition="none"><span class="btn_1_red"><span class="btn_2_red_30">ACTUALIZAR</span></span></a>
                        </div>
                    </div>
                </div>
                <div class="footer_web footer_web_fixed">
                    <div id="footer_left">
                        <table>
                            <tr>
                                <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                            </tr>
                            <tr>
                                <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                            </tr>
                        </table>
                    </div>
                    <div id="footer_right">
                        <div id="footer_nwslt">
                            <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                        </div>
                        <div id="footer_smm">
                            <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                            <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                            <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                        </div>
                        <div id="footer_modospago">
                            <img src="http://carnesmarket.co/images/web/modospago.png">
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE EDITAR PERFIL -->
            <div data-role="page" id="page_editarPerfil">
                <div class="page_head" id="head_tienda">
                    <a class="btn_back" href="#page_perfil" data-transition="none"></a>
                    <div class="page_head_title" id="title_perfil"></div>
                </div>
                <div class="page_content" id="page_content_perfil_web">
                    <div id="perfil_info" class="perfil_editar_web">
                        <div class="canasta_input_container"><input type="email" class="canasta_input" id="perfil_editarEmail" placeholder="Correo"></div>
                        <div class="canasta_input_container"><input type="text" class="canasta_input" id="perfil_editarNombre" placeholder="Nombre"></div>
                        <div class="canasta_input_container"><input type="text" class="canasta_input" id="perfil_editarApellido" placeholder="Apellido"></div>
                        <div class="canasta_input_container"><input type="tel" class="canasta_input" id="perfil_editarTelefono" placeholder="Teléfono"></div>
                        <div id="perfil_genero">
                            <div id="perfil_genero_title">Género</div>
                            <div id="perfil_genero_opciones">
                                <table>
                                    <tr>
                                        <td class="perfil_genero_op_title">F</td>
                                        <td><a class="genero_opt" id="perfil_generoFemenino" data-genero="2"></a></td>
                                        <td class="perfil_genero_op_title perfil_genero_space">M</td>
                                        <td><a class="genero_opt" id="perfil_generoMasculino" data-genero="1"></a></td>
                                    </tr>
                                </table>
                            </div>
                            <input type="hidden" id="perfil_editarGenero" value="0">
                        </div>
                        <div id="perfil_notificaciones">
                            <table>
                                <tr>
                                    <td>Recibir las notificaciones</td>
                                    <td class="perfil_genero_space"><a id="recibirNotificaciones_btn"></a></td>
                                </tr>
                            </table>
                            <input type="hidden" id="perfil_editarNotificaciones" value="0">
                        </div>
                        <div class="padding_5 perfil_actions" id="perfil_actions_edit">
                            <div class="half half_minheight">
                                <a class="app_button_black_full btn_30" id="btn_gotoChangePass" href="#page_cambiarPass" data-transition="none"><span class="btn_1_red"><span class="btn_2_black">CAMBIAR CONTRASEÑA</span></span></a>
                            </div>
                            <div class="half">
                                <a class="app_button_red_full btn_30" id="btn_guardarPerfil" data-transition="none"><span class="btn_1_red"><span class="btn_2_red_30">GUARDAR</span></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE COMPLETAR PERFIL -->
            <div data-role="page" id="page_completarPerfil">
                <div class="page_head" id="head_tienda">
                    <a class="btn_back" href="#page_canasta_2" data-transition="none"></a>
                    <div class="page_head_title" id="title_canasta"></div>
                    <a class="btn_cart" href="#page_cart" data-transition="none"><div class="btn_cart_count"></div></a>
                    <a class="btn_displaySearch"></a>
                </div>
                <div class="page_content" id="page_content_editperfil_web">
                    <div id="completarPerfil_title">Por favor completa estos datos</div>
                    <div id="completarPerfil_info">
                        <div class="canasta_input_container"><input type="email" class="canasta_input" id="perfil_completarEmail" placeholder="Correo"></div>
                        <div class="canasta_input_container"><input type="text" class="canasta_input" id="perfil_completarNombre" placeholder="Nombre"></div>
                        <div class="canasta_input_container"><input type="text" class="canasta_input" id="perfil_completarApellido" placeholder="Apellido"></div>
                        <div class="canasta_input_container"><input type="tel" class="canasta_input" id="perfil_completarTelefono" placeholder="Teléfono"></div>
                        <div class="padding_5 perfil_actions">
                            <a class="app_button_red btn_44" id="btn_completarPerfil"><span class="btn_1_red"><span class="btn_2_red">CONTINUAR</span></span></a>
                        </div>
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE CAMBIAR CONTRASEÑA -->
            <div data-role="page" id="page_cambiarPass">
                <div class="page_head" id="head_tienda">
                    <a class="btn_back" href="#page_editarPerfil" data-transition="none"></a>
                    <div class="page_head_title" id="title_perfil"></div>
                </div>
                <div class="page_content" id="page_content_changepass_web">
                    <div id="perfil_info" class="perfil_editar_web">
                        <div class="canasta_input_container"><input type="password" class="canasta_input" id="changePass_actual" placeholder="Contraseña actual"></div>
                        <div class="canasta_input_container"><input type="password" class="canasta_input" id="changePass_nueva" placeholder="Contraseña nueva"></div>
                        <div class="canasta_input_container"><input type="password" class="canasta_input" id="changePass_verificar" placeholder="Verificar contraseña"></div>
                        <div class="padding_5 perfil_actions">
                            <a class="app_button_red btn_44" id="btn_changePass"><span class="btn_1_red"><span class="btn_2_red">CAMBIAR CONTRASEÑA</span></span></a>
                        </div>
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE MODO DE PAGO -->
            <div data-role="page" id="page_modopago">
                <div class="page_head" id="head_tienda">
                    <a class="btn_back" href="#page_perfil" data-transition="none"></a>
                    <div class="page_head_title" id="title_info"></div>
                </div>
                <div class="page_content" id="page_content_modopago_web">
                    <div class="padding_10" id="page_modopago_web">
                        <div id="modopago_title">TU MODO DE PAGO</div>
                        <div class="full" id="modopago_Actual">
                            <div class="modopago_title">TUS TARJETAS</div>
                            <div class="full" id="modopago_items">
                                
                            </div>
                            <div class="full" id="modopago_nuevo">
                                <a class="app_button_red btn_44" id="btn_nuevoModoPago"><span class="btn_1_red"><span class="btn_2_red">AGREGAR NUEVO</span></span></a>
                            </div>
                        </div>
                        <div class="full" id="modopago_Nuevo">
                            <div class="modopago_data_title">Tus datos</div>
                            <div class="canasta_input_container"><input type="number" pattern="[0-9]*" class="canasta_input" id="modopago_cedula" placeholder="Tu cédula"></div>
                            <div class="modopago_data_title">Datos del titular</div>
                            <div class="canasta_input_container"><input type="text" class="canasta_input" id="modopago_nombre" placeholder="Nombre en la tarjeta"></div>
                            <div class="canasta_input_container"><input type="text" class="canasta_input" id="modopago_apellido" placeholder="Apellido en la tarjeta"></div>
                            <div class="canasta_input_container"><input type="number" pattern="[0-9]*" class="canasta_input" id="modopago_tarjeta" placeholder="Número de la tarjeta"></div>
                            <div class="modopago_data_title">Franquicia</div>
                            <div class="canasta_input_container">
                                <select class="canasta_input" id="modopago_franquicia">
                                    
                                </select>
                            </div>
                            <div class="modopago_data_title">Fecha de expiración</div>
                            <div class="half_first" id="web_modopago1">
                                <div class="canasta_input_container">
                                    <select class="canasta_input" id="modopago_year">
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>
                                        <option value="2029">2029</option>
                                        <option value="2030">2030</option>
                                        <option value="2031">2031</option>
                                        <option value="2032">2032</option>
                                        <option value="2033">2033</option>
                                        <option value="2034">2034</option>
                                        <option value="2035">2035</option>
                                        <option value="2036">2036</option>
                                        <option value="2037">2037</option>
                                        <option value="2038">2038</option>
                                        <option value="2039">2039</option>
                                        <option value="2040">2040</option>
                                    </select>
                                </div>
                            </div>
                            <div class="half_last" id="web_modopago2">
                                <div class="canasta_input_container">
                                    <select class="canasta_input" id="modopago_month">
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                        <option value="4">04</option>
                                        <option value="5">05</option>
                                        <option value="6">06</option>
                                        <option value="7">07</option>
                                        <option value="8">08</option>
                                        <option value="9">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                            </div>
                            <div class="canasta_input_container"><input type="number" pattern="[0-9]*" class="canasta_input" id="modopago_codigoSeguridad" placeholder="Código de seguridad"></div>
                            <div class="modopago_data_title">Datos de correspondencia</div>
                            <div class="canasta_input_container"><input type="text" class="canasta_input" id="modopago_ciudad" placeholder="Ciudad"></div>
                            <div class="canasta_input_container"><input type="text" class="canasta_input" id="modopago_dir" placeholder="Dirección"></div>
                            <div id="modopago_Guardar">
                                <a class="app_button_red btn_44" id="btn_guardarModoPago"><span class="btn_1_red"><span class="btn_2_red">GUARDAR</span></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="footer_web">
                        <div id="footer_left">
                            <table>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                    <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                                </tr>
                                <tr>
                                    <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                    <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                    <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                                </tr>
                            </table>
                        </div>
                        <div id="footer_right">
                            <div id="footer_nwslt">
                                <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                            </div>
                            <div id="footer_smm">
                                <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                                <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                                <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                            </div>
                            <div id="footer_modospago">
                                <img src="http://carnesmarket.co/images/web/modospago.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE INFO -->
            <div data-role="page" id="page_info">
                <div class="page_head" id="head_tienda">
                    <a class="btn_back" href="#page_perfil" data-transition="none"></a>
                    <div class="page_head_title" id="title_info"></div>
                </div>
                <div class="page_content" id="page_content_info">
                    <div class="info_item">
                        <div class="info_item_img"><img src="http://carnesmarket.co/images/btn_wapp.png"></div>
                        <div class="info_item_text">Whatsapp</div>
                    </div>
                    <div class="info_item">
                        <div class="info_item_img"><img src="http://carnesmarket.co/images/btn_mail.png"></div>
                        <div class="info_item_text">Contáctanos</div>
                    </div>
                    <div class="info_item">
                        <div class="info_item_img"><img src="http://carnesmarket.co/images/btn_info.png"></div>
                        <div class="info_item_text"><a class="info_link" href="#page_terminos" data-transition="none">Términos y condiciones</a></div>
                    </div>
                    <div class="info_item">
                        <div class="info_item_text"><a class="info_link" href="#page_terminos" data-transition="none">Política de privacidad</a></div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE LOGIN -->
            <div data-role="page" id="page_login">
                <div class="page_head" id="head_registro">
                    <div class="page_head_title" id="title_registro"></div>
                </div>
                <div class="half_web" id="login_left">
                    <div class="padding_10" id="login_form">
                        <div class="app_input_container"><input type="text" class="app_input" id="login_user" placeholder="Usuario" autocapitalize="none"></div>
                        <div class="app_input_container"><input type="password" class="app_input" id="login_pass" placeholder="Contraseña" autocapitalize="none"></div>
                        <div class="btn_text_container">
                            <a href="#page_restablecer" class="btn_forgot_pass" data-transition="none">¿Olvidaste tu contraseña?</a>
                        </div>
                        <div class="full" id="web_loginbtn">
                            <a class="app_button_red btn_44" id="btn_iniciarSesion"><span class="btn_1_red"><span class="btn_2_red">INICIAR SESIÓN</span></span></a>
                        </div>
                        <hr class="separator">
                        <div class="full" id="web_loginfb_button">
                            <a class="app_button_facebook app_button_facebook_web btn_30" id="btn_iniciarfacebook"><span class="btn_1_red"><span class="btn_2_facebook">INICIAR SESIÓN CON FB</span></span></a>
                        </div>
                        <div class="btn_text_container">
                            <a id="btn_ingresoSimple" class="btn_forgot_pass" href="#page_tienda" data-transition="none">Ingresa sin registrarte</a>
                        </div>
                    </div>
                </div>
                <div class="half_web" id="login_right">
                    <div class="padding_10" id="login_form">
                        <div id="reg_web_title"><img src="http://carnesmarket.co/images/web/title_registro.png"></div>
                        <div class="app_input_container half_web_inputs"><input type="text" class="app_input" id="reg_user" placeholder="Usuario" autocapitalize="none"></div>
                        <div class="app_input_container half_web_inputs"><input type="password" class="app_input" id="reg_pass" placeholder="Contraseña" autocapitalize="none"></div>
                        <div class="app_input_container half_web_inputs"><input type="email" class="app_input" id="reg_email" placeholder="Correo" autocapitalize="none"></div>
                        <div class="app_input_container half_web_inputs"><input type="text" class="app_input" id="reg_nombre" placeholder="Nombre" autocapitalize="sentences"></div>
                        <div class="app_input_container half_web_inputs"><input type="text" class="app_input" id="reg_apellido" placeholder="Apellido" autocapitalize="sentences"></div>
                        <div class="app_input_container half_web_inputs"><input type="tel" class="app_input" id="reg_tel" placeholder="Celular"></div>
                        <div id="registro_aceptarTerms">
                            <table>
                                <tr>
                                    <td><a id="aceptaTerminos"></a></td>
                                    <td>Acepto los términos y política de privacidad</td>
                                </tr>
                            </table>
                        </div>
                        <a class="app_button_red btn_44" id="btn_registrarse"><span class="btn_1_red"><span class="btn_2_red">REGISTRARSE</span></span></a>
                    </div>
                </div>
                <div class="full">
                    <div id="login_terms_container">
                        Al usar esta app, aceptas las <a href="#page_terminos" class="btn_terms" data-transition="none">Condiciones</a> y la <a href="#page_privacidad" class="btn_terms" data-transition="none">política de privacidad</a>
                    </div>
                </div>
            </div>
            
            <!-- PAGE REGISTRO -->
            <div data-role="page" id="page_registro">
                <div class="page_head" id="head_registro">
                    <div class="page_head_title" id="title_registro"></div>
                    <a class="btn_back" href="#page_first" data-transition="none"></a>
                </div>
                <div class="page_content page_content_bottom">
                    <div class="padding_10" id="login_form">
                        <div class="app_input_container"><input type="text" class="app_input" id="reg_user" placeholder="Usuario" autocapitalize="none"></div>
                        <div class="app_input_container"><input type="password" class="app_input" id="reg_pass" placeholder="Contraseña" autocapitalize="none"></div>
                        <div class="app_input_container"><input type="email" class="app_input" id="reg_email" placeholder="Correo" autocapitalize="none"></div>
                        <div class="app_input_container"><input type="text" class="app_input" id="reg_nombre" placeholder="Nombre" autocapitalize="sentences"></div>
                        <div class="app_input_container"><input type="text" class="app_input" id="reg_apellido" placeholder="Apellido" autocapitalize="sentences"></div>
                        <div class="app_input_container"><input type="tel" class="app_input" id="reg_tel" placeholder="Celular"></div>
                        <div id="registro_aceptarTerms">
                            <table>
                                <tr>
                                    <td><a id="aceptaTerminos"></a></td>
                                    <td>Acepto los términos y política de privacidad</td>
                                </tr>
                            </table>
                        </div>
                        <a class="app_button_red btn_44" id="btn_registrarse"><span class="btn_1_red"><span class="btn_2_red">REGISTRARSE</span></span></a>
                        <div id="login_terms_container">
                            <br><br>
                            Al usar esta app, aceptas las <a href="#page_terminos" class="btn_terms" data-transition="none">Condiciones</a> y la <a href="#page_privacidad" class="btn_terms" data-transition="none">política de privacidad</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE RESTABLECER PASS -->
            <div data-role="page" id="page_restablecer">
                <div class="page_head" id="head_restablecer">
                    <div class="page_head_title" id="title_restablecer"></div>
                    <a class="btn_back" href="#page_first" data-transition="none"></a>
                </div>
                <div class="page_content">
                    <div class="padding_10" id="restablecerweb">
                        Ingresa tu correo y te enviaremos tu contraseña.<br><br><br><br>
                        <div class="app_input_container"><input type="email" class="app_input" id="restab_email" placeholder="Correo" autocapitalize="none"></div>
                        <a class="app_button_red btn_44" id="btn_restablecer"><span class="btn_1_red"><span class="btn_2_red">ENVIAR CONTRASEÑA</span></span></a>
                    </div>
                </div>
                <div class="footer_web footer_web_fixed">
                    <div id="footer_left">
                        <table>
                            <tr>
                                <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                            </tr>
                            <tr>
                                <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                            </tr>
                        </table>
                    </div>
                    <div id="footer_right">
                        <div id="footer_nwslt">
                            <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                        </div>
                        <div id="footer_smm">
                            <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                            <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                            <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                        </div>
                        <div id="footer_modospago">
                            <img src="http://carnesmarket.co/images/web/modospago.png">
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE TÉRMINOS Y CONDICIONES -->
            <div data-role="page" id="page_terminos">
                <div class="page_head" id="head_terminos">
                    <div class="page_head_title" id="title_terminos"></div>
                    <a class="btn_displayMenu"></a>
                </div>
                <div class="page_content" id="page_content_terminos">
                    
                </div>
                <div class="footer_web footer_web_fixed">
                    <div id="footer_left">
                        <table>
                            <tr>
                                <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                            </tr>
                            <tr>
                                <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                            </tr>
                        </table>
                    </div>
                    <div id="footer_right">
                        <div id="footer_nwslt">
                            <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                        </div>
                        <div id="footer_smm">
                            <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                            <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                            <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                        </div>
                        <div id="footer_modospago">
                            <img src="http://carnesmarket.co/images/web/modospago.png">
                        </div>
                    </div>
                </div>
            </div>
            
            <div data-role="page" id="page_privacidad">
                <div class="page_head" id="head_terminos">
                    <div class="page_head_title" id="title_terminos"></div>
                    <a class="btn_displayMenu"></a>
                </div>
                <div class="page_content" id="page_content_privacidad">
                    
                </div>
                <div class="footer_web footer_web_fixed">
                    <div id="footer_left">
                        <table>
                            <tr>
                                <td class="footer_left_td"><a href="tel:+57315824846"><img src="http://carnesmarket.co/images/web/ico_whatsapp.png"></a></td>
                                <td class="footer_left_td"><a href="mailto:info@carnesmarket.co"><img src="http://carnesmarket.co/images/web/ico_contacto.png"></a></td>
                                <td class="footer_left_td"><a href="#page_terminos"><img src="http://carnesmarket.co/images/web/ico_info.png"></a></td>
                            </tr>
                            <tr>
                                <td class="footer_left_td"><a href="tel:+57315824846">315 824 8462</a></td>
                                <td class="footer_left_td"><a href="mailto:info@carnesmarket.co">info@carnesmarket.co</a></td>
                                <td class="footer_left_td"><a href="#page_terminos" data-transition="none">Términos y condiciones</a><br><a href="#page_privacidad" data-transition="none">Política de privacidad</a></td>
                            </tr>
                        </table>
                    </div>
                    <div id="footer_right">
                        <div id="footer_nwslt">
                            <div id="footer_nwslt_input">
                                    <div class="app_input_container">
                                        <input type="email" value="" name="EMAIL" class="required app_input" id="mce-EMAIL" placeholder="Suscríbete" autocapitalize="none">
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                                <div id="footer_nwslt_btn">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bdfacfee29b215e113270db8_fcb0f45ba8" tabindex="-1" value=""></div>
                                    <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="form_button">
                                </div>
                        </div>
                        <div id="footer_smm">
                            <a class="social_ico" href="https://www.facebook.com/CarnesMarket" target="_blank"><img src="http://carnesmarket.co/images/web/ico_fb.png"></a>
                            <a class="social_ico" href="https://www.instagram.com/carnesmarket/" target="_blank"><img src="http://carnesmarket.co/images/web/ico_igram.png"></a>
                            <a class="social_ico" href="https://www.youtube.com/channel/UChWs0OjiX0slqRWugmgWzAg" target="_blank"><img src="http://carnesmarket.co/images/web/ico_yt.png"></a>
                        </div>
                        <div id="footer_modospago">
                            <img src="http://carnesmarket.co/images/web/modospago.png">
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <script type="text/javascript" src="http://carnesmarket.co/js/app_user.js"></script>
        <script type="text/javascript">
            app.initialize();
        </script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB1d7U3aKAtzshaRflFqmQVva7QhnyyaA8&libraries=geometry&callback=initMap"
         async defer></script>
    </body>
</html>