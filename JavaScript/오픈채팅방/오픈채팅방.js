function solution(records) {
  let timelog = [];
  let userTbl = [];

  timelog = records.map((record) => ({
    cmd: record.split(" ")[0],
    uid: record.split(" ")[1],
    name: record.split(" ")[2],
  }));

  timelog.forEach(({ cmd, uid, name }) => {
    if (cmd == "Enter") {
      const idx = userTbl.findIndex((i) => i._uid === uid);
      if (idx === -1) userTbl.push({ _uid: uid, _name: name });
      else userTbl[idx]._name = name;
    } else if (cmd == "Change") {
      const idx = userTbl.findIndex((i) => i._uid === uid);
      idx !== -1 && (userTbl[idx]._name = name);
    }
  });

  const result = timelog.map(({ cmd, uid }) => {
    const idx = userTbl.findIndex((i) => i._uid == uid);
    if (cmd == "Enter") {
      return `${userTbl[idx]._name}님이 들어왔습니다.`;
    } else if (cmd == "Leave") {
      return `${userTbl[idx]._name}님이 나갔습니다.`;
    }
  });

  return result.filter((i) => i != undefined);
}

const records = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

console.log(solution(records));
