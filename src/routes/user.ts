import { Router } from 'express';
import UserController from '../controllers/user';
import MovementController from '../controllers/movement';

const userRouter = Router();

// /v1/api/users

// REGISTRAR NUEVO USUARIO
// ENDPOINT PUBLICO
userRouter.post('/', UserController.createNew);

// RETORNAR TODA LA INDO PERSONAL DE UN USUARIO
// NECESARIO AUTH
userRouter.get('/:userId', UserController.getInfo);

// CREAR U OBTEBER MOVIMIENTOS DE UN USAURIO
// NECESARIO AUTH
userRouter.get('/:userId/movements', MovementController.getAll);
userRouter.post('/:userId/movements', MovementController.createNew);

userRouter.use('*', (req, res) =>
	res.status(404).json({ error: 'Resource not found' })
);

export default userRouter;