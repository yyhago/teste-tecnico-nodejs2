import productModel from '../models/productModel.js';
import movimentacaoEstoque from '../models/movimentacaoEstoque.js';

class ProductService {
    async cadastrarNovoProduto(dadosProduto, usuarioId) {
        const produto = await productModel.create(dadosProduto);

        await movimentacaoEstoque.create({
            usuario_id: usuarioId,
            produto_id: produto.id,
            quantidade: 0,
            status: 'ENTRADA',
            data_movimentacao: new Date()
        });

        return produto;
    }

    async editarProduto(id, dados) {
        return await productModel.update(dados, { where: { id } });
    }

    async buscarPorCodigo(codigo) {
        const produto = await productModel.findOne({ where: { codigo } });
        if (!produto) throw new Error('Produto não encontrado');
        return produto;
    }

    async deletarProduto(id) {
        return await productModel.destroy({ where: { id } });
    }
}

export default new ProductService();
