'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Stores', [
			{
				name: 'Magazine Luiza',
				description: 'Loja geral de eletrodosméticos',
				// usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
				createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
				updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
			{
				name: 'Não tem nada aqui?',
				// usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
				createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
				updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
		]);
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Stores', null, {});
	},
};
