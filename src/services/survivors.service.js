//regra de negócio
const survivorsRepository = require('../repositories/survivors.repository');

const criar = async function(survivor) {
    const survivorCreate = await survivorsRepository.criar(survivor);
    return survivorCreate;
}

const atualizarLocal = async function(survivor, id) {
	await survivorsRepository.atualizarLocal(survivor, id);
	return await survivorsRepository.encontrarPorId(id);
}


const atualizarInfectados = async function(id) {
	await survivorsRepository.atualizarInfectados(id);
	return await survivorsRepository.encontrarPorId(id);
}


const encontrarTodos = async function () {
	const survivors = await survivorsRepository.encontrarTodos();
	return survivors;
}

const encontrarPorId = async function (id) {
	const survivor = await survivorsRepository.encontrarPorId(id);
	return survivor;

}

const deletar = async function (id) {
	const survivor = await survivorsRepository.encontrarPorId(id);
	await survivorsRepository.deletar(id);
	return survivor;
}

module.exports = {
	criar: criar,
	atualizarLocal: atualizarLocal,
	encontrarTodos: encontrarTodos,
	encontrarPorId: encontrarPorId,
	deletar: deletar,
	atualizarInfectados: atualizarInfectados,
}
