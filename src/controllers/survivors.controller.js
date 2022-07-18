const survivorsService = require('../services/survivors.service');

const criar = async function(req, res){
    const survivor = await survivorsService.criar(req.body);
    res.send(survivor);
    
}


const atualizarLocal = async function(req, res ,next) {
	try {

		const response = await survivorsService.atualizarLocal({
			latitude: req.body.latitude,
			longitude: req.body.longitude,
		}, req.params.id);

		if (response && response.message) {
			throw response;
		}

		res.send(response);
	} catch (error) {
		return next(error);
	}
}

const atualizarInfectados = async function(req, res) {
	const response = await survivorsService.atualizarInfectados(req.params.id);
	res.send(response);
}


const encontrarTodos = async function (req, res) {
		const response = await survivorsService.encontrarTodos();
		res.send(response);

}



const encontrarPorId = async function (req, res) {
		const response = await survivorsService.encontrarPorId(req.params.id);
		res.send(response);

}

const deletar = async function (req, res) {
		const response = await survivorsService.deletar(req.params.id);
		res.send(response);

}

module.exports = {
	criar: criar,
	encontrarTodos: encontrarTodos,
	encontrarPorId: encontrarPorId,
	atualizarLocal: atualizarLocal,
	deletar: deletar,
	atualizarInfectados: atualizarInfectados,
}
