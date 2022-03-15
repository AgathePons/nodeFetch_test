const fetch = require('node-fetch');
const debug = require('debug')('wizard:');

const wizard = {
  test() {
    debug('test')
    return 'Hello Wizard World!';
  },
  async getSpell() {
    try {
      const response = await fetch('https://wizard-world-api.herokuapp.com/Spells/aede8168-528c-4888-8c14-a38b6c5e6a97');
      const json = await response.json();
      if (response.ok) {
        const spell = {
          name: json.name,
          incantation: json.incantation,
          effect: json.effect,
          type: json.type,
        }
        debug(spell)
        return spell;
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = wizard;