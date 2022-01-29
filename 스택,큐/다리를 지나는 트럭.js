function solution(bridge_length, weight, truck_weights) {
  let count = 0;
  let truck_stack = [];

  while (truck_weights.length) {
    for (let i = 0; i < bridge_length; i++, count++) {
      if (sum(truck_stack) + truck_weights[0] <= weight) {
        truck_stack.push(truck_weights.shift());
      }
    }
    truck_stack.shift();
  }

  return count;
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
