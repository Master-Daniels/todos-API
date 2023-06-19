import * as zod from 'zod';

import { db } from '../../lib/database';

const Todo = zod.object({
  content: zod.string().min(5, 'Todo should be up to five words'),
  done: zod.boolean().default(false),
});

// Type of a todo document inferred by zod
type Todo = zod.infer<typeof Todo>;

const Todos = db.collection('todos');


export { Todo, Todos };
