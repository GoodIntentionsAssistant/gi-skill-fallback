/**
 * Fallbacks Skill
 */
const Skill = girequire('src/Skill/skill');

module.exports = class FallbackSkill extends Skill {

/**
 * Constructor
 *
 * @param App app
 * @access public
 * @return void
 */
	constructor(app) {
		super(app);
	}

}