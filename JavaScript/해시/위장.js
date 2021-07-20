function solution(clothes) {
  let obj = {};
  clothes.forEach((cloth) => {
    obj[cloth[1]] = (obj[cloth[1]] || 1) + 1;
  });

  return Object.values(obj).reduce((a, b) => a * b) + 1;
}

const clothes = [
  [
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ],
];

console.log(solution(clothes));
