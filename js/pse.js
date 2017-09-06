// Servidor
var server_payment_pse = "http://carnesmarket.co/apps/carnesmarket/php/payments_pse.php";
var server_url = "http://carnesmarket.co/apps/carnesmarket/php/app.php";

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
        
        // Obtener variables de URL
        if(url_pse !== null){
            console.log(url_pse);
            checkPSEstatus(parseInt(url_pse));
        }
        
    }
};



/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ---------- ------------------------ ----------- */
/* ----------        FUNCIONES         ----------- */

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

// Formatear precio
function formatPrice(n, currency) {
    return currency + "" + n.toFixed(0).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "." + c : c;
    });
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
                // Error del servidor
                $("#status").html('Hubo un error de comunicación. Actualiza esta página en un momento.');
            }
            else if(output.sessionError) {
                // No hay pedidos con ese ID
                $("#status").html('No tienes ningún pedido con ese ID');
            }
            else if(output.paymentError) {
                if(output.errorMessage){
                    $("#status").html(output.errorMessage);
                }
                else {
                    $("#status").html('Hubo un error de comunicación. Actualiza esta página en un momento.');
                }
            }
            else {
                var respuestaTransaccion = output.respuestaTransaccion;
                var HTML = '';
                HTML += '<span class="rta_title">ID transacción:</span> ' + respuestaTransaccion.idTransaccion + '<br>';
                HTML += '<span class="rta_title">Referencia:</span> ' + respuestaTransaccion.referencia + '<br>';
                HTML += '<span class="rta_title">ID estado:</span> ' + respuestaTransaccion.idEstado + '<br>';
                HTML += '<span class="rta_title">Estado:</span> ' + respuestaTransaccion.nombreEstado + '<br>';
                HTML += '<span class="rta_title">Código respuesta:</span> ' + respuestaTransaccion.codigoRespuesta + '<br>';
                HTML += '<span class="rta_title">Código de autorización:</span> ' + respuestaTransaccion.codigoAutorizacion + '<br>';
                HTML += '<span class="rta_title">Valor:</span> ' + formatPrice(parseInt(respuestaTransaccion.valor), "$") + '<br>';
                HTML += '<span class="rta_title">Moneda:</span> ' + respuestaTransaccion.isoMoneda + '<br>';
                HTML += '<span class="rta_title">Fecha:</span> ' + respuestaTransaccion.fechaProcesamiento + '<br>';
                HTML += '<span class="rta_title">Código de banco:</span> ' + respuestaTransaccion.bancoPSERespuesta_codigo + '<br>';
                HTML += '<span class="rta_title">Banco:</span> ' + respuestaTransaccion.bancoPSERespuesta_nombre + '<br>';
                HTML += '<br>' + respuestaTransaccion.mensaje + '<br><br>';
                HTML += '<span class="rta_title">Tu IP:</span> ' + respuestaTransaccion.user_ip + '<br>';
                HTML += '<span class="rta_title">Descripción:</span> Compra realizada en: CONCEPTOS FRESCOS SAS<br>';
                $("#status").html(respuestaTransaccion.nombreEstado);
                $("#datos").html(HTML);
                // Enviar push
                if(respuestaTransaccion.idEstado == 1){
                    var textoPush = 'Un cliente acaba de realizar un pedido pagado con PSE';
                    sendPUSHtoAdmin("Nuevo pedido con pago PSE", textoPush);
                } 
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