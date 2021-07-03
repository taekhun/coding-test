function solution(nums) {
  let count = new Set(nums);
  return count.size > nums.length / 2 ? nums.length / 2 : count.size;
}

const nums = [3, 3, 3, 2, 2, 4];
console.log(solution(nums));
