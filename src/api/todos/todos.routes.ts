import { Router, Request, Response } from 'express';

import { Todos, TodoWithId } from './todos.model';

import MesssageResponse from '../../interfaces/MessageResponse';

const router = Router();

interface TodoResponse extends MesssageResponse {
  length: number;
  data: TodoWithId[];
}

router.get('/', async (request: Request, response: Response<TodoResponse>) => {
  const result = await Todos.find({}).toArray();
  response.json({
    status: 'OK',
    message: 'Successful',
    length: result.length,
    data: result,
  });
});

export default router;
