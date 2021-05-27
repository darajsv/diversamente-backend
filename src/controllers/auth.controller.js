const { StatusCodes } = require("http-status-codes");
const { authService } = require("../services");
const yup = require("yup");

module.exports = {
  login: async (req, res) => {
    try {
      const schema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required(),
      });

      await schema.validate(req.body, {
        stripUnknown: true,
      });

      const { email, password } = req.body;
      const response = await authService.login(email, password);
      return res.status(StatusCodes.OK).json(response);
    } 
    catch (error) {
      console.error(error);
      return res
        .status(
          error.name == "ValidationError"
            ? StatusCodes.UNPROCESSABLE_ENTITY
            : error.status || StatusCodes.INTERNAL_SERVER_ERROR
        )
        .json(error.message);
    }
  },
};