import movimentacaoService from '../services/movimentacaoService.js';

class MovimentacaoController {

    async movimentacaoEstoque(req, res) {
        try {
            const movimentacao = await movimentacaoService.registrarMovimento(req.body, req.usuarioId);
            res.status(201).json({ message: 'Movimentação registrada com sucesso', movimentacao });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }


}

const movimentacaoController = new MovimentacaoController()
export default movimentacaoController