import {Model, DataTypes} from 'sequelize';
import sequelize from '../database/database.js';

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data_nascimento: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },

    {
        sequelize,
        modelName: 'Usuario',
        tableName: 'usuario',
        timestamps: false
    }
)

export default User;