const express = require('express');
const mainController = require('./Controllers/mainController');

const app = express();
const port = 3000;

// Middlewares
app.use(express.json());

// Routes
app.use('/api', mainController);

app.get('/', (request, response) => response.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}`));