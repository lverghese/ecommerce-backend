require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize =  new Sequelize('ecommerce_db', 'root', 'Cena2022!', {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
module.exports = sequelize;