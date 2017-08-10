module.exports = function(sequelize, dataTypes) {
	var Item_Price = sequelize.define('Item_Price', {
		category: dataTypes.STRING,
		item_name: dataTypes.STRING,
		price: dataTypes.DECIMAL
	});
	return Item_Price;
}