
const addBtn = document.getElementById('add-item');
let listItems = [];

const getInput = () => {
  const inputTask = document.getElementById('render-item').value;
  // console.log(inputTask);
  if (inputTask.trim() === '') {
    alert("Cannot Enter Empty String");
    return;

  }
  document.getElementById('render-item').value = '';
  // return inputTask;
  createList(inputTask,listItems);
}

const createList = (value,listItems) => {
  const taskText = value;
  const li = document.createElement('li');
  li.textContent = taskText;
  const delBtn = document.createElement('button');
  delBtn.classList.add('delete-btn');
  const newSpan = document.createElement('span');
  newSpan.classList.add("bi", "bi-trash");
  delBtn.appendChild(newSpan);
  li.appendChild(delBtn);
  const unorderedList = document.getElementById('ul');
  unorderedList.appendChild(li);
  listItems.push(li);
  for (let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('click', () => {
      listItems[i].remove();
    })
  }

}







addBtn.addEventListener('click', getInput);