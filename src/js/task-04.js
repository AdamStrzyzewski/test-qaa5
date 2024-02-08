function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxContainer = document.querySelector('#boxes');
const numberInput = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');

function createBoxes(amount) {
  const boxes = [];
  let dimension = 30;
  for (let i = 0; i < amount; i += 1) {
    dimension += i * 10;
    const box = document.createElement('div');
    box.style.width = `${dimension}px`;
    box.style.height = `${dimension}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  // destroyBoxes();
  // boxContainer.append(...boxes);
  // new construct

  boxContainer.replaceChildren(...boxes);
}

function destroyBoxes() {
  boxContainer.textContent = '';
  // boxContainer.innerHTML = '';
}

createButton.addEventListener('click', function () {
  createBoxes(parseInt(numberInput.value));
});

destroyButton.addEventListener('click', destroyBoxes);
