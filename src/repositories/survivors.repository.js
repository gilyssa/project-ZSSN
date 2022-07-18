const { Survivors, sequelize } = require("../database/models/index");

const criar = async function(survivor) {
	const survivorCriado = await Survivors.create(survivor);
	return survivorCriado;
}


const atualizarLocal =  async function(survivor, id) {
	await Survivors.update(survivor, {
		where: { id: id }
	});
}

const atualizarInfectados =  async function( id) {
	const { QueryTypes } = require('sequelize');
	await sequelize.query('update Survivors set infected = true where id = :id', { 
			replacements: {id: id},
			type: QueryTypes.UPDATE 
				
		});
}

const encontrarTodos = async function() {
	const survivor = await Survivors.findAll();
	return survivor;
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
	atualizarLocal: atualizarLocal,
	encontrarTodos: encontrarTodos,
	encontrarPorId: encontrarPorId,
	encontrarUmPorWhere: encontrarUmPorWhere,
	deletar: deletar,
	atualizarInfectados: atualizarInfectados,
}
