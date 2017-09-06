<?php
    session_start();
    if(!$_SESSION["user_name"]){
        header("Location: index.php");
    }
    else {
?>
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
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async='async'></script>
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
            
            <!-- MENU SUPERIOR -->
            <div id="top_menu">
                <div id="menu_logo"></div>
                <div id="menu_items">
                    <a class="menu_item menu_item_active" id="menu_top_cobertura" href="#page_cobertura" data-transition="none">Cobertura</a>
                    <a class="menu_item" id="menu_top_sinCobertura" href="#page_sinCobertura" data-transition="none">Sin cobertura</a>
                    <a class="menu_item" id="menu_top_cupones" href="#page_cupones" data-transition="none">Cupones</a>
                    <a class="menu_item" id="menu_top_marcas" href="#page_marcas" data-transition="none">Marcas</a>
                    <a class="menu_item" id="menu_top_productos" href="#page_productos" data-transition="none">Productos</a>
                    <a class="menu_item" id="menu_top_push" href="#page_push" data-transition="none">PUSH</a>
                    <a class="menu_item" id="menu_top_pedidos" href="#page_pedidos" data-transition="none">Pedidos</a>
                    <a class="menu_item" id="menu_top_logout" data-transition="none">Salir</a>
                </div>
            </div>
            
            <!-- PAGE COBERTURA -->
            <div data-role="page" id="page_cobertura">
                <div class="page_content">
                    <div class="page_content_960">
                        <div class="full">
                            <div class="section_title">AGREGAR NUEVO</div>
                            <div class="input_container">
                                <input class="admin_input" type="text" id="cobertura_coords" placeholder="Coordenadas">
                            </div>
                            <div class="input_container">
                                <input class="admin_input" type="text" id="cobertura_descripcion" placeholder="Descripcion">
                            </div>
                            <div class="input_container">
                                <a class="app_button_red" id="btn_crearCobertura"><span class="btn_1_red"><span class="btn_2_red_30">CREAR</span></span></a>
                            </div>
                        </div>
                        <div class="full">
                            <div class="section_title">COBERTURA ACTUAL</div>
                                <div class="section_titles">
                                <div class="input_container table_title">COORDENADAS</div>
                                <div class="input_container table_title">DESCRIPCIÓN</div>
                                <div class="input_container table_title">ACCIONES</div>
                            </div>
                            <div class="full" id="cobertura_items">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE SIN COBERTURA -->
            <div data-role="page" id="page_sinCobertura">
                <div class="page_content">
                    <div class="page_content_960">
                        <div class="section_title">ZONAS SIN COBERTURA</div>
                        <div class="section_titles">
                            <div class="sinCobertura_item_date table_title">FECHA</div>
                            <div class="sinCobertura_item_dir table_title">DIRECCIÓN</div>
                            <div class="sinCobertura_item_action table_title">ACCIONES</div>
                        </div>
                        <div class="full" id="sinCobertura_items">
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE CUPONES -->
            <div data-role="page" id="page_cupones">
                <div class="page_content">
                    <div class="page_content_960">
                        <div class="full">
                            <div class="section_title">AGREGAR NUEVO</div>
                            <div class="input_container">
                                <input class="admin_input" type="text" id="cupon_cupon" placeholder="Cupón">
                            </div>
                            <div class="input_container">
                                <input class="admin_input" type="number" id="cupon_valor" placeholder="Valor">
                            </div>
                            <div class="input_container">
                                <input class="admin_input" type="text" id="cupon_descripcion" placeholder="Descripción">
                            </div>
                            <div class="input_container">
                                <input class="admin_input" type="date" id="cupon_expira" placeholder="Cupón">
                            </div>
                            <div class="input_container">
                                <select class="admin_input" id="cupon_primera">
                                    <option value="nan">¿Para primera compra?</option>
                                    <option value="0">NO</option>
                                    <option value="1">SI</option>
                                </select>
                            </div>
                            <div class="input_container">
                                <a class="app_button_red" id="btn_crearCupon"><span class="btn_1_red"><span class="btn_2_red_30">CREAR</span></span></a>
                            </div>
                        </div>
                        <div class="full">
                            <div class="section_title">CUPONES ACTUALES</div>
                            <div class="full" id="cupones_items">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE MARCAS -->
            <div data-role="page" id="page_marcas">
                <div class="page_content">
                    <div class="page_content_960">
                        <div class="full">
                            <div class="section_title">AGREGAR NUEVA</div>
                            <div class="input_container">
                                <input class="admin_input" type="text" id="marca_nombre" placeholder="Marca">
                            </div>
                            <div class="input_container">
                                <input class="admin_input" type="file" id="marca_imagen" placeholder="Imagen">
                            </div>
                            <div class="input_container">
                                <a class="app_button_red" id="btn_crearMarca"><span class="btn_1_red"><span class="btn_2_red_30">CREAR</span></span></a>
                            </div>
                        </div>
                        <div class="full">
                            <div class="section_title">MARCAS ACTUALES</div>
                            <div class="full" id="marcas_items">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE PRODUCTOS -->
            <div data-role="page" id="page_productos">
                <div class="page_content">
                    <div class="page_content_960">
                        <div class="full">
                            <div class="section_title">AGREGAR NUEVO</div>
                            <div class="input_container">
                                <input class="admin_input" type="number" id="producto_id_inventario" placeholder="ID Inventario">
                            </div>
                            <div class="input_container">
                                <select class="admin_input" id="producto_tipo">
                                    <option value="Cerdo">Cerdo</option>
                                    <option value="Charcutería">Charcutería</option>
                                    <option value="Pescado">Pescado</option>
                                    <option value="Pollo">Pollo</option>
                                    <option value="Res">Res</option>
                                    <option value="Promocion">Promocion</option>
                                </select>
                            </div>
                            <div class="input_container">
                                <select class="admin_input" id="producto_categoria">
                                    <option value="Magros cotidianos de cerdo">Magros cotidianos de cerdo</option>
                                    <option value="Costillas de cerdo">Costillas de cerdo</option>
                                    <option value="Charcutería de cerdo">Charcutería de cerdo</option>
                                    <option value="Chuletas de cerdo">Chuletas de cerdo</option>
                                    <option value="Prácticos de cerdo">Prácticos de cerdo</option>
                                </select>
                            </div>
                            <div class="input_container">
                                <select class="admin_input" id="producto_marca">
                                    
                                </select>
                            </div>
                            <div class="input_container">
                                <input class="admin_input" type="text" id="producto_nombre" placeholder="Nombre">
                            </div>
                            <div class="input_container">
                                <input class="admin_input" type="number" id="producto_presentacion" placeholder="Presentación">
                            </div>
                            <div class="input_container">
                                <input class="admin_input" type="number" id="producto_porciones" placeholder="Porciones">
                            </div>
                            <div class="input_container">
                                <input class="admin_input" type="number" id="producto_precio" placeholder="Precio">
                            </div>
                            <div class="input_container">
                                <input class="admin_input" type="number" id="producto_precio_dcto" placeholder="Precio en descuento">
                            </div>
                            <div class="input_container">
                                <input class="admin_input" type="text" id="producto_descripcion" placeholder="Descripcion">
                            </div>
                            <div class="input_container">
                                <select class="admin_input" id="producto_pack">
                                    <option value="Fitness">Fitness</option>
                                    <option value="Premium">Premium</option>
                                    <option value="Económico">Económico</option>
                                    <option value="Fitness, Premium">Fitness, Premium</option>
                                    <option value="Fitness, Económico">Fitness, Económico</option>
                                    <option value="Premium, Económico">Premium, Económico</option>
                                    <option value="Fitness, Premium, Económico">Fitness, Premium, Económico</option>
                                </select>
                            </div>
                            <div class="input_container">
                                <select class="admin_input" id="producto_promocionado">
                                    <option value="nan">¿Promocionado?</option>
                                    <option value="0">NO</option>
                                    <option value="1">SI</option>
                                </select>
                            </div>
                            <div class="input_container">
                                <input class="admin_input" type="file" id="producto_foto_remota" placeholder="Imagen">
                            </div>
                            <div class="full_actions">
                                <a class="app_button_red" id="btn_crearProducto"><span class="btn_1_red"><span class="btn_2_red_30">CREAR</span></span></a>
                            </div>
                        </div>
                        <div class="full">
                            <div class="section_title">PRODUCTOS ACTUALES</div>
                            <div id="productos_verTodos">
                                <a class="app_button_red" id="btn_prodfiltro_todos"><span class="btn_1_red"><span class="btn_2_red_30">VER TODOS</span></span></a>
                                <a class="app_button_red" id="btn_prodfiltro_desactivados"><span class="btn_1_red"><span class="btn_2_red_30">VER DESACTIVADOS</span></span></a>
                            </div>
                            <div id="productos_filtros">
                                <div class="productos_filtro_item">
                                    <div class="productos_filtro_item_input">
                                        <select class="admin_input" id="productos_filtro_tipo">
                                            <option value="Cerdo">Cerdo</option>
                                            <option value="Charcutería">Charcutería</option>
                                            <option value="Pescado">Pescado</option>
                                            <option value="Pollo">Pollo</option>
                                            <option value="Res">Res</option>
                                            <option value="Promocion">Promocion</option>
                                        </select>
                                    </div>
                                    <div class="productos_filtro_item_btn">
                                        <a class="app_button_red" id="btn_prodfiltro_tipo"><span class="btn_1_red"><span class="btn_2_red_30">FILTRAR</span></span></a>
                                    </div>
                                </div>
                                <div class="productos_filtro_item">
                                    <div class="productos_filtro_item_input">
                                        <select class="admin_input" id="productos_filtro_categorias">
                                            <option value="Magros cotidianos de cerdo">Magros cotidianos de cerdo</option>
                                            <option value="Costillas de cerdo">Costillas de cerdo</option>
                                            <option value="Charcutería de cerdo">Charcutería de cerdo</option>
                                            <option value="Chuletas de cerdo">Chuletas de cerdo</option>
                                            <option value="Prácticos de cerdo">Prácticos de cerdo</option>
                                            <option value="Charcutería de cerdo">Charcutería de cerdo</option>
                                            <option value="Charcutería de res">Charcutería de res</option>
                                            <option value="Charcutería de pollo">Charcutería de pollo</option>
                                            <option value="Charcutería de pavo">Charcutería de pavo</option>
                                            <option value="Charcutería Koller">Charcutería Koller</option>
                                            <option value="Pescados">Pescados</option>
                                            <option value="Mariscos">Mariscos</option>
                                            <option value="Cotidianos de pollo">Cotidianos de pollo</option>
                                            <option value="Filetes de pollo">Filetes de pollo</option>
                                            <option value="Charcutería de pollo">Charcutería de pollo</option>
                                            <option value="Cortes Premium de res">Cortes Premium de res</option>
                                            <option value="Parrilla de res">Parrilla de res</option>
                                            <option value="Cotidianos de res">Cotidianos de res</option>
                                            <option value="Prácticos de res">Prácticos de res</option>
                                            <option value="Charcutería de res">Charcutería de res</option>
                                        </select>
                                    </div>
                                    <div class="productos_filtro_item_btn">
                                        <a class="app_button_red" id="btn_prodfiltro_cats"><span class="btn_1_red"><span class="btn_2_red_30">FILTRAR</span></span></a>
                                    </div>
                                </div>
                                <div class="productos_filtro_item">
                                    <div class="productos_filtro_item_input">
                                        <select class="admin_input" id="productos_filtro_marcas"></select>
                                    </div>
                                    <div class="productos_filtro_item_btn">
                                        <a class="app_button_red" id="btn_prodfiltro_marcas"><span class="btn_1_red"><span class="btn_2_red_30">FILTRAR</span></span></a>
                                    </div>
                                </div>
                                <div class="productos_filtro_item">
                                    <div class="productos_filtro_item_input">
                                        <select class="admin_input" id="productos_filtro_promocionado">
                                            <option value="1">Más vendidos</option>
                                            <option value="0">Otros</option>
                                        </select>
                                    </div>
                                    <div class="productos_filtro_item_btn">
                                        <a class="app_button_red" id="btn_prodfiltro_prom"><span class="btn_1_red"><span class="btn_2_red_30">FILTRAR</span></span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="section_titles">
                                <div class="producto_item_id_inventario table_title">ID INVENTARIO</div>
                                <div class="producto_item_tipo table_title">TIPO</div>
                                <div class="producto_item_marca table_title">MARCA</div>
                                <div class="producto_item_nombre table_title">NOMBRE</div>
                                <div class="producto_item_presentacion table_title">PRESENTACION</div>
                                <div class="producto_item_acciones table_title">ACCIONES</div>
                            </div>
                            <div class="full" id="productos_items">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE PRODUCTO INTERNA -->
            <div data-role="page" id="page_producto_interna">
                <div class="page_content">
                    <div class="page_content_960">
                        <div class="full">
                            <div class="section_title" id="producto_estado"></div>
                            <div id="interna_imagen"></div>
                            <div class="input_container">
                                ID Inventario
                                <input class="admin_input" type="number" id="edit_producto_id_inventario" placeholder="ID Inventario">
                            </div>
                            <div class="input_container">
                                Tipo
                                <select class="admin_input" id="edit_producto_tipo">
                                    <option value="Cerdo">Cerdo</option>
                                    <option value="Charcutería">Charcutería</option>
                                    <option value="Pescado">Pescado</option>
                                    <option value="Pollo">Pollo</option>
                                    <option value="Res">Res</option>
                                    <option value="Promocion">Promocion</option>
                                </select>
                            </div>
                            <div class="input_container">
                                Categoría
                                <select class="admin_input" id="edit_producto_categoria">
                                    <option value="Magros cotidianos de cerdo">Magros cotidianos de cerdo</option>
                                    <option value="Costillas de cerdo">Costillas de cerdo</option>
                                    <option value="Charcutería de cerdo">Charcutería de cerdo</option>
                                    <option value="Chuletas de cerdo">Chuletas de cerdo</option>
                                    <option value="Prácticos de cerdo">Prácticos de cerdo</option>
                                    <option value="Charcutería de cerdo">Charcutería de cerdo</option>
                                    <option value="Charcutería de res">Charcutería de res</option>
                                    <option value="Charcutería de pollo">Charcutería de pollo</option>
                                    <option value="Charcutería de pavo">Charcutería de pavo</option>
                                    <option value="Charcutería Koller">Charcutería Koller</option>
                                    <option value="Pescados">Pescados</option>
                                    <option value="Mariscos">Mariscos</option>
                                    <option value="Cotidianos de pollo">Cotidianos de pollo</option>
                                    <option value="Filetes de pollo">Filetes de pollo</option>
                                    <option value="Charcutería de pollo">Charcutería de pollo</option>
                                    <option value="Cortes Premium de res">Cortes Premium de res</option>
                                    <option value="Parrilla de res">Parrilla de res</option>
                                    <option value="Cotidianos de res">Cotidianos de res</option>
                                    <option value="Prácticos de res">Prácticos de res</option>
                                    <option value="Charcutería de res">Charcutería de res</option>
                                    
                                </select>
                            </div>
                            <div class="input_container">
                                Marca
                                <select class="admin_input" id="edit_producto_marca">
                                    
                                </select>
                            </div>
                            <div class="input_container">
                                Nombre
                                <input class="admin_input" type="text" id="edit_producto_nombre" placeholder="Nombre">
                            </div>
                            <div class="input_container">
                                Presentación
                                <input class="admin_input" type="number" id="edit_producto_presentacion" placeholder="Presentación">
                            </div>
                            <div class="input_container">
                                Porciones
                                <input class="admin_input" type="number" id="edit_producto_porciones" placeholder="Porciones">
                            </div>
                            <div class="input_container">
                                Precio
                                <input class="admin_input" type="number" id="edit_producto_precio" placeholder="Precio">
                            </div>
                            <div class="input_container">
                                Precio en descuento
                                <input class="admin_input" type="number" id="edit_producto_precio_dcto" placeholder="Precio en descuento">
                            </div>
                            <div class="input_container">
                                Descripcion
                                <input class="admin_input" type="text" id="edit_producto_descripcion" placeholder="Descripcion">
                            </div>
                            <div class="input_container">
                                Pack
                                <select class="admin_input" id="edit_producto_pack">
                                    <option value="Fitness">Fitness</option>
                                    <option value="Premium">Premium</option>
                                    <option value="Económico">Económico</option>
                                    <option value="Fitness, Premium">Fitness, Premium</option>
                                    <option value="Fitness, Económico">Fitness, Económico</option>
                                    <option value="Premium, Económico">Premium, Económico</option>
                                    <option value="Fitness, Premium, Económico">Fitness, Premium, Económico</option>
                                </select>
                            </div>
                            <div class="input_container">
                                ¿Promocionado?
                                <select class="admin_input" id="edit_producto_promocionado">
                                    <option value="0">NO</option>
                                    <option value="1">SI</option>
                                </select>
                            </div>
                            <div class="input_container">
                                Imagen
                                <input class="admin_input" type="file" id="edit_producto_foto_remota" placeholder="Imagen">
                            </div>
                            <div class="full_actions">
                                <a class="app_button_red" id="btn_actualizarProducto"><span class="btn_1_red"><span class="btn_2_red_30">ACTUALIZAR</span></span></a>
                                <a class="app_button_red" id="btn_activarProducto"><span class="btn_1_red"><span class="btn_2_red_30">ACTIVAR</span></span></a>
                                <a class="app_button_black" id="btn_desactivarProducto"><span class="btn_1_red"><span class="btn_2_black">DESACTIVAR</span></span></a>
                                <a class="app_button_black" id="btn_eliminarProducto"><span class="btn_1_red"><span class="btn_2_black">ELIMINAR</span></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE PUSH -->
            <div data-role="page" id="page_push">
                <div class="page_content">
                    <div class="page_content_960">
                        <div class="section_title">ENVIAR NOTIFICACION</div>
                        <div class="full" id="notificacion_cont">
                            <div class="notif_container">
                                <input class="admin_input" type="text" id="notificacion_text" placeholder="Notificación">
                                <br><br>
                                <div class="half_first">
                                    <select class="admin_input" id="notificacion_seccion">
                                        <option value="nan">Selecciona una opción</option>

                                        <option value="producto">Producto específico</option>

                                        <option value="promociones">Promociones</option>

                                        <option value="cerdo">Sección cerdo</option>
                                        <option value="res">Sección res</option>
                                        <option value="pollo">Sección pollo</option>
                                        <option value="pez">Sección pez</option>
                                        <option value="charcuteria">Sección charcutería</option>
                                        <option value="chef">Sección chef</option>

                                        <option value="Magros cotidianos de cerdo">Magros cotidianos de cerdo</option>
                                        <option value="Costillas de cerdo">Costillas de cerdo</option>
                                        <option value="Charcutería de cerdo">Charcutería de cerdo</option>
                                        <option value="Chuletas de cerdo">Chuletas de cerdo</option>
                                        <option value="Prácticos de cerdo">Prácticos de cerdo</option>

                                        <option value="Cortes Premium de res">Cortes Premium de res</option>
                                        <option value="Parrilla de res">Parrilla de res</option>
                                        <option value="Cotidianos de res">Cotidianos de res</option>
                                        <option value="Prácticos de res">Prácticos de res</option>
                                        <option value="Charcutería de res">Charcutería de res</option>

                                        <option value="Cotidianos de pollo">Cotidianos de pollo</option>
                                        <option value="Filetes de pollo">Filetes de pollo</option>
                                        <option value="Charcutería de pollo">Charcutería de pollo</option>

                                        <option value="Pescados">Pescados</option>
                                        <option value="Mariscos">Mariscos</option>

                                        <option value="Charcutería de cerdo">Charcutería de cerdo</option>
                                        <option value="Charcutería de res">Charcutería de res</option>
                                        <option value="Charcutería de pollo">Charcutería de pollo</option>
                                        <option value="Charcutería de pavo">Charcutería de pavo</option>
                                        <option value="Charcutería Koller">Charcutería Koller</option>
                                    </select>
                                </div>
                                <div class="half_last">
                                    <input class="admin_input" type="text" id="notificacion_idproducto" placeholder="ID del producto">
                                </div>
                            </div>
                            <div class="full_actions">
                                <a class="app_button_red" id="btn_enviarNotificacion"><span class="btn_1_red"><span class="btn_2_red_30">ENVIAR</span></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE PEDIDOS -->
            <div data-role="page" id="page_pedidos">
                <div class="page_content">
                    <div class="page_content_960">
                        <div class="half pedidos_container">
                            <div class="buscar_container">
                                <input class="admin_input" type="number" id="buscar_pedidoId" placeholder="Buscar por ID">
                            </div>
                            <div class="buscar_btn_container">
                                <a class="app_button_red" id="btn_buscarPedidoId"><span class="btn_1_red"><span class="btn_2_red_30">BUSCAR</span></span></a>
                            </div>
                        </div>
                        <div class="half pedidos_container">
                            <div class="buscar_container_1">
                                <input class="admin_input" type="date" id="buscar_pedidoFecha1">
                            </div>
                            <div class="buscar_container_2">
                                <input class="admin_input" type="date" id="buscar_pedidoFecha2">
                            </div>
                            <div class="buscar_container_3">
                                <a class="app_button_red" id="btn_buscarPedidoFecha"><span class="btn_1_red"><span class="btn_2_red_30">BUSCAR</span></span></a>
                            </div>
                        </div>
                        <div class="full" id="descargar_pedidos_cont">
                            <a class="app_button_black" id="btn_generarArchivo"><span class="btn_1_red"><span class="btn_2_black">DESCARGAR PEDIDOS</span></span></a>
                        </div>
                        <div class="section_titles" id="section_titles_pedidos">
                            <div class="pedido_item_id table_title">ID</div>
                            <div class="pedido_item_fecha table_title">FECHA</div>
                            <div class="pedido_item_user table_title">USUARIO</div>
                            <div class="pedido_item_estado table_title">ESTADO</div>
                            <div class="pedido_item_total table_title">TOTAL</div>
                            <div class="pedido_item_modoPago table_title">MODO PAGO</div>
                            <div class="pedido_item_acciones table_title">ACCIONES</div>
                        </div>
                        <div class="full" id="pedidos_items">
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PAGE PEDIDO DETALLE -->
            <div data-role="page" id="page_pedido_detalle">
                <div class="page_content">
                    <div class="page_content_960">
                        <div id="pedido_detalle_id"></div>
                        <div id="pedido_detalle_fecha"></div>
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
                                <div class="carrito_3_datos_title">CLIENTE</div>
                                <div class="carrito_3_datos_text" id="pedido_datos_cliente"></div>
                            </div>
                            <div class="half border_red_left">
                                <div class="carrito_3_datos_title">Teléfono</div>
                                <div class="carrito_3_datos_text" id="pedido_datos_telefono"></div>
                            </div>
                            <div class="half border_red_right">
                                <div class="carrito_3_datos_title">Email</div>
                                <div class="carrito_3_datos_text" id="pedido_datos_email"></div>
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
                        <div class="full" id="pedido_detalle_footer">
                            <div class="full">
                                <a class="app_button_black" id="btn_generarArchivoUnit"><span class="btn_1_red"><span class="btn_2_black">DESCARGAR</span></span></a>
                                <a class="app_button_black" id="btn_reversarPago"><span class="btn_1_red"><span class="btn_2_black">REVERSAR PAGO</span></span></a>
                                <a class="app_button_red" id="btn_finalizar"><span class="btn_1_red"><span class="btn_2_red_30">ENTREGAR PEDIDO</span></span></a>
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
        <!--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB1d7U3aKAtzshaRflFqmQVva7QhnyyaA8&libraries=geometry&callback=initMap"
         async defer></script>-->
    </body>
</html>
<?php
    }
?>