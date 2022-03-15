const wizard = require('../services/wizard');
const debug = require('debug')('controller:')

const controller = {
  async getHome(req, res) {
    try {
      const spell = await wizard.getSpell();
      res.render('home', { spell });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getTest(req, res) {
    try {
      res.json(wizard.test());
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getSpell(req, res) {
    debug('getSpell')
    try {
      const spell = await wizard.getSpell();
      debug('spell:', spell);
      res.json(spell);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = controller;