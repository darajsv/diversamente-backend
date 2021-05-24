const yup = require('yup');
const { cardsRepository } = require("../../repositories");
const {messages} = require("../../helpers");
const {StatusCodes} = require('http-status-codes');

module.exports.create = async (body) => {
    const schema = yup.object().shape({
        name: yup.string().required(),
        description: yup.string().required(),
        image: yup.string().required(),
    });
    const validated = await schema.validate(body, {
        stripUnknown: true,
      });
    const card = await cardsRepository.findOne({
        where: {
          name: validated.name,
        },
    });
    if (card) {
        throw {
          status: StatusCodes.CONFLICT,
          msg:  messages.alreadyExists(card)
        };
    }
    
    return cardsRepository.create({
      ...validated
    });
};