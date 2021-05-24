const {create} = require('./create.service');
const {list} = require('./list.service');
const {listById} = require('./listById.service');

module.exports = {
    create,
    list,
    listById,
}