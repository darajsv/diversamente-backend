const router = require("express").Router();
const {cardsController} = require("../controllers");

router.get('/list', cardsController.list);
router.get('/list/:id', cardsController.get);

module.exports.cards = router;
 