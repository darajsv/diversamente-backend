const router = require("express").Router();
const {cardsController} = require("../controllers");

router.post("/create", cardsController.create);
router.get('/list', cardsController.list);
router.get('/list/:id', cardsController.get);
router.put('/edit/:id', cardsController.update);

module.exports.cards = router;