//const http = require('http');

/*http.createServer((req, res) => {
    res.end('Hello World');
}).listen(3000);*/

const express = require('express');
const morgan = require('morgan');
const app = express();
const routes = require('./routes');
const routesApi = require('./routes.api');

//Settings

app.set('appName', 'Mi primer servidor').
set('views', __dirname + '/views').
set('view engine', 'ejs');

// middlewares

app.use(morgan('combined')).use(routes).use('/api', routesApi);

/*app.use((req, res, next) => {
    console.log('Request url: ' + req.url);
    next();
}).use((req, res, next) => {
    console.log('Ha pasado por un middleware');
    next();
});*/

app.get('*', (req, res) => {
    res.end('Page not found')
});

app.listen(3000, () => {
    console.log('Listen 3000');
    console.log('Nombre de la App: ' + app.get('appName'));
});