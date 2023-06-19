import { Router, Request, Response } from 'express';

import todosRouter from './todos/todos.routes';

import MessageResponse from '../interfaces/MessageResponse';

const router = Router();

router.get('/', (req: Request, res: Response<MessageResponse>) => {
  res.json({
    message: 'API - INDEX',
  });
});

router.use('/todos', todosRouter);
export default router;
