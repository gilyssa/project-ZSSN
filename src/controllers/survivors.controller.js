const survivorsService = require('../services/survivors.service');

const criar = async function(req, res){
    const survivor = await survivorsService.criar(req.body);
    res.send(survivor);
    
}

const atualizar = async function(req, res ,next) {
	try {

		const response = await survivorsService.atualizar({
			longitude: req.body.longitude,
            latitude: req.body.latitude
		}, req.params.id);

		if (response && response.message) {
			throw response;
		}

		res.send(response);
	} catch (error) {
		return next(error);
	}
}

const encontrarTodos = async function (req, res, next) {
	try {
		const response = await survivorsService.encontrarTodos();
		res.send(response);
	} catch (error) {
		next(error);
	}
}

const encontrarPorId = async function (req, res, next) {
	try {

		const response = await survivorsService.encontrarPorId(req.params.id);

		if (response && response.message) {
			throw response;
		}

		res.send(response);
	} catch (error) {
		next(error)
	}
}

const deletar = async function (req, res, next) {
	try {

		const response = await survivorsService.deletar(req.params.id);

		if (response && response.message) {
			throw response;
		}

		res.send(response);
	} catch (error) {
		next(error)
	}
}

module.exports = {
	criar: criar,
	encontrarTodos: encontrarTodos,
	encontrarPorId: encontrarPorId,
	atualizar: atualizar,
	deletar: deletar,
}
