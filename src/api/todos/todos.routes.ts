import { Router, Request, Response } from 'express';

import { Todos, TodoWithId } from './todos.model';

import MesssageResponse from '../../interfaces/MessageResponse';

const router = Router();

interface TodoResponse extends MesssageResponse {
  length: number;
  data: TodoWithId[] | string;
}

router.get('/', async (request: Request, response: Response<TodoResponse>) => {
  const result = await Todos.find({}).toArray();
  if (result.length > 0) {
    response.json({
      status: 'OK',
      message: 'Successful',
      length: result.length,
      data: result,
    });
  }
  response.json({
    status: 'OK',
    message: 'Successful',
    length: result.length,
    data: 'No data found!',
  });
});

export default router;
