const gridWrapper = document.querySelector('.grid-wrapper');
const clearBtn = document.querySelector('.js-clear');
const editBtn = document.querySelector('.js-edit');


function createGrid(num) {
  gridWrapper.innerHTML = ''
  for (let i = 0; i < (num * num); i++) {
    let gridSquare = document.createElement('div');
    gridSquare.className = 'grid-square';

    let squareSize = 720 / num;
    gridSquare.style.width = `${squareSize}px`;
    gridSquare.style.height = `${squareSize}px`;
    gridWrapper.appendChild(gridSquare);

    hoverEffect(gridSquare);
  }
}

function hoverEffect(square) {
  square.addEventListener('mouseenter', () => {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    square.style.backgroundColor = randomColor;
  })
}

function getValidNum(min, max, message) {
  let num;
  do {
    num = Number(prompt(message));
  } while (num > max || num < min || isNaN(num))
  return num;
}

function editGrid() {
  editBtn.addEventListener('click', () => {
    const newNum = getValidNum(1, 100, "Enter a number between 1 and 100");
    console.log(newNum);
    console.log(createGrid(newNum));
  })
}

clearBtn.addEventListener('click', () => {
  document.querySelectorAll('.grid-square').forEach(square => {
    square.style.removeProperty('background-color');
  });
});

createGrid(16);
editGrid();


