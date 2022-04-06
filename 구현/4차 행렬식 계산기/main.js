const $answer = document.querySelector('p.answer');
const $inputList = [...document.querySelector('.input-container').children];
const $button = document.querySelector('button');
let array = [];

$button.addEventListener('click', () => {
  onClickButton();
});

$inputList.forEach((input, idx) => {
  input.addEventListener('input', (e) => onChangeInput(e, parseInt(idx)));
});

function onChangeInput(e, idx) {
  if (idx === 15) {
    let row = [];
    $inputList.forEach((input, i) => {
      row.push(parseInt(input.value));

      if ((i + 1) % 4 === 0) {
        array.push(row);
        row = [];
      }
    });

    return;
  }
}

function onClickButton() {
  $answer.innerHTML = calc4x4Determinant(array, 0);
}

function calc4x4Determinant(array) {
  let sum = 0;
  const targetColumn = findManyZeroColumn(array);

  if (array.length === 2) {
    return array[0][0] * array[1][1] - array[0][1] * array[1][0];
  }

  for (let i = 0; i < array.length; i++) {
    const dividedArray = divideArray(array, i, targetColumn);
    sum +=
      array[i][targetColumn] *
      (-1) ** (targetColumn + 1 + i + 1) *
      calc4x4Determinant(dividedArray, sum);
  }

  return sum;
}

function findManyZeroColumn(array = []) {
  let stack = Object.entries(new Array(array.length).fill(0));
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] === 0) {
        stack[j][1]++;
      }
    }
  }

  return parseInt(stack.sort((a, b) => b[1] - a[1])[0]);
}

function divideArray(array, row, col) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i === row) continue;
    const newRow = [];
    for (let j = 0; j < array.length; j++) {
      if (j === col) continue;
      newRow.push(array[i][j]);
    }
    newArray.push(newRow);
  }
  return newArray;
}
