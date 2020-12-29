var socket = io();

//escuchar
socket.on('connect', function() {
    console.log('Conectado con el servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimoms conexión con el servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Carlos',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});