import {Model, DataTypes} from 'sequelize';
import sequelize from '../database/database.js';

class MovimentacaoEstoque extends Model {}

MovimentacaoEstoque.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM ('ENTRADA', 'SAIDA', 'N/A'),
        },
        data_movimentacao: {
            type: DataTypes.DATE,
            allowNull: false
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        produto_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },

    {
        sequelize,
        modelName: 'MovimentacaoEstoque',
        tableName: 'movimentacaoEstoque',
        timestamps: false
    }
)

export default MovimentacaoEstoque;