const { Router } = require('express');
const controller = require('./controllers/controller');

const router = Router();

router.get('/', controller.getHome);
router.get('/spells', controller.getSpellsWithIncantation);
router.get('/test', controller.getSpell);
router.get('/test2');

module.exports =  router;