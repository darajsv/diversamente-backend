const { cardsRepository } = require("../../repositories");
const {messages} = require("../../helpers");

module.exports.list = async (options) => {
    const query = {};
  
    if (options.name && options.name !== "") {
      query.where = { name: options.name };
    }
  
    const { count, rows } = await cardsRepository.list(query);
  
    return {
      metadata: {
        total: count,
      },
      data: rows,
    };
};