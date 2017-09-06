// GLOBALS
var OneSignal = window.OneSignal || [];

// Servidor
var server_url = "http://carnesmarket.co/apps/carnesmarket/php/app.php";
var server_payment = "http://carnesmarket.co/apps/carnesmarket/php/payments.php";
var server_payment_pse = "http://carnesmarket.co/apps/carnesmarket/php/payments_pse.php";

// Verificadores de inicialización
var masVendidos_loaded = false;
var marcas_loaded = false;
var franquicias_loaded = false;
var promos_loaded = false;

// Canasta
var canasta = []; // [id, cantidad, id_inventario, nombre, precio, categoria, marca, presentacion, imagen]
var canastaPedido = [];
var localCanasta = localStorage.localcanasta;
if(localCanasta){
    canasta = JSON.parse(localCanasta);
}
var map;
var geocoder;
var posInited = false;
var coordenadasEntrega = ""; // Coordenadas de Entrega
var g_cobertura = false;
var g_cupoDisponible = false;

// Chef
var productos_chef = [];
var porciones_chef = 0;
var productosVariedad = [];
var productosPremium = [];
var productosFit = [];
var productosEconomico = [];
var chef_actual;

// Cupon
var cupon = {
    id: 0,
    valido: false,
    valor: 0
};

// Cookie
var cookie = "";

// Historial de direcciones
var historialDirecciones = [];
var esNuevaDireccion = true;

