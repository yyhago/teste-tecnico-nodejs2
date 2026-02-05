import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import sequelize from './src/database/database.js';
import routes from './src/routes/index.js'

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', routes);

sequelize.sync().then(() => {
  console.log('Conexão com o banco de dados estabelecida com sucesso.');
}).catch((err) => {
  console.error('Erro ao conectar com o banco de dados:', err);
})

dotenv.config();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
})