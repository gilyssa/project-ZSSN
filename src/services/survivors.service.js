//regra de negócio
const survivorRepository = require('../repositories/survivors.repository');

const criar = async function(survivor) {
    const survivorCreate = await survivorRepository.criar(survivor);
    return survivorCreate;
}

module.exports = {
    criar: criar
}