var headerPosition;

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        window.addEventListener('load', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ----------           INIT           ----------- */
        
        // Obtener variables de URL
        if(url_pse !== null){
            console.log(url_pse);
            checkPSEstatus(parseInt(url_pse));
        }
        if(url_producto !== null){
            console.log(url_producto);
            load_product(parseInt(url_producto));
        }
        else if(url_marca !== null) {
            var marca_text = url_marca.replace(/_/g, " ");
            console.log(marca_text);
            load_products_byBrand(marca_text);
        }
        else if(url_categoria !== null) {
            console.log(url_categoria);
            switch(url_categoria){
                case "magros_cotidianos_de_cerdo":
                    load_products_byCat("Magros cotidianos de cerdo");
                    break;
                case "costillas_de_cerdo":
                    load_products_byCat("Costillas de cerdo");
                    break;
                case "charcuteria_de_cerdo":
                    load_products_byCat("Charcutería de cerdo");
                    break;
                case "chuletas_de_cerdo":
                    load_products_byCat("Chuletas de cerdo");
                    break;
                case "practicos_de_cerdo":
                    load_products_byCat("Prácticos de cerdo");
                    break;
                case "cortes_premium_de_res":
                    load_products_byCat("Cortes Premium de res");
                    break;
                case "parrilla_de_res":
                    load_products_byCat("Parrilla de res");
                    break;
                case "cotidianos_de_res":
                    load_products_byCat("Cotidianos de res");
                    break;
                case "practicos_de_res":
                    load_products_byCat("Prácticos de res");
                    break;
                case "charcuteria_de_res":
                    load_products_byCat("Charcutería de res");
                    break;
                case "cotidianos_de_pollo":
                    load_products_byCat("Cotidianos de pollo");
                    break;
                case "filetes_de_pollo":
                    load_products_byCat("Filetes de pollo");
                    break;
                case "charcuteria_de_pollo":
                    load_products_byCat("Charcutería de pollo");
                    break;
                case "pescados":
                    load_products_byCat("Pescados");
                    break;
                case "mariscos":
                    load_products_byCat("Mariscos");
                    break;
                case "charcuteria_de_cerdo":
                    load_products_byCat("Charcutería de cerdo");
                    break;
                case "charcuteria_de_res":
                    load_products_byCat("Charcutería de res");
                    break;
                case "charcuteria_de_pollo":
                    load_products_byCat("Charcutería de pollo");
                    break;
                case "charcuteria_de_pavo":
                    load_products_byCat("Charcutería de pavo");
                    break;
                case "charcuteria_koller":
                    load_products_byCat("Charcutería Koller");
                    break;
            }
        }
        else if(url_tipo !== null) {
            console.log(url_tipo);
            switch(url_tipo){
                case "cerdo":
                    $(':mobile-pagecontainer').pagecontainer('change', '#page_categoria_cerdo', {transition: 'none'});
                    break;
                case "res":
                    $(':mobile-pagecontainer').pagecontainer('change', '#page_categoria_res', {transition: 'none'});
                    break;
                case "pollo":
                    $(':mobile-pagecontainer').pagecontainer('change', '#page_categoria_pollo', {transition: 'none'});
                    break;
                case "pez":
                    $(':mobile-pagecontainer').pagecontainer('change', '#page_categoria_pez', {transition: 'none'});
                    break;
                case "charcuteria":
                    $(':mobile-pagecontainer').pagecontainer('change', '#page_categoria_charc', {transition: 'none'});
                    break;
                case "sugerencias_del_chef":
                    $(':mobile-pagecontainer').pagecontainer('change', '#page_chef', {transition: 'none'});
                    break;
                case "carrito":
                    $(':mobile-pagecontainer').pagecontainer('change', '#page_canasta_1', {transition: 'none'});
                    break;
                case "marcas":
                    $(':mobile-pagecontainer').pagecontainer('change', '#page_marcas', {transition: 'none'});
                    load_marcas();
                    break;
                case "promociones":
                    $(':mobile-pagecontainer').pagecontainer('change', '#page_promos', {transition: 'none'});
                    load_promos();
                    break;
                case "terminos_y_condiciones":
                    $(':mobile-pagecontainer').pagecontainer('change', '#page_terminos', {transition: 'none'});
                    load_promos();
                    break;
                case "politicas_privacidad":
                    $(':mobile-pagecontainer').pagecontainer('change', '#page_privacidad', {transition: 'none'});
                    load_promos();
                    break;
            }
        }
        
        // Procesos de inicialización
        startapp();
        load_masVendidos();
        reload_canasta();
        $( "#pedido_fechaEntrega" ).datepicker({dateFormat: 'yy-mm-dd'});
        
        OneSignal.push(["init", {
            appId: "46bc8e1c-43ff-4373-83ce-79c76f8a3b2c",
            autoRegister: false, /* Set to true to automatically prompt visitors */
            subdomainName: 'https://carnesmarket.onesignal.com',   
            notifyButton: {
                enable: false /* Set to false to hide */
            }
        }]);
        
        // Añadir términos y condiciones
        $("#page_content_terminos").html('<iframe class="terminos_iframe" src="http://carnesmarket.co/apps/carnesmarket/terms/terminosycondicionesweb.html"></iframe>');
        // Añadir política de privacidad
        $("#page_content_privacidad").html('<iframe class="terminos_iframe" src="http://carnesmarket.co/apps/carnesmarket/terms/politicaprivacidadweb.html"></iframe>');
        
        // Chat
        if($(document).width() < 960){
            $zopim(function() {
                $zopim.livechat.button.hide();
            });
        }
        else {
            $zopim(function() {
                $zopim.livechat.button.show();
            });
        }
        $(".contact_chat").on( "click", function( event ) {
            $zopim(function() {
                $zopim.livechat.button.show();
            });
        });
        
        /*
        // Sticky header en home
        headerPosition = $('#menu_web_home').offset().top;
        $('.page_content_tienda').scroll(function(){
            if( $('.page_content_tienda').scrollTop() >= headerPosition ) {
                $('#menu_web_home').addClass("fixedmenu");
            } else {
                $('#menu_web_home').removeClass("fixedmenu")
            }
        });
        */
        $(".logo_linkhome").on( "click", function( event ) {
            window.location.replace("http://carnesmarket.co/");
        });
        
        // Alertas
        // Borrar direccion
        $("#alert_buttons").on( "click", "#btn_closeAlert", function( event ) {
            alertDismissed();
        });
        // Ir a modo de pago
        $("#alert_buttons").on( "click", "#btn_gotoModoPago_web", function( event ) {
            if(franquicias_loaded){
                $(':mobile-pagecontainer').pagecontainer('change', '#page_modopago', {transition: 'none'});
                alertDismissed();
            }
            else {
                getPaymentMethods();
            }
        });
        // Ir a registro
        $("#alert_buttons").on( "click", "#btn_gotoRegistro_web", function( event ) {
            $(':mobile-pagecontainer').pagecontainer('change', '#page_login', {transition: 'none'});
            alertDismissed();
        });
        
        
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ----------          LOGIN           ----------- */
        
        // Toggle aceptar terminos
        $("#aceptaTerminos").on( "click", function( event ) {
            $(this).toggleClass("aceptaTerminos_selected");
        });
        
        $("#btn_iniciarSesion").on( "click", function( event ) {
            var login_user = $("#login_user").val();
            var login_pass = $("#login_pass").val();
            var installationId = "web_user";
            var onesignalPlayerID = "";
            var loginData = [login_user, login_pass, installationId, onesignalPlayerID];
            if(login_user.trim().length >= 4 && login_pass.trim().length >= 6){
                show_loading();
                var data = {
                    "action": "login",
                    "loginData": loginData
                };
                $.ajax({ url: server_url,
                    data: data,
                    type: 'POST',
                    dataType: 'json',
                    success: function(output) {
                        if(output.error){
                            showErrorServer();
                        }
                        else if(output.vacio) {
                            showErrorAlert('Usuario o contraseña incorrectos.');
                        }
                        else {
                            localStorage.setItem("sessionToken", output.sessionToken);
                            localStorage.setItem("id", output.id);
                            localStorage.setItem("username", output.username);
                            localStorage.setItem("email", output.email);
                            localStorage.setItem("notifications", output.notifications);
                            localStorage.setItem("name", output.name);
                            localStorage.setItem("lastname", output.lastname);
                            localStorage.setItem("phone", output.phone);
                            localStorage.setItem("addresses", output.addresses);
                            localStorage.setItem("profilePic", output.profilePic);
                            localStorage.setItem("profilePicFacebook", output.profilePicFacebook);
                            localStorage.setItem("gender", output.gender);
                            localStorage.setItem("modoPago", output.modoPago);

                            // Iniciar
                            startapp();
                            $(':mobile-pagecontainer').pagecontainer('change', '#page_tienda', {transition: 'none'});
                        }
                        hide_loading();
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        showErrorServer();
                    }
                });
            }
            else {
                showErrorAlert('Completa todos los campos. Usuario mín. 4 caracteres. Contraseña mín. 6 caracteres.');
            }
        });
        
        
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ----------         REGISTRO         ----------- */
        
        $("#btn_registrarse").on( "click", function( event ) {
            // Recoger variables
            var reg_username = $("#reg_user").val();
            var reg_pass = $("#reg_pass").val();
            var reg_correo = $("#reg_email").val();
            var reg_nombre = $("#reg_nombre").val();
            var reg_apellido = $("#reg_apellido").val();
            var reg_tel = $("#reg_tel").val();
            var installationId = "web_user";
            var emailfilter = /\S+@\S+\.\S+/;
            
            // Validaciones
            var validado = true;
            
            if(reg_username.trim().length < 4 || reg_username.trim().length > 20){
                validado = false;
                showErrorAlert('El nombre de usuario debe tener mínimo 4 caracteres y máximo 20.');
                return;
            }
            if(reg_pass.trim().length < 6){
                validado = false;
                showErrorAlert('La contraseña debe tener mínimo 6 caracteres.');
                return;
            }
            
            if (!emailfilter.test(reg_correo)) {
                validado = false;
                showErrorAlert('Ingresa un correo válido.');
                return;
            }
            
            if(reg_nombre.trim().length < 2){
                validado = false;
                showErrorAlert('Ingresa tu nombre.');
                return;
            }
            
            if(reg_apellido.trim().length < 2){
                validado = false;
                showErrorAlert('Ingresa tu apellido.');
                return;
            }
            
            if(reg_tel.trim().length != 10){
                validado = false;
                showErrorAlert('Ingresa un celular válido de 10 dígitos.');
                return;
            }
            
            if($("#aceptaTerminos").hasClass("aceptaTerminos_selected") == false) {
                validado = false;
                showErrorAlert('Debes aceptar los términos y condiciones para registrarte.');
                return;
            }
            
            if(validado){
                var onesignalPlayerID = "";
                var registroData = [reg_username, reg_pass, reg_correo, reg_nombre, reg_apellido, reg_tel, installationId, onesignalPlayerID];
                show_loading();
                var data = {
                    "action": "register",
                    "registroData": registroData
                };
                $.ajax({ url: server_url,
                    data: data,
                    type: 'POST',
                    dataType: 'json',
                    success: function(output) {
                        if(output.error){
                            showErrorServer();
                        }
                        else if(output.duplicado) {
                            if(output.duplicadoKey == "username"){
                                showErrorAlert('Usuario ya existente.');
                            }
                            else if(output.duplicadoKey == "email") {
                                showErrorAlert('Correo ya existente.');
                            }
                            else {
                                showErrorAlert('Una cuenta con estos datos ya existe.');
                            }
                        }
                        else {
                            localStorage.setItem("sessionToken", output.sessionToken);
                            localStorage.setItem("id", output.id);
                            localStorage.setItem("username", output.username);
                            localStorage.setItem("email", output.email);
                            localStorage.setItem("notifications", output.notifications);
                            localStorage.setItem("name", output.name);
                            localStorage.setItem("lastname", output.lastname);
                            localStorage.setItem("phone", output.phone);
                            startapp();
                            $(':mobile-pagecontainer').pagecontainer('change', '#page_tienda', {transition: 'none'});
                        }
                        hide_loading();
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        showErrorServer();
                        hide_loading();
                    }
                });
            }
        });
        
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ----------      FACEBOOK LOGIN      ----------- */
        
        $("#btn_iniciarfacebook, #btn_iniciarfacebook_home").on( "click", function( event ) {
            show_loading();
            // Conectar con facebook y pedir permisos
            FB.login(function(response) {
                // Login correcto con facebook, obtener datos
                var userId = response.authResponse.userID;
                var accessToken = response.authResponse.accessToken;
                var expiresIn = parseInt(response.authResponse.expiresIn);
                var installationId = "web_user";
                var onesignalPlayerID = "";
                if (response.status === 'connected') {
                    // Logged into your app and Facebook.
                    FB.api("/me?fields=id,first_name,last_name,email,picture.height(480).width(480)", function(result) {
                        var fb_name = result.first_name;
                        var fb_lastname = result.last_name;
                        var fb_email = result.email;
                        var fb_picture = result.picture.data.url;
                        var fbLoginData = [userId, accessToken, expiresIn, fb_name, fb_lastname, fb_email, fb_picture, installationId, onesignalPlayerID];
                        var data = {
                            "action": "loginFB",
                            "fbLoginData": fbLoginData
                        };
                        $.ajax({ url: server_url,
                            data: data,
                            type: 'POST',
                            dataType: 'json',
                            success: function(output) {
                                if(output.error){
                                    showErrorServer();
                                }
                                else if(output.duplicado) {
                                    if(output.duplicadoKey == "username"){
                                        showErrorAlert('Usuario ya existente.');
                                    }
                                    else if(output.duplicadoKey == "email") {
                                        showErrorAlert('Correo ya existente.');
                                    }
                                    else {
                                        showErrorAlert('Una cuenta con estos datos ya existe.');
                                    }
                                }
                                else {
                                    if(output.login){
                                        localStorage.setItem("sessionToken", output.sessionToken);
                                        localStorage.setItem("id", output.id);
                                        localStorage.setItem("username", output.username);
                                        localStorage.setItem("email", output.email);
                                        localStorage.setItem("notifications", output.notifications);
                                        localStorage.setItem("name", output.name);
                                        localStorage.setItem("lastname", output.lastname);
                                        localStorage.setItem("phone", output.phone);
                                        localStorage.setItem("addresses", output.addresses);
                                        localStorage.setItem("profilePic", output.profilePic);
                                        localStorage.setItem("profilePicFacebook", output.profilePicFacebook);
                                        localStorage.setItem("gender", output.gender);
                                        localStorage.setItem("modoPago", output.modoPago);
                                    }
                                    else {
                                        localStorage.setItem("sessionToken", output.sessionToken);
                                        localStorage.setItem("id", output.id);
                                        localStorage.setItem("username", output.username);
                                        localStorage.setItem("email", output.email);
                                        localStorage.setItem("notifications", output.notifications);
                                        localStorage.setItem("name", output.name);
                                        localStorage.setItem("lastname", output.lastname);
                                        localStorage.setItem("profilePicFacebook", output.profilePicFacebook);
                                    }
                                    startapp();
                                    $(':mobile-pagecontainer').pagecontainer('change', '#page_tienda', {transition: 'none'});
                                }
                                hide_loading();
                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                                showErrorServer();
                            }
                        });
                    });
                } else if (response.status === 'not_authorized') {
                    // The person is logged into Facebook, but not your app.
                    showAlertWithTitle('Se ha cancelado el inicio con facebook.', 'Cancelado');
                } else {
                    // The person is not logged into Facebook, so we're not sure if
                    // they are logged into this app or not.
                    showAlertWithTitle('Se ha cancelado el inicio con facebook.', 'Cancelado');
                }
            });
        });
        
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ----------     RESTABLECER PASS     ----------- */
        
        $("#btn_restablecer").on( "click", function( event ) {
            var recoveryEmail = $("#restab_email").val();
            var emailfilter = /\S+@\S+\.\S+/;
            if (emailfilter.test(recoveryEmail)) {
                var installationId = "web_user";
                var recoverData = [recoveryEmail, installationId];
                show_loading();
                var data = {
                    "action": "recoveryPassword",
                    "recoverData": recoverData
                };
                $.ajax({ url: server_url,
                    data: data,
                    type: 'POST',
                    dataType: 'json',
                    success: function(output) {
                        if(output.error){
                            showErrorServer();
                        }
                        else if(output.vacio) {
                            showErrorAlert('Este correo no se encuentra registrado.');
                        }
                        else {
                            showAlertWithTitle('Te hemos enviado un correo con las instrucciones para restablecer tu contraseña.', 'Enviado');
                        }
                        hide_loading();
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        showErrorServer();
                    }
                });
            }
            else {
                showErrorAlert('Ingresa un correo válido.');
            }
        });
        
        
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ----------           MENÚ           ----------- */
        
        // Menú inferior
        $(".menu_bottom_btn").on( "click", function( event ) {
            if($(this).attr("id") == "menu_bottom_tienda"){
                $(".menu_tienda_btn").removeClass("menu_tienda_btn_selected");
                $('#menu_tienda').show();
                if(!masVendidos_loaded){
                    load_masVendidos();
                }
            }
            else {
                $('#menu_tienda').hide();
            }
            $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
            $(this).addClass("menu_bottom_btn_selected");
        });
        
        // Menú superior de categorías
        $(".menu_tienda_btn").on( "click", function( event ) {
            $(".menu_tienda_btn").removeClass("menu_tienda_btn_selected");
            $(this).addClass("menu_tienda_btn_selected");
            $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
            $("#menu_bottom_tienda").addClass("menu_bottom_btn_selected");
            
            // Cambiar url
            var actualID = $(this).attr("id");
            var urlfinal;
            switch(actualID){
                case "menu_tienda_cerdo":
                    urlfinal = "cerdo";
                    break;
                case "menu_tienda_res":
                    urlfinal = "res";
                    break;
                case "menu_tienda_pollo":
                    urlfinal = "pollo";
                    break;
                case "menu_tienda_pez":
                    urlfinal = "pez";
                    break;
                case "menu_tienda_charc":
                    urlfinal = "charcuteria";
                    break;
            }
            history.pushState(null, null, "/"+urlfinal);
        });
        $(".menu_gotochef").on( "click", function( event ) {
            $('#menu_tienda').hide();
            $(".menu_tienda_btn").removeClass("menu_tienda_btn_selected");
            history.pushState(null, null, "/sugerencias_del_chef");
        });
        
        // Para saber que pagina se cargó
        $( document ).on( "pagecontainershow", function ( event, ui ) {
            var activePage = $.mobile.pageContainer.pagecontainer( "getActivePage" );
            var pageID = activePage[0].id;
            
            // Si es la página de marcas, quitar el menú
            if (pageID == "page_marcas") {
                $('#menu_tienda').hide();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                $("#menu_bottom_marcas").addClass("menu_bottom_btn_selected");
                if(!marcas_loaded){
                    load_marcas();
                }
                history.pushState(null, null, "/marcas");
            }
            else if (pageID == "page_promos") {
                $('#menu_tienda').hide();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                $("#menu_bottom_promos").addClass("menu_bottom_btn_selected");
                history.pushState(null, null, "/promociones");
            }
            else if (pageID == "page_terminos") {
                $('#menu_tienda').hide();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                history.pushState(null, null, "/terminos_y_condiciones");
            }
            else if (pageID == "page_privacidad") {
                $('#menu_tienda').hide();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                history.pushState(null, null, "/politicas_privacidad");
            }
            else if (pageID == "page_canasta_1" || pageID == "page_canasta_2" || pageID == "page_canasta_map" || pageID == "page_canasta_3" || pageID == "page_canasta_4" || pageID == "page_canasta_direcciones" || pageID == "page_perfilDirecciones" || pageID == "page_completarPerfil") {
                $('#menu_tienda').hide();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
            }
            else if (pageID == "page_pedidos") {
                $('#menu_tienda').hide();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                $("#menu_bottom_pedidos").addClass("menu_bottom_btn_selected");
                history.pushState(null, null, "/mis_pedidos");
            }
            else if (pageID == "page_pedidos_detalle") {
                $('#menu_tienda').hide();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                $("#menu_bottom_pedidos").addClass("menu_bottom_btn_selected");
            }
            else if (pageID == "page_perfil") {
                $('#menu_tienda').hide();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                $("#menu_bottom_perfil").addClass("menu_bottom_btn_selected");
                history.pushState(null, null, "/perfil");
            }
            else if (pageID == "page_editarPerfil") {
                $('#menu_tienda').hide();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                $("#menu_bottom_perfil").addClass("menu_bottom_btn_selected");
            }
            else if (pageID == "page_cambiarPass") {
                $('#menu_tienda').hide();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                $("#menu_bottom_perfil").addClass("menu_bottom_btn_selected");
            }
            else if (pageID == "page_modopago") {
                $('#menu_tienda').hide();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                $("#menu_bottom_perfil").addClass("menu_bottom_btn_selected");
            }
            else if (pageID == "page_productos") {
                $('#menu_tienda').show();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                $("#menu_bottom_tienda").addClass("menu_bottom_btn_selected");
            }
            else if (pageID == "page_productos_detalle") {
                $('#menu_tienda').show();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                $("#menu_bottom_tienda").addClass("menu_bottom_btn_selected");
            }
            else if (pageID == "page_chef") {
                $('#menu_tienda').hide();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                $("#menu_bottom_tienda").addClass("menu_bottom_btn_selected");
            }
            else if (pageID == "page_chef_sugerencias") {
                $('#menu_tienda').hide();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                $("#menu_bottom_tienda").addClass("menu_bottom_btn_selected");
            }
            // Páginas de tienda que van con menu superior
            else if (pageID == "page_tienda") {
                //headerPosition = $('#menu_web_home').offset().top;
                $('#menu_tienda').show();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                $("#menu_bottom_tienda").addClass("menu_bottom_btn_selected");
                history.pushState(null, null, "/");
            }
            else if (pageID == "page_categoria_cerdo") {
                $('#menu_tienda').show();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                $("#menu_bottom_tienda").addClass("menu_bottom_btn_selected");
                $(".menu_tienda_btn").removeClass("menu_tienda_btn_selected");
                $("#menu_tienda_cerdo").addClass("menu_tienda_btn_selected");
            }
            else if (pageID == "page_categoria_res") {
                $('#menu_tienda').show();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                $("#menu_bottom_tienda").addClass("menu_bottom_btn_selected");
                $(".menu_tienda_btn").removeClass("menu_tienda_btn_selected");
                $("#menu_tienda_res").addClass("menu_tienda_btn_selected");
            }
            else if (pageID == "page_categoria_pollo") {
                $('#menu_tienda').show();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                $("#menu_bottom_tienda").addClass("menu_bottom_btn_selected");
                $(".menu_tienda_btn").removeClass("menu_tienda_btn_selected");
                $("#menu_tienda_pollo").addClass("menu_tienda_btn_selected");
            }
            else if (pageID == "page_categoria_pez") {
                $('#menu_tienda').show();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                $("#menu_bottom_tienda").addClass("menu_bottom_btn_selected");
                $(".menu_tienda_btn").removeClass("menu_tienda_btn_selected");
                $("#menu_tienda_pez").addClass("menu_tienda_btn_selected");
            }
            else if (pageID == "page_categoria_charc") {
                $('#menu_tienda').show();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                $("#menu_bottom_tienda").addClass("menu_bottom_btn_selected");
                $(".menu_tienda_btn").removeClass("menu_tienda_btn_selected");
                $("#menu_tienda_charc").addClass("menu_tienda_btn_selected");
            }
        });
        
        // Click en icono de canasta
        $(".btn_cart").on( "click", function( event ) {
            $('#menu_tienda').hide();
            $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
            // Ir a página
            $(':mobile-pagecontainer').pagecontainer('change', '#page_canasta_1', {transition: 'none'});
            history.pushState(null, null, "/carrito");
        });
        
        // Promociones
        $("#menu_bottom_promos, .menu_web_promos").on( "click", function( event ) {
            if(!promos_loaded){
                load_promos();
            }
        });
        
        // Pedidos
        $("#menu_bottom_pedidos, .menu_web_pedidos").on( "click", function( event ) {
            if(esNoRegistrado()){
                showAlertWithTitle("Por favor regístrate para tener acceso a un historial de pedidos", "Visitante");
                $("#page_pedidos").addClass('sinpedidos');
            }
            else {
                load_pedidos();
            }
        });
        
        
        
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ----------          TIENDA          ----------- */
        
        // Click en categoría
        $(".categoria_item, .categoria_menu_item").on( "click", function( event ) {
            var categoria = $(this).data("categoria");
            load_products_byCat(categoria);
            var catamigable = amigable(categoria);
            var tipo;
            switch(catamigable){
                case "magros_cotidianos_de_cerdo":
                    tipo = "cerdo";
                    break;
                case "costillas_de_cerdo":
                    tipo = "cerdo";
                    break;
                case "charcuteria_de_cerdo":
                    tipo = "cerdo";
                    break;
                case "chuletas_de_cerdo":
                    tipo = "cerdo";
                    break;
                case "practicos_de_cerdo":
                    tipo = "cerdo";
                    break;
                case "cortes_premium_de_res":
                    tipo = "res";
                    break;
                case "parrilla_de_res":
                    tipo = "res";
                    break;
                case "cotidianos_de_res":
                    tipo = "res";
                    break;
                case "practicos_de_res":
                    tipo = "res";
                    break;
                case "charcuteria_de_res":
                    tipo = "res";
                    break;
                case "cotidianos_de_pollo":
                    tipo = "pollo";
                    break;
                case "filetes_de_pollo":
                    tipo = "pollo";
                    break;
                case "charcuteria_de_pollo":
                    tipo = "pollo";
                    break;
                case "pescados":
                    tipo = "pez";
                    break;
                case "mariscos":
                    tipo = "pez";
                    break;
                case "charcuteria_de_cerdo":
                    tipo = "charcuteria";
                    break;
                case "charcuteria_de_res":
                    tipo = "charcuteria";
                    break;
                case "charcuteria_de_pollo":
                    tipo = "charcuteria";
                    break;
                case "charcuteria_de_pavo":
                    tipo = "charcuteria";
                    break;
                case "charcuteria_koller":
                    tipo = "charcuteria";
                    break;
            }
            history.pushState(null, null, "/"+tipo+"/"+catamigable);
        });
        
        // Click en producto de tienda
        $("#productos_items, #masVendidos_items, #promos_items").on( "click", ".tienda_item_btn, .tienda_item_img, .promos_img", function( event ) {
            var productID = $(this).data("id");
            load_product(productID);
        });
        
        // Botón back para volver a la tienda
        $(".backTo_tienda").on( "click", function( event ) {
            $(".menu_tienda_btn").removeClass("menu_tienda_btn_selected");
        });
        
        // Click en añadir producto en listado
        $("#productos_items, #masVendidos_items, #promos_items").on( "click", ".product_agregar_single", function( event ) {
            var itemdata = $(this).data("itemdata");
            if(esNoRegistrado()){
                show_confirm_registro();
            }
            else {
                addTobasket(itemdata, 1);
            }
        });
        
        // Click en añadir producto en interna
        $("#product_agregar_btn").on( "click", function( event ) {
            var itemdata = $(this).data("itemdata");
            var cantidad = parseInt($("#product_cantidad").val());
            if(esNoRegistrado()){
                show_confirm_registro();
            }
            else {
                if(cantidad == 0 || isNaN(cantidad)){
                    showErrorAlert("Debes agregar por lo menos 1 item");
                }
                else {
                    addTobasket(itemdata, cantidad);
                }
            }    
        });
        
        // Añadir 1 item más en página de canasta
        $("#canasta_1_items").on( "click", ".carrito_agregar_btn", function( event ) {
            var itemID = $(this).data("id");
            addMoreToBasket(itemID);
        });
        
        // Eliminar item en página de canasta
        $("#canasta_1_items").on( "click", ".carrito_borrar_btn", function( event ) {
            var itemID = $(this).data("id");
            removeFromBasket(itemID);
        });
        
        // Compartir
        $("#btn_shareProduct").on( "click", function( event ) {
            $("#product_share_select").toggle();
        });
        $("#share_on_facebook").on( "click", function( event ) {
            var sharedata = $(this).data("sharedata");
            shareproduct_fb(sharedata);
        });
        $("#share_on_twitter").on( "click", function( event ) {
            var sharedata = $(this).data("sharedata");
            shareproduct_tt(sharedata);
        });
        
        
        
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ----------          MARCAS          ----------- */
        
        // Click en marca
        $("#marcas_items").on( "click", ".marcas_item", function( event ) {
            var brand = $(this).data("marca");
            load_products_byBrand(brand);
            history.pushState(null, null, "marcas/"+amigable(brand));
        });
        
        
        
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ----------           CHEF           ----------- */
        
        // Click en botones
        $("#chef_gotoPersonas").on( "click", function( event ) {
            $(".chef_btn").removeClass("chef_btn_selected");
            $(this).addClass("chef_btn_selected");
            $(".chef_part").hide();
            $("#chef_personas").show();
        });
        $("#chef_gotoPreferencias").on( "click", function( event ) {
            $(".chef_btn").removeClass("chef_btn_selected");
            $(this).addClass("chef_btn_selected");
            $(".chef_part").hide();
            $("#chef_preferencias").show();
        });
        $("#chef_gotoDias").on( "click", function( event ) {
            $(".chef_btn").removeClass("chef_btn_selected");
            $(this).addClass("chef_btn_selected");
            $(".chef_part").hide();
            $("#chef_dias").show();
        });
        $("#chef_gotoComidas").on( "click", function( event ) {
            $(".chef_btn").removeClass("chef_btn_selected");
            $(this).addClass("chef_btn_selected");
            $(".chef_part").hide();
            $("#chef_comidas").show();
            $('#chef_comidasCant').focus();
        });
        $("#chef_comidasCant").on( "change keyup", function( event ) {
            $("#chef_comidasCant_text").html(formatComidas(parseInt($(this).val())));
        });
        
        // Personas
        $("#chef_agregarPersonas").on( "click", function( event ) {
            var personas = parseInt($("#chef_PersonasCant").data("personas"));
            personas += 1;
            $("#chef_PersonasCant").data("personas", personas);
            $("#chef_PersonasCant").html(personas);
        });
        $("#chef_quitarPersonas").on( "click", function( event ) {
            var personas = parseInt($("#chef_PersonasCant").data("personas"));
            if(personas > 1){
                personas -= 1;
                $("#chef_PersonasCant").data("personas", personas);
                $("#chef_PersonasCant").html(personas);
            } 
        });
        
        // Preferencias
        $(".chef_preferencias_btn").on( "click", function( event ) {
            $(this).toggleClass("chef_preferencias_btn_sel");
        });
        
        // Dias
        $("#chef_agregarDias").on( "click", function( event ) {
            var dias = parseInt($("#chef_DiasCant").data("dias"));
            dias += 1;
            $("#chef_DiasCant").data("dias", dias);
            $("#chef_DiasCant").html(dias);
        });
        $("#chef_quitarDias").on( "click", function( event ) {
            var dias = parseInt($("#chef_DiasCant").data("dias"));
            if(dias > 1){
                dias -= 1;
                $("#chef_DiasCant").data("dias", dias);
                $("#chef_DiasCant").html(dias);
            }
        });
        
        // Click en paquetes
        $("#chef_variedad").on( "click", function( event ) {
            mostrarVariedad();
        });
        $("#chef_premium").on( "click", function( event ) {
            mostrarPremium();
        });
        $("#chef_fit").on( "click", function( event ) {
            mostrarFit();
        });
        $("#chef_economico").on( "click", function( event ) {
            mostrarEconomico();
        });
        
        // Traer recomendaciones del chef
        $("#btn_verSugerencias").on( "click", function( event ) {
            calcularChef();
        });
        
        // Agregar canasta del chef
        $("#agregar_chef").on( "click", function( event ) {
            if(esNoRegistrado()){
                show_confirm_registro();
            }
            else {
                agregar_chef();
            }
        });
        
        
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ----------         CANASTA          ----------- */
        // Pasar a canasta 2
        $("#goto_canasta_2").on( "click", function( event ) {
            if(calcularSubTotal()>=30000){
                $(':mobile-pagecontainer').pagecontainer('change', '#page_canasta_2', {transition: 'none'});
            }
            else {
                showAlertWithTitle("El pedido mínimo es de $30.000", "Pedido mínimo.");
            }
        });
        
        // Cambiar horarios dependiendo del día
        $("#pedido_fechaEntrega").on( "change", function( event ) {
            obtenerHorarios();
        });
        
        // Mostrar mapa o direcciones
        $("#pedido_direccionEntrega").on( "click", function( event ) {
            if(historialDirecciones.length > 0){
                // Ir a página
                mostrarDireccionesCanasta();
                $(':mobile-pagecontainer').pagecontainer('change', '#page_canasta_direcciones', {transition: 'none'});
            }
            else {
                $("#direcciones_save_cont").hide();
                // Ir a página
                $(':mobile-pagecontainer').pagecontainer('change', '#page_canasta_map', {transition: 'none'});
                if(!posInited){
                    tryGeolocation();
                }
                else {
                    resetmap();
                }
            }
        });
        
        // Click en direccion
        $("#canasta_direcciones_items").on( "click", ".canasta_direccion_item", function( event ) {
            esNuevaDireccion = false;
            var direccion = $(this).data("direccion");
            var latitud = $(this).data("lat");
            var longitud = $(this).data("lng");
            $('#pedido_direccionEntrega').val(direccion);
            coordenadasEntrega = new google.maps.LatLng(latitud, longitud);
            $(':mobile-pagecontainer').pagecontainer('change', '#page_canasta_2', {transition: 'none'});
        });
        
        // Nueva direccion
        $("#btn_nuevaDireccion").on( "click", function( event ) {
            $("#direcciones_save_cont").hide();
            // Ir a página
            $(':mobile-pagecontainer').pagecontainer('change', '#page_canasta_map', {transition: 'none'});
            if(!posInited){
                tryGeolocation();
            }
            else {
                resetmap();
            }
        });
        
        // Mostrar direcciones
        $("#btn_showMisDirecciones").on( "click", function( event ) {
            if(historialDirecciones.length > 0){
                mostrarDireccionesCanasta();
                $(':mobile-pagecontainer').pagecontainer('change', '#page_canasta_direcciones', {transition: 'none'});
            }
            else {
                showErrorAlert("No tienes historial de direcciones.");
            }
        });
        
        // Centrar mapa
        $("#canasta_map").on( "click", "#canasta_map_center", function( event ) {
            tryGeolocation();
        });
        
        // Guardar datos del mapa
        $("#btn_saveAddress").on( "click", function( event ) {
            var geodir_1 = $('#geo_dir_1').val();
            var geodir_2 = $('#geo_dir_2').val();
            var geodir_3 = $('#geo_dir_3').val();
            var geodir_4 = $('#geo_dir_4').val();
            var geodir_5 = $('#geo_dir_5').val();
            var geodir_6 = $('#geo_dir_6').val();
            if(geodir_2.trim().length > 0 && geodir_4.trim().length > 0 && geodir_5.trim().length > 0){
                esNuevaDireccion = true;
                coordenadasEntrega = map.getCenter();
                var address = geodir_1+' '+geodir_2+' # '+geodir_4+' - '+geodir_5+', '+geodir_6;
                $('#pedido_direccionEntrega').val(address);
                $(':mobile-pagecontainer').pagecontainer('change', '#page_canasta_2', {transition: 'none'});
            }
            else {
                showErrorAlert("Por favor completa la dirección");
            }
        });
        
        // Modo de pago
        $(".modopago_opt").on( "click", function( event ) {
            var modoPago = $(this).data("modopago");
            $("#pedido_modoPago").val(modoPago);
            $(".modopago_opt").removeClass("modopago_opt_selected");
            $(this).addClass("modopago_opt_selected");
        });
        
        // Pasar a canasta 3
        $("#goto_canasta_3").on( "click", function( event ) {
            validarCanasta2();
        });
        
        // Hacer pedido
        $("#btn_realizarPedido").on( "click", function( event ) {
            var pedido_modoPago = parseInt($("#pedido_modoPago").val());
            if(pedido_modoPago == 0){
                // Datáfono
                realizarPedido();
            }
            else if(pedido_modoPago == 1) {
                // Online
                realizarPedidoToken();
            }
            else {
                // PSE
                load_bancosPSE();
            }
        });
        
        // Hacer pedido PSE
        $("#pagar_PSE").on( "click", function( event ) {
            realizarPedidoPSE();
        });
        
        $("#btn_aplicarCupon").on( "click", function( event ) {
            aplicarCupon();
        });
        
        
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ----------           MAPA           ----------- */
        
        // Geocoder para obtener punto por direccion
        $(".geodeco_field").on( "change keyup", function( event ) {
            var geodir_1 = $('#geo_dir_1').val();
            var geodir_2 = $('#geo_dir_2').val();
            var geodir_3 = $('#geo_dir_3').val();
            var geodir_4 = $('#geo_dir_4').val();
            var geodir_5 = $('#geo_dir_5').val();
            var address = geodir_1+' '+geodir_2+' '+geodir_4+' '+geodir_5+', Bogotá, Colombia';
            
            // Geocoder function
            geocoder.geocode({'address': address}, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                } 
                else {
                    
                }
            });
        });
        
        
        
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ----------         PEDIDOS          ----------- */
        // Click en pedido
        $("#pedidos_items").on( "click", ".pedido_item", function( event ) {
            var id = $(this).data("id");
            load_pedidoByID(id);
        });
        
        // Pedir de nuevo
        $("#btn_pedirDeNuevo").on( "click", function( event ) {
            joinCanastas();
        });
        
        
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ----------         PERFIL           ----------- */
        // Click en género
        $(".genero_opt").on( "click", function( event ) {
            var genero = $(this).data("genero");
            $("#perfil_editarGenero").val(genero);
            $(".genero_opt").removeClass("genero_opt_selected");
            $(this).addClass("genero_opt_selected");
        });
        // Click en notificaciones
        $("#recibirNotificaciones_btn").on( "click", function( event ) {
            if($(this).hasClass("recibirNotificaciones_off")){
                $("#perfil_editarNotificaciones").val("1");
            }
            else {
                $("#perfil_editarNotificaciones").val("0");
            }
            $(this).toggleClass("recibirNotificaciones_off");
        });
        
        // Cerrar sesión
        $("#btn_cerrarSesion").on( "click", function( event ) {
            if(esNoRegistrado()){
                // Borrar caché y enviar a login
                clearLocalstorage();
            }
            else {
                logout();
            }
        });
        
        // Cerrar sesión de no registrado
        $("#btn_noreg_gotoLogin").on( "click", function( event ) {
            // Borrar caché y enviar a login
            clearLocalstorage();
            $(':mobile-pagecontainer').pagecontainer('change', '#page_login', {transition: 'none'});
        });
        
        // Modo de pago
        $("#btn_gotomodopago").on( "click", function( event ) {
            load_userData();
            var modoPagoString = localStorage.getItem("modoPago");
            if(modoPagoString !== null && modoPagoString != ''){
                $(':mobile-pagecontainer').pagecontainer('change', '#page_modopago', {transition: 'none'});
            }
            else {
                if(franquicias_loaded){
                    $(':mobile-pagecontainer').pagecontainer('change', '#page_modopago', {transition: 'none'});
                }
                else {
                    getPaymentMethods();
                }
            }
        });
        
        // Verificar franquicia
        $("#modopago_tarjeta").on( "change keyup", function( event ) {
            var number = $(this).val();
            // visa
            var re = new RegExp("^4");
            if (number.match(re) != null)
                $("#modopago_franquicia").val("1");
            // AMEX
            re = new RegExp("^3[47]");
            if (number.match(re) != null)
                $("#modopago_franquicia").val("2");
            // Mastercard
            re = new RegExp("^5[1-5]");
            if (number.match(re) != null)
                $("#modopago_franquicia").val("3");
        });
        
        // Guardar modo de pago
        $("#btn_guardarModoPago").on( "click", function( event ) {
            guardarModoPago();
        });
        
        // Modificar Modo de pago
        $("#btn_nuevoModoPago").on( "click", function( event ) {
            if(franquicias_loaded){
                $("#modopago_Actual").css('display', "none");
                $("#modopago_Nuevo").css('display', "block");
            }
            else {
                getPaymentMethods();
            }
        });
        
        // Eliminar modo de pago
        $("#modopago_items").on( "click", ".btn_eliminarModoPago", function( event ) {
            var position = $(this).data("position");
            eliminarModoPago(position);
        });
        
        // Cámara
        $("#perfil_camera").on( "click", function( event ) {
            
        });
        $("#input_foto").on( "change", function( event ) {
            var validado = true;
            if(!isFacebookUser()){
                var foto1 = $('#input_foto')[0].files;
                if(foto1.length){
                    var ext_foto1 = $('#input_foto').val().split('.').pop().toLowerCase();
                    if($.inArray(ext_foto1, ['png','jpg','jpeg']) == -1) {
                        showErrorAlert('La foto no tiene formato correcto (PNG, JPG, JPEG)');
                        validado = false;
                    }
                    if((foto1[0].size/1000) > 150){
                        showErrorAlert('La foto 1 sobrepasa los 150 Kb permitidos');
                        validado = false;
                    }
                }
                if(validado){
                    show_loading();
                    var data = new FormData();
                    data.append("action", "updatePic_web");
                    data.append("user", localStorage.getItem("id"));
                    data.append("currentSession", localStorage.getItem("sessionToken"));
                    data.append("profilePic", foto1[0]);
                    $.ajax({ url: server_url,
                        data: data,
                        type: 'POST',
                        dataType: 'json',
                        contentType: false,
                        processData: false,
                        success: function(output) {
                            if(output.error){
                                showErrorServer();
                            }
                            else if(output.sessionError) {
                                showErrorAlert("Tu sesión ha expirado. Inicia de nuevo.");
                                logout();
                            }
                            else {
                                localStorage.setItem("profilePic", output.profilePic);
                                load_userData();
                            }
                            hide_loading();
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            showErrorServer();
                            hide_loading();
                        }
                    });
                }
            }
        });
        
        // Actualizar perfil
        $("#btn_guardarPerfil").on( "click", function( event ) {
            actualizarPerfil();
        });
        
        // Actualizar perfil
        $("#btn_completarPerfil").on( "click", function( event ) {
            completarPerfil();
        });
        
        // Cambiar contraseña
        $("#btn_changePass").on( "click", function( event ) {
            changePass();
        });
        
        // Ir a histórico de direcciones
        $("#btn_gotoDirecciones").on( "click", function( event ) {
            load_userData();
            $(':mobile-pagecontainer').pagecontainer('change', '#page_perfilDirecciones', {transition: 'none'});
        });
        
        // Actualizar direcciones
        $("#btn_guardarDirecciones").on( "click", function( event ) {
            actualizarDirecciones(true);
        });
        
        // Borrar direccion
        $("#direcciones_items").on( "click", ".direccion_borrar_btn", function( event ) {
            var posicion = parseInt($(this).data("position"));
            eliminarDireccion(posicion);
        });
        
        // Click en agregar nueva direccion
        $("#btn_gotoAgregarDir").on( "click", function( event ) {
            $("#direcciones_save_cont").show();
            $(':mobile-pagecontainer').pagecontainer('change', '#page_canasta_map', {transition: 'none'});
            if(!posInited){
                tryGeolocation();
            }
            else {
                resetmap();
            }
        });
        
        // Click en guardar nueva direccion
        $("#btn_saveNewAddress").on( "click", function( event ) {
            var geodir_1 = $('#geo_dir_1').val();
            var geodir_2 = $('#geo_dir_2').val();
            var geodir_3 = $('#geo_dir_3').val();
            var geodir_4 = $('#geo_dir_4').val();
            var geodir_5 = $('#geo_dir_5').val();
            var geodir_6 = $('#geo_dir_6').val();
            if(geodir_2.trim().length > 0 && geodir_4.trim().length > 0 && geodir_5.trim().length > 0){
                coordenadasEntrega = map.getCenter();
                verificarCobertura().then(function() {
                    if(g_cobertura) {
                        var address = geodir_1+' '+geodir_2+' # '+geodir_4+' - '+geodir_5+', '+geodir_6;
                        var nuevaDireccion = {
                            direccion: address,
                            lat: coordenadasEntrega.lat(),
                            lng: coordenadasEntrega.lng()
                        };
                        historialDirecciones.push(nuevaDireccion);
                        actualizarDirecciones(true);
                        $(':mobile-pagecontainer').pagecontainer('change', '#page_perfilDirecciones', {transition: 'none'});
                    }
                    else {
                        showAlertWithTitle('Lo sentimos. Actualmente no tenemos cobertura en esta ubicación.', 'Sin cobertura');
                    }
                });
            }
            else {
                showErrorAlert("Por favor completa la dirección");
            }   
        });
        
        
        
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ----------         BUSCADOR         ----------- */
        
        // Mostrar buscador
        $(".btn_displaySearch").on( "click", function( event ) {
            $("#buscador_cont").addClass("buscador_show");
        });
        
        // Cerrar buscador
        $("#buscador_cerrar").on( "click", function( event ) {
            $("#buscador_cont").removeClass("buscador_show");
        });
        
        // Buscar término
        $("#btn_search, .btn_search_web").on( "click", function( event ) {
            buscarTermino();
            history.pushState(null, null, "/");
        });
        $(".web_searchfield").on( "change keyup", function( event ) {
            var term = $(this).val();
            $("#search_term, .web_searchfield").val(term);
        });
        
        
        
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ---------- ------------------------ ----------- */
        /* ----------       MENÚ LATERAL       ----------- */
        
        // Mostrar menu
        $(".btn_displayMenu").on( "click", function( event ) {
            $("#menuLateral_cont").addClass("menuLateral_show");
        });
        
        // Cerrar menu
        $("#menuLateral_cerrar").on( "click", function( event ) {
            $("#menuLateral_cont").removeClass("menuLateral_show");
            $zopim(function() {
                $zopim.livechat.button.hide();
            });
        });
        
        // Contactar whatsapp
        $(".contact_whatsapp").on( "click", function( event ) {
            //contactarWhatsapp();
        });
        
        // Contactar email
        $(".contact_email").on( "click", function( event ) {
            //contactarEmail();
        });
        
        // Ver términos
        $("#ver_terminos").on( "click", function( event ) {
            $("#menuLateral_cont").removeClass("menuLateral_show");
            $zopim(function() {
                $zopim.livechat.button.hide();
            });
        });
        
        // Ver privacidad
        $("#ver_privacidad").on( "click", function( event ) {
            $("#menuLateral_cont").removeClass("menuLateral_show");
            $zopim(function() {
                $zopim.livechat.button.hide();
            });
        });
        
    }
};



