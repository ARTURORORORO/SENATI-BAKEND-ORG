const { DataTypes } = require("sequelize");
const sequelize = require("../settings/db");

const Persona = sequelize.define(
    "persona",
    {
        nombres : {type: DataTypes.STRING, allowNull: false},
        apellidos : {type: DataTypes.STRING, allowNull: false},
        dni : {type: DataTypes.STRING, allowNull: false},
        nacimiento : {type: DataTypes.DATE, allowNull: false}
        // mas atributos
    },
    {
        tableName: "persona",
        timestamps: false
    }
);

module.exports = Persona;

