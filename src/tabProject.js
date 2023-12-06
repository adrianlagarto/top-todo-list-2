

let projectArray = [];

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
    //creates project that has an empty array
    //name the project in the form

    //Project Title
    const projectTitle = document.createElement('input');
    projectTitle.setAttribute('id', 'project-title');
    pageContent.appendChild(projectTitle);

    //Submit Project Title
    const submitProjectTitle = document.createElement('button');
    submitProjectTitle.setAttribute('id', 'submit-project-title');
    submitProjectTitle.textContent = 'submit-project';

    //AddProjectBtn info input container
    const AddProjectContainer = document.createElement('div');
    AddProjectContainer.appendChild(projectTitle);
    AddProjectContainer.appendChild(submitProjectTitle);
    pageContent.appendChild(AddProjectContainer);

    //Press Submit
    const submitTitle = document.querySelector('#submit-project-title');
    submitTitle.addEventListener('click', () => {
      let input = document.querySelector('#project-title');

      let newProject = new project(input);
        projectArray.push(newProject);
        renderProject();
        console.log(projectArray)

        console.log(input.value);
        input.value = '';
    });
  
  });

}

function renderProject() {
  let projectContainer = document.querySelector('#project-container');
  projectContainer.innerHTML = '';
  for(let i = 0; i < projectArray.length; i++){
    let projectItem = projectArray[i];
    let projectItemEl = document.createElement('div');
    projectItemEl.textContent = `Title is ${projectItem.title}`
    projectContainer.appendChild(projectItemEl);
    console.log(projectItem.title);
  }
}

function project(title) {
  this.title = title
}


export default tabProject;