/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ----------        FUNCIONES         ----------- */

// INICIO NORMAL
function startapp() {
    // Verificar si el usuario esta loggeado
    var currentSession = localStorage.getItem("sessionToken");
    if(currentSession) {
        show_loading();
        // Verificar sesión y traer variables de usuario
        var data = {
            "action": "checkSession",
            "currentSession": currentSession
        };
        $.ajax({ url: server_url,
            data: data,
            type: 'POST',
            dataType: 'json',
            success: function(output) {
                if(output.error){
                    showErrorServer();
                }
                else if(output.vacio) {
                    clearLocalstorage();
                    localStorage.setItem("id", -1);
                    $(".btn_cart, #perfil_camera, #btn_gotomodopago, #btn_gotoDirecciones, #btn_cerrarSesion, #btn_editarPerfil").hide();
                    $("#perfil_noregistrado_Registrarse, #btn_iniciarfacebook_home, #btn_login_home").show();
                    showAlertWithTitle('Tu sesión ha caducado.', 'Sesión caducada');
                    reload_canasta();
                }
                else {
                    localStorage.setItem("id", output.id);
                    localStorage.setItem("username", output.username);
                    localStorage.setItem("email", output.email);
                    localStorage.setItem("notifications", output.notifications);
                    localStorage.setItem("name", output.name);
                    localStorage.setItem("lastname", output.lastname);
                    localStorage.setItem("phone", output.phone);
                    localStorage.setItem("addresses", output.addresses);
                    localStorage.setItem("profilePic", output.profilePic);
                    localStorage.setItem("profilePicFacebook", output.profilePicFacebook);
                    localStorage.setItem("gender", output.gender);
                    localStorage.setItem("modoPago", output.modoPago);
                    load_userData();
                    $(".btn_cart, #btn_gotomodopago, #btn_gotoDirecciones, #btn_cerrarSesion, #btn_editarPerfil").show();
                    $("#perfil_noregistrado_Registrarse, #btn_iniciarfacebook_home, #btn_login_home").hide();
                }
                hide_loading();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                showErrorServer();
            }
        });
    }
    else {
        clearLocalstorage();
        localStorage.setItem("id", -1);
        $(".btn_cart, #perfil_camera, #btn_gotomodopago, #btn_gotoDirecciones, #btn_cerrarSesion, #btn_editarPerfil").hide();
        $("#perfil_noregistrado_Registrarse, #btn_iniciarfacebook_home, #btn_login_home").show();
    }
}

// ALERTAS
function alertDismissed() {
    $("#alert").animate({opacity: 0}, 100, function(){
        $("#alert").css('display', "none");
    });
    hide_loading();
}
function showErrorServer() {
    $('#alert_title, #alert_text, #alert_buttons').html('');
    
    var buttonsHTML = '<a class="app_button_red_full btn_30" id="btn_closeAlert"><span class="btn_1_red"><span class="btn_2_red_30">VOLVER</span></span></a>';
    
    $('#alert_title').html('Servidor no responde');
    $('#alert_text').html('El servidor no responde. Vuelve a intentalo más tarde.');
    $('#alert_buttons').html(buttonsHTML);
    
    $("#alert").css('display', "block");
    $("#alert").animate({opacity: 1}, 200, function(){});
}
function showAlertWithTitle(texto, titulo) {
    $('#alert_title, #alert_text, #alert_buttons').html('');
    
    var buttonsHTML = '<a class="app_button_red_full btn_30" id="btn_closeAlert"><span class="btn_1_red"><span class="btn_2_red_30">VOLVER</span></span></a>';
    
    $('#alert_title').html(titulo);
    $('#alert_text').html(texto);
    $('#alert_buttons').html(buttonsHTML);
    
    $("#alert").css('display', "block");
    $("#alert").animate({opacity: 1}, 200, function(){});
}
function showErrorAlert(texto) {
    $('#alert_title, #alert_text, #alert_buttons').html('');
    
    var buttonsHTML = '<a class="app_button_red_full btn_30" id="btn_closeAlert"><span class="btn_1_red"><span class="btn_2_red_30">VOLVER</span></span></a>';
    
    $('#alert_title').html('Error');
    $('#alert_text').html(texto);
    $('#alert_buttons').html(buttonsHTML);
    
    $("#alert").css('display', "block");
    $("#alert").animate({opacity: 1}, 200, function(){});
}
function show_confirmModoPago() {
    $('#alert_title, #alert_text, #alert_buttons').html('');
    
    var buttonsHTML = '<div class="half"><a class="app_button_black_full btn_30" id="btn_closeAlert"><span class="btn_1_red"><span class="btn_2_black">NO</span></span></a></div>';
    buttonsHTML += '<div class="half"><a class="app_button_red_full btn_30" id="btn_gotoModoPago_web"><span class="btn_1_red"><span class="btn_2_red_30">SI</span></span></a></div>';
    
    $('#alert_title').html('Modo de pago');
    $('#alert_text').html('No tienes un modo de pago registrado. ¿Deseas agregar uno ahora?');
    $('#alert_buttons').html(buttonsHTML);
    
    $("#alert").css('display', "block");
    $("#alert").animate({opacity: 1}, 200, function(){});
}
function show_confirm_registro() {
    $('#alert_title, #alert_text, #alert_buttons').html('');
    
    var buttonsHTML = '<div class="half"><a class="app_button_black_full btn_30" id="btn_closeAlert"><span class="btn_1_red"><span class="btn_2_black">NO</span></span></a></div>';
    buttonsHTML += '<div class="half"><a class="app_button_red_full btn_30" id="btn_gotoRegistro_web"><span class="btn_1_red"><span class="btn_2_red_30">SI</span></span></a></div>';
    
    $('#alert_title').html('No registrado');
    $('#alert_text').html('Para comprar debes ser un usuario registrado. ¿Deseas registrarte ahora?');
    $('#alert_buttons').html(buttonsHTML);
    
    $("#alert").css('display', "block");
    $("#alert").animate({opacity: 1}, 200, function(){});
}

// LOADING
function show_loading() {
    $("#loading").css('display', "block");
    $("#loading").animate({opacity: 1}, 200, function(){});
}
function hide_loading() {
    $("#loading").animate({opacity: 0}, 100, function(){
        $("#loading").css('display', "none");
    });
}

// NETWORK LISTENERS HANDLERS
function show_offlineIndicator() {
    show_loading();
}
function hide_offlineIndicator() {
    hide_loading();
}
function onOffline() {
    /*navigator.notification.alert(
        'No estás conectado a internet',
        show_offlineIndicator,
        'Desconectado',
        'OK'
    );*/
}
function onOnline() {
    hide_offlineIndicator();
}

// MODOS DE CONTACTO (WHATSAPP Y CORREO)
function contactoGuardado(buttonIndex) {
    
}

function onPhoneSuccess(contacts) {
    
};
 
function onPhoneError(contactError) {
    
};

function contactarWhatsapp() {
    // find all contacts with 'Bob' in any name field 
    var options = new ContactFindOptions();
    options.filter = "Carnes Market Soporte";
    options.multiple = false;
    options.desiredFields = [navigator.contacts.fieldType.id];
    options.hasPhoneNumber = true;
    var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
    navigator.contacts.find(fields, onPhoneSuccess, onPhoneError, options);
}

function onMailSuccess(result) {
    
}

function onMailError(msg) {
    
}

function contactarEmail() {
    window.plugins.socialsharing.shareViaEmail('', '', ['info@carnesmarket.co'], null, null, null, onMailSuccess, onMailError);
}



/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ----------          OTROS           ----------- */

// Ordenamiento aleatorio de un array
function sortArrayRandom(original) {
    var n = original.length;
    var tempArr = [];
    for(var i=0; i<n-1; i++) {
        tempArr.push(original.splice(Math.floor(Math.random()*original.length),1)[0]);
    }
    tempArr.push(original[0]);
    return tempArr;
}

// Formatear precio
function formatPrice(n, currency) {
    return currency + "" + n.toFixed(0).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "." + c : c;
    });
}

// Formatear porciones
function formatPorciones(num) {
    var porciones;
    if(num == 1){
        porciones = num + " porción";
    }
    else {
        porciones = num + " porciones";
    }
    return porciones;
}

// FORMAT DATE TO DD/MM/YYYY
function formatDate(original_date) {                 
    var date = new Date(original_date);
    var fechaFormatted = date.getUTCFullYear() + '-' + (date.getUTCMonth() + 1) + '-' + date.getUTCDate();
    return fechaFormatted;
}

// Formatear franja horaria
function formatFranjaHoraria(idnumerico) {                 
    var franjaFormatted;
    switch(idnumerico) {
        case 0:
            franjaFormatted = "Próximas 2 horas";
            break;
        case 1:
            franjaFormatted = "08:00am - 10:00am";
            break;
        case 2:
            franjaFormatted = "10:00am - 12:00pm";
            break;
        case 3:
            franjaFormatted = "12:00pm - 02:00pm";
            break;
        case 4:
            franjaFormatted = "02:00pm - 04:00pm";
            break;
        case 5:
            franjaFormatted = "04:00pm - 06:00pm";
            break;
        case 6:
            franjaFormatted = "06:00pm - 08:00pm";
            break;
    }
    return franjaFormatted;
}

// Formatear modo de pago
function formatModoPago(modoPago) {
    if(modoPago == 0) {
        return 'Datáfono';
    }
    else if(modoPago == 1) {
        return 'Online';
    }
    else {
        return 'PSE';
    }
}

// Buscador
function buscarTermino() {
    show_loading();
    $("#productos_items").html('');
    var termino = $("#search_term").val();
    var data = {
        "action": "buscarTermino",
        "termino": termino
    };
    $.ajax({ url: server_url,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            if(output.error){
                showErrorServer();
            }
            else {
                var products_response = output.products;
                if(products_response.length > 0){
                    var products = sortArrayRandom(products_response);
                    var HTML = '';
                    for(var i=0; i<products.length; i++) {
                        HTML += '<div class="tienda_item">';
                        var item_imageurl = '';
                        if(products[i].foto_remota != ''){
                            HTML += '<div class="tienda_item_img" data-id="'+products[i].id+'" style="background-image:url('+products[i].foto_remota+')"></div>';
                            item_imageurl = products[i].foto_remota;
                        }
                        else {
                            HTML += '<div class="tienda_item_img" data-id="'+products[i].id+'" style="background-image:url(http://carnesmarket.co/images/productos/'+products[i].foto_local+')"></div>';
                            item_imageurl = 'http://carnesmarket.co/images/productos/'+products[i].foto_local;
                        } 
                        HTML += '<div class="tienda_item_title"><span>'+products[i].nombre+'</span></div>';
                        var precio_final;
                        if(products[i].precio_descuento > 0){
                            HTML += '<div class="tienda_item_price"><span class="tachado">'+formatPrice(products[i].precio,'$')+'</span><br>'+formatPrice(products[i].precio_descuento, '$')+' x '+products[i].presentacion+'g</div>';
                            precio_final = products[i].precio_descuento;
                        }
                        else {
                            HTML += '<div class="tienda_item_price">&nbsp;<br>'+formatPrice(products[i].precio, '$')+' x '+products[i].presentacion+'g</div>';
                            precio_final = products[i].precio;
                        }
                        HTML += '<div class="tienda_item_buy">';
                        var itemdata = {
                            id: products[i].id,
                            id_inventario: products[i].id_inventario,
                            nombre: products[i].nombre,
                            precio: precio_final,
                            categoria: products[i].categoria,
                            marca: products[i].marca,
                            presentacion: products[i].presentacion,
                            imageurl: item_imageurl
                        };
                        var itemdatajson = JSON.stringify(itemdata);
                        HTML += '<a class="product_agregar_single app_button_black btn_30" data-itemdata=\''+itemdatajson+'\'>';
                        HTML += '<span class="btn_1_red"><span class="btn_2_black">AÑADIR</span></span>';
                        HTML += '</a>';
                        HTML += '</div>';
                        switch(products[i].tipo) {
                            case 'Cerdo':
                                HTML += '<div class="tienda_item_icon tienda_item_icon_cerdo"></div>';
                                break;
                            case 'Res':
                                HTML += '<div class="tienda_item_icon tienda_item_icon_res"></div>';
                                break;
                            case 'Pollo':
                                HTML += '<div class="tienda_item_icon tienda_item_icon_pollo"></div>';
                                break;
                            case 'Pescado':
                                HTML += '<div class="tienda_item_icon tienda_item_icon_pez"></div>';
                                break;
                            case 'Charcutería':
                                HTML += '<div class="tienda_item_icon tienda_item_icon_charc"></div>';
                                break;
                        }
                        HTML += '<div class="tienda_item_btn" data-id="'+products[i].id+'"></div>';
                        if(products[i].desactivado == 1){
                            HTML += '<div class="producto_agotado">AGOTADO</div>';
                        }
                        HTML += '</div>';
                    }
                    $("#productos_items").html(HTML);
                    // Poner imagenes cuadradas
                    var ancho_pantalla = $(document).width() / 2;
                    $(".tienda_item_img").css("height", ancho_pantalla);
                }
                else {
                    $("#productos_items").html('<div class="notFound">No se encuentra lo que buscas</div>');
                }
                
                // Ir a productos
                $("#buscador_cont").removeClass("buscador_show");
                $(':mobile-pagecontainer').pagecontainer('change', '#page_productos', {transition: 'none'});
            }
            hide_loading();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            showErrorServer();
        }
    });
}



/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ----------          TIENDA          ----------- */

// Cargar más vendidos
function load_masVendidos() {
    show_loading();
    $("#masVendidos_items").html('');
    var data = {
        "action": "load_masVendidos"
    };
    $.ajax({ url: server_url,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            if(output.error){
                showErrorServer();
            }
            else {
                masVendidos_loaded = true;
                var products_response = output.products;
                var products = sortArrayRandom(products_response);
                var HTML = '';
                var item_imageurl = '';
                for(var i=0; i<products.length; i++) {
                    HTML += '<div class="tienda_item tienda_item_'+i+'">';
                    if(products[i].foto_remota != ''){
                        HTML += '<div class="tienda_item_img tienda_item_img_'+i+'" data-id="'+products[i].id+'" style="background-image:url('+products[i].foto_remota+')"></div>';
                        item_imageurl = products[i].foto_remota;
                    }
                    else {
                        HTML += '<div class="tienda_item_img tienda_item_img_'+i+'" data-id="'+products[i].id+'" style="background-image:url(http://carnesmarket.co/images/productos/'+products[i].foto_local+')"></div>';
                        item_imageurl = 'http://carnesmarket.co/images/productos/'+products[i].foto_local;
                    } 
                    HTML += '<div class="tienda_item_title"><span>'+products[i].nombre+'</span></div>';
                    var precio_final;
                    if(products[i].precio_descuento > 0){
                        HTML += '<div class="tienda_item_price"><span class="tachado">'+formatPrice(products[i].precio,'$')+'</span><br>'+formatPrice(products[i].precio_descuento, '$')+' x '+products[i].presentacion+'g</div>';
                        precio_final = products[i].precio_descuento;
                    }
                    else {
                        HTML += '<div class="tienda_item_price">&nbsp;<br>'+formatPrice(products[i].precio, '$')+' x '+products[i].presentacion+'g</div>';
                        precio_final = products[i].precio;
                    }
                    HTML += '<div class="tienda_item_buy">';
                    var itemdata = {
                        id: products[i].id,
                        id_inventario: products[i].id_inventario,
                        nombre: products[i].nombre,
                        precio: precio_final,
                        categoria: products[i].categoria,
                        marca: products[i].marca,
                        presentacion: products[i].presentacion,
                        imageurl: item_imageurl
                    };
                    var itemdatajson = JSON.stringify(itemdata);
                    HTML += '<a class="product_agregar_single app_button_black btn_30" data-itemdata=\''+itemdatajson+'\'>';
                    HTML += '<span class="btn_1_red"><span class="btn_2_black">AÑADIR</span></span>';
                    HTML += '</a>';
                    HTML += '</div>';
                    switch(products[i].tipo) {
                        case 'Cerdo':
                            HTML += '<div class="tienda_item_icon tienda_item_icon_cerdo"></div>';
                            break;
                        case 'Res':
                            HTML += '<div class="tienda_item_icon tienda_item_icon_res"></div>';
                            break;
                        case 'Pollo':
                            HTML += '<div class="tienda_item_icon tienda_item_icon_pollo"></div>';
                            break;
                        case 'Pescado':
                            HTML += '<div class="tienda_item_icon tienda_item_icon_pez"></div>';
                            break;
                        case 'Charcutería':
                            HTML += '<div class="tienda_item_icon tienda_item_icon_charc"></div>';
                            break;
                    }
                    HTML += '<div class="tienda_item_btn" data-id="'+products[i].id+'"></div>';
                    if(products[i].desactivado == 1){
                        HTML += '<div class="producto_agotado">AGOTADO</div>';
                    }
                    HTML += '</div>';
                }
                $("#masVendidos_items").html(HTML);
                // Poner imagenes cuadradas
                var ancho_pantalla = $(document).width() / 2;
                $(".tienda_item_img").css("height", ancho_pantalla);
            }
            hide_loading();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            showErrorServer();
        }
    });
}

