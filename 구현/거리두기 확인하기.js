function solution(places) {
  let answer = new Array(5).fill(1);

  places.forEach((place, idx) => {
    const arr = place.map((row) => [...row]);
    const pPosArr = findP(arr);

    for (let i = 0; i < pPosArr.length; i++) {
      for (let j = 0; j < pPosArr.length; j++) {
        if (i === j) continue;

        const start = pPosArr[i];
        const dest = pPosArr[j];
        const distance = checkDistance(start, dest);

        switch (distance) {
          case 1:
            answer[idx] = 0;
            break;

          case 2:
            if (start[0] === dest[0] || start[1] === dest[1]) {
              if (arr[(start[0] + dest[0]) / 2][(start[1] + dest[1]) / 2] === 'O') {
                answer[idx] = 0;
                break;
              }
            }
            if (arr[start[0]][dest[1]] === 'O' || arr[dest[0]][start[1]] === 'O') {
              answer[idx] = 0;
              break;
            }

          default:
            continue;
        }
      }
    }
  });
  return answer;
}

function findP(arr) {
  const pPosArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 'P') pPosArr.push([i, j]);
    }
  }
  return pPosArr;
}

function checkDistance(arr1, arr2) {
  return Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
}

const inputs = [
  ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
  ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
  ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
  ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
  ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
];

console.log(solution(inputs));
