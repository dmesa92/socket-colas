var socket = io();

var label = $("#lblNuevoTicket");

socket.on('connect', () => {
    console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('Hemos perdido la conexion con el servidor');
})

$("button").on('click', () => {
    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        label.text(siguienteTicket);
    });
});

// socket.emit("estadoActual", null, (numeroActual) => {
//     label.text(numeroActual);
// });

socket.on("estadoActual", (respuesta) => {
    label.text(respuesta.actual);
})