// Cargar promociones
function load_promos() {
    show_loading();
    $("#promos_items").html('');
    var data = {
        "action": "load_promos"
    };
    $.ajax({ url: server_url,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            if(output.error){
                showErrorServer();
            }
            else {
                promos_loaded = true;
                var products_response = output.products;
                var products = sortArrayRandom(products_response);
                var HTML = '';
                var item_imageurl = '';
                for(var i=0; i<products.length; i++) {
                    HTML += '<div class="promos_item">';
                    if(products[i].foto_remota != ''){
                        HTML += '<div class="promos_img" data-id="'+products[i].id+'" style="background-image:url('+products[i].foto_remota+')"></div>';
                        item_imageurl = products[i].foto_remota;
                    }
                    else {
                        HTML += '<div class="promos_img" data-id="'+products[i].id+'" style="background-image:url(http://carnesmarket.co/images/productos/'+products[i].foto_local+')"></div>';
                        item_imageurl = 'http://carnesmarket.co/images/productos/'+products[i].foto_local;
                    } 
                    HTML += '<div class="tienda_item_title"><span>'+products[i].nombre+'</span></div>';
                    HTML += '<div class="tienda_item_price">'+formatPrice(products[i].precio, '$')+'</div>';
                    HTML += '<div class="tienda_item_buy">';
                    var itemdata = {
                        id: products[i].id,
                        id_inventario: products[i].id_inventario,
                        nombre: products[i].nombre,
                        precio: products[i].precio,
                        categoria: "Promocion",
                        marca: "",
                        presentacion: 0,
                        imageurl: item_imageurl
                    };
                    var itemdatajson = JSON.stringify(itemdata);
                    HTML += '<a class="product_agregar_single app_button_black btn_30" data-itemdata=\''+itemdatajson+'\'>';
                    HTML += '<span class="btn_1_red"><span class="btn_2_black">AÑADIR</span></span>';
                    HTML += '</a>';
                    HTML += '</div>';
                    HTML += '<div class="tienda_item_btn" data-id="'+products[i].id+'"></div>';
                    if(products[i].desactivado == 1){
                        HTML += '<div class="producto_agotado">AGOTADO</div>';
                    }
                    HTML += '</div>';
                }
                $("#promos_items").html(HTML);
                // Poner imagenes cuadradas
                var ancho_pantalla = $(document).width();
                var alto = ancho_pantalla / 1.2;
                $(".promos_img").css("height", alto);
            }
            hide_loading();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            showErrorServer();
        }
    });
}

// Cargar listados por categoría
function load_products_byCat(categoria) {
    show_loading();
    $("#productos_items").html('');
    var data = {
        "action": "load_products_byCat",
        "categoria": categoria
    };
    $.ajax({ url: server_url,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            if(output.error){
                showErrorServer();
            }
            else {
                var products_response = output.products;
                var products = sortArrayRandom(products_response);
                var HTML = '';
                var item_imageurl = '';
                for(var i=0; i<products.length; i++) {
                    HTML += '<div class="tienda_item">';
                    if(products[i].foto_remota != ''){
                        HTML += '<div class="tienda_item_img" data-id="'+products[i].id+'" style="background-image:url('+products[i].foto_remota+')"></div>';
                        item_imageurl = products[i].foto_remota;
                    }
                    else {
                        HTML += '<div class="tienda_item_img" data-id="'+products[i].id+'" style="background-image:url(http://carnesmarket.co/images/productos/'+products[i].foto_local+')"></div>';
                        item_imageurl = 'http://carnesmarket.co/images/productos/'+products[i].foto_local;
                    } 
                    HTML += '<div class="tienda_item_title"><span>'+products[i].nombre+'</span></div>';
                    var precio_final;
                    if(products[i].precio_descuento > 0){
                        HTML += '<div class="tienda_item_price"><span class="tachado">'+formatPrice(products[i].precio,'$')+'</span><br>'+formatPrice(products[i].precio_descuento, '$')+' x '+products[i].presentacion+'g</div>';
                        precio_final = products[i].precio_descuento;
                    }
                    else {
                        HTML += '<div class="tienda_item_price">&nbsp;<br>'+formatPrice(products[i].precio, '$')+' x '+products[i].presentacion+'g</div>';
                        precio_final = products[i].precio;
                    }
                    HTML += '<div class="tienda_item_buy">';
                    var itemdata = {
                        id: products[i].id,
                        id_inventario: products[i].id_inventario,
                        nombre: products[i].nombre,
                        precio: precio_final,
                        categoria: products[i].categoria,
                        marca: products[i].marca,
                        presentacion: products[i].presentacion,
                        imageurl: item_imageurl
                    };
                    var itemdatajson = JSON.stringify(itemdata);
                    HTML += '<a class="product_agregar_single app_button_black btn_30" data-itemdata=\''+itemdatajson+'\'>';
                    HTML += '<span class="btn_1_red"><span class="btn_2_black">AÑADIR</span></span>';
                    HTML += '</a>';
                    HTML += '</div>';
                    switch(products[i].tipo) {
                        case 'Cerdo':
                            HTML += '<div class="tienda_item_icon tienda_item_icon_cerdo"></div>';
                            break;
                        case 'Res':
                            HTML += '<div class="tienda_item_icon tienda_item_icon_res"></div>';
                            break;
                        case 'Pollo':
                            HTML += '<div class="tienda_item_icon tienda_item_icon_pollo"></div>';
                            break;
                        case 'Pescado':
                            HTML += '<div class="tienda_item_icon tienda_item_icon_pez"></div>';
                            break;
                        case 'Charcutería':
                            HTML += '<div class="tienda_item_icon tienda_item_icon_charc"></div>';
                            break;
                    }
                    HTML += '<div class="tienda_item_btn" data-id="'+products[i].id+'"></div>';
                    if(products[i].desactivado == 1){
                        HTML += '<div class="producto_agotado">AGOTADO</div>';
                    }
                    HTML += '</div>';
                }
                $("#productos_items").html(HTML);
                // Poner imagenes cuadradas
                var ancho_pantalla = $(document).width() / 2;
                $(".tienda_item_img").css("height", ancho_pantalla);
                
                // Ir a página
                $(':mobile-pagecontainer').pagecontainer('change', '#page_productos', {transition: 'none'});
            }
            hide_loading();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            showErrorServer();
        }
    });
}

// Cargar información de un producto
function load_product(id) {
    show_loading();
    
    // Resetear campos
    $("#product_img").css("background-image", "none");
    $("#product_category").removeClass();
    $("#product_price, #product_presentation, #product_title, #product_description").html('');
    $("#product_cantidad").val('');
    $("#product_agregar_btn").removeData("itemdata");
    
    // Ajax call
    var data = {
        "action": "load_product",
        "productID": id
    };
    $.ajax({ url: server_url,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            if(output.error){
                showErrorServer();
            }
            else {
                var product = output.product[0];
                var shareimage;
                if(product.foto_remota != ''){
                    $("#product_img").css("background-image", "url("+product.foto_remota+")");
                    shareimage = product.foto_remota;
                }
                else {
                    $("#product_img").css("background-image", "url(http://carnesmarket.co/images/productos/"+product.foto_local+")");
                    shareimage = "http://carnesmarket.co/images/productos/"+product.foto_local;
                }
                switch(product.tipo) {
                    case 'Cerdo':
                        $("#product_category").addClass("tienda_item_icon_cerdo");
                        break;
                    case 'Res':
                        $("#product_category").addClass("tienda_item_icon_res");
                        break;
                    case 'Pollo':
                        $("#product_category").addClass("tienda_item_icon_pollo");
                        break;
                    case 'Pescado':
                        $("#product_category").addClass("tienda_item_icon_pez");
                        break;
                    case 'Charcutería':
                        $("#product_category").addClass("tienda_item_icon_charc");
                        break;
                    case 'Promocion':
                        $("#product_category").removeClass();
                        break;
                }
                var precio_final;
                if(product.precio_descuento > 0){
                    $("#product_price").html('<span class="tachado">'+formatPrice(product.precio, '$')+'</span> '+formatPrice(product.precio_descuento, '$'));
                    precio_final = product.precio_descuento;
                }
                else {
                    $("#product_price").html(formatPrice(product.precio, '$'));
                    precio_final = product.precio;
                }
                if(product.tipo != "Promocion") {
                    $("#product_presentation").html(product.presentacion + 'g ('+formatPorciones(product.porciones)+')');
                }
                $("#product_title").html(product.marca + ' - ' + product.nombre);
                $("#product_description").html(product.descripcion);
                var itemdata = {
                    id: product.id,
                    id_inventario: product.id_inventario,
                    nombre: product.nombre,
                    precio: precio_final,
                    categoria: product.categoria,
                    marca: product.marca,
                    presentacion: product.presentacion,
                    imageurl: shareimage
                };
                var sharedata = {
                    id: product.id,
                    tipo: product.tipo,
                    nombre: product.nombre,
                    categoria: product.categoria,
                    marca: product.marca,
                    imagen: shareimage,
                    descripcion: product.descripcion
                }
                $("#product_agregar_btn").data("itemdata", itemdata);
                $("#share_on_facebook, #share_on_twitter").data("sharedata", sharedata);
                if(product.tipo == "Promocion") {
                    $(".menu_tienda_btn").removeClass("menu_tienda_btn_selected");
                    $('#menu_tienda').show();
                    $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                    $("#menu_bottom_tienda").addClass("menu_bottom_btn_selected");
                }
                if(product.desactivado == 0){
                    $('#product_agregar').show();
                }
                else {
                    $('#product_agregar').hide();
                }
                // Ir a página
                $(':mobile-pagecontainer').pagecontainer('change', '#page_productos_detalle', {transition: 'none'});
                
                // Url
                history.pushState(null, null, "/"+amigable(product.tipo)+"/"+amigable(product.categoria)+"/"+amigable(product.marca)+"/"+product.id+"/"+amigable(product.nombre));
            }
            hide_loading();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            showErrorServer();
        }
    });
}

// Compartir producto
function shareproduct_fb(sharedata) {
    var url = "http://carnesmarket.co/" + amigable(sharedata.tipo) + "/" + amigable(sharedata.categoria) + "/" + amigable(sharedata.marca) + "/" + sharedata.id + "/" + amigable(sharedata.nombre); //Set desired URL here
    var img = sharedata.imagen; //Set Desired Image here
    
    FB.ui({
        method: 'feed',
        name: sharedata.marca + ' - ' + sharedata.nombre,
        link: url,
        picture: img,
        caption: 'Carnes Market',
        description: sharedata.descripcion
    },
    function (response) {
        if (response && response.post_id) {
            
        }
        else {
            
        }
    });
}
function shareproduct_tt(sharedata) {
    var url = "http://carnesmarket.co/" + amigable(sharedata.tipo) + "/" + amigable(sharedata.categoria) + "/" + amigable(sharedata.marca) + "/" + sharedata.id + "/" + amigable(sharedata.nombre); //Set desired URL here
    var textoshare = sharedata.marca + ' - ' + sharedata.nombre + ' en #CarnesMarket. ' + url;
    console.log(textoshare);
    window.open ('https://twitter.com/intent/tweet?text='+encodeURIComponent(textoshare),'','width=500, height=500, scrollbars=yes, resizable=no');
}

// Urls amigables
var amigable 	= (function() {
	var tildes = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
		conver = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
      	cuerpo 	= {};
 
 	for (var i=0, j=tildes.length; i<j; i++ ) { 
		cuerpo[tildes.charAt(i)] = conver.charAt(i);
	}
 
	return function(str) {
		var salida = [];
		for( var i = 0, j = str.length; i < j; i++) {
			var c = str.charAt( i );
			if(cuerpo.hasOwnProperty(str.charAt(i))) {
				salida.push(cuerpo[c]);
			} else {
				salida.push(c);
			}
		}
		return salida.join('').replace(/[^-A-Za-z0-9]+/g, '_').toLowerCase();
	}
})();



/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ----------          MARCAS          ----------- */

// Cargar marcas
function load_marcas() {
    show_loading();
    $("#marcas_items").html('');
    var data = {
        "action": "load_marcas"
    };
    $.ajax({ url: server_url,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            if(output.error){
                showErrorServer();
            }
            else {
                marcas_loaded = true;
                var marcas_response = output.marcas;
                var marcas = sortArrayRandom(marcas_response);
                var HTML = '';
                for(var i=0; i<marcas.length; i++) {
                    HTML += '<div class="marcas_item" data-marca="'+marcas[i].nombre+'">';
                    if(marcas[i].foto_remota != ''){
                        HTML += '<img src="'+marcas[i].foto_remota+'">';
                    }
                    else {
                        HTML += '<img src="http://carnesmarket.co/images/marcas/'+marcas[i].foto_local+'">';
                    }
                    HTML += '</div>';
                }
                $("#marcas_items").html(HTML);
            }
            hide_loading();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            showErrorServer();
        }
    });
}

// Cargar listados por marca
function load_products_byBrand(brand) {
    show_loading();
    $("#productos_items").html('');
    var data = {
        "action": "load_products_byBrand",
        "brand": brand
    };
    $.ajax({ url: server_url,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            if(output.error){
                showErrorServer();
            }
            else {
                var products_response = output.products;
                var products = sortArrayRandom(products_response);
                var HTML = '';
                var item_imageurl = '';
                for(var i=0; i<products.length; i++) {
                    HTML += '<div class="tienda_item">';
                    if(products[i].foto_remota != ''){
                        HTML += '<div class="tienda_item_img" data-id="'+products[i].id+'" style="background-image:url('+products[i].foto_remota+')"></div>';
                        item_imageurl = products[i].foto_remota;
                    }
                    else {
                        HTML += '<div class="tienda_item_img" data-id="'+products[i].id+'" style="background-image:url(http://carnesmarket.co/images/productos/'+products[i].foto_local+')"></div>';
                        item_imageurl = 'http://carnesmarket.co/images/productos/'+products[i].foto_local;
                    } 
                    HTML += '<div class="tienda_item_title"><span>'+products[i].nombre+'</span></div>';
                    var precio_final;
                    if(products[i].precio_descuento > 0){
                        HTML += '<div class="tienda_item_price"><span class="tachado">'+formatPrice(products[i].precio,'$')+'</span><br>'+formatPrice(products[i].precio_descuento, '$')+' x '+products[i].presentacion+'g</div>';
                        precio_final = products[i].precio_descuento;
                    }
                    else {
                        HTML += '<div class="tienda_item_price">&nbsp;<br>'+formatPrice(products[i].precio, '$')+' x '+products[i].presentacion+'g</div>';
                        precio_final = products[i].precio;
                    }
                    HTML += '<div class="tienda_item_buy">';
                    var itemdata = {
                        id: products[i].id,
                        id_inventario: products[i].id_inventario,
                        nombre: products[i].nombre,
                        precio: precio_final,
                        categoria: products[i].categoria,
                        marca: products[i].marca,
                        presentacion: products[i].presentacion,
                        imageurl: item_imageurl
                    };
                    var itemdatajson = JSON.stringify(itemdata);
                    HTML += '<a class="product_agregar_single app_button_black btn_30" data-itemdata=\''+itemdatajson+'\'>';
                    HTML += '<span class="btn_1_red"><span class="btn_2_black">AÑADIR</span></span>';
                    HTML += '</a>';
                    HTML += '</div>';
                    switch(products[i].tipo) {
                        case 'Cerdo':
                            HTML += '<div class="tienda_item_icon tienda_item_icon_cerdo"></div>';
                            break;
                        case 'Res':
                            HTML += '<div class="tienda_item_icon tienda_item_icon_res"></div>';
                            break;
                        case 'Pollo':
                            HTML += '<div class="tienda_item_icon tienda_item_icon_pollo"></div>';
                            break;
                        case 'Pescado':
                            HTML += '<div class="tienda_item_icon tienda_item_icon_pez"></div>';
                            break;
                        case 'Charcutería':
                            HTML += '<div class="tienda_item_icon tienda_item_icon_charc"></div>';
                            break;
                    }
                    HTML += '<div class="tienda_item_btn" data-id="'+products[i].id+'"></div>';
                    if(products[i].desactivado == 1){
                        HTML += '<div class="producto_agotado">AGOTADO</div>';
                    }
                    HTML += '</div>';
                }
                $("#productos_items").html(HTML);
                
                // Poner imagenes cuadradas
                var ancho_pantalla = $(document).width() / 2;
                $(".tienda_item_img").css("height", ancho_pantalla);
                
                // Ir a página de tienda y mostrar menú
                $(".menu_tienda_btn").removeClass("menu_tienda_btn_selected");
                $('#menu_tienda').show();
                $(".menu_bottom_btn").removeClass("menu_bottom_btn_selected");
                $("#menu_bottom_tienda").addClass("menu_bottom_btn_selected");
                $(':mobile-pagecontainer').pagecontainer('change', '#page_productos', {transition: 'none'});
            }
            hide_loading();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            showErrorServer();
        }
    });
}



/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ----------          CANASTA         ----------- */

// Agregar a la canasta
function addTobasket(itemdata, cantidad) {
    var encontrado = false;
    for(i=0; i<canasta.length; i++){
        if(canasta[i][0] == itemdata.id){
            encontrado = true;
            canasta[i][1]+=cantidad;
            break;
        }
    }
    if(!encontrado){
        var newItem = [
            itemdata.id, 
            cantidad, 
            itemdata.id_inventario, 
            itemdata.nombre, 
            itemdata.precio, 
            itemdata.categoria,
            itemdata.marca,
            itemdata.presentacion,
            itemdata.imageurl
        ];
        canasta.push(newItem);
    }
    reload_canasta();
    if(cantidad == 1){
        showAlertWithTitle('Se ha agregado '+cantidad+' '+itemdata.nombre+' a la canasta.', 'Añadido');
    }
    else {
        showAlertWithTitle('Se han agregado '+cantidad+' '+itemdata.nombre+' a la canasta.', 'Añadido');
    }
}

// Agregar 1 más desde la canasta
function addMoreToBasket(itemID) {
    for(i=0; i<canasta.length; i++){
        if(canasta[i][0] == itemID){
            canasta[i][1]++;
            break;
        }
    }
    reload_canasta();
}

// Eliminar de la canasta
function removeFromBasket(itemID) {
    for(i=0; i<canasta.length; i++){
        if(canasta[i][0] == itemID){
            if(canasta[i][1] > 1){
                canasta[i][1]--;
            }
            else {
                canasta.splice(i, 1);
            }
            break;
        }
    }
    reload_canasta();
}

// Cargar canasta
function reload_canasta() {
    $("#canasta_1_items, #canasta_3_items").html('');
    if(canasta.length > 0){
        var HTML = '';
        var HTMLresumen = '';
        var price;
        var updateCount = 0;
        for(i=0; i<canasta.length; i++){
            price = canasta[i][1]*canasta[i][4];
            updateCount += canasta[i][1];
            HTML += '<div class="carrito_item">';
            HTML += '<div class="carrito_image">';
            if(canasta[i][8] != undefined) {
                HTML += '<img src="'+canasta[i][8]+'">';
            }
            else {
                HTML += '<img src="http://carnesmarket.co/images/login_logo.png">';
            }
            HTML += '</div>';
            HTML += '<div class="carrito_agregar"><a class="carrito_agregar_btn" data-id="'+canasta[i][0]+'">+</a></div>';
            HTML += '<div class="carrito_cantidad"><span class="carrito_web_title">CANTIDAD<br></span>'+canasta[i][1]+'</div>';
            HTML += '<div class="carrito_producto"><span class="carrito_web_title">PRODUCTO<br></span>'+canasta[i][3];
            if(canasta[i][7] != 0){
                HTML += ' - '+canasta[i][7]+'g';
            }
            HTML += '</div>';
            HTML += '<div class="carrito_costo"><span class="carrito_web_title">COSTO<br></span>'+formatPrice(price, '$')+'</div>';
            HTML += '<div class="carrito_borrar"><a class="carrito_borrar_btn" data-id="'+canasta[i][0]+'">-</a></div>';
            HTML += '</div>';
            // Resumen
            HTMLresumen += '<div class="carrito_item carrito_item_red">';
            HTMLresumen += '<div class="carrito_res_image"><img src="'+canasta[i][8]+'"></div>';
            HTMLresumen += '<div class="carrito_cantidad carrito_cantidad2"><span class="carrito_web_title">CANTIDAD<br></span>'+canasta[i][1]+'</div>';
            HTMLresumen += '<div class="carrito_producto carrito_producto2"><span class="carrito_web_title">PRODUCTO<br></span>'+canasta[i][3];
            if(canasta[i][7] != 0){
                HTMLresumen += ' - '+canasta[i][7]+'g';
            }
            HTMLresumen += '</div>';
            HTMLresumen += '<div class="carrito_costo carrito_costo2"><span class="carrito_web_title">COSTO<br></span>'+formatPrice(price, '$')+'</div>';
            HTMLresumen += '</div>';
        }
        var subtotal = calcularSubTotal();
        $("#canasta_1_total").html(formatPrice(subtotal, '$'));
        $("#canasta_1_items").html(HTML);
        $(".btn_cart_count").html(updateCount);
        $(".btn_cart_count").show();
        $("#canasta_1_footer").show();
        // Resumen
        $("#canasta_3_items").html(HTMLresumen);
    }
    else {
        $(".btn_cart_count").hide();
        $("#canasta_1_footer").hide();
        $("#canasta_1_items").html('Tu carrito esta vacío.');
    }
    localStorage.localcanasta = JSON.stringify(canasta);
}

