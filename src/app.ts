const express = require('express');
const bodyParser = require('body-parser');

const {
	storeController,
	userController,
	bookController,
} = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/book', bookController);
app.use('/user', userController);
app.use('/store', storeController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

module.exports = app;
