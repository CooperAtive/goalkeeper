// config/database.js

var username = process.env.STOCK_USER;
var password = process.env.STOCK_PW;

module.exports = {

	'url' : 'mongodb://' + username + ':' + password + '@ds029847.mongolab.com:29847/stock'

};