// Calcular subtotal
function calcularSubTotal(){
    var subtotal = 0;
    if(canasta.length > 0){
        for(i=0; i<canasta.length; i++){
            subtotal += canasta[i][1]*canasta[i][4];
        }
    }
    return subtotal;
}

// Calcular envío
function calcularEnvio() {
    var envio = 0;
    // Traer variables
    var entregaFecha = $("#pedido_fechaEntrega").val();
    var entregaHora = parseInt($("#pedido_horaEntrega").val());
    
    // Calcular timestamp de Hoy
    var todayReal = new Date();
    var todayHour = todayReal.getHours();
    var today = new Date( // Poner hora en 0:00:00
        todayReal.getMonth()+1+'/'+
        todayReal.getDate()+'/'+
        todayReal.getFullYear()
    );
    var todayTimestamp = (today.getTime()/1000) - (today.getTimezoneOffset()*60); // UTC
    
    // Calcular timestamp de fecha de entrega
    var date_entregaFechaAux = new Date(entregaFecha);
    var date_entregaFecha = new Date(  // Poner hora en 0:00:00
        date_entregaFechaAux.getUTCMonth()+1+'/'+
        date_entregaFechaAux.getUTCDate()+'/'+
        date_entregaFechaAux.getUTCFullYear()
    );
    var date_entregaTimestamp = (date_entregaFecha.getTime()/1000) - (date_entregaFecha.getTimezoneOffset()*60); // UTC
    
    // Si es el mismo día cuesta (Dentro de las 2 horas siguientes) $9.000
    if(date_entregaTimestamp == todayTimestamp) {
        envio = 10000;
    }
    else { // Para días siguientes, $4.000
        envio = 4000;
    }
    
    // Si el pedido es superior a $100.000 es gratis
    var subtotal = calcularSubTotal();
    if(subtotal >= 100000) {
        envio = 0;
    }
    
    return envio;
}

// Calcular descuento
function calcularDescuento() {
    var descuento = 0;
    var total = 0;
    total += calcularSubTotal() + calcularEnvio();
    if(cupon.valido){
        descuento += (total * cupon.valor) / 100;
    }
    return descuento;
}

// Calcular total
function calcularTotal() {
    var total = 0;
    total += calcularSubTotal() + calcularEnvio();
    if(cupon.valido){
        var descuento = (total * cupon.valor) / 100;
        total -= descuento;
    }
    return total;
}

// Obtener horarios
function obtenerHorarios() {
    $("#anuncioMismoDia").hide();
    // Traer variables
    var entregaFecha = $("#pedido_fechaEntrega").val();
    
    // Formatear fecha
    var date_entregaFechaAux = new Date(entregaFecha);
    var date_entregaFecha = new Date(  // Poner hora en 0:00:00
        date_entregaFechaAux.getUTCMonth()+1+'/'+
        date_entregaFechaAux.getUTCDate()+'/'+
        date_entregaFechaAux.getUTCFullYear()
    );
    var date_entregaTimestamp = (date_entregaFecha.getTime()/1000) - (date_entregaFecha.getTimezoneOffset()*60); // UTC
    
    // Calcular timestamp de Hoy
    var todayReal = new Date();
    var todayHour = todayReal.getHours();
    var today = new Date( // Poner hora en 0:00:00
        todayReal.getMonth()+1+'/'+
        todayReal.getDate()+'/'+
        todayReal.getFullYear()
    );
    var todayTimestamp = (today.getTime()/1000) - (today.getTimezoneOffset()*60); // UTC
    
    var HTML = '';
    if(todayTimestamp == date_entregaTimestamp && date_entregaFecha.getUTCDay() != 0) { // Mismo día pero sin ser domingo
        HTML += '<option value="0">En las próximas 2 horas</option>';
        $("#anuncioMismoDia").show();
    }
    else if(date_entregaFecha.getUTCDay() == 6) { // Sábados
        HTML += '<option value="1">08:00am - 10:00am</option>';
        HTML += '<option value="2">10:00am - 12:00pm</option>';
        HTML += '<option value="3">12:00pm - 02:00pm</option>';
    }
    else if(date_entregaFecha.getUTCDay() == 0) { // Domingos
        HTML += '<option value="nan">Domingo - Sin servicio</option>';
    }
    else { // Lunes a viernes
        HTML += '<option value="3">12:00pm - 02:00pm</option>';
        HTML += '<option value="4">02:00pm - 04:00pm</option>';
        HTML += '<option value="5">04:00pm - 06:00pm</option>';
        HTML += '<option value="6">06:00pm - 08:00pm</option>';
    }
    $("#pedido_horaEntrega").html(HTML);
}

// Validar datos de entrega
function validarCanasta2() {
    show_loading();
    // Traer variables
    var entregaFecha = $("#pedido_fechaEntrega").val();
    var entregaHora = parseInt($("#pedido_horaEntrega").val());
    var entregaDir = $("#pedido_direccionEntrega").val();
    var pedido_modoPago = parseInt($("#pedido_modoPago").val());
    
    // Calcular timestamp de fecha de entrega
    var date_entregaFechaAux = new Date(entregaFecha);
    var date_entregaFecha = new Date(  // Poner hora en 0:00:00
        date_entregaFechaAux.getUTCMonth()+1+'/'+
        date_entregaFechaAux.getUTCDate()+'/'+
        date_entregaFechaAux.getUTCFullYear()
    );
    
    if(validarDatosEntrega("proceso")){
        // Verificar zona de cobertura
        verificarCobertura().then(function() {
            if(g_cobertura) {
                // Verificar número máximo de pedidos por franja horaria
                verificarPedidosMax().then(function() {
                    if(g_cupoDisponible){        
                        // Poner datos 
                        $("#carrito_3_datos_subtotal").html(formatPrice(calcularSubTotal(), "$"));
                        $("#carrito_3_datos_envio").html(formatPrice(calcularEnvio(), "$"));
                        $("#carrito_3_datos_descuento").html(formatPrice(calcularDescuento(), "$"));
                        $("#carrito_3_datos_total").html(formatPrice(calcularTotal(), "$"));
                        $("#carrito_3_datos_fecha").html(formatDate(date_entregaFecha));
                        $("#carrito_3_datos_hora").html(formatFranjaHoraria(entregaHora));
                        $("#carrito_3_datos_direccion").html(entregaDir);
                        if(pedido_modoPago == 0){
                            $("#carrito_3_datos_modopago").html("Datáfono");
                            $("#carrito_3_pagoToken_cont").hide();
                        }
                        else if(pedido_modoPago == 1) {
                            $("#carrito_3_datos_modopago").html("Tarjeta de crédito");
                            $("#carrito_3_pagoToken_cont").show();
                        }
                        else if(pedido_modoPago == 2) {
                            $("#carrito_3_datos_modopago").html("PSE");
                            $("#carrito_3_pagoToken_cont").hide();
                        }
                        
                        // Datos iatai antifraude
                        // Construir cookie
                        var today = new Date();
                        var todayTimestamp = today.getTime() - (today.getTimezoneOffset()*60); // UTC
                        cookie = localStorage.getItem("id")+todayTimestamp;
                        
                        // HTML
                        var HTMLiatai = '';
                        HTMLiatai += '<p style="background:url(https://h.online-metrix.net/fp/clear.png?org_id=k8vif92e&amp;session_id=cybersource_iatai'+cookie+'&amp;m=1)"></p>';
                        HTMLiatai += '<img src="https://h.online-metrix.net/fp/clear.png?org_id=k8vif92e&amp;session_id=cybersource_iatai'+cookie+'&amp;m=2" alt="" >';
                        HTMLiatai += '<object type="application/x-shockwave-flash" data="https://h.online-metrix.net/fp/fp.swf?org_id=k8vif92e&amp;session_id=cybersource_iatai'+cookie+'" width="1" height="1" id="thm_fp">';
                        HTMLiatai += '<param name="movie" value="https://h.online-metrix.net/fp/fp.swf?org_id=k8vif92e&amp;session_id=cybersource_iatai'+cookie+'" />';
                        HTMLiatai += '<div></div>';
                        HTMLiatai += '</object>';
                        HTMLiatai += '<script src="https://h.online-metrix.net/fp/check.js?org_id=k8vif92e&amp;session_id=cybersource_iatai'+cookie+'" type="text/javascript"></script>';
                        $("#info_iatai").html(HTMLiatai);
                        
                        if(verificarPerfil() == false){
                            // Ir a canasta 3
                            $(':mobile-pagecontainer').pagecontainer('change', '#page_completarPerfil', {transition: 'none'});
                            hide_loading();
                        }
                        else {
                            // Ir a canasta 3
                            $(':mobile-pagecontainer').pagecontainer('change', '#page_canasta_3', {transition: 'none'});
                            hide_loading();
                        }
                    }
                    else {
                        showAlertWithTitle('El cupo máximo de esta franja horaria está lleno. Por favor selecciona otra.', 'Cupo lleno');
                    }
                });
            }
            else {
                showAlertWithTitle('Lo sentimos. Actualmente no tenemos cobertura en esta ubicación.', 'Sin cobertura');
            }
        });
    }
}

// Validar datos de la entrega
function validarDatosEntrega(estado) {
    // Traer variables
    var entregaFecha = $("#pedido_fechaEntrega").val();
    var entregaHora = parseInt($("#pedido_horaEntrega").val());
    var entregaDir = $("#pedido_direccionEntrega").val();
    var pedido_modoPago = parseInt($("#pedido_modoPago").val());
    
    // Calcular timestamp de Hoy
    var todayReal = new Date();
    var todayHour = todayReal.getHours();
    var today = new Date( // Poner hora en 0:00:00
        todayReal.getMonth()+1+'/'+
        todayReal.getDate()+'/'+
        todayReal.getFullYear()
    );
    var todayTimestamp = (today.getTime()/1000) - (today.getTimezoneOffset()*60); // UTC
    
    // Calcular timestamp de fecha de entrega
    var date_entregaFechaAux = new Date(entregaFecha);
    var date_entregaFecha = new Date(  // Poner hora en 0:00:00
        date_entregaFechaAux.getUTCMonth()+1+'/'+
        date_entregaFechaAux.getUTCDate()+'/'+
        date_entregaFechaAux.getUTCFullYear()
    );
    var date_entregaTimestamp = (date_entregaFecha.getTime()/1000) - (date_entregaFecha.getTimezoneOffset()*60); // UTC
    
    // Verificar campos vacíos
    if(entregaFecha == '' || entregaHora === '' || entregaDir == '' || coordenadasEntrega == ''){
        showErrorAlert('Por favor completa los datos de entrega.');
        return false;
    }
    
    // Verificar que la fecha no sea antes de hoy
    if(date_entregaTimestamp < todayTimestamp){
        showErrorAlert('La fecha de entrega no es válida');
        return false;
    }
    
    // Verificar que no se solicite para un domingo
    if(date_entregaFecha.getUTCDay() == 0) {
        showErrorAlert('Los domingos no prestamos servicio.');
        return false;
    }
    
    // Verificar franjas horarias correctas
    if(date_entregaFecha.getUTCDay() == 6) {
        if(entregaHora == 4 || entregaHora == 5 || entregaHora == 6){
            showErrorAlert('Franja horaria incorrecta. Selecciona otra.');
            return false;
        }
    }
    else {
        if(entregaHora == 1 || entregaHora == 2){
            showErrorAlert('Franja horaria incorrecta. Selecciona otra.');
            return false;
        }
    }
    
    // Verificar si es el mismo día, que la franja horaria sea correcta
    if(date_entregaTimestamp == todayTimestamp) {
        if((todayHour < 8 || todayHour >= 14) && date_entregaFecha.getUTCDay() != 6){
            showErrorAlert('El horario para pedidos el mismo día son de Lunes a Viernes de 8am-2pm y sábados de 8am-12pm');
            return false;
        }
        if((todayHour < 8 || todayHour >= 12) && date_entregaFecha.getUTCDay() == 6) {
            showErrorAlert('El horario para pedidos el mismo día son de Lunes a Viernes de 8am-2pm y sábados de 8am-12pm');
            return false;
        }
    }
    
    // Verificar si el pedido es el mismo día, que sea máximo a las 6pm
    if(date_entregaTimestamp == todayTimestamp) {
        if(todayHour >= 18){
            showErrorAlert('Los pedidos para el mismo día pueden realizarse máximo hasta las 6pm');
            return false;
        }
    }
    // Verificar el modo de pago
    if(pedido_modoPago == 1){ // Online
        var modoPagoString = localStorage.getItem("modoPago");
        var cuotas = $("#pagar_cuotas").val();
        var codigoSeguridad = $("#pagar_codigoSeguridad").val();
        if(modoPagoString == null || modoPagoString == ''){
            show_confirmModoPago();
            return false;
        }
        if(estado == "final" && codigoSeguridad == "") {
            showErrorAlert('Por favor ingresa el código de seguridad.');
            return false;
        }
        if(estado == "final" && cuotas == "") {
            showErrorAlert('Por favor ingresa el número de cuotas.');
            return false;
        }
    }
    if(pedido_modoPago == 2 && estado == "final"){ // PSE
        var pedido_PSE_Nombre = $("#pedido_PSE_Nombre").val();
        var pedido_PSE_Apellido = $("#pedido_PSE_Apellido").val();
        var pedido_PSE_cedula = $("#pedido_PSE_cedula").val();
        if(pedido_PSE_Nombre.trim().length < 2){
            showErrorAlert('Por favor ingresa el nombre del titular.');
            return false;
        }
        if(pedido_PSE_Apellido.trim().length < 2){
            showErrorAlert('Por favor ingresa el apellido del titular.');
            return false;
        }
        if(pedido_PSE_cedula.trim().length < 7){
            showErrorAlert('Por favor ingresa la cédula.');
            return false;
        }
    }
    return true;
}

// Aplicar un cupón
function aplicarCupon() {
    show_loading();
    cupon.id = 0;
    cupon.valido = false;
    cupon.valor = 0;
    var cuponUsuario = $("#pagar_cupon").val();
    var data = {
        "action": "aplicarCupon",
        "user": localStorage.getItem("id"),
        "cupon": cuponUsuario
    };
    $.ajax({ url: server_url,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            if(output.error){
                showErrorServer();
            }
            else if(!output.valido){
                showErrorAlert("Cupón no válido");
            }
            else if(output.expirado){
                showErrorAlert("Cupón expirado");
            }
            else if(output.haComprado){
                showErrorAlert("Ya has realizado compras anteriormente. Este es un cupón únicamente para primera compra.");
            }
            else if(output.usado){
                showErrorAlert("Ya has usado este cupón");
            }
            else {
                var cuponValido = output.cupondata;
                cupon.id = cuponValido.cupon;
                cupon.valido = true;
                cupon.valor = cuponValido.valor;
                $("#carrito_3_datos_descuento").html(formatPrice(calcularDescuento(), "$"));
                $("#carrito_3_datos_total").html(formatPrice(calcularTotal(), "$"));
            }
            hide_loading();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            showErrorServer();
        }
    });
}

// Realizar pedido con Datáfono
function realizarPedido() {
    show_loading();
    if(validarDatosEntrega("final")){
        // Variables a enviar
        var s_canasta = JSON.stringify(canasta);
        var entregaFecha = $("#pedido_fechaEntrega").val();
        var entregaHora = parseInt($("#pedido_horaEntrega").val());
        var entregaDir = $("#pedido_direccionEntrega").val();
        var s_entregaCoordenadas = JSON.stringify([coordenadasEntrega.lat(), coordenadasEntrega.lng()]);
        var subtotal = calcularSubTotal();
        var costoEnvio = calcularEnvio();
        var descuento = calcularDescuento();
        var total = calcularTotal();
        
        // Guardar histórico de direcciones
        if(esNuevaDireccion){
            var nuevaDireccion = {
                direccion: entregaDir,
                lat: coordenadasEntrega.lat(),
                lng: coordenadasEntrega.lng()
            };
            historialDirecciones.push(nuevaDireccion);
            actualizarDirecciones(false);
        }
        
        // Calcular timestamp de fecha de entrega
        var date_entregaFechaAux = new Date(entregaFecha);
        var date_entregaFecha = new Date(  // Poner hora en 0:00:00
            date_entregaFechaAux.getUTCMonth()+1+'/'+
            date_entregaFechaAux.getUTCDate()+'/'+
            date_entregaFechaAux.getUTCFullYear()
        );
        var date_entregaTimestamp = (date_entregaFecha.getTime()/1000) - (date_entregaFecha.getTimezoneOffset()*60); // UTC
        
        // Enviar pedido
        var data = {
            "action": "realizarPedido",
            "currentSession": localStorage.getItem("sessionToken"),
            "user": localStorage.getItem("id"),
            "canasta": s_canasta,
            "entregaFecha": date_entregaTimestamp,
            "entregaHora": entregaHora,
            "direccion": entregaDir,
            "entregaCoordenadas": s_entregaCoordenadas,
            "subtotal": subtotal,
            "envio": costoEnvio,
            "descuento": descuento,
            "total": total,
            "cupon": cupon.id
        };
        $.ajax({ url: server_url,
            data: data,
            type: 'POST',
            dataType: 'json',
            success: function(output) {
                if(output.error){
                    showErrorServer();
                }
                else if(output.sessionError) {
                    showErrorAlert("Tu sesión ha expirado. Inicia de nuevo.");
                    logout();
                }
                else {
                    // Resetear variables principales
                    canasta = [];
                    reload_canasta();
                    cupon.id = 0;
                    cupon.valido = false;
                    cupon.valor = 0;
                    $("#pagar_cupon").val('');
                    $(':mobile-pagecontainer').pagecontainer('change', '#page_canasta_4', {transition: 'none'});
                    
                    // Enviar push
                    var textoPush;
                    if(entregaHora == 0){
                        textoPush = 'Tienes un nuevo pedido para entrega inmediata';
                    }
                    else {
                        textoPush = 'Tienes un nuevo pedido para entrega el '+formatDate(date_entregaTimestamp*1000);
                    }
                    sendPUSHtoAdmin("Nuevo pedido", textoPush);
                }
                hide_loading();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                showErrorServer();
                hide_loading();
            }
        });
    }
}

// Realizar pedido con Token
function realizarPedidoToken() {
    show_loading();
    if(validarDatosEntrega("final")){
        // Variables a enviar
        var s_canasta = JSON.stringify(canasta);
        var entregaFecha = $("#pedido_fechaEntrega").val();
        var entregaHora = parseInt($("#pedido_horaEntrega").val());
        var modopago_pos = parseInt($("#carrito3_modopago").val());
        var entregaDir = $("#pedido_direccionEntrega").val();
        var codigoSeguridad = $("#pagar_codigoSeguridad").val();
        var cuotas = parseInt($("#pagar_cuotas").val());
        var s_entregaCoordenadas = JSON.stringify([coordenadasEntrega.lat(), coordenadasEntrega.lng()]);
        var modoPagoString = localStorage.getItem("modoPago");
        var modoPago = JSON.parse(modoPagoString);
        var subtotal = calcularSubTotal();
        var costoEnvio = calcularEnvio();
        var descuento = calcularDescuento();
        var total = calcularTotal();
        
        // Guardar histórico de direcciones
        if(esNuevaDireccion){
            var nuevaDireccion = {
                direccion: entregaDir,
                lat: coordenadasEntrega.lat(),
                lng: coordenadasEntrega.lng()
            };
            historialDirecciones.push(nuevaDireccion);
            actualizarDirecciones(false);
        }
        
        // Calcular timestamp de fecha de entrega
        var date_entregaFechaAux = new Date(entregaFecha);
        var date_entregaFecha = new Date(  // Poner hora en 0:00:00
            date_entregaFechaAux.getUTCMonth()+1+'/'+
            date_entregaFechaAux.getUTCDate()+'/'+
            date_entregaFechaAux.getUTCFullYear()
        );
        var date_entregaTimestamp = (date_entregaFecha.getTime()/1000) - (date_entregaFecha.getTimezoneOffset()*60); // UTC
        
        // Enviar pedido
        var data = {
            "action": "realizarPedidoConToken",
            "currentSession": localStorage.getItem("sessionToken"),
            "user": localStorage.getItem("id"),
            "token": modoPago[modopago_pos][2],
            "securityCode": codigoSeguridad,
            "telefono": localStorage.getItem("phone"),
            "email": localStorage.getItem("email"),
            "nombreUsuario": localStorage.getItem("name"),
            "apellidoUsuario": localStorage.getItem("lastname"),
            "cedulaUsuario": modoPago[modopago_pos][3],
            "canasta": s_canasta,
            "entregaFecha": date_entregaTimestamp,
            "entregaHora": entregaHora,
            "direccion": entregaDir,
            "entregaCoordenadas": s_entregaCoordenadas,
            "subtotal": subtotal,
            "envio": costoEnvio,
            "descuento": descuento,
            "cupon": cupon.id,
            "total": total,
            "cuotas": cuotas,
            "cookie": cookie
        };
        $.ajax({ url: server_payment,
            data: data,
            type: 'POST',
            dataType: 'json',
            success: function(output) {
                if(output.error){
                    showErrorServer();
                }
                else if(output.sessionError) {
                    showErrorAlert("Tu sesión ha expirado. Inicia de nuevo.");
                    logout();
                }
                else if(output.paymentError) {
                    if(output.errorMessage){
                        showErrorAlert(output.errorMessage);
                    }
                    else {
                        showErrorAlert("Hubo un error en el pago. Intenta de nuevo");
                    }
                }
                else if(!output.aprobado) {
                    showErrorAlert("Estado: " + output.mensaje);
                }
                else {
                    // Resetear variables principales
                    canasta = [];
                    reload_canasta();
                    cupon.id = 0;
                    cupon.valido = false;
                    cupon.valor = 0;
                    $("#pagar_cupon").val('');
                    $(':mobile-pagecontainer').pagecontainer('change', '#page_canasta_4', {transition: 'none'});
                    
                    // Enviar push
                    var textoPush;
                    if(entregaHora == 0){
                        textoPush = 'Tienes un nuevo pedido para entrega inmediata';
                    }
                    else {
                        textoPush = 'Tienes un nuevo pedido para entrega el '+formatDate(date_entregaTimestamp*1000);
                    }
                    sendPUSHtoAdmin("Nuevo pedido", textoPush);
                }
                hide_loading();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                showErrorServer();
                hide_loading();
            }
        });
    }
}

// Realizar pedido con PSE
function realizarPedidoPSE() {
    show_loading();
    if(validarDatosEntrega("final")){
        // Variables a enviar
        var s_canasta = JSON.stringify(canasta);
        var entregaFecha = $("#pedido_fechaEntrega").val();
        var entregaHora = parseInt($("#pedido_horaEntrega").val());
        var entregaDir = $("#pedido_direccionEntrega").val();
        var s_entregaCoordenadas = JSON.stringify([coordenadasEntrega.lat(), coordenadasEntrega.lng()]);
        var subtotal = calcularSubTotal();
        var costoEnvio = calcularEnvio();
        var descuento = calcularDescuento();
        var total = calcularTotal();
        var pedido_PSE_Nombre = $("#pedido_PSE_Nombre").val();
        var pedido_PSE_Apellido = $("#pedido_PSE_Apellido").val();
        var pedido_PSE_cedula = $("#pedido_PSE_cedula").val();
        var pedido_PSE_banco = $("#pedido_PSE_banco").val();
        var pedido_PSE_persona = $("#pedido_PSE_persona").val();
        
        // Guardar histórico de direcciones
        if(esNuevaDireccion){
            var nuevaDireccion = {
                direccion: entregaDir,
                lat: coordenadasEntrega.lat(),
                lng: coordenadasEntrega.lng()
            };
            historialDirecciones.push(nuevaDireccion);
            actualizarDirecciones(false);
        }
        
        // Calcular timestamp de fecha de entrega
        var date_entregaFechaAux = new Date(entregaFecha);
        var date_entregaFecha = new Date(  // Poner hora en 0:00:00
            date_entregaFechaAux.getUTCMonth()+1+'/'+
            date_entregaFechaAux.getUTCDate()+'/'+
            date_entregaFechaAux.getUTCFullYear()
        );
        var date_entregaTimestamp = (date_entregaFecha.getTime()/1000) - (date_entregaFecha.getTimezoneOffset()*60); // UTC
        
        // Enviar pedido
        var data = {
            "action": "realizarPedidoPSE",
            "currentSession": localStorage.getItem("sessionToken"),
            "user": localStorage.getItem("id"),
            "telefono": localStorage.getItem("phone"),
            "email": localStorage.getItem("email"),
            "nombreUsuario": localStorage.getItem("name"),
            "apellidoUsuario": localStorage.getItem("lastname"),
            "canasta": s_canasta,
            "entregaFecha": date_entregaTimestamp,
            "entregaHora": entregaHora,
            "direccion": entregaDir,
            "entregaCoordenadas": s_entregaCoordenadas,
            "subtotal": subtotal,
            "envio": costoEnvio,
            "descuento": descuento,
            "cupon": cupon.id,
            "total": total,
            "PSE_Nombre": pedido_PSE_Nombre,
            "PSE_Apellido": pedido_PSE_Apellido,
            "PSE_cedula": pedido_PSE_cedula,
            "PSE_banco": pedido_PSE_banco,
            "PSE_persona": pedido_PSE_persona,
            "cookie": cookie
        };
        $.ajax({ url: server_payment_pse,
            data: data,
            type: 'POST',
            dataType: 'json',
            success: function(output) {
                if(output.error){
                    showErrorServer();
                }
                else if(output.sessionError) {
                    showErrorAlert("Tu sesión ha expirado. Inicia de nuevo.");
                    logout();
                }
                else if(output.paymentError) {
                    if(output.errorMessage){
                        showErrorAlert(output.errorMessage);
                    }
                    else {
                        showErrorAlert("Hubo un error en el pago. Intenta de nuevo");
                    }
                }
                else {
                    // Resetear variables principales
                    canasta = [];
                    reload_canasta();
                    cupon.id = 0;
                    cupon.valido = false;
                    cupon.valor = 0;
                    $("#pagar_cupon").val('');
                    window.location.replace(output.bancoPSERespuesta_url);
                }
                hide_loading();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                showErrorServer();
                hide_loading();
            }
        });
    }
}

// Consultar transaccion PSE
function checkPSEstatus(transactionID) {
    show_loading();
    var data = {
        "action": "checkPSEstatus",
        "user": localStorage.getItem("id"),
        "transactionID": transactionID
    };
    $.ajax({ url: server_payment_pse,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            if(output.error){
                showErrorServer();
            }
            else if(output.sessionError) {
                showErrorAlert("No tienes ningún pedido con este ID.");
            }
            else if(output.paymentError) {
                if(output.errorMessage){
                    showErrorAlert(output.errorMessage);
                }
                else {
                    showErrorAlert("No se ha podido consultar el estado de la transacción. Refresca la página en un momento.");
                }
            }
            else {
                console.log(JSON.stringify(output.respuestaTransaccion));
            }
            hide_loading();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    });
}

/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ----------   NOTIFICACIONES PUSH    ----------- */

function sendPUSHtoAdmin(pushTitle, pushText) {
    var data = {
        "action": "enviarNotificacionAlAdmin",
        "pushTitle": pushTitle,
        "pushText": pushText
    };
    $.ajax({ url: server_url,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    });
}

// Verificar cobertura
function verificarCobertura(){
    // Variable de completado asíncrono
    var deferred = $.Deferred();
    var data = {
        "action": "load_cobertura"
    };
    $.ajax({ url: server_url,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            if(output.error){
                showErrorServer();
                deferred.reject();
            }
            else {
                // Verificar cobertura con el punto actual
                var zonas = output.zonas;
                var cobertura = false;
                for(i=0; i<zonas.length; i++){
                    var zona = JSON.parse(zonas[i].zona);
                    var zonaArray = [];
                    for(j=0; j<zona.length; j++){
                        var point = {lat: zona[j][0], lng: zona[j][1]};
                        zonaArray.push(point);
                    }
                    
                    var zonaPolygon = new google.maps.Polygon({paths: zonaArray});
                    var pointToCheck = new google.maps.LatLng(coordenadasEntrega.lat(), coordenadasEntrega.lng());
                    
                    cobertura = google.maps.geometry.poly.containsLocation(pointToCheck, zonaPolygon) ? true : false;
                    if(cobertura){
                        g_cobertura = true;
                        break;
                    }
                }
                if(!cobertura){
                    g_cobertura = false;
                    guardarZonaSinCobertura();
                }
                deferred.resolve();
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            showErrorServer();
            deferred.reject();
        }
    });
    return deferred.promise();
}

function guardarZonaSinCobertura() {
    var coord = JSON.stringify([coordenadasEntrega.lat(), coordenadasEntrega.lng()]);
    var direccion = $("#pedido_direccionEntrega").val();
    var data = {
        "action": "enviar_sinCobertura",
        "direccion": direccion,
        "coord": coord
    };
    $.ajax({ url: server_url,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            // Correcto
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Error
        }
    });
}

// Verificar pedidos máximos por franja horaria
function verificarPedidosMax(){
    // Traer variables
    var entregaHora = parseInt($("#pedido_horaEntrega").val());
    var entregaFecha = $("#pedido_fechaEntrega").val();
    
    // Calcular timestamp de fecha de entrega
    var date_entregaFechaAux = new Date(entregaFecha);
    var date_entregaFecha = new Date(  // Poner hora en 0:00:00
        date_entregaFechaAux.getUTCMonth()+1+'/'+
        date_entregaFechaAux.getUTCDate()+'/'+
        date_entregaFechaAux.getUTCFullYear()
    );
    var date_entregaTimestamp = (date_entregaFecha.getTime()/1000) - (date_entregaFecha.getTimezoneOffset()*60); // UTC
    
    // Variable de completado asíncrono
    var deferred = $.Deferred();
    var data = {
        "action": "verificarPedidosMax",
        "horaRecogida": entregaHora,
        "fechaRecogida": date_entregaTimestamp
    };
    $.ajax({ url: server_url,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            if(output.error){
                showErrorServer();
                deferred.reject();
            }
            else {
                if(output.cupoDisponible){
                    g_cupoDisponible = true;
                }
                else {
                    g_cupoDisponible = false;
                }
                deferred.resolve();
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            showErrorServer();
            deferred.reject();
        }
    });
    return deferred.promise();
}



/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ----------       GOOGLE MAPS        ----------- */

function initMap() {
    map = new google.maps.Map(document.getElementById('canasta_map'), {
        center: {lat: 4.686949, lng: -74.057222},
        scrollwheel: false,
        zoom: 16,
        disableDefaultUI: true,
        clickableIcons: false
    });
    geocoder = new google.maps.Geocoder();
    // Añadir el marcador en el centro
    var HTML = '<div id="canasta_map_pin"></div><div id="canasta_map_center"></div>';
    $('#canasta_map').append(HTML);
}
// Obtener posicion del usuario
var mapSuccess = function(position) {
    var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };
    map.setCenter(pos);
    resetmap();
    posInited = true;
};
function mapError(error) {
    // No se pudo traer la geolocalización
}
// Resetear mapa para que no se dañe la visualización
function resetmap(){
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
}
// Centrar en coordenadas predeterminadas
function setPredetCoordinates() {
    $('#map_direccionInput').val(localStorage.getItem("address"));
    var pos = {
        lat: coordenadasPredet[0],
        lng: coordenadasPredet[1]
    };
    map.setCenter(pos);
    resetmap();
}

var apiGeolocationSuccess = function(position) {
    var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };
    map.setCenter(pos);
    resetmap();
    posInited = true;
};
var tryAPIGeolocation = function() {
	$.post( "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyB1d7U3aKAtzshaRflFqmQVva7QhnyyaA8", function(success) {
        apiGeolocationSuccess({coords: {latitude: success.location.lat, longitude: success.location.lng}});
    })
    .fail(function(err) {
        
    });
};
var browserGeolocationFail = function(error) {
  switch (error.code) {
      case error.PERMISSION_DENIED:
          if(error.message.indexOf("Only secure origins are allowed") == 0) {
              tryAPIGeolocation();
          }
          break;
    }
};
var tryGeolocation = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            mapSuccess,
            browserGeolocationFail,
            {maximumAge: 50000, timeout: 20000, enableHighAccuracy: true}
        );
    }
};



/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ----------           CHEF           ----------- */

// Traer sugerencias
function calcularChef() {
    show_loading();
    var validado = true;
    productos_chef = []
    porciones_chef = 0
    productosVariedad = [];
    productosPremium = [];
    productosFit = [];
    productosEconomico = [];
    preferencias = "";
    var HTMLprefs = '';
    $(".chef_preferencias_btn").each(function() {
        if($(this).hasClass("chef_preferencias_btn_sel")){
            var pref = $(this).data("preferencia");
            if(preferencias == ""){
                preferencias += "'" + pref + "'";
            }
            else {
                preferencias += ",'" + pref + "'";
            }
            switch(pref) {
                case 'Cerdo':
                    HTMLprefs += '<a class="chef_agregar_preficons_item" id="chef_agregar_preficons_cerdo"></a>';
                    break;
                case 'Res':
                    HTMLprefs += '<a class="chef_agregar_preficons_item" id="chef_agregar_preficons_res"></a>';
                    break;
                case 'Pollo':
                    HTMLprefs += '<a class="chef_agregar_preficons_item" id="chef_agregar_preficons_pollo"></a>';
                    break;
                case 'Pescado':
                    HTMLprefs += '<a class="chef_agregar_preficons_item" id="chef_agregar_preficons_pez"></a>';
                    break;
                case 'Charcutería':
                    HTMLprefs += '<a class="chef_agregar_preficons_item" id="chef_agregar_preficons_charc"></a>';
                    break;
            }
        }
    });
    if(preferencias == ""){
        validado = false;
        showErrorAlert("Por favor selecciona por lo menos una preferencia");
        return;
    }
    if(calcularPorcionesChef() < 4){
        validado = false;
        showErrorAlert("Por favor agrega más días, personas o comidas.");
        return;
    }
    
    // Si esta validado, continuar
    if(validado) {
        var data = {
            "action": "load_productosChef",
            "preferencias": preferencias
        };
        $.ajax({ url: server_url,
            data: data,
            type: 'POST',
            dataType: 'json',
            success: function(output) {
                if(output.error){
                    showErrorServer();
                }
                else {
                    productos_chef = output.products;
                    porciones_chef = calcularPorcionesChef();
                    $("#chef_agregar_personas").html($("#chef_PersonasCant").data("personas"));
                    $("#chef_info_prefs").html(HTMLprefs);
                    $("#chef_agregar_dias").html($("#chef_DiasCant").data("dias"));
                    $("#chef_agregar_comidas").html(formatComidas(parseInt($("#chef_comidasCant").val())));
                    generarPaquetes();
                    mostrarVariedad();
                }
                hide_loading();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                showErrorServer();
            }
        });
    }
}

// Formatear comidas
function formatComidas(id) {
    var comidasText;
    switch(id){
        case 1:
            comidasText = 'Solo almuerzo';
            break;
        case 2:
            comidasText = 'Almuerzo y cena';
            break;
        case 3:
            comidasText = 'Desayuno, almuerzo y cena';
            break;
    }
    return comidasText;
}

// Calcular porciones de chef
function calcularPorcionesChef() {
    var personas = parseInt($("#chef_PersonasCant").data("personas"));
    var dias = parseInt($("#chef_DiasCant").data("dias"));
    var comidas = parseInt($("#chef_comidasCant").val());
    var portions = personas * dias * comidas;
    return portions;
}

// Generar Paquetes
function generarPaquetes() {
    var productsArray = [];
    var porcionesRestantes;
    var porcionesAux;
    var quiebre;
    
    // Generar Variedad
    porcionesAux = 0;
    quiebre = 0;
    while(porcionesAux < porciones_chef) {
        var productsArrayAux = JSON.parse(JSON.stringify(productos_chef)); // Para copiar por valor y no por referencia
        productsArray = sortArrayRandom(productsArrayAux);
        porcionesRestantes = porciones_chef - porcionesAux;
        for(var i=0; i<productsArray.length; i++) {
            if(porcionesRestantes >= productsArray[i].porciones){
                porcionesAux += productsArray[i].porciones;
                // Verificar si ya está ese producto en esta canasta
                var encontrado = false;
                for(var j=0; j<productosVariedad.length; j++){
                    if(productosVariedad[j].id == productsArray[i].id){
                        encontrado = true;
                        productosVariedad[j].cantidad++;
                        break;
                    }
                }
                if(!encontrado){
                    productsArray[i].cantidad = 1;
                    productosVariedad.push(productsArray[i]);
                }
                break;
            }
        }
        if(porcionesRestantes == 1){
            quiebre++
            if(quiebre >= 2){
                break;
            }
        }
    }
    
    // Generar Premium
    porcionesAux = 0;
    quiebre = 0;
    productsArray = [];
    while(porcionesAux < porciones_chef) {
        var productsArrayAux = JSON.parse(JSON.stringify(productos_chef));
        productsArray = sortArrayRandom(productsArrayAux);
        porcionesRestantes = porciones_chef - porcionesAux;
        for(var i=0; i<productsArray.length; i++) {
            var pack = productsArray[i].pack;
            if(pack.indexOf("Premium") >= 0) {
                if(porcionesRestantes >= productsArray[i].porciones){
                    porcionesAux += productsArray[i].porciones;
                    // Verificar si ya está ese producto en esta canasta
                    var encontrado = false;
                    for(var j=0; j<productosPremium.length; j++){
                        if(productosPremium[j].id == productsArray[i].id){
                            encontrado = true;
                            productosPremium[j].cantidad++;
                            break;
                        }
                    }
                    if(!encontrado){
                        productsArray[i].cantidad = 1;
                        productosPremium.push(productsArray[i]);
                    }
                    break;
                }
            }
        }
        if(porcionesRestantes == 1){
            quiebre++
            if(quiebre >= 2){
                break;
            }
        }
    }
    
    // Generar Fit
    porcionesAux = 0;
    quiebre = 0;
    productsArray = [];
    while(porcionesAux < porciones_chef) {
        var productsArrayAux = JSON.parse(JSON.stringify(productos_chef));
        productsArray = sortArrayRandom(productsArrayAux);
        porcionesRestantes = porciones_chef - porcionesAux;
        for(var i=0; i<productsArray.length; i++) {
            var pack = productsArray[i].pack;
            if(pack.indexOf("Fitness") >= 0) {
                if(porcionesRestantes >= productsArray[i].porciones){
                    porcionesAux += productsArray[i].porciones;
                    // Verificar si ya está ese producto en esta canasta
                    var encontrado = false;
                    for(var j=0; j<productosFit.length; j++){
                        if(productosFit[j].id == productsArray[i].id){
                            encontrado = true;
                            productosFit[j].cantidad++;
                            break;
                        }
                    }
                    if(!encontrado){
                        productsArray[i].cantidad = 1;
                        productosFit.push(productsArray[i]);
                    }
                    break;
                }
            }
        }
        if(porcionesRestantes == 1){
            quiebre++
            if(quiebre >= 2){
                break;
            }
        }
    }
    
    // Generar Económico
    porcionesAux = 0;
    quiebre = 0;
    productsArray = [];
    while(porcionesAux < porciones_chef) {
        var productsArrayAux = JSON.parse(JSON.stringify(productos_chef));
        productsArray = sortArrayRandom(productsArrayAux);
        porcionesRestantes = porciones_chef - porcionesAux;
        for(var i=0; i<productsArray.length; i++) {
            var pack = productsArray[i].pack;
            if(pack.indexOf("Económico") >= 0) {
                if(porcionesRestantes >= productsArray[i].porciones){
                    porcionesAux += productsArray[i].porciones;
                    // Verificar si ya está ese producto en esta canasta
                    var encontrado = false;
                    for(var j=0; j<productosEconomico.length; j++){
                        if(productosEconomico[j].id == productsArray[i].id){
                            encontrado = true;
                            productosEconomico[j].cantidad++;
                            break;
                        }
                    }
                    if(!encontrado){
                        productsArray[i].cantidad = 1;
                        productosEconomico.push(productsArray[i]);
                    }
                    break;
                }
            }
        }
        if(porcionesRestantes == 1){
            quiebre++
            if(quiebre >= 2){
                break;
            }
        }
    }
}

// Mostrar cada paquete
function mostrarVariedad() {
    chef_actual = "Variedad";
    $(".chef_filtro").removeClass("chef_filtro_sel");
    $("#chef_variedad").addClass("chef_filtro_sel");
    $("#sugerencias_items").html('');
    var price = 0;
    var HTML = '';
    for(var i=0; i<productosVariedad.length; i++) {
        if(productosVariedad[i].precio_descuento > 0){
            price += productosVariedad[i].cantidad * productosVariedad[i].precio_descuento;
        }
        else {
            price += productosVariedad[i].cantidad * productosVariedad[i].precio;
        }
        HTML += '<div class="tienda_item tienda_item_chef">';
        if(productosVariedad[i].foto_remota != ''){
            HTML += '<div class="chef_item_img" style="background-image:url('+productosVariedad[i].foto_remota+')"></div>';
        }
        else {
            HTML += '<div class="chef_item_img" style="background-image:url(http://carnesmarket.co/images/productos/'+productosVariedad[i].foto_local+')"></div>';
        }
        if(productosVariedad[i].cantidad > 1){
            HTML += '<div class="tienda_item_title"><span>'+productosVariedad[i].nombre+' x '+productosVariedad[i].cantidad+'</span></div>';
        }
        else {
            HTML += '<div class="tienda_item_title"><span>'+productosVariedad[i].nombre+'</span></div>';
        }
        if(productosVariedad[i].precio_descuento > 0){
            HTML += '<div class="tienda_item_price"><span class="tachado">'+formatPrice(productosVariedad[i].precio,'$')+'</span><br>'+formatPrice(productosVariedad[i].precio_descuento, '$')+' x '+productosVariedad[i].presentacion+'g</div>';
        }
        else {
            HTML += '<div class="tienda_item_price">&nbsp;<br>'+formatPrice(productosVariedad[i].precio, '$')+' x '+productosVariedad[i].presentacion+'g</div>';
        }
        switch(productosVariedad[i].tipo) {
            case 'Cerdo':
                HTML += '<div class="tienda_item_icon tienda_item_icon_cerdo"></div>';
                break;
            case 'Res':
                HTML += '<div class="tienda_item_icon tienda_item_icon_res"></div>';
                break;
            case 'Pollo':
                HTML += '<div class="tienda_item_icon tienda_item_icon_pollo"></div>';
                break;
            case 'Pescado':
                HTML += '<div class="tienda_item_icon tienda_item_icon_pez"></div>';
                break;
            case 'Charcutería':
                HTML += '<div class="tienda_item_icon tienda_item_icon_charc"></div>';
                break;
        }
        HTML += '</div>';
    }
    $("#sugerencias_items").html(HTML);
    $("#chef_agregar_info_total_precio").html(formatPrice(price,'$'));
    mostrarSugerencias();
}
function mostrarPremium() {
    chef_actual = "Premium";
    $(".chef_filtro").removeClass("chef_filtro_sel");
    $("#chef_premium").addClass("chef_filtro_sel");
    $("#sugerencias_items").html('');
    var price = 0;
    var HTML = '';
    for(var i=0; i<productosPremium.length; i++) {
        if(productosPremium[i].precio_descuento > 0){
            price += productosPremium[i].cantidad * productosPremium[i].precio_descuento;
        }
        else {
            price += productosPremium[i].cantidad * productosPremium[i].precio;
        }
        HTML += '<div class="tienda_item tienda_item_chef">';
        if(productosPremium[i].foto_remota != ''){
            HTML += '<div class="chef_item_img" style="background-image:url('+productosPremium[i].foto_remota+')"></div>';
        }
        else {
            HTML += '<div class="chef_item_img" style="background-image:url(http://carnesmarket.co/images/productos/'+productosPremium[i].foto_local+')"></div>';
        } 
        if(productosPremium[i].cantidad > 1){
            HTML += '<div class="tienda_item_title"><span>'+productosPremium[i].nombre+' x '+productosPremium[i].cantidad+'</span></div>';
        }
        else {
            HTML += '<div class="tienda_item_title"><span>'+productosPremium[i].nombre+'</span></div>';
        }
        if(productosPremium[i].precio_descuento > 0){
            HTML += '<div class="tienda_item_price"><span class="tachado">'+formatPrice(productosPremium[i].precio,'$')+'</span><br>'+formatPrice(productosPremium[i].precio_descuento, '$')+' x '+productosPremium[i].presentacion+'g</div>';
        }
        else {
            HTML += '<div class="tienda_item_price">&nbsp;<br>'+formatPrice(productosPremium[i].precio, '$')+' x '+productosPremium[i].presentacion+'g</div>';
        }
        switch(productosPremium[i].tipo) {
            case 'Cerdo':
                HTML += '<div class="tienda_item_icon tienda_item_icon_cerdo"></div>';
                break;
            case 'Res':
                HTML += '<div class="tienda_item_icon tienda_item_icon_res"></div>';
                break;
            case 'Pollo':
                HTML += '<div class="tienda_item_icon tienda_item_icon_pollo"></div>';
                break;
            case 'Pescado':
                HTML += '<div class="tienda_item_icon tienda_item_icon_pez"></div>';
                break;
            case 'Charcutería':
                HTML += '<div class="tienda_item_icon tienda_item_icon_charc"></div>';
                break;
        }
        HTML += '</div>';
    }
    $("#sugerencias_items").html(HTML);
    $("#chef_agregar_info_total_precio").html(formatPrice(price,'$'));
    mostrarSugerencias();
}
function mostrarFit() {
    chef_actual = "Fit";
    $(".chef_filtro").removeClass("chef_filtro_sel");
    $("#chef_fit").addClass("chef_filtro_sel");
    $("#sugerencias_items").html('');
    var price = 0;
    var HTML = '';
    for(var i=0; i<productosFit.length; i++) {
        if(productosFit[i].precio_descuento > 0){
            price += productosFit[i].cantidad * productosFit[i].precio_descuento;
        }
        else {
            price += productosFit[i].cantidad * productosFit[i].precio;
        }
        HTML += '<div class="tienda_item tienda_item_chef">';
        if(productosFit[i].foto_remota != ''){
            HTML += '<div class="chef_item_img" style="background-image:url('+productosFit[i].foto_remota+')"></div>';
        }
        else {
            HTML += '<div class="chef_item_img" style="background-image:url(http://carnesmarket.co/images/productos/'+productosFit[i].foto_local+')"></div>';
        } 
        if(productosFit[i].cantidad > 1){
            HTML += '<div class="tienda_item_title"><span>'+productosFit[i].nombre+' x '+productosFit[i].cantidad+'</span></div>';
        }
        else {
            HTML += '<div class="tienda_item_title"><span>'+productosFit[i].nombre+'</span></div>';
        }
        if(productosFit[i].precio_descuento > 0){
            HTML += '<div class="tienda_item_price"><span class="tachado">'+formatPrice(productosFit[i].precio,'$')+'</span><br>'+formatPrice(productosFit[i].precio_descuento, '$')+' x '+productosFit[i].presentacion+'g</div>';
        }
        else {
            HTML += '<div class="tienda_item_price">&nbsp;<br>'+formatPrice(productosFit[i].precio, '$')+' x '+productosFit[i].presentacion+'g</div>';
        }
        switch(productosFit[i].tipo) {
            case 'Cerdo':
                HTML += '<div class="tienda_item_icon tienda_item_icon_cerdo"></div>';
                break;
            case 'Res':
                HTML += '<div class="tienda_item_icon tienda_item_icon_res"></div>';
                break;
            case 'Pollo':
                HTML += '<div class="tienda_item_icon tienda_item_icon_pollo"></div>';
                break;
            case 'Pescado':
                HTML += '<div class="tienda_item_icon tienda_item_icon_pez"></div>';
                break;
            case 'Charcutería':
                HTML += '<div class="tienda_item_icon tienda_item_icon_charc"></div>';
                break;
        }
        HTML += '</div>';
    }
    $("#sugerencias_items").html(HTML);
    $("#chef_agregar_info_total_precio").html(formatPrice(price,'$'));
    mostrarSugerencias();
}
function mostrarEconomico() {
    chef_actual = "Economico";
    $(".chef_filtro").removeClass("chef_filtro_sel");
    $("#chef_economico").addClass("chef_filtro_sel");
    $("#sugerencias_items").html('');
    var price = 0;
    var HTML = '';
    for(var i=0; i<productosEconomico.length; i++) {
        if(productosEconomico[i].precio_descuento > 0){
            price += productosEconomico[i].cantidad * productosEconomico[i].precio_descuento;
        }
        else {
            price += productosEconomico[i].cantidad * productosEconomico[i].precio;
        }
        HTML += '<div class="tienda_item tienda_item_chef">';
        if(productosEconomico[i].foto_remota != ''){
            HTML += '<div class="chef_item_img" style="background-image:url('+productosEconomico[i].foto_remota+')"></div>';
        }
        else {
            HTML += '<div class="chef_item_img" style="background-image:url(http://carnesmarket.co/images/productos/'+productosEconomico[i].foto_local+')"></div>';
        }
        if(productosEconomico[i].cantidad > 1){
            HTML += '<div class="tienda_item_title"><span>'+productosEconomico[i].nombre+' x '+productosEconomico[i].cantidad+'</span></div>';
        }
        else {
            HTML += '<div class="tienda_item_title"><span>'+productosEconomico[i].nombre+'</span></div>';
        }
        if(productosEconomico[i].precio_descuento > 0){
            HTML += '<div class="tienda_item_price"><span class="tachado">'+formatPrice(productosEconomico[i].precio,'$')+'</span><br>'+formatPrice(productosEconomico[i].precio_descuento, '$')+' x '+productosEconomico[i].presentacion+'g</div>';
        }
        else {
            HTML += '<div class="tienda_item_price">&nbsp;<br>'+formatPrice(productosEconomico[i].precio, '$')+' x '+productosEconomico[i].presentacion+'g</div>';
        }
        switch(productosEconomico[i].tipo) {
            case 'Cerdo':
                HTML += '<div class="tienda_item_icon tienda_item_icon_cerdo"></div>';
                break;
            case 'Res':
                HTML += '<div class="tienda_item_icon tienda_item_icon_res"></div>';
                break;
            case 'Pollo':
                HTML += '<div class="tienda_item_icon tienda_item_icon_pollo"></div>';
                break;
            case 'Pescado':
                HTML += '<div class="tienda_item_icon tienda_item_icon_pez"></div>';
                break;
            case 'Charcutería':
                HTML += '<div class="tienda_item_icon tienda_item_icon_charc"></div>';
                break;
        }
        HTML += '</div>';
    }
    $("#sugerencias_items").html(HTML);
    $("#chef_agregar_info_total_precio").html(formatPrice(price,'$'));
    mostrarSugerencias();
}

// Ir a sugerencias
function mostrarSugerencias() {
    // Poner imagenes cuadradas
    var ancho_pantalla = $(document).width() / 2;
    $(".chef_item_img").css("height", ancho_pantalla);
    // Ir a página
    $(':mobile-pagecontainer').pagecontainer('change', '#page_chef_sugerencias', {transition: 'none'});
}

// Agregar canasta del chef
function agregar_chef() {
    var canasta_chef = [];
    switch(chef_actual) {
        case 'Variedad':
            canasta_chef = JSON.parse(JSON.stringify(productosVariedad));
            break;
        case 'Premium':
            canasta_chef = JSON.parse(JSON.stringify(productosPremium));
            break;
        case 'Fit':
            canasta_chef = JSON.parse(JSON.stringify(productosFit));
            break;
        case 'Economico':
            canasta_chef = JSON.parse(JSON.stringify(productosEconomico));
            break;
    }
    // Añadir
    for(var i=0; i<canasta_chef.length; i++){
        var item_imageurl = '';
        var precio_final;
        if(canasta_chef[i].foto_remota != ''){
            item_imageurl = canasta_chef[i].foto_remota;
        }
        else {
            item_imageurl = 'http://carnesmarket.co/images/productos/'+canasta_chef[i].foto_local;
        }
        if(canasta_chef[i].precio_descuento > 0) {
            precio_final = canasta_chef[i].precio_descuento;
        }
        else {
            precio_final = canasta_chef[i].precio;
        }
        var itemdata = {
            id: canasta_chef[i].id,
            id_inventario: canasta_chef[i].id_inventario,
            nombre: canasta_chef[i].nombre,
            precio: precio_final,
            categoria: canasta_chef[i].categoria,
            marca: canasta_chef[i].marca,
            presentacion: canasta_chef[i].presentacion,
            imageurl: item_imageurl
        };
        joinTobasket(itemdata, canasta_chef[i].cantidad);
    }
    reload_canasta();
    showAlertWithTitle("Se han añadido los productos a la canasta actual", "Agregado");
}


/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ----------         PEDIDOS          ----------- */

// Cargar pedidos
function load_pedidos() {
    show_loading();
    $("#pedidos_items").html('');
    var data = {
        "action": "load_pedidos",
        "currentSession": localStorage.getItem("sessionToken"),
        "user": localStorage.getItem("id")
    };
    $.ajax({ url: server_url,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            if(output.error){
                showErrorServer();
            }
            else {
                var pedidos = output.pedidos;
                var HTML = '';
                for(var i=0; i<pedidos.length; i++) {
                    HTML += '<div class="pedido_item" data-id="'+pedidos[i].id+'">';
                    HTML += '<div class="pedido_estado">';
                    if(pedidos[i].estado == 0){
                        HTML += '<div class="pedido_estado_img"><img src="http://carnesmarket.co/images/estado_procesado.png"></div>';
                        HTML += '<div class="pedido_estado_text">Procesado</div>';
                    }
                    else if(pedidos[i].estado == 1) {
                        HTML += '<div class="pedido_estado_img"><img src="http://carnesmarket.co/images/estado_entregado.png"></div>';
                        HTML += '<div class="pedido_estado_text">Entregado</div>';
                    }
                    HTML += '</div>';
                    HTML += '<div class="pedido_fecha">'+formatDate(pedidos[i].entregaFecha * 1000)+'</div>';
                    HTML += '<div class="pedido_id">'+pedidos[i].id+'</div>';
                    HTML += '</div>';
                }
                $("#pedidos_items").html(HTML);
                if(pedidos.length == 0) {
                    $("#page_pedidos").addClass('sinpedidos');
                }
                else {
                    $("#page_pedidos").removeClass('sinpedidos');
                }
            }
            hide_loading();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            showErrorServer();
        }
    });
}

// Cargar pedido
function load_pedidoByID(id) {
    show_loading();
    canastaPedido = [];
    $("#pedido_detalle_id, #canasta_pedido_items, #pedido_datos_subtotal, #pedido_datos_envio, #pedido_datos_descuento, #pedido_datos_total, #pedido_datos_fecha, #pedido_datos_hora, #pedido_datos_direccion, #pedido_datos_modopago, #pedido_datos_estadoPago").html('');
    var data = {
        "action": "load_pedido",
        "currentSession": localStorage.getItem("sessionToken"),
        "user": localStorage.getItem("id"),
        "pedidoID": id
    };
    $.ajax({ url: server_url,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            if(output.error){
                showErrorServer();
            }
            else {
                var pedido = output.pedido[0];
                if(pedido.canasta != '') {
                    canastaPedido = JSON.parse(pedido.canasta);
                    load_canastaPedido();
                }
                else {
                    showErrorAlert("Hubo un error en el pedido. Intenta de nuevo.");
                    $(':mobile-pagecontainer').pagecontainer('change', '#page_pedidos', {transition: 'none'});
                }
                $("#pedido_detalle_id").html('Pedido # ' + pedido.id);
                $("#pedido_datos_subtotal").html(formatPrice(pedido.subtotal, '$'));
                $("#pedido_datos_envio").html(formatPrice(pedido.envio, '$'));
                $("#pedido_datos_descuento").html(formatPrice(pedido.descuento, '$'));
                $("#pedido_datos_total").html(formatPrice(pedido.total, '$'));
                $("#pedido_datos_fecha").html(formatDate(pedido.entregaFecha * 1000));
                $("#pedido_datos_hora").html(formatFranjaHoraria(pedido.entregaHora));
                $("#pedido_datos_direccion").html(pedido.entregaDireccion);
                $("#pedido_datos_modopago").html(formatModoPago(pedido.modoPago));
                if(pedido.modoPago == 1) {
                    if(pedido.respuestaPago != '') {
                        respuestaPago = JSON.parse(pedido.respuestaPago);
                        $("#pedido_datos_estadoPago").html(respuestaPago.nombreEstado);
                    }
                }
                else {
                    $("#pedido_datos_estadoPago").html("N/A");
                }
                // Ir a página
                $(':mobile-pagecontainer').pagecontainer('change', '#page_pedidos_detalle', {transition: 'none'});
            }
            hide_loading();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            showErrorServer();
        }
    });
}

// Cargar items de la canasta del pedido histórico
function load_canastaPedido() {
    $("#canasta_pedido_items").html('');
    if(canastaPedido.length > 0){
        var HTML = '';
        var price;
        for(i=0; i<canastaPedido.length; i++){
            price = canastaPedido[i][1]*canastaPedido[i][4];
            HTML += '<div class="carrito_item carrito_item_red">';
            HTML += '<div class="carrito_image">';
            if(canastaPedido[i][8] != undefined) {
                HTML += '<img src="'+canastaPedido[i][8]+'">';
            }
            else {
                HTML += '<img src="http://carnesmarket.co/images/login_logo.png">';
            }
            HTML += '</div>';
            HTML += '<div class="carrito_cantidad"><span class="carrito_web_title">CANTIDAD<br></span>'+canastaPedido[i][1]+'</div>';
            HTML += '<div class="carrito_producto"><span class="carrito_web_title">PRODUCTO<br></span>'+canastaPedido[i][3];
            if(canastaPedido[i][7] != 0){
                HTML += ' - '+canastaPedido[i][7]+'g';
            }
            HTML += '</div>';
            HTML += '<div class="carrito_costo"><span class="carrito_web_title">COSTO<br></span>'+formatPrice(price, '$')+'</div>';
            HTML += '</div>';
        }
        $("#canasta_pedido_items").html(HTML);
    }
    else {
        showErrorAlert("Hubo un error en el pedido. Intenta de nuevo.");
        $(':mobile-pagecontainer').pagecontainer('change', '#page_pedidos', {transition: 'none'});
    }
}

// Combinar canastas cuando se pide de nuevo
function joinCanastas() {
    for(i=0; i<canastaPedido.length; i++){
        var itemdata = {
            id: canastaPedido[i][0],
            id_inventario: canastaPedido[i][2],
            nombre: canastaPedido[i][3],
            precio: canastaPedido[i][4],
            categoria: canastaPedido[i][5],
            marca: canastaPedido[i][6],
            presentacion: canastaPedido[i][7],
            imageurl: canastaPedido[i][8]
        };
        joinTobasket(itemdata, canastaPedido[i][1]);
    }
    reload_canasta();
    showAlertWithTitle("Se han añadido los productos a la canasta actual", "Agregado");
}

// Agregar a la canasta
function joinTobasket(itemdata, cantidad) {
    var encontrado = false;
    for(i=0; i<canasta.length; i++){
        if(canasta[i][0] == itemdata.id){
            encontrado = true;
            canasta[i][1]+=cantidad;
            break;
        }
    }
    if(!encontrado){
        var newItem = [
            itemdata.id, 
            cantidad, 
            itemdata.id_inventario, 
            itemdata.nombre, 
            itemdata.precio, 
            itemdata.categoria,
            itemdata.marca,
            itemdata.presentacion,
            itemdata.imageurl
        ];
        canasta.push(newItem);
    }
}




/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ----------          PERFIL          ----------- */

// Cargar datos de usuario
function load_userData() {
    // Obtener datos
    var id = localStorage.getItem("id");
    var username = localStorage.getItem("username");
    var email = localStorage.getItem("email");
    var notifications = localStorage.getItem("notifications");
    var name = localStorage.getItem("name");
    var lastname = localStorage.getItem("lastname");
    var phone = localStorage.getItem("phone");
    var address = localStorage.getItem("addresses");
    var profilePic = localStorage.getItem("profilePic");
    var profilePicFacebook = localStorage.getItem("profilePicFacebook");
    var gender = localStorage.getItem("gender");
    var modoPagoString = localStorage.getItem("modoPago");
    
    // Poner datos
    if(profilePic !== null && profilePic != '') {
        $('#perfil_profilePic').css("background-image", "url("+profilePic+"?"+(new Date()).getTime()+")");
    }
    if(profilePicFacebook !== null && profilePicFacebook != '') {
        $('#perfil_profilePic').css("background-image", "url("+profilePicFacebook+")");
        $('#perfil_camera, #btn_gotoChangePass').hide();
    }
    if(name !== null && lastname !== null) {
        $('#perfil_nombre').html(name+' '+lastname);
    }
    if(name !== null) {
        $('#perfil_editarNombre').val(name);
        $('#perfil_completarNombre').val(name);
    }
    if(lastname !== null) {
        $('#perfil_editarApellido').val(lastname);
        $('#perfil_completarApellido').val(lastname);
    }
    if(email !== null) {
        $('#perfil_correo').html(email);
        $('#perfil_editarEmail').val(email);
        $('#perfil_completarEmail').val(email);
    }
    if(phone !== null) {
        $('#perfil_celular').html(phone);
        $('#perfil_editarTelefono').val(phone);
        $('#perfil_completarTelefono').val(phone);
    }
    $(".genero_opt").removeClass("genero_opt_selected");
    if(gender == 1) {
        $("#perfil_generoMasculino").addClass("genero_opt_selected");
    }
    else if(gender == 2) {
        $("#perfil_generoFemenino").addClass("genero_opt_selected");
    }
    if(notifications == 1) {
        $("#recibirNotificaciones_btn").removeClass("recibirNotificaciones_off");
    }
    else {
        $("#recibirNotificaciones_btn").addClass("recibirNotificaciones_off");
    }
    if(modoPagoString !== null && modoPagoString != ''){
        var modoPago = JSON.parse(modoPagoString);
        $("#modopago_Actual").css('display', "block");
        $("#modopago_Nuevo").css('display', "none");
        
        // Cargar modos de pago
        var HTMLpago = '';
        var HTMLcarrito = '';
        var franch;
        for(var i=0; i<modoPago.length; i++){
            HTMLpago += '<div class="modopago_item">';
                HTMLpago += '<div class="modopago_item_number">xxxx-'+modoPago[i][0]+'</div>';
                HTMLpago += '<div class="modopago_item_franquicia">';
                switch(modoPago[i][1]) {
                    case "1":
                        HTMLpago += '<img src="http://carnesmarket.co/images/payment_visa.png">';
                        franch = "VISA";
                        break;
                    case "3":
                        HTMLpago +='<img src="http://carnesmarket.co/images/payment_mc.png">';
                        franch = "MASTERCARD";
                        break;
                    case "2":
                        HTMLpago +='<img src="http://carnesmarket.co/images/payment_amex.png">';
                        franch = "AMEX";
                        break;
                }
                HTMLpago += '</div>';
                HTMLpago += '<div class="modopago_item_action">';
                HTMLpago += '<a class="app_button_red_full btn_30 btn_eliminarModoPago" data-position="'+i+'"><span class="btn_1_red"><span class="btn_2_red_30">ELIMINAR</span></span></a>';
                HTMLpago += '</div>';
            HTMLpago += '</div>';
            HTMLcarrito += '<option value="'+i+'">'+franch+' - '+modoPago[i][0]+'</option>';
        }
        $("#modopago_items").html(HTMLpago);
        $("#carrito3_modopago").html(HTMLcarrito);
    }
    else {
        $("#modopago_Nuevo").css('display', "block");
        $("#modopago_Actual").css('display', "none");
    }
    if(address !== null && address != '') {
        historialDirecciones = JSON.parse(address);
        mostrarDireccionesPerfil();
        $("#btn_guardarDirecciones").show();
    }
    else {
        historialDirecciones = [];
        $("#direcciones_items").html('<div class="noHistorial">No tienes historial de direcciones</div>');
        $("#btn_guardarDirecciones").hide();
    }
}

function verificarPerfil() {
    var email = localStorage.getItem("email");
    var name = localStorage.getItem("name");
    var lastname = localStorage.getItem("lastname");
    var phone = localStorage.getItem("phone");
    if(name === null || lastname === null || email === null || phone === null || name == '' || lastname == '' || email == '' || phone == '') {
        return false;
    }
    else {
        return true;
    }
}

