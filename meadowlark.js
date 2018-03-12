const express = require('express');
const fortune = require('./lib/fortune');

const server  = express();
const handlebars = require('express-handlebars').create({ defaultLayout: 'main' });

// Установка механизма представления handlebars
server.engine('handlebars', handlebars.engine);
server.set('view engine', 'handlebars');

server.set('port', process.env.PORT || 3000);
server.use(express.static(__dirname + '/public'));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// set 'showTests' context property if the querystring contains test=1
server.use(function(req, res, next){
    res.locals.showTests = server.get('env') !== 'production' &&
        req.query.test === '1';
    next();
});

server.get('/', (req, res) => {
    res.render('home', res.locals.showTests);
});

server.get('/home', (req, res) => {
    res.render('home');
});

server.get('/about', (req, res) => {
    res.render('about', {
        fortune: fortune,
        pageTestScript: '/qa/tests-about.js'
    });
});

server.get('/tours/hood-river', (req, res, next) => {
    res.render('tours/hood-river');
});
server.get('/tours/request-group-rate', (req, res, next) => {
    res.render('tours/request-group-rate');
});

server.use((req, res, next) => {
    res.status('404');
    res.render('404');
});

server.use((err, req, res, next) => {
    console.log(err.stack);
    res.status('500');
    res.render('500');
});


server.listen(server.get('port'), () => console.log(`localhost:${server.get('port')}`)  );
