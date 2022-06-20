

let print = this.print || console.log

let output = ''

for (i=2;i<=10;i++) {
    for (j = 1; j<=4;j++) {
        switch (j%4) {
            case 1:
                output = output + `${i} ♠ `
            break
            case 2:
                output = output + `${i} ♣ `
            break
            case 3:
                output = output + `${i} ♥ `
            break
            case 0:
                output = output + `${i} ♦ `
            break

        }
    }
    print(output)
    output = ''
}
print(`J ♠ J ♣ J ♥ J ♦`)
print(`Q ♠ Q ♣ Q ♥ Q ♦`)
print(`K ♠ K ♣ K ♥ K ♦`)
print(`A ♠ A ♣ A ♥ A ♦`)
