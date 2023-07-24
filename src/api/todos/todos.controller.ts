import { NextFunction, Request, Response } from 'express';
import MessageResponse from '../../interfaces/MessageResponse';

import { Todos, TodoWithId, Todo } from './todos.model';
import { InsertOneResult } from 'mongodb';

interface TodoResponse extends MessageResponse {
  length: number;
  data: TodoWithId[] | string;
}


async function findAll(request: Request, response: Response<TodoResponse>, next: NextFunction) {
  try {
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
  } catch (err: any) {
    next(err);
  }
}

async function createOne(request: Request<{}, InsertOneResult<Todo>, { content: string, done: boolean }>, response: Response<InsertOneResult<Todo>>, next: NextFunction) {
  try {
    const result = Todo.parse(request.body);
    const todo = await Todos.insertOne(result);  
    response.json(todo);
  } catch (err: any) {
    next(err);
  }
  
}

export default { findAll, createOne };
