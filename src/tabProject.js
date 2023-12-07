import projectPopUp from "./projectPopUp";

let projectArray = [];
// let Object = {};

const tabProject = () => {
  const container = document.querySelector('#container');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');
  pageContent.textContent = 'Project Tab'
  main.appendChild(pageContent);
  //Base

  //Project Container
  const createProjectContainer = document.createElement('div');
  createProjectContainer.setAttribute('id', 'project-container');
  //const projectContainer = document.querySelector('#project-container');
  createProjectContainer.textContent = 'hu'

  pageContent.appendChild(createProjectContainer);

  //Create Add Project
  const createProjectBtn = document.createElement('button');
  createProjectBtn.textContent = 'Add Project';
  createProjectBtn.setAttribute('id', 'add-project-btn');
  pageContent.appendChild(createProjectBtn);

  //AddProjectBtn function
  const addProjectBtn = document.querySelector('#add-project-btn');

  addProjectBtn.addEventListener('click', () => {

    //const pressExit = document.querySelector('#exit');
    //console.log(pressExit);
    //creates project that has an empty array
    //name the project in the form
    projectPopUp();
    const pressConfirm = document.querySelector('#confirm');
    console.log(pressConfirm);

    //get the info from the pop up and store it

    pressConfirm.addEventListener('click', () => {
      const container = document.querySelector('#container');
      const popUpBox = document.querySelector('#pop-up-box-1');
      let title = (document.querySelector('#title')).value;
      let input = document.querySelectorAll('.info-input');

      //empty array for the Todos for project
      //checks if project name is taken
      for(let i = 0;i < projectArray.length;i++){
        let projectName = projectArray[i].title;
        if(title == projectName){
          return
        }
      }


      //create the name of the project with empty arr
      let newProject = new project(title);
      input.value = '';

      let createProjectContent = {
        newProject,
        arr: []
      }
      projectArray.push(createProjectContent);

      console.log(projectArray);
 
      renderProject();

      container.removeChild(popUpBox);
    })



  
  });
  renderProject();
}

function renderProject() {
  const allProject = document.querySelector('#project-container')

  allProject.innerHTML = '';
  
  for(let i = 0; i < projectArray.length; i++){
    let projectItem = projectArray[i].newProject;

    const cardContainer = document.createElement('div');
    const titleDiv = document.createElement('div');
    cardContainer.setAttribute('id', 'card-container')
    titleDiv.textContent = `${projectItem.title}`;
    cardContainer.appendChild(titleDiv);
    allProject.appendChild(cardContainer);
    //pageContent.appendChild(allProject);
    //main.appendChild(pageContent);
  }
}

function project(title) {
  this.title = title
}


export default tabProject;