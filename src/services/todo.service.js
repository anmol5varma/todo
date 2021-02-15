import { parseJsonToFileContent, parseFileContentToJson, FileReadWrite } from '../utils/file.util';

class TodoService {
  static getAllTodos() {
    const fileContent = FileReadWrite.readFileData();
    return parseFileContentToJson(fileContent);
  }

  static getTodo({ id }) {
    const fileContent = FileReadWrite.readFileData();
    const allTodos = parseFileContentToJson(fileContent);
    const [result] = allTodos.filter((todo) => todo.id === id.toString());
    if (result) return result;
    return null;
  }

  static createTodo({ data }) {
    const fileContent = FileReadWrite.readFileData();
    const allTodos = parseFileContentToJson(fileContent);
    let id;
    // get the next id in the sequence
    try {
      id = +allTodos[allTodos.length - 1].id + 1;
    } catch {
      id = 1;
    }
    const newTodo = {
      id: id.toString(),
      todo: data,
      createdAt: new Date().toUTCString(),
      updatedAt: new Date().toUTCString()
    };
    FileReadWrite.writeDataToFile(parseJsonToFileContent(allTodos.concat(newTodo)));
    return newTodo;
  }

  static updateTodo({ id, data }) {
    const fileContent = FileReadWrite.readFileData();
    let updatedTodo = null;
    const updatedTodos = parseFileContentToJson(fileContent).map((todo) => {
      const todoItem = { ...todo };
      if (todoItem.id === id) {
        todoItem.todo = data;
        todoItem.updatedAt = new Date().toUTCString();
        updatedTodo = { ...todoItem };
      }
      return todoItem;
    });
    if (updatedTodo !== null) FileReadWrite.writeDataToFile(parseJsonToFileContent(updatedTodos));
    return updatedTodo;
  }

  static deleteTodo({ id }) {
    const fileContent = FileReadWrite.readFileData();
    let deletedTodo = null;
    const updatedTodos = parseFileContentToJson(fileContent).filter((todo) => {
      if (todo.id === id) {
        deletedTodo = { ...todo };
        return false;
      }
      return true;
    });
    if (deletedTodo !== null) FileReadWrite.writeDataToFile(parseJsonToFileContent(updatedTodos));
    return deletedTodo;
  }
}

export default TodoService;
