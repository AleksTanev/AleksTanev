// This is not exported
const defaultMsg = 'Warning: No message provided!';

const log = function (msg) {
  if (msg) {
    console.log(msg);
  } else {
    console.log(defaultMsg);
  }
};

export default {
  log,
};
