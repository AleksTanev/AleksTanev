let print = this.print || console.log;

let input = [8,

    7,
    
    3,
    
    2,
    
    3,
    
    5,
    
    2,
    
    2,
    
    4,
]

let n = +input[0]
let nums = []

for (let i = 1; i <= n; i++) {
    nums.push(input[i])
}

let currSeq = 1
let maxSeq = 0

for (let i = 0; i<n;i++) {
    if (nums[i] < nums[i+1]) {
        currSeq ++
        if (currSeq > maxSeq) {
            maxSeq = currSeq
        }
    } else {
        currSeq = 1
    }
}

print(maxSeq)