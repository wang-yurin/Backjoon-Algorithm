function solution(dirs) {
    let x = 0;
    let y = 0;
    const result = new Set()
    
    for (const dir of dirs) {
        let nx = x;
        let ny = y;
        
        switch(dir) {
            case 'U':
                ny += 1;
                break;
            case 'D':
                ny -= 1;
                break;
            case 'R':
                nx += 1;
                break;
            case 'L':
                nx -= 1;
                break;
        }
        if (nx <= 5 && nx >= -5 && ny <= 5 && ny >= -5) {
            result.add(`${x}${y}${nx}${ny}`);
            result.add(`${nx}${ny}${x}${y}`);
            
            x = nx;
            y = ny;
        }
    }
    return result.size / 2
}