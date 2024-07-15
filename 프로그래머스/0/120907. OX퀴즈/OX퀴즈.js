function solution(quiz) {
    let answer = [];
    
    quiz.map(v => {
        let exp = v.split(' ');
        let correct = 0;
        
        if (exp[1] === '+') correct = Number(exp[0]) + Number(exp[2])
        else if (exp[1] === '-') correct = Number(exp[0]) - Number(exp[2])
        
        correct === Number(exp[4]) ? answer.push('O') : answer.push('X')
    })
    
    return answer
}