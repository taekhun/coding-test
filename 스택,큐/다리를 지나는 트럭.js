function solution(bridge_length, weight, truck_weights) {
  let count = 0;
  let bridge_queue = new Array(bridge_length).fill(0);

  while (truck_weights.length) {
    for (let i = 0; i < bridge_length; i++, count++) {
      bridge_queue.shift();

      if (sum(bridge_queue) + truck_weights[0] <= weight) {
        bridge_queue.push(truck_weights.shift());
      } else {
        bridge_queue.push(0);
      }
    }

    if (truck_weights.length === 0) {
      while (sum(bridge_queue) !== 0) {
        count += 1;
        bridge_queue.shift();
      }
    }
  }

  return count;
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

// console.log(solution(2, 10, [7, 4, 5, 6]));
// console.log(solution(100, 100, [10]));
// console.log(solution(10, 10, [10]));
// console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
