
// Get references to the containers and the reset button
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const resetButton = document.getElementById('resetButton');

// Add event listeners to the draggable items
const draggableItems = document.querySelectorAll('.draggable-item');
draggableItems.forEach(item => {
  item.addEventListener('dragstart', handleDragStart);
});

// Add event listeners to the containers
container2.addEventListener('dragenter', handleDragEnter);
container2.addEventListener('dragover', handleDragOver);
container2.addEventListener('dragleave', handleDragLeave);
container2.addEventListener('drop', handleDrop);

// Handle drag start event
function handleDragStart(event) {
  const item = event.target;
  item.classList.add('dragging');
  event.dataTransfer.setData('text/plain', item.id);
}

// Handle drag enter event
function handleDragEnter(event) {
  event.preventDefault();
  container2.classList.add('drag-enter');
}

// Handle drag over event
function handleDragOver(event) {
  event.preventDefault();
}

// Handle drag leave event
function handleDragLeave(event) {
  container2.classList.remove('drag-enter');
}

// Handle drop event
function handleDrop(event) {
  event.preventDefault();
  container2.classList.remove('drag-enter');

  const itemId = event.dataTransfer.getData('text/plain');
  const item = document.getElementById(itemId);
  container2.appendChild(item);
}

// Handle reset button click event
resetButton.addEventListener('click', () => {
  container2.innerHTML = '';
  draggableItems.forEach(item => {
    container1.appendChild(item);
  });
});

