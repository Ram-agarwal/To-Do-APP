const taskInput = document.getElementById('task');
const addButton = document.getElementById('add');
const list = document.getElementById('list');

addButton.addEventListener('click', () => {
  if (taskInput.value === '') {
    alert('Please enter a task');
    return;
  }

  const li = document.createElement('li');

  const checkboxGroup = document.createElement('div');
  checkboxGroup.classList.add('checkbox-group');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskText = document.createElement('span');
  taskText.textContent = taskInput.value;

  checkboxGroup.appendChild(checkbox);
  checkboxGroup.appendChild(taskText);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '×';
  deleteButton.classList.add('delete');
  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
  });

  li.appendChild(checkboxGroup);
  li.appendChild(deleteButton);
  list.appendChild(li);

  taskInput.value = '';
});
