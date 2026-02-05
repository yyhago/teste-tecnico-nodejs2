import {Model, DataTypes} from 'sequelize';
import sequelize from '../database/database.js';

class Product extends Model {}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nome:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao:{
            type: DataTypes.STRING
        },
        preco: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        codigo:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    },

    {
        sequelize,
        modelName: 'Produto',
        tableName: 'produto',
        timestamps: false
    }
)

export default Product;