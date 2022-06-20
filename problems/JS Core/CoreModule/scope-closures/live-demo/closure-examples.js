const createMemory = () => {
  const data = [];

  const remember = (x) => {
    if (!data.includes(x)) {
      data.push(x);
    }
  };

  const has = (x) => data.includes(x);

  return {
    remember,
    has,
  }
};

const memory1 = createMemory();
let memory2 = createMemory();

memory1.remember(1);
memory2.remember(2);

console.log(memory1.has(1));
console.log(memory1.has(2));

console.log(memory2.has(1));
console.log(memory2.has(2));