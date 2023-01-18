function solution(numbers) {
  const stringNumber = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  stringNumber.forEach((item, index) => {
    numbers = numbers.split(item).join(index);
  });

  return Number(numbers);
}
