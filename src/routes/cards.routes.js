const router = require("express").Router();
const {cardsController} = require("../controllers");

router.post("create", cardsController.create);

module.exports.cards = router;