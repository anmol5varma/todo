import { TODO_FILE_PATH } from '../constants/config';

const fs = require('fs');

class TodoDoa {
  static readFileData() {
    try {
      const data = fs.readFileSync(`./${TODO_FILE_PATH}`, 'utf8');
      return data;
    } catch (err) {
      return null;
    }
  }

  static writeDataToFile(content) {
    try {
      fs.writeFileSync(`./${TODO_FILE_PATH}`, content);
      return true;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

export default TodoDoa;
