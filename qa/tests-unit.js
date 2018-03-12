const fortune = require('../lib/fortune'),
      expect = require('chai').expect;

suite('Тесты печений предсказаний', () => {
    test('getFortune() должна возвращать предсказание', () => {
        expect(typeof fortune() === 'string');
    });
});