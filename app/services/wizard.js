const fetch = require('node-fetch');
const debug = require('debug')('wizard:');

const wizard = {
  test() {
    debug('test')
    return 'Hello Wizard World!';
  },
  async getSpell(spellId) {
    debug('getSpell');
    try {
      const response = await fetch(`https://wizard-world-api.herokuapp.com/Spells/${spellId}`);
      const json = await response.json();
      if (response.ok) {
        const spell = {
          name: json.name,
          incantation: json.incantation,
          effect: json.effect,
          type: json.type,
        }
        return spell;
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getSpellsWithIncantation() {
    debug('getSpellsWithIncantation');
    try {
      const response = await fetch('https://wizard-world-api.herokuapp.com/Spells');
      const jsonResponse = await response.json();
      const spellsWithIncantation = jsonResponse.filter(spell => spell.incantation !== null);
      return spellsWithIncantation;
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getRandomSpell() {
    debug('getRandomSpell')
    try {
      const spells = await wizard.getSpellsWithIncantation();
      const randomNumber = Math.floor(Math.random() * spells.length);
      debug(`randomNumber: ${randomNumber}/${spells.length}`);
      const spell = spells[randomNumber];
      return spell;
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = wizard;