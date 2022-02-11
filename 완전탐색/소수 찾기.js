function solution(numbers) {
  const answer = new Set();
  getNumber(numbers, '');

  function getNumber(numbersArr, currentNumber) {
    if (numbersArr.length) {
      for (let i = 0; i < numbersArr.length; i++) {
        const temp = [...numbersArr];
        temp.splice(i, 1);

        const targetNum = parseInt(currentNumber + numbersArr[i]);

        if (isPrime(targetNum)) {
          answer.add(targetNum);
        }

        getNumber(temp, currentNumber + numbersArr[i]);
      }
    }
  }

  function isPrime(number) {
    if (number <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  return answer.size;
}

console.log(solution([1, 2, 3]));