// Renderizar direcciones en perfil
function mostrarDireccionesPerfil() {
    if(historialDirecciones.length > 0){
        var HTMLdir = '';
        for(var i=0; i<historialDirecciones.length; i++){
            HTMLdir += '<div class="direccion_item">';
            HTMLdir += '<table><tr>';
            HTMLdir += '<td>'+historialDirecciones[i].direccion+'</td>';
            HTMLdir += '<td class="direccion_item_ico"><a class="direccion_borrar_btn" data-position="'+i+'"></a></td>';
            HTMLdir += '</tr></table>';
            HTMLdir += '</div>';
        }
        $("#direcciones_items").html(HTMLdir);
        $("#btn_guardarDirecciones").show();
    }
    else {
        $("#direcciones_items").html('<div class="noHistorial">No tienes historial de direcciones</div>');
    }
}

// Renderizar direcciones en canasta
function mostrarDireccionesCanasta() {
    var HTMLdir = '';
    for(var i=0; i<historialDirecciones.length; i++){
        HTMLdir += '<div class="canasta_direccion_item" data-direccion="'+historialDirecciones[i].direccion+'" data-lat="'+historialDirecciones[i].lat+'" data-lng="'+historialDirecciones[i].lng+'">'+historialDirecciones[i].direccion+'</div>';
    }
    $("#canasta_direcciones_items").html(HTMLdir);
}

// Eliminar direccion
function eliminarDireccion(posicion) {
    historialDirecciones.splice(posicion, 1);
    mostrarDireccionesPerfil();
    localStorage.setItem("addresses", JSON.stringify(historialDirecciones));
}

// Actualizar direcciones
function actualizarDirecciones(showAlert) {
    if(showAlert){
        show_loading();
    }
    var direccionesSave;
    if(historialDirecciones.length > 0){
        direccionesSave = JSON.stringify(historialDirecciones);
    }
    else {
        direccionesSave = '';
    }
    var data = {
        "action": "actualizarDirecciones",
        "currentSession": localStorage.getItem("sessionToken"),
        "user": localStorage.getItem("id"),
        "address": direccionesSave
    };
    $.ajax({ url: server_url,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            if(output.error && showAlert){
                showErrorServer();
            }
            else if(output.sessionError && showAlert) {
                showErrorAlert("Tu sesión ha expirado. Inicia de nuevo.");
                logout();
            }
            else if(showAlert) {
                showAlertWithTitle("Tus direcciones han sido actualizadas", "Actualizado");
            }
            if(!output.error) {
                localStorage.setItem("addresses", direccionesSave);
                load_userData();
            }
            hide_loading();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            if(showAlert){
                showErrorServer();
            }
        }
    });
}

// Verificar si es usuario de facebook
function isFacebookUser() {
    var profilePicFacebook = localStorage.getItem("profilePicFacebook");
    var username = localStorage.getItem("username");
    if((profilePicFacebook !== null && profilePicFacebook != '') || username.length > 20) {
        return true;
    }
    else {
        return false;
    }
}

// Verificar si es usuario sin registrarse
function esNoRegistrado() {
    var userid = localStorage.getItem("id");
    if(userid == -1) {
        return true;
    }
    else {
        return false;
    }
}

// Obtener metodos de pago
function getPaymentMethods() {
    show_loading();
    var data = {
        "action": "getPaymentMethods"
    };
    $.ajax({ url: server_payment,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            if(output.error){
                showErrorServer();
            }
            else {
                var franquicias = output.paymentMethods;
                var HTML = '';
                for(var i=0; i<franquicias.length; i++) {
                    HTML += '<option value="'+franquicias[i].idFranquicia+'">'+franquicias[i].nombre+'</option>';
                }
                $("#modopago_franquicia").html(HTML);
                $("#modopago_Actual").css('display', "none");
                $("#modopago_Nuevo").css('display', "block");
                franquicias_loaded = true;
                $(':mobile-pagecontainer').pagecontainer('change', '#page_modopago', {transition: 'none'});
                hide_loading();
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            showErrorServer();
        }
    });
}

// Obtener bancos
function load_bancosPSE() {
    $("#pedido_PSE_banco").html('');
    show_loading();
    var data = {
        "action": "getBanks"
    };
    $.ajax({ url: server_payment_pse,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            if(output.error){
                showErrorAlert("No se pudo obtener la lista de bancos, por favor intente más tarde");
            }
            else if(output.wserror) {
                if(output.errorMessage){
                    showErrorAlert(output.errorMessage);
                }
                else {
                    showErrorAlert("Hubo un error, por favor intente más tarde.");
                }  
            }
            else {
                var bancos = output.banksList;
                var HTML = '';
                for(var i=0; i<bancos.length; i++) {
                    HTML += '<option value="'+bancos[i].idBanco+'">'+bancos[i].nombreBanco+'</option>';
                }
                $("#pedido_PSE_banco").html(HTML);
                $(':mobile-pagecontainer').pagecontainer('change', '#page_canasta_PSE', {transition: 'none'});
                hide_loading();
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            showErrorServer();
        }
    });
}

// Confirmar si desea ir a agregar modo de pago
function confirm_goto_agregarPago(buttonIndex) {
    if(buttonIndex == 1){ // NO
        hide_loading();
    }
    else if(buttonIndex == 2){ // SI
        if(franquicias_loaded){
            $(':mobile-pagecontainer').pagecontainer('change', '#page_modopago', {transition: 'none'});
            hide_loading();
        }
        else {
            getPaymentMethods();
        }
    }
}

// Modo de pago
function guardarModoPago() {
    show_loading();
    // Obtener variables
    var idFranquicia = $("#modopago_franquicia").val();
    var tarjeta = $("#modopago_tarjeta").val();
    var anoExp = $("#modopago_year").val();
    var mesExp = $("#modopago_month").val();
    var securityCode = $("#modopago_codigoSeguridad").val();
    var nombreTitular = $("#modopago_nombre").val();
    var apellidoTitular = $("#modopago_apellido").val();
    var ciudadTitular = $("#modopago_ciudad").val();
    var direccionTitular = $("#modopago_dir").val();
    var cedulaUsuario = $("#modopago_cedula").val();
    var telefono = localStorage.getItem("phone");
    var email = localStorage.getItem("email");
    var nombreUsuario = localStorage.getItem("name");
    var apellidoUsuario = localStorage.getItem("lastname");
    
    // Validar
    var validado = true;
    if(cedulaUsuario.trim().length < 5){
        validado = false;
        showErrorAlert("Ingresa una cédula válida");
        return;
    }
    if(nombreTitular.trim().length < 2){
        validado = false;
        showErrorAlert("Ingresa un nombre válido");
        return;
    }
    if(apellidoTitular.trim().length < 2){
        validado = false;
        showErrorAlert("Ingresa un apellido válido");
        return;
    }
    if(securityCode.trim().length < 3 || securityCode.trim().length > 4){
        validado = false;
        showErrorAlert("Ingresa una código de seguridad de 3 o 4 dígitos");
        return;
    }
    if(ciudadTitular.trim().length < 1){
        validado = false;
        showErrorAlert("Ingresa una ciudad");
        return;
    }
    if(direccionTitular.trim().length < 5){
        validado = false;
        showErrorAlert("Ingresa una dirección");
        return;
    }
    
    // Credit Card REGEX
    var idFranquiciaINT = parseInt(idFranquicia);
    switch(idFranquicia) {
        case 1:
            if(!tarjeta.match(/^4[0-9]{12}(?:[0-9]{3})?$/)){
                validado = false;
                showErrorAlert("La tarjeta VISA no parece válida.");
                return;
            }
            break;
        case 2:
            if(!tarjeta.match(/^3[47][0-9]{13}$/)){
                validado = false;
                showErrorAlert("La tarjeta AMERICAN EXPRESS no parece válida.");
                return;
            }
            break;
        case 3:
            if(!tarjeta.match(/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/)){
                validado = false;
                showErrorAlert("La tarjeta MASTERCARD no parece válida.");
                return;
            }
            break;
        case 5:
            if(!tarjeta.match(/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/)){
                validado = false;
                showErrorAlert("La tarjeta DINERS CLUB no parece válida.");
                return;
            }
            break;
    }
    
    if(validado) {
        // Llamado al ajax
        var data = {
            "action": "getTokenID",
            "currentSession": localStorage.getItem("sessionToken"),
            "user": localStorage.getItem("id"),
            "modoPago_array": localStorage.getItem("modoPago"),
            "idFranquicia": idFranquicia,
            "tarjeta": tarjeta,
            "anoExp": anoExp,
            "mesExp": mesExp,
            "securityCode": securityCode,
            "nombreTitular": nombreTitular,
            "apellidoTitular": apellidoTitular,
            "ciudadTitular": ciudadTitular,
            "direccionTitular": direccionTitular,
            "cedulaUsuario": cedulaUsuario,
            "telefono": telefono,
            "email": email,
            "nombreUsuario": nombreUsuario,
            "apellidoUsuario": apellidoUsuario
        };
        $.ajax({ url: server_payment,
            data: data,
            type: 'POST',
            dataType: 'json',
            success: function(output) {
                if(output.error){
                    showErrorServer();
                }
                else if(output.sessionError) {
                    showErrorAlert("Tu sesión ha expirado. Inicia de nuevo.");
                    logout();
                }
                else if(output.tokenError) {
                    if(output.errorMessage){
                        showErrorAlert(output.errorMessage);
                    }
                    else {
                        showErrorAlert("Hubo un error, revisa que los datos de tu tarjeta sean correctos.");
                    }  
                }
                else if(!output.suscrito) {
                    showErrorAlert("Hubo un error, revisa que los datos de tu tarjeta sean correctos.");
                }
                else {
                    localStorage.setItem("modoPago", output.modoPago);
                    showAlertWithTitle("Tu modo de pago ha sido generado con éxito", "Guardado");
                    load_userData();
                    $("#modopago_tarjeta").val('');
                    $("#modopago_codigoSeguridad").val('');
                    $("#modopago_nombre").val('');
                    $("#modopago_apellido").val('');
                    $("#modopago_ciudad").val('');
                    $("#modopago_dir").val('');
                    $("#modopago_cedula").val('');
                }
                hide_loading();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                showErrorServer();
                hide_loading();
            }
        });
    }
}

// Eliminar modo de pago
function eliminarModoPago(position) {
    show_loading();
    var modopago_actual_json = localStorage.getItem("modoPago");
    var modopago_actual_array = JSON.parse(modopago_actual_json);
    var modopago_delete = modopago_actual_array[position];
    var modopago_delete_json = JSON.stringify(modopago_delete);
    modopago_actual_array.splice(position, 1);
    var modopago_final;
    if(modopago_actual_array.length > 0){
        modopago_final = JSON.stringify(modopago_actual_array);
    }
    else {
        modopago_final = '';
    }
    var data = {
        "action": "deleteTokenID",
        "currentSession": localStorage.getItem("sessionToken"),
        "user": localStorage.getItem("id"),
        "modopago_final": modopago_final,
        "modoPago": modopago_delete_json
    };
    $.ajax({ url: server_payment,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            if(output.error){
                showErrorServer();
            }
            else if(output.sessionError) {
                showErrorAlert("Tu sesión ha expirado. Inicia de nuevo.");
                logout();
            }
            else if(output.tokenError) {
                if(output.errorMessage){
                    showErrorAlert(output.errorMessage);
                }
                else {
                    showErrorAlert("Hubo un error eliminando tu tarjeta. Reinicia la aplicación y comprueba que si ya fue eliminada.");
                }
            }
            else {
                localStorage.setItem("modoPago", modopago_final);
                showAlertWithTitle("Tu modo de pago ha sido eliminado con éxito", "Eliminado");
                load_userData();
                if(modopago_final == '' && !franquicias_loaded){
                    getPaymentMethods();
                }
            }
            hide_loading();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            showErrorServer();
        }
    });
}

// Cámara
function profilePicSRC(buttonIndex) {
    if(buttonIndex == 1){ // Cámara
        var camOptions = {
            quality: 30,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType : Camera.PictureSourceType.CAMERA,
            encodingType: navigator.camera.EncodingType.JPEG,
            cameraDirection: navigator.camera.Direction.FRONT,
            correctOrientation: true,
            targetWidth: 640,
            targetHeight: 640,
            saveToPhotoAlbum: true
        };
        navigator.camera.getPicture(cameraSuccess, cameraFail, camOptions);
    }
    else if(buttonIndex == 2){ // Galería
        var camOptions = {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
            mediaType: Camera.MediaType.PICTURE,
            targetWidth: 640,
            targetHeight: 640
        };
        navigator.camera.getPicture(cameraSuccess, cameraFail, camOptions);
    }
}
function cameraSuccess(imageURI) {
    uploadProfilePic(imageURI);
    cameraCleanUp();
}
function cameraFail(message) {
    cameraCleanUp();
}
function cameraCleanUp() {
    if(device == "iOS"){
        navigator.camera.cleanup(function(){}, function(){});
    }
}

// Subir foto de perfil
function uploadProfilePic(fileURL) {
    show_loading();
    
    // Callbacks
    var uploadSuccess = function (r) {
        var output = JSON.parse(r.response);
        if(output.error){
            showErrorServer();
        }
        else if(output.sessionError) {
            showErrorAlert("Tu sesión ha expirado. Inicia de nuevo.");
            logout();
        }
        else {
            localStorage.setItem("profilePic", output.profilePic);
            load_userData();
        }
        hide_loading();
    }
    var uploadFail = function (error) {
        showErrorServer();
        hide_loading();
    }
    
    // Opciones
    var options = new FileUploadOptions();
    options.fileKey = "profilePic";
    options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";
    
    // Otros keys para enviar por POST
    var params = {};
    params.action = "upload_profilePic";
    params.currentSession = localStorage.getItem("sessionToken");
    params.user = localStorage.getItem("id");
    options.params = params;
    
    // Haaders
    var headers={'Connection':'close'};
    options.headers = headers;
    
    // Enviar en partes pequeñas para evitar error de memoria
    options.chunkedMode = false;
    
    var ft = new FileTransfer();
    ft.upload(fileURL, encodeURI(server_url), uploadSuccess, uploadFail, options);
}

// Actualizar perfil
function actualizarPerfil() {
    show_loading();
    var correo = $("#perfil_editarEmail").val();
    var nombre = $("#perfil_editarNombre").val();
    var apellido = $("#perfil_editarApellido").val();
    var telefono = $("#perfil_editarTelefono").val();
    var genero = parseInt($("#perfil_editarGenero").val());
    var notificaciones = parseInt($("#perfil_editarNotificaciones").val());
    var emailfilter = /\S+@\S+\.\S+/;
    var validado = true;
    
    // Validar
    if (!emailfilter.test(correo)) {
        validado = false;
        showErrorAlert('Ingresa un correo válido.');
        return;
    }

    if(nombre.trim().length < 2){
        validado = false;
        showErrorAlert('Ingresa tu nombre.');
        return;
    }

    if(apellido.trim().length < 2){
        validado = false;
        showErrorAlert('Ingresa tu apellido.');
        return;
    }

    if(telefono.trim().length != 10){
        validado = false;
        showErrorAlert('Ingresa un celular válido de 10 dígitos.');
        return;
    }
    
    if(validado) {
        var data = {
            "action": "actualizar_perfil",
            "currentSession": localStorage.getItem("sessionToken"),
            "user": localStorage.getItem("id"),
            "correo": correo,
            "nombre": nombre,
            "apellido": apellido,
            "telefono": telefono,
            "genero": genero,
            "notificaciones": notificaciones
        };
        $.ajax({ url: server_url,
            data: data,
            type: 'POST',
            dataType: 'json',
            success: function(output) {
                if(output.error){
                    showErrorServer();
                }
                else if(output.sessionError) {
                    showErrorAlert("Tu sesión ha expirado. Inicia de nuevo.");
                    logout();
                }
                else if(output.duplicado) {
                    if(output.duplicadoKey == "email") {
                        showErrorAlert('Correo ya existente.');
                    }
                    else {
                        showErrorAlert('Una cuenta con estos datos ya existe.');
                    }
                }
                else {
                    showAlertWithTitle("Tu perfil ha sido actualizado con éxito", "Actualizado");
                    localStorage.setItem("email", output.email);
                    localStorage.setItem("name", output.name);
                    localStorage.setItem("lastname", output.lastname);
                    localStorage.setItem("phone", output.phone);
                    localStorage.setItem("gender", output.gender);
                    localStorage.setItem("notifications", output.notifications);
                    load_userData();
                }
                hide_loading();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                showErrorServer();
            }
        });
    }
}

// Actualizar perfil
function completarPerfil() {
    show_loading();
    var correo = $("#perfil_completarEmail").val();
    var nombre = $("#perfil_completarNombre").val();
    var apellido = $("#perfil_completarApellido").val();
    var telefono = $("#perfil_completarTelefono").val();
    var emailfilter = /\S+@\S+\.\S+/;
    var validado = true;
    
    // Validar
    if (!emailfilter.test(correo)) {
        validado = false;
        showErrorAlert('Ingresa un correo válido.');
        return;
    }

    if(nombre.trim().length < 2){
        validado = false;
        showErrorAlert('Ingresa tu nombre.');
        return;
    }

    if(apellido.trim().length < 2){
        validado = false;
        showErrorAlert('Ingresa tu apellido.');
        return;
    }

    if(telefono.trim().length != 10){
        validado = false;
        showErrorAlert('Ingresa un celular válido de 10 dígitos.');
        return;
    }
    
    if(validado) {
        var data = {
            "action": "completar_perfil",
            "currentSession": localStorage.getItem("sessionToken"),
            "user": localStorage.getItem("id"),
            "correo": correo,
            "nombre": nombre,
            "apellido": apellido,
            "telefono": telefono
        };
        $.ajax({ url: server_url,
            data: data,
            type: 'POST',
            dataType: 'json',
            success: function(output) {
                if(output.error){
                    showErrorServer();
                }
                else if(output.sessionError) {
                    showErrorAlert("Tu sesión ha expirado. Inicia de nuevo.");
                    logout();
                }
                else if(output.duplicado) {
                    if(output.duplicadoKey == "email") {
                        showErrorAlert('Correo ya existente.');
                    }
                    else {
                        showErrorAlert('Una cuenta con estos datos ya existe.');
                    }
                }
                else {
                    localStorage.setItem("email", output.email);
                    localStorage.setItem("name", output.name);
                    localStorage.setItem("lastname", output.lastname);
                    localStorage.setItem("phone", output.phone);
                    load_userData();
                    $(':mobile-pagecontainer').pagecontainer('change', '#page_canasta_3', {transition: 'none'});
                }
                hide_loading();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                showErrorServer();
            }
        });
    }
}

// Cambiar contraseña
function changePass() {
    var oldPass = $('#changePass_actual').val();
    var newPass = $('#changePass_nueva').val();
    var newPassConfirm = $('#changePass_verificar').val();
    if(newPass != newPassConfirm) {
        showErrorAlert("Tu nueva contraseña y la verificación no coinciden.");
    }
    else if(newPass.length < 6) {
        showErrorAlert("Tu contraseña debe tener mínimo 6 caracteres.");
    }
    else {
        show_loading();
        var data = {
            "action": "changePassword",
            "user": localStorage.getItem("id"),
            "oldPass": oldPass,
            "newPass": newPass
        };
        $.ajax({ url: server_url,
            data: data,
            type: 'POST',
            dataType: 'json',
            success: function(output) {
                if(output.error){
                    showErrorServer();
                }
                else if(output.sessionError) {
                    showErrorAlert("Tu sesión ha expirado. Inicia de nuevo.");
                    logout();
                }
                else if(output.badpassword) {
                    showErrorAlert("Tu contraseña actual es incorrecta");
                }
                else {
                    showAlertWithTitle("Tu contraseña ha sido cambiada con éxito.", "Actualizada");
                    $('#cambiarpass_oldpass').val('');
                    $('#cambiarpass_newpass').val('');
                    $('#cambiarpass_newpassverif').val('');
                    $(':mobile-pagecontainer').pagecontainer('change', '#page_perfil', {transition: 'none'});
                }
                hide_loading();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                showErrorServer();
                hide_loading();
            }
        });
    }
}

// Confirmar si desea ir al registro
function confirm_goto_register(buttonIndex) {
    if(buttonIndex == 1){ // NO
        
    }
    else if(buttonIndex == 2){ // SI
        // Borrar caché y enviar a login
        clearLocalstorage();
        $(':mobile-pagecontainer').pagecontainer('change', '#page_login', {transition: 'none'});
    }
}

// Cerrar sesión
function logout() {
    show_loading();
    if(isFacebookUser()) {
        FB.getLoginStatus(function(ret) {
            if(ret.authResponse) {
                FB.logout(function(response) {
                    deleteSession();
                });
            } else {
               deleteSession();
            }
        });  
    }
    else {
        deleteSession();
    }
}

// Borrar la sesión
function deleteSession() {
    var data = {
        "action": "deleteSession",
        "currentSession": localStorage.getItem("sessionToken")
    };
    $.ajax({ url: server_url,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function(output) {
            if(output.error){
                showErrorServer();
            }
            else {
                // Borrar caché y enviar a login
                clearLocalstorage();
                window.location.reload();
            }
            hide_loading();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            showErrorServer();
            hide_loading();
        }
    });
}

// Borrar localstorage, mantener variable de 1st launch
function clearLocalstorage() {
    var firstLaunch = localStorage.getItem('firstLaunch');
    var onesignalPlayerID = localStorage.getItem('onesignalPlayerID');
    localStorage.clear();
    if(firstLaunch) {
        localStorage.setItem("firstLaunch", firstLaunch);
    }
    if(onesignalPlayerID) {
        localStorage.setItem("onesignalPlayerID", onesignalPlayerID);
    }
}