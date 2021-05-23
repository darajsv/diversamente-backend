const { StatusCodes } = require("http-status-codes");
const { cardsService } = require("../services");

module.exports = {
    create: async (req,res) => {
        try {
            const response = await cardsService.create(req.body);
            if(response){
                return res.status(StatusCodes.CREATED).json(response);
            }
        }
        catch(error){
            console.error(error);
            return res
                .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.messages); 
        }
    },
    list: async (req,res) => {
        try {
            const { name } = req.query;
            const response = await cardsService.list({name});
            if (!response || response.data.length === 0) {
                return res.status(StatusCodes.NO_CONTENT).end();
            }
            return res.status(StatusCodes.OK).json(response);
        }
        catch(error) {
            return res
                .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.messages);
        }
    }
}