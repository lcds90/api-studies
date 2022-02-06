const express = require('express');
const { Book } = require('../models');
const router = express.Router();

// Este endpoint usa o método findAll do Sequelize para buscar todos os Livros.
router.get('/', async (req, res) => {
	const books = await Book.findAll();
	try {
		return res.status(200).json(books);
	} catch (error) {
		console.log(e.message);
		res.status(500).json({ message: 'Algo deu errado' });
	}
});

// Este endpoint usa o método findByPk do Sequelize para buscar um Livro pelo id.
router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const book = await Book.findByPk(id);

		if (!book)
			return res.status(404).json({ message: 'Livro não encontrado' });

		return res.status(200).json(book);
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ message: 'Algo deu errado' });
	}
});

// Este endpoint usa o método findOne do Sequelize para buscar um Livro pelo id e email.
// URL a ser utilizada para o exemplo http://localhost:3000/store/search/1?email=aqui-o-email
router.get('/search/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { title } = req.query;
		const store = await Book.findOne({ where: { id, title } });

		if (!store)
			return res.status(404).json({ message: 'Livro não encontrado' });

		return res.status(200).json(store);
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ message: 'Algo deu errado' });
	}
});

// Este endpoint usa o método create do Sequelize para salvar um Livro no banco.
router.post('/', async (req, res) => {
	try {
		const { title, author, pageQuantity } = req.body;
		const newstore = await Book.create({ title, author, pageQuantity });

		return res.status(201).json(newstore);
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ message: 'Algo deu errado' });
	}
});

// Este endpoint usa o método update do Sequelize para alterar um Livro no banco.
router.put('/:id', async (req, res) => {
	try {
		const { title, author, pageQuantity } = req.body;
		const { id } = req.params;

		const [updatestore] = await Book.update(
			{ title, author, pageQuantity },
			{ where: { id } }
		);

		console.log(updatestore); // confira o que é retornado quando o store com o id é ou não encontrado;

		if (!updatestore)
			return res.status(404).json({ message: 'Livro não encontrado' });

		return res.status(200).json({ message: 'Livro atualizado com sucesso!' });
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ message: 'Algo deu errado' });
	}
});

// Este endpoint usa o método destroy do Sequelize para remover um Livro no banco.
router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const deleteBook = await Book.destroy({ where: { id } });

		console.log(deleteBook); // confira o que é retornado quando o store com o id é ou não encontrado;

		return res.status(200).json({ message: 'Livro excluído com sucesso!' });
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ message: 'Algo deu errado' });
	}
});

module.exports = router;
