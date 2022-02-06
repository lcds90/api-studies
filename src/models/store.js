const Store = (sequelize, DataTypes) => {
	const Store = sequelize.define('Store', {
		name: DataTypes.STRING,
		description: DataTypes.STRING,
	});

	return Store;
};

module.exports = Store;
