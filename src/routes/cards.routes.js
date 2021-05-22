const router = require("express").Router();
const {cardsController} = require("../controllers");

router.post("/create", cardsController.create);
router.get('/list', cardsController.list );

module.exports.cards = router;