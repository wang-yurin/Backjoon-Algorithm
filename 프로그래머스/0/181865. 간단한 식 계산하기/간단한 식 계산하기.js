function solution(binomial) {
    binomial = binomial.split(' ');
    let a = Number(binomial[0]);
    let b = Number(binomial[2])
    let op = binomial[1]
    
    switch (op) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
    }
}