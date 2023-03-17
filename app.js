const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routes/main');

app.listen(3000, () => {
    console.log('Servidor funcionando');
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter);