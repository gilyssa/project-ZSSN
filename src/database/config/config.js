require('dotenv').config({ path: __dirname+'/./../../../.env'});

module.exports =  {
    development:{
    username: process.env.DATABASE_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: 'mysql.firminologistica.com.br',
    dialect: 'mysql',
    logging: false, //não exibir logs no console
    define: {
        timestamps: true
    },
    timezone: '-03:00' //diminuir 3 para dar o horário brasileiro
    }
}