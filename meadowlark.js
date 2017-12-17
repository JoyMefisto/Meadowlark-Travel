const express = require('express');
const server  = express();
const handlebars = require('express-handlebars').create({ defaultLayout: 'main' });

const fortunes = [
    "Победи свои страхи или они победят тебя.",
    "Рекам нужны истоки.",
    "Не бойся неведомого.",
    "Тебя ждёт приятный сюрприз.",
    "Будь проще везде, где только можно.",
]

// Установка механизма представления handlebars
server.engine('handlebars', handlebars.engine);
server.set('view engine', 'handlebars');

server.set('port', process.env.PORT || 3000);
server.use(express.static(__dirname + '/public'));

server.get('/', (req, res) => {
    res.render('home');
});

server.get('/home', (req, res) => {
    res.render('home');
});

server.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', { fortune: randomFortune});
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
