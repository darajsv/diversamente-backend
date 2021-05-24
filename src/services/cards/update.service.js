const yup = require('yup');
const {StatusCodes} = require('http-status-codes');
const {messages} = require('../../helpers');
const {cardsRepository} = require('../../repositories');

module.exports.update = async (id,body) => {
    const card = await cardsRepository.findById(id);

    if(!card){
        throw {
            status: StatusCodes.NOT_FOUND,
            msg: messages.notFound('card'),
        };
    }

    const schema = yup.object().shape({
        name: yup.string(),
        description: yup.string(),
        image: yup.string(),
    });

    const validated = await schema.validate(body, {
        stripUnknown: true,
    });

    Object.keys(validated).forEach((key) => {
        card.setDataValue(key, validated[key]);
    });

    return cardsRepository.update(card);
};