import jwt from 'jsonwebtoken';

export const verificarToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Pega o token do formato "Bearer TOKEN"

    if (!token) {
        return res.status(403).json({ message: 'Token não fornecido' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido ou expirado' });
        }

        // colocamos o ID do usuário dentro da REQUISIÇÃO
        req.usuarioId = decoded.id; 
        next(); // Vai para a próxima função (a sua rota)
    });
};