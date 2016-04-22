var express = require('express');
var app = express();
var core = require('./core.js');

app.get('/api/ondeencontrar/categories', function (req, res) {
    core.dal.list('Categorias', req, res);
});

app.get('/api/ondeencontrar/companies', function (req, res) {
    core.dal.list('EmpresasTemp', req, res);
});

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    core.createOrOpenDatabase();

    console.log("Example app listening at http://%s:%s", host, port)

});