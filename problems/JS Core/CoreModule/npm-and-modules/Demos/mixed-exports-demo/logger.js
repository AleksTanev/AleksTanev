// This is not exported
const defaultMsg = 'Warning: No message provided!';

export const log = function (msg) {
  if (msg) {
    console.log(msg);
  } else {
    console.log(defaultMsg);
  }
};

export default {
  defaultMsg,
}