const account = (() => {

  let balanceVal = 0

  const deposit = (add) => {
    if (add <= 0 || typeof add !== "number") {
      throw "Invalid deposit!";
    }
    console.log(`Balance before deposit ${balanceVal}`)
    balanceVal += add;
  };

  const withdraw = (take) => {
    if (take <= 0 || typeof take !== "number" || balanceVal < take) {
      throw "Invalid withdrawal!";
    }
    console.log(`Balance before withdrawal ${balanceVal}`)
    balanceVal -= take;
  };

  return {
    get getBalance() {
      return balanceVal
    },
    deposit,
    withdraw,
  };
})();

account.deposit(1000)
account.withdraw(1000)
console.log(account.getBalance)

