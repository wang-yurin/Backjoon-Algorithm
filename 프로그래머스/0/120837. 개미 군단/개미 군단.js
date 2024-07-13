function solution(hp) {
    return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3) / 1
}

/*
* 장군개미: 5, 병정개미: 3, 일개미: 1
* 주어진 hp를 큰 수로 나눈다.
* 나눈 나머지를 그 다음 큰 수로 나눈다.
* hp가 0이 될 때까지 반복한다.
*/
