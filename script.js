const gridWrapper = document.querySelector('.grid-wrapper');
const clearBtn = document.querySelector('.js-clear');
const editBtn = document.querySelector('.js-edit');

function createGrid(size) {
  gridWrapper.innerHTML = '';

  const gridWidth = gridWrapper.clientWidth;
  const squareSize = gridWidth / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = getRandomColor();
    });

    gridWrapper.appendChild(square);
  }
}

function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 100%, 50%)`;
}

function getValidNumber(min, max, message) {
  let num;
  do {
    num = Number(prompt(message));
  } while (isNaN(num) || num < min || num > max);
  return num;
}

function setupEditGrid() {
  editBtn.addEventListener('click', () => {
    const newSize = getValidNumber(1, 100, "Enter a number between 1 and 100:");
    createGrid(newSize);
  });
}

function setupClearGrid() {
  clearBtn.addEventListener('click', () => {
    document.querySelectorAll('.grid-square').forEach(square => {
      square.style.removeProperty('background-color');
    });
  });
}

createGrid(16);
setupEditGrid();
setupClearGrid();
