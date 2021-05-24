const {cardsRepository} = require('../../repositories');
const { StatusCodes } = require('http-status-codes');
const {messages} = require('../../helpers');

module.exports.get = async (paramID) => {
    
    const card = await cardsRepository.findById(paramID);
    if(!card){
        throw {
            status: StatusCodes.NOT_FOUND,
            msg: messages.notFound('card'),
        };
    }
    return card;
    
}