import * as zod from 'zod';
import { WithId } from 'mongodb';

import { db } from '../../lib/database';

const Todo = zod.object({
  content: zod.string().min(5, 'A todo should be at least five words'),
  done: zod.boolean().default(false),
});

// Type of a todo document inferred by zod
type Todo = zod.infer<typeof Todo>;

// include _id with the todo type
type TodoWithId = WithId<Todo>;

// Todos collection based on the Todo type
const Todos = db.collection<TodoWithId>('todos');

export { Todos, TodoWithId };
