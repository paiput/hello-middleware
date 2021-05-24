const express = require('express');
// const morgan  = require('morgan');
const app = express();
app.use(express.json());
app.post('/hola', (req, res) => {
    console.log(`Hola, ${req.body.name}`);
    res.end();
});
app.listen(3000);