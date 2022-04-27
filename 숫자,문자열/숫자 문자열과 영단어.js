function solution(n, k) {
  const convertedNumber = convertDigits(n, k);
  return convertedNumber.split('0').filter((a) => checkPrimNumber(a)).length;
}

function checkPrimNumber(n) {
  if (n <= 1 || String(n).indexOf('0') !== -1) return false;

  for (let i = 2; i <= Math.floor(n ** (1 / 2)); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function convertDigits(num, k) {
  let dest = '';
  while (num) {
    dest += num % k;
    num = parseInt(num / k);
  }
  return dest.split('').reverse().join('');
}
