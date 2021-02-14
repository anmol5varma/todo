import { Router } from 'express';
import TodoController from '../controllers/todo.controller';

const router = Router();

router.get('', TodoController.getAllTodos);
router.get('/:id', TodoController.getTodo);
router.put('', TodoController.createTodo);
router.post('', TodoController.updateTodo);
router.delete('', TodoController.deleteTodo);

export default router;
