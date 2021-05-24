const express = require('express');
const morgan  = require('morgan');
const app = express();
app.use(morgan('dev'));
app.get('/hola', (req, res) => {
    res.send('Hola');
});
app.listen(3000);