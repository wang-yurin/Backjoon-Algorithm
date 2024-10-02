function solution(s) {
    const stack = [];
    for (const str of s) {
        if (stack.length === 0) {
            stack.push(str);
        } else if (str === stack[stack.length - 1]){
            stack.pop();
        } else {
            stack.push(str);
        }
    }
    return stack.length === 0 ? 1 : 0
}