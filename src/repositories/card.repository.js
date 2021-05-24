const {Card} = require("../models");

module.exports = {
    create: (params) => Card.create(params),
    findOne: (query) => Card.findOne(query),   
    findById: (id) => Card.findByPk(id),
    list: (query) => Card.findAndCountAll(query),
    delete: (id) => Card.destroy({ where: { id } }),
    update: (updated) => updated.save(),
};