const {Card} = require("../models");

module.exports = {
    create: (params) => Card.create(params),
    findOne: (params) => Card.findOne({where: params}),   
    list: (query) => Card.findAndCountAll(query),
    destroy: (id) => User.destroy({ where: { id } }),
};