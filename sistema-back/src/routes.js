import {Router} from 'express';
import UserController from './Controllers/UserController';

const router = Router(); // Inicializa o Router

router.post('/createUsers', UserController.createUser); // Rota para criar um usuário

export {router}; // Exporta o router