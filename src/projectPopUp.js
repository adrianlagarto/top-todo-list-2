


const projectPopUp = () => {
  console.log('hi');

  const container = document.querySelector('#container');
  const form = document.createElement('form');

  const popUpBox = document.createElement('div');
  const title = document.createElement('input');
  const confirm = document.createElement('button');
  const exit = document.createElement('button');

  //Attributes
  popUpBox.setAttribute('class', 'pop-up-box');
  popUpBox.setAttribute('id', 'pop-up-box-1');
  title.setAttribute('id', 'title');
  confirm.setAttribute('id', 'confirm');
  exit.setAttribute('id', 'exit');

  title.setAttribute('class', 'info-input');

  //Text
  confirm.textContent = 'Confirm';
  confirm.type = 'submit';
  confirm.value = 'Add Project';
  exit.textContent = 'Exit';


  title.placeholder = 'Title';

  form.appendChild(title);
  popUpBox.appendChild(confirm);
  popUpBox.appendChild(exit);

  popUpBox.appendChild(form)
  container.appendChild(popUpBox);
  console.log(popUpBox);
}

export default projectPopUp;


