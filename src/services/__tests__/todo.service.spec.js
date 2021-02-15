import TodoService from '../todo.service';
import { fileContent, todos } from '../../constants/mocks';
import { FileReadWrite } from '../../utils/file.util';

describe('Todo service get all todos test', () => {
  it('should return an arrray with one element', () => {
    const readFileDataSpy = jest.spyOn(FileReadWrite, 'readFileData');
    readFileDataSpy.mockImplementation(() => fileContent);
    const result = TodoService.getAllTodos();
    expect(result.length).toBe(1);
    expect(result[0].id).toEqual(todos[0].id);
    expect(result[0].todo).toEqual(todos[0].todo);
  });
});

describe('Todo service get todo test', () => {
  it('should return an object with 4 keys', () => {
    const readFileDataSpy = jest.spyOn(FileReadWrite, 'readFileData');
    readFileDataSpy.mockImplementation(() => fileContent);
    const result = TodoService.getTodo({ id: '1' });
    expect(Object.keys(result).length).toBe(4);
    expect(result.id).toEqual(todos[0].id);
    expect(result.todo).toEqual(todos[0].todo);
  });
  it('should return null if id not found', () => {
    const readFileDataSpy = jest.spyOn(FileReadWrite, 'readFileData');
    readFileDataSpy.mockImplementation(() => null);
    const result = TodoService.getTodo({ id: '10' });
    expect(result).toBe(null);
  });
});

describe('Todo service create todo test', () => {
  it('should return an object with 4 keys and id 1 when new entry', () => {
    const readFileDataSpy = jest.spyOn(FileReadWrite, 'readFileData');
    readFileDataSpy.mockImplementation(() => '');
    const writeDataToFileSpy = jest.spyOn(FileReadWrite, 'writeDataToFile');
    writeDataToFileSpy.mockImplementation(() => true);
    const result = TodoService.createTodo({ data: 'dummy todo' });
    expect(Object.keys(result).length).toBe(4);
    expect(result.id).toEqual('1');
    expect(result.todo).toEqual('dummy todo');
  });
  it('should return an object with 4 keys', () => {
    const readFileDataSpy = jest.spyOn(FileReadWrite, 'readFileData');
    readFileDataSpy.mockImplementation(() => fileContent);
    const writeDataToFileSpy = jest.spyOn(FileReadWrite, 'writeDataToFile');
    writeDataToFileSpy.mockImplementation(() => true);
    const result = TodoService.createTodo({ data: 'dummy todo' });
    expect(Object.keys(result).length).toBe(4);
    expect(result.id).toEqual('2');
    expect(result.todo).toEqual('dummy todo');
  });
});

describe('Todo service update todo test', () => {
  it('should return an object with 4 keys when updating an entry', () => {
    const readFileDataSpy = jest.spyOn(FileReadWrite, 'readFileData');
    readFileDataSpy.mockImplementation(() => fileContent);
    const writeDataToFileSpy = jest.spyOn(FileReadWrite, 'writeDataToFile');
    writeDataToFileSpy.mockImplementation(() => true);
    const result = TodoService.updateTodo({ data: 'dummy todo updated', id: '1' });
    expect(Object.keys(result).length).toBe(4);
    expect(result.id).toEqual('1');
    expect(result.todo).toEqual('dummy todo updated');
  });
  it('should return null for id 2', () => {
    const readFileDataSpy = jest.spyOn(FileReadWrite, 'readFileData');
    readFileDataSpy.mockImplementation(() => fileContent);
    const writeDataToFileSpy = jest.spyOn(FileReadWrite, 'writeDataToFile');
    writeDataToFileSpy.mockImplementation(() => true);
    const result = TodoService.updateTodo({ data: 'dummy todo', id: '10' });
    expect(result).toEqual(null);
  });
});

describe('Todo service delete todo test', () => {
  it('should return an object with 4 keys for the deleted entry', () => {
    const readFileDataSpy = jest.spyOn(FileReadWrite, 'readFileData');
    readFileDataSpy.mockImplementation(() => fileContent);
    const writeDataToFileSpy = jest.spyOn(FileReadWrite, 'writeDataToFile');
    writeDataToFileSpy.mockImplementation(() => true);
    const result = TodoService.deleteTodo({ id: '1' });
    expect(Object.keys(result).length).toBe(4);
    expect(result.id).toEqual(todos[0].id);
    expect(result.todo).toEqual(todos[0].todo);
  });
  it('should return null when id is not present', () => {
    const readFileDataSpy = jest.spyOn(FileReadWrite, 'readFileData');
    readFileDataSpy.mockImplementation(() => fileContent);
    const writeDataToFileSpy = jest.spyOn(FileReadWrite, 'writeDataToFile');
    writeDataToFileSpy.mockImplementation(() => true);
    const result = TodoService.updateTodo({ id: '10' });
    expect(result).toEqual(null);
  });
});
