function solution(newID) {
  let id = newID;
  // 1.소문자로
  id = id.toLowerCase();
  // 2.소문자,숫자,빼기,밑줄,마침표 제외하고 모든 문자 제거
  // \ : 특수문자
  // \w : word(alphabet & underscore)
  id = id.replace(/[^\w\.\-]/g, "");

  // 3. "." 2개 이상 -> 1개
  // {2,} : 2개 이상
  id = id.replace(/[\.]{2,}/g, ".");

  // 4. 맨처음, 맨마지막 . 제거
  // ^() : 맨 처음
  // ()$ : 맨 마지막
  id = id.replace(/^\.|\.$/g, "");

  //5. 빈 문자열이면 "a" 대입
  id = id.padEnd(1, "a");

  //6. 앞의 15글자 까지만, 만약 마지막에 . 존재하면 제거
  //slice(n,m) : n부터 m 인덱스 까지
  id = id.slice(0, 15).replace(/.$/g, "");

  //7. 길이 2자 이하면, 마지막 문자를 append
  //padEnd(string, num) : num이 될 때 까지 string을 뒤에 채움
  id = id.padEnd(3, id[id.length - 1]);
  return id;
}

const newID = "...!@BaT#*..y.abcdefghijklm";
console.log(solution(newID)); // bat.y.abcdefghi
