const a = 1;

function foo() {
    const a = 2;
    console.log(a); // 2

    if (true) {
        const a = 3;

        // the scope will always search the closest identifier
        // this is called variable shadowing - multiple variables with the same name but in nested scope
        console.log(a); // 3
    }
}

console.log(a); // 1
