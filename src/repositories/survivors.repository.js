const { Survivors } = require("../database/models/index");

const criar = async function(survivor) {
	const survivorCriado = await Survivors.create(survivor);
	return survivorCriado;
}

module.exports = {
    criar: criar, 
}
