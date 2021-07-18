function solution(clothes) {
  return (
    Object.values(
      clothes.reduce((obj, v) => {
        obj[v[1]] = obj[v[1]] ? obj[v[1]] + 1 : 1;
        return obj;
      }, {})
    ).reduce((a, b) => a * (b + 1), 1) - 1
  );
}
