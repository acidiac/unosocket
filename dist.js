$(function() {
    var socket = io();
    var color = '#FB8C00';
    socket.on('status', function(dist) {
        color = "rgb(255, 99," + dist + ")";
        console.log(color);
        $('body').css("background", color);
    });
});