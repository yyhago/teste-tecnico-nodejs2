import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';

class UserService {
    async criarUsuario(dados) {
        return await userModel.create(dados);
    }

    async autenticarUsuario(email, senha) {
        const usuario = await userModel.findOne({ where: { email } });

        if (!usuario || usuario.senha !== senha) {
            throw new Error('Email ou senha inválidos');
        }

        const token = jwt.sign(
            { id: usuario.id },
            process.env.JWT_SECRET,
            { expiresIn: '8h' }
        );

        return token;
    }

    async atualizarUsuario(id, dados, usuarioIdLogado) {
        if (id != usuarioIdLogado) {
            throw new Error('Você só pode editar o seu próprio perfil!');
        }
        return await userModel.update(dados, { where: { id } });
    }
}

export default new UserService();
