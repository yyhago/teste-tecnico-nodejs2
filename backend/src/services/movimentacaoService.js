import movimentacaoEstoque from '../models/movimentacaoEstoque.js';
import userModel from '../models/userModel.js';
import productModel from '../models/productModel.js';

class MovimentacaoService {
    async registrarMovimento(dados, usuarioId) {
        const { produto_id, quantidade, status } = dados;

        const usuarioPK = await userModel.findByPk(usuarioId);
        const produtoPK = await productModel.findByPk(produto_id);

        if (!produto_id || !quantidade || !status) {
            throw new Error('Dados obrigatórios não informados');
        }

        if (!usuarioPK) {
            throw new Error('Usuário não encontrado');
        }

        if (!produtoPK) {
            throw new Error('Produto não encontrado');
        }

        return await movimentacaoEstoque.create({
            usuario_id: usuarioId,
            produto_id,
            quantidade,
            status,
            data_movimentacao: new Date()
        });
    }
}

export default new MovimentacaoService();
