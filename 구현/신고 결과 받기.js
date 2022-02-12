function solution(id_list, report, k) {
  const arr = [...new Set(report)].map((item) => item.split(' '));
  const reporter_list = {};
  const reportee_count = {};
  const result = [];

  id_list.forEach((id) => {
    reporter_list[id] = [];
    reportee_count[id] = 0;
  });

  arr.forEach(([reporter, reportee]) => {
    reporter_list[reporter].push(reportee);
    reportee_count[reportee] += 1;
  });

  id_list.forEach((id) => {
    let count = 0;
    reporter_list[id].forEach((reportee) => {
      if (reportee_count[reportee] >= k) {
        count += 1;
      }
    });
    result.push(count);
  });

  return result;
}

// https://programmers.co.kr/learn/courses/30/lessons/92334
