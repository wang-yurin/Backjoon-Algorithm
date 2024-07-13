function solution(angle) {
    if (0 < angle && angle < 90) return 1
    else if (angle === 90) return 2
    else if (90 < angle && angle < 180) return 3
    else return 4
}

/*
* 0 < 예각 < 90
* 직각 = 90
* 90 < 둔각 < 180
* 평각 = 180
* 예각: 1, 직각: 2, 둔각: 3, 평각: 4 리턴
*/