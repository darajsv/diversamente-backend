const Sequelize = require("sequelize");
const config = require("../config/database/sequelize");

const Card = require("./card");

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);
module.exports = {
    sequelize,
    Card,
}