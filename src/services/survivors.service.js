//regra de negócio
const survivorsRepository = require('../repositories/survivors.repository');

const criar = async function(survivor) {
    const survivorCreate = await survivorsRepository.criar(survivor);
    return survivorCreate;
}

const atualizar = async function(survivor, id) {
	const existeSobrevivente = await survivorsRepository.encontrarPorId(id);

	if (!existeSobrevivente) {
		return createError(404, 'Sobrevivente não existe');
	}

	await survivorsRepository.atualizar(survivor, id);

	return await survivorsRepository.encontrarPorId(id);
}

const encontrarTodos = async function () {
	const survivors = await survivorsRepository.encontrarTodos();
	return survivors;
}

const encontrarPorId = async function (id) {
	const survivor = await survivorsRepository.encontrarPorId(id);

	if (!survivor) {
		return createError(404,  'Sobrevivente não encontrado');
	}
	
	return survivor;
}

const deletar = async function (id) {
	const survivor = await survivorsRepository.encontrarPorId(id);

	if (!survivor) {
		return createError(404,  'Sobrevivente não encontrado');
	}

	await survivorsRepository.deletar(id);
	return survivor;
}

module.exports = {
	criar: criar,
	atualizar: atualizar,
	encontrarTodos: encontrarTodos,
	encontrarPorId: encontrarPorId,
	deletar: deletar,
}
