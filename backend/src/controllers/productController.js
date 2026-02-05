import productService from '../services/productService.js'

class ProductController {

    async cadastroProduto(req, res) {
        try {
            const produto = await productService.cadastrarNovoProduto(req.body, req.usuarioId);
            res.status(201).json({ message: 'Produto cadastrado com sucesso!', produto });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async editarProduto(req, res) {
        try {
            const produto = await productService.editarProduto(req.params.id, req.body)
            res.status(200).json({ message: 'Produto editado com sucesso!', produto });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async buscarProduto(req, res) {
        try {
            const produto = await productService.buscarPorCodigo(req.params.codigo);
            res.status(200).json(produto);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async deletarProduto(req, res) {
        try {
            await productService.deletarProduto(req.params.id);
            res.status(200).json({ message: 'Produto deletado com sucesso' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

}

const productController = new ProductController()
export default productController