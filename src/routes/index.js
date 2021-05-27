const {cards} = require("./cards.routes")
const {auth} = require("./auth.routes");
const {dashboard} = require("./dashboard.routes");

module.exports = {
    cards,
    auth,
    dashboard,
};