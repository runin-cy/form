loadEvents();

function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
}

function submit(e){
  e.preventDefault();
  let taskList;
  let input = document.querySelector('input');
  if(input.value != '')
    addTask(input.value);
  input.value = '';
}

function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = task;
  ul.appendChild(li);
  document.querySelector('.tasksBoard').style.display = 'block';
}



