const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hola mundo desde express');
});

app.listen (PORT, () => {
    console.log('servidor corriendo en http://localhost:${PORT}');
});