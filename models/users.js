const Sequelize = require('sequelize');
const db = require('../database/db');


const Users = db.define('barberShop_user',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,


    },
    name:{
        type: Sequelize.STRING(50),
        allowNull: false,

    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,

    },
    phoneNumber:{
        type: Sequelize.STRING(11),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

//criar tabela com sequelize_scope_error_default
//Users.sync();
//excluir a tabela e criar novamente
//Users.sync({force:true});
//verificar se algum diferença na tabela , realiza alteracao
//Users.sync({alter: true});
//cadastrar registro no banco de dados

module.exports = Users;