const { StatusCodes } = require("http-status-codes");
const {cardsService} = require("../services");

module.exports = {
    create: async (req,res) => {
        try {
            const {name, description} = req.body;
            let _card = {
                name, 
                description,
                imageType: req.file.mimetype,
                imageName: req.file.originalname,
                imageData: req.file.buffer
            };
            const response = await cardsService.create(_card);
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
    }
}