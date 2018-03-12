suite('Global Tests', () => {
    test('У данной странице допустимый заголовок', () => {
        assert(document.title && document.title.match(/\S/) &&
                document.title.toUpperCase() !== 'TODO')
    });
})