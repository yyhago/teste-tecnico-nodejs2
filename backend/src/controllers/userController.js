import userService from '../services/userService.js';

class UserController {

    async cadastrarUsuario(req, res) {
        try {
            const usuario = await userService.criarUsuario(req.body)
            res.status(201).json({message: 'Usuario criado com sucesso'})
        } catch (error) {
            res.status(401).json({message: error.message})
        }
    }

    async loginUsuario(req, res) {
       try {
        const { email, senha } = req.body
        const token = await userService.autenticarUsuario(email, senha)
        res.status(200).json({message: `Usuário logado com sucesso.`, token})
       } catch (error) {
        res.status(401).json({message: error.message})
       }
    }

    async editarUsuario(req, res) {
        try {
            await userService.atualizarUsuario(req.params.id, req.body, req.usuarioId);
            res.status(200).json({ message: 'Usuário editado com sucesso' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

const userController = new UserController()
export default userController