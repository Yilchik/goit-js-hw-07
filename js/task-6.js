function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const newStyle = document.querySelector('#boxes');

const input = document.querySelector('input[type="number"]');

const createBtn = document.querySelector('button[data-create]');
createBtn.classList.add('create');

const destroyBtn = document.querySelector('button[data-destroy]');
destroyBtn.classList.add('destroy');

let size = 30;
const createBox = createBtn.addEventListener('click', makeBox);

function makeBox(amount) {
  newStyle.innerHTML = '';
  amount.value = '';

  if (amount < 1 || amount > 100) {
    return;
  }
  for (let i = 0; i <= amount; i++) {
    const box = document.createElement('div');
    const color = getRandomHexColor();
    box.style.backgroundColor = color;
    box.style.width = '${size}px';
    box.style.height = '${size}px';
    newStyle.appendChild(box);
    size += 10;
  }
}

console.dir(createBtn);
console.dir(input);
console.dir(size);
console.dir(createBox);
