const express = require('express');
const app = express();

const f = (req, res, next) => {
    console.log('voy primero');
    next()
};
const g = (req, res, next) => {
  console.log('voy segundo');
  next();
};
const h = (req, res, next) => {
  res.end();
};
  
let middleWares = [f, g, h];

// app.get('/hola', (req, res) => {
//     console.log('Hola');
//     res.end();
// });
app.get('/hola', middleWares);
app.listen(3000);