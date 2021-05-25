const express = require('express');
const app = express();
const apiRouter = express.Router();
const logger = (req, res, next) => {
    console.log(`estas en la ruta ${req.path}`);
}

apiRouter.get('/users', (req, res) => {
    res.json({ msg: "Todos los usuarios" });
});
app.use(logger);
app.use('/api', apiRouter);
app.listen(3000);