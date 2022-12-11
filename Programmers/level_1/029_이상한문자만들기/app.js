function solution(s) {
  return s
    .split(' ')
    .map((word) =>
      word
        .split('')
        .map((str, idx) =>
          idx % 2 === 0 ? str.toUpperCase() : str.toLowerCase()
        )
        .join('')
    )
    .join(' ');
}
