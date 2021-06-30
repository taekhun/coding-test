function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = 0;
        sum += nums[i] + nums[j] + nums[k];
        isPrime(sum) && count++;
      }
    }
  }

  return count;
}

console.log(solution([1, 2, 4, 6, 7]));
