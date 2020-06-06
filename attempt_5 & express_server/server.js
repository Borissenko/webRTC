// сервер на базе express

//запуск сервера- node server
//где server- это имя server.js- файла с нашим кодом

//запуск сайта - на http://localhost:3000/

var app = require('express')();              // скобки в конце- это мы сразу его и запускаем
var http = require('http').Server(app);


//что сервер будет отдавать клиенту- index.html
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/attempt_5/index.html');
});

//app.get('/style.css', function(request, response) {
//    response.sendFile(__dirname + '/style.css');
//});

//app.get('/main.js', function(request, response) {
//    response.sendFile(__dirname + '/main.js');
//});



http.listen(3000, function () {
    console.log('Started server on 3000'); // его получаем в консоле при запуске сервера
});
