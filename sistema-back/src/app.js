import express from 'express';
import { router } from './routes';

const app = express(); // Inicializa express

app.use(express.json()); // Permite que express entenda o JSON

app.use(router);  // Adiciona as rotas ao express

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});