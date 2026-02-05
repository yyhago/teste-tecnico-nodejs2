import Router from 'express';
import {verificarToken} from '../middlewares/authMiddlewares.js'
import productController from '../controllers/productController.js'
const router = Router()

router.post('/cadastroProduto', verificarToken, productController.cadastroProduto)
router.put('/editarProduto/:id', verificarToken, productController.editarProduto)
router.get('/buscarProduto/:codigo', verificarToken, productController.buscarProduto)
router.delete('/deletarProduto/:id', verificarToken, productController.deletarProduto)

export default router;