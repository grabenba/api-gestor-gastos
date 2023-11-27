import { Router } from 'express';
import userRouter from './user-router';
import { handle405Error } from '../middlewares/wrong-method-handler';

const mainRouter = Router();

mainRouter.get('/status', (req, res) => res.json({ server: 'running' }));

mainRouter.use('/users', userRouter);

mainRouter.all('/', handle405Error);

export default mainRouter;