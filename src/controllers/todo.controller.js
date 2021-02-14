import TodoService from '../services/todo.service';
import { TODO_NOT_FOUND } from '../constants/error';

class TodoController {
  static getAllTodos(req, res) {
    try {
      const allTodos = TodoService.getAllTodos();
      return res.status(200).json(allTodos);
    } catch (error) {
      console.error(error);
      return res.status(500).json('Unexpected error');
    }
  }

  static getTodo(req, res) {
    try {
      const todo = TodoService.getTodo(req.params);
      if (todo === null) { return res.status(400).json(TODO_NOT_FOUND); }
      return res.status(200).json(todo);
    } catch (error) {
      console.error(error);
      return res.status(500).json('Unexpected error');
    }
  }

  static createTodo(req, res) {
    try {
      const newTodo = TodoService.createTodo(req.body);
      return res.status(201).json(newTodo);
    } catch (error) {
      console.error(error);
      return res.status(500).json('Unexpected error');
    }
  }

  static updateTodo(req, res) {
    try {
      const updateTodo = TodoService.updateTodo(req.body);
      if (updateTodo === null) { return res.status(400).json(TODO_NOT_FOUND); }
      return res.status(200).json(updateTodo);
    } catch (error) {
      console.error(error);
      return res.status(500).json('Unexpected error');
    }
  }

  static deleteTodo(req, res) {
    try {
      const deletedTodo = TodoService.deleteTodo(req.body);
      if (deletedTodo === null) { return res.status(400).json(TODO_NOT_FOUND); }
      return res.status(200).json(deletedTodo);
    } catch (error) {
      console.error(error);
      return res.status(500).json('Unexpected error');
    }
  }
}

export default TodoController;
