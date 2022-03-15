const wizard = require('../services/wizard');
const debug = require('debug')('controller:')

const controller = {
  async getHome(_req, res) {
    debug('getHome');
    try {
      const spell = await wizard.getRandomSpell();
      res.render('home', { spell });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getSpellsWithIncantation(_req, res) {
    debug('getSpellsWithIncantation')
    try {
      const spells = await wizard.getSpellsWithIncantation();
      res.render('spells', { spells });
      // res.json(spells);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getTest(_req, res) {
    try {
      res.json(wizard.test());
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getSpell(_req, res) {
    debug('getSpell')
    const id = 'aede8168-528c-4888-8c14-a38b6c5e6a97';
    try {
      const spell = await wizard.getSpell(id);
      res.json(spell);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = controller;