const fortunes = [
    "Победи свои страхи или они победят тебя.",
    "Рекам нужны истоки.",
    "Не бойся неведомого.",
    "Тебя ждёт приятный сюрприз.",
    "Будь проще везде, где только можно.",
];

function randomFortune () {
    return fortunes[Math.floor(Math.random() * fortunes.length)];
}

module.exports = randomFortune;