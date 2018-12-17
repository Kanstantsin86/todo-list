'use strict';
const listBlock = document.getElementsByClassName('list-block')[0];
const counter = listBlock.getElementsByTagName('output')[0];
const checkboxes = listBlock.querySelectorAll('ul > li');

function completedTasksCounter() {
  const completedTasks = listBlock.querySelectorAll('input[type=checkbox]:checked').length;
  const allTasks = checkboxes.length;
  counter.value = `${completedTasks} из ${allTasks}`;
  if (completedTasks === allTasks) {
    listBlock.classList.add('complete');
  } else {
    listBlock.classList.remove('complete');
  }
}

completedTasksCounter();

Array.from(checkboxes).forEach(task => task.addEventListener('change', completedTasksCounter));