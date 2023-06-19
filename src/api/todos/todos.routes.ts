import { Router, Request, Response } from 'express';

import { Todo } from './todos.model';

import MesssageResponse from '../../interfaces/MessageResponse';

const router = Router();

interface TodoResponse extends MesssageResponse {
  length: number;
  data: Todo[];
}

router.get('/', (request: Request, response: Response<TodoResponse>) => {
  response.json({
    status: 'OK',
    message: 'Successful',
    length: 2,
    data: [
      { content: 'First todo on the list', done: false },
      { content: 'Learn Typescript', done: Boolean('on-going') },
    ],
  });
});

export default router;
