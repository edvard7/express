const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('express_project', 'postgres', '1', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
})

sequelize.authenticate()
    .then(() => {
        console.log('Соединение с БД было успешно установлено')
    }).catch(e => {
        console.log('Невозможно выполнить подключение к БД: ', e)
    })

module.exports = sequelize 