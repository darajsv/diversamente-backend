const {Card} = require("../models");

module.exports = {
    create: (params) => Card.create(params),
    list: (query) => User.findAndCountAll(query),
    findOne: (query) => Card.findOne(query),   
}