$(function() {
    var socket = io();
    var color = '#FB8C00';
    socket.on('status', function(dist) {
        console.log(dist);
        $('body').css("background", color);
    });
});