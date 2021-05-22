const {Card} = require("../models");

module.exports = {
    create: (params) => Card.create(params),
    findOne: (query) => Card.findOne(query)
}