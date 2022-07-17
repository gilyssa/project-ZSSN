const survivorService = require('../services/survivors.service');

const criar = async function(req, res){
    const survivor = await survivorService.criar(req.body);
    res.send(survivor);
    
}

module.exports = {
    criar: criar
}
