const express = require('express');
const { Store } = require('../models');
const router = express.Router();

// Este endpoint usa o método findAll do Sequelize para buscar todos os Lojas.
router.get('/', async (req, res) => {
	const stores = await Store.findAll();
	try {
		return res.status(200).json(stores);
	} catch (error) {
		console.log(e.message);
		res.status(500).json({ message: 'Algo deu errado' });
	}
});

// Este endpoint usa o método findByPk do Sequelize para buscar um Loja pelo id.
router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const store = await Store.findByPk(id);

		if (!store)
			return res.status(404).json({ message: 'Loja não encontrada' });

		return res.status(200).json(store);
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ message: 'Algo deu errado' });
	}
});

// Este endpoint usa o método findOne do Sequelize para buscar um Loja pelo id e email.
// URL a ser utilizada para o exemplo http://localhost:3000/store/search/1?email=aqui-o-email
router.get('/search/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { name } = req.query;
		const store = await Store.findOne({ where: { id, name } });

		if (!store)
			return res.status(404).json({ message: 'Loja não encontrada' });

		return res.status(200).json(store);
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ message: 'Algo deu errado' });
	}
});

// Este endpoint usa o método create do Sequelize para salvar um Loja no banco.
router.post('/', async (req, res) => {
	try {
		const { name, description } = req.body;
		const newstore = await Store.create({ name, description });

		return res.status(201).json(newstore);
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ message: 'Algo deu errado' });
	}
});

// Este endpoint usa o método update do Sequelize para alterar um Loja no banco.
router.put('/:id', async (req, res) => {
	try {
		const { name, description } = req.body;
		const { id } = req.params;

		const [updatestore] = await Store.update(
			{ name, description },
			{ where: { id } }
		);

		console.log(updatestore); // confira o que é retornado quando o store com o id é ou não encontrado;

		if (!updatestore)
			return res.status(404).json({ message: 'Loja não encontrada' });

		return res.status(200).json({ message: 'Loja atualizado com sucesso!' });
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ message: 'Algo deu errado' });
	}
});

// Este endpoint usa o método destroy do Sequelize para remover um Loja no banco.
router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const deletestore = await Store.destroy({ where: { id } });

		console.log(deletestore); // confira o que é retornado quando o store com o id é ou não encontrado;

		return res.status(200).json({ message: 'Loja excluída com sucesso!' });
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ message: 'Algo deu errado' });
	}
});

module.exports = router;
