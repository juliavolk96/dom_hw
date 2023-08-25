// TODO: write code here
const gameContainer = document.getElementById('game-container');
const characterImage = new Image();
characterImage.src = './images/goblin.png';

// Размер игрового поля
const gridSize = 4;
// Размер ячейки
const cellSize = 100;

// Функция перемещения персонажа
function moveCharacter() {
  const newPositionX = Math.floor(Math.random() * gridSize) * cellSize;
  const newPositionY = Math.floor(Math.random() * gridSize) * cellSize;

  characterImage.style.transform = `translate(${newPositionX}px, ${newPositionY}px)`;
}

// Изменение позиции
characterImage.addEventListener('click', moveCharacter);

// Добавление персонажа на поле
gameContainer.appendChild(characterImage);
