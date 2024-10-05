const saludar = require('./hola');

test('El saludo debe decir (hola mundo)', () => {
    expect(saludar()).toBe("hola mundo");
})