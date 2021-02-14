import { todos } from '../../constants/mocks';
import TodoController from '../todo.controller';
import mockResponse from '../../utils/test.util';
import TodoService from '../../services/todo.service';

describe('TodoController test getAllTodos', () => {
  it('should return 200 status and an array', () => {
    const res = mockResponse();
    const getTodosSpy = jest.spyOn(TodoService, 'getAllTodos');
    getTodosSpy.mockImplementation(() => todos);
    TodoController.getAllTodos(null, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(todos);
  });
});

describe('TodoController test getTodo', () => {
  it('should return 200 status and todo for that id', () => {
    const req = { params: { id: 1 } };
    const res = mockResponse();
    const getTodosSpy = jest.spyOn(TodoService, 'getTodo');
    getTodosSpy.mockImplementation(() => todos[0]);
    TodoController.getTodo(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(todos[0]);
  });
  it('should return 400 status when null is returned', () => {
    const req = { params: { id: 1 } };
    const res = mockResponse();
    const getTodosSpy = jest.spyOn(TodoService, 'getTodo');
    getTodosSpy.mockImplementation(() => null);
    TodoController.getTodo(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith('No todo exists with the given id');
  });
});

describe('TodoController test createTodo', () => {
  it('should return 201 status and return the new todo added', () => {
    const req = { body: { data: 'test sample' } };
    const res = mockResponse();
    const createTodoSpy = jest.spyOn(TodoService, 'createTodo');
    createTodoSpy.mockImplementation(() => todos[0]);
    TodoController.createTodo(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(todos[0]);
  });
});

describe('TodoController test updateTodo', () => {
  it('should return 200 status and return the updated todo added', () => {
    const req = { body: { data: 'test sample', id: 1 } };
    const res = mockResponse();
    const updateTodoSpy = jest.spyOn(TodoService, 'updateTodo');
    updateTodoSpy.mockImplementation(() => todos[0]);
    TodoController.updateTodo(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(todos[0]);
  });
  it('should return 400 status when null is returned', () => {
    const req = { body: { data: 'test sample', id: 1 } };
    const res = mockResponse();
    const updateTodoSpy = jest.spyOn(TodoService, 'updateTodo');
    updateTodoSpy.mockImplementation(() => null);
    TodoController.updateTodo(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith('No todo exists with the given id');
  });
});

describe('TodoController test deleteTodo', () => {
  it('should return 200 status and return the deleted todo', () => {
    const req = { body: { id: 1 } };
    const res = mockResponse();
    const deleteTodoSpy = jest.spyOn(TodoService, 'deleteTodo');
    deleteTodoSpy.mockImplementation(() => todos[0]);
    TodoController.deleteTodo(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(todos[0]);
  });
  it('should return 400 status when null is returned', () => {
    const req = { body: { id: 1 } };
    const res = mockResponse();
    const deleteTodoSpy = jest.spyOn(TodoService, 'deleteTodo');
    deleteTodoSpy.mockImplementation(() => null);
    TodoController.deleteTodo(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith('No todo exists with the given id');
  });
});
