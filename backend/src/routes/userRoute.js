import Router from 'express';
import { verificarToken } from '../middlewares/authMiddlewares.js'
import UserController from '../controllers/userController.js'
const router = Router()

router.post('/cadastroUsuario', UserController.cadastrarUsuario)
router.post('/loginUsuario', UserController.loginUsuario)
router.put('/editarUsuario/:id', verificarToken, UserController.editarUsuario)

export default router;