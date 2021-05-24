const router = require("express").Router();
const {cardsController} = require("../controllers");

router.post("/create", cardsController.create);
router.get('/list', cardsController.list);
router.get('/list/:id', cardsController.get);
router.put('/edit/:id', cardsController.update);
router.delete('/delete/:id', cardsController.delete);

module.exports.cards = router;