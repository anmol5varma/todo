import { TODO_FILE_PATH } from '../constants/config';

const fs = require('fs');

export class FileReadWrite {
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

export const parseFileContentToJson = (fileContent) => {
  if (!fileContent) { return []; }
  return fileContent.split('\n').reduce((list, lineData, index) => {
    let tempList = [...list];
    if (index % 4 === 0) {
      tempList = tempList.concat({ id: lineData });
    } else if (index % 4 === 1) {
      tempList[tempList.length - 1].todo = lineData;
    } else if (index % 4 === 2) {
      tempList[tempList.length - 1].createdAt = lineData;
    } else {
      tempList[tempList.length - 1].updatedAt = lineData;
    }
    return tempList;
  }, []);
};

export const parseJsonToFileContent = (data) => {
  return data.reduce((fileContent, todo) => {
    return fileContent.concat(Object.values(todo));
  }, []).join('\n');
};
