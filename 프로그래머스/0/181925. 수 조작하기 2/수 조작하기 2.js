function solution(numLog) {
    let temp = numLog[0];
    let answer = '';
    
    for (let i = 1; i < numLog.length; i++) {
        if (temp + 1 === numLog[i]) {
            temp += 1;
            answer += 'w';
        }
        else if (temp - 1 === numLog[i]) {
            temp -= 1;
            answer += 's';
        }
        else if (temp + 10 === numLog[i]) {
            temp += 10;
            answer += 'd';
        }
        else if (temp - 10 === numLog[i]) {
            temp -= 10;
            answer += 'a';
        }
    }
    return answer
}