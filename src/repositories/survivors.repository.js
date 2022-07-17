const { Survivors } = require("../database/models/index");

const criar = async function(survivor) {
	const survivorCriado = await Survivors.create(survivor);
	return survivorCriado;
}


const atualizar =  async function(survivor, id) {
	await Survivors.update(survivor, {
		where: { id: id }
	});
}

const encontrarTodos = async function() {
	const survivors = await Survivors.findAll();
	return survivors;
}

const encontrarPorId = async function(id) {
	const survivor = await Survivors.findByPk(id);
	return survivor;
}

const encontrarUmPorWhere = async function(where) {
	const survivor = await Survivors.findOne({
		where: where
	});
	return survivor;
}

const deletar = async function (id) {
	return await Survivors.destroy({ where: { id: id } });
}

module.exports = {
	criar: criar,
	atualizar: atualizar,
	encontrarTodos: encontrarTodos,
	encontrarPorId: encontrarPorId,
	encontrarUmPorWhere: encontrarUmPorWhere,
	deletar: deletar,
}