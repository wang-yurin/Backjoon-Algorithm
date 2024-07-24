function solution(keyinput, board) {
    let coor = [0, 0];
    let xLimit = (board[0] - 1) / 2;
    let yLimit = (board[1] - 1) / 2;
    
    keyinput.forEach(key => {
        switch(key) {
            case 'left':
                coor[0] -= 1
                if (coor[0] < -xLimit) coor[0] = -xLimit
                break;
            case 'right':
                coor[0] += 1
                if (coor[0] > xLimit) coor[0] = xLimit
                break;
            case 'down':
                coor[1] -= 1
                if (coor[1] < -yLimit) coor[1] = -yLimit
                break;
            case 'up':
                coor[1] += 1
                if (coor[1] > yLimit) coor[1] = yLimit
                break;
        }
    })
    return coor
}