import Router from 'express';
import {verificarToken} from '../middlewares/authMiddlewares.js'
import movimentacaoController from '../controllers/movimentacaoController.js';

const router = Router()

router.post('/movimentacaoEstoque', verificarToken, movimentacaoController.movimentacaoEstoque)

export default router;