module.exports = function(sequelize, dataTypes) {
	var Donation_Item = sequelize.define('Donation_Item', {
		category: dataTypes.STRING,
		item_name: dataTypes.STRING,
		type: dataTypes.STRING,
		price: dataTypes.DECIMAL
	});
	return Donation_Item;
}