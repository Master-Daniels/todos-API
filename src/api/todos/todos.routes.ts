import { Router } from 'express';
import TodosControllers from './todos.controller';

const router = Router();

router.get('/', TodosControllers.findAll);
router.post('/', TodosControllers.createOne);

export default router;
