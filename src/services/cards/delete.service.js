const { StatusCodes } = require('http-status-codes');
const { cardsRepository } = require('../../repositories');
const { messages } = require('../../helpers');

module.exports.deleteOne = async (id) => {
  const card = await cardsRepository.findById(id);

  if (!card) {
    throw {
      status: StatusCodes.NOT_FOUND,
      msg: messages.notFound('card'),
    };
  }

  return cardsRepository.delete(card.getDataValue('id'));
};