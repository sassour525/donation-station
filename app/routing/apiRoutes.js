var db = require('../../models');

//export the paths to be used in the server.js file
module.exports = function(app) {

	//serve user objects
	app.get("/api/items", function(req, res) {
        db.Item_Price.findAll({
            attributes: ['item_name']
        }).then(function(result) {
            console.log(result);
            res.json(result);
        });
	});
}