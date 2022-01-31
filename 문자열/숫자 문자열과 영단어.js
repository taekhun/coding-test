function solution(string) {
  const numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let newString = string;

  numArr.forEach((val, idx) => {
    newString = newString.replace(new RegExp(val, 'g'), idx);
  });

  return newString;
}

const case1 = 'one4seveneight';
const case2 = '23four5six7';
const case3 = 'one4oneseveneight';

console.log(solution(case1));
