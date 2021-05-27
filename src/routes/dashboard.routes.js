const router = require("express").Router();
const {cardsController} = require("../controllers");
const{authMiddleware} = require('../middlewares');

router.use(authMiddleware);
router.put('/cards/edit/:id', cardsController.update);
router.delete('/cards/delete/:id', cardsController.delete);
router.post('/cards/create', cardsController.create);
module.exports.dashboard = router;