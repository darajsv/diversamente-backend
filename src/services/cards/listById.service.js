const {cardsRepository} = require('../../repositories');
const {messages} = require('../../helpers');

module.exports.listById = async (paramID) => {
    const _paramID = paramID;
    const result = await cardsRepository.fineOne(_paramID);
    return result;
}