import { readFileSync, writeFileSync, renameSync } from 'fs';

export const fileRead = (path) => {
  try {
    const result = readFileSync(path, 'utf8');
    return result;
  } catch (error) {
    return error.message;
  }
};

export const fileJoin = (filePath, ...paths) => {
  // code here
};

export const fileRename = (filePath, newPath) => {
  // Code here
};
