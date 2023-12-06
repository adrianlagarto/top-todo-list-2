import tabAll from "./tabAll";

import tabProject from "./tabProject";
import tabNotes from "./tabNotes";

const tabs = () => {
  const container = document.querySelector('#container');
  const sidebar = document.createElement('div');
  
  sidebar.setAttribute('id', 'sidebar');//fghjkl
  const allBtn = document.createElement('button');
  const todayBtn = document.createElement('button');
  const projectBtn = document.createElement('button');
  const notesBtn = document.createElement('button');

  allBtn.setAttribute('id', 'all-btn');
  todayBtn.setAttribute('id', 'today-btn');
  projectBtn.setAttribute('id', 'project-btn');
  allBtn.setAttribute('id', 'all-btn');


  allBtn.textContent = 'All';
  todayBtn.textContent = 'Today';
  projectBtn.textContent = 'Project';
  notesBtn.textContent = 'Notes';

  sidebar.appendChild(allBtn);
  sidebar.appendChild(todayBtn);
  sidebar.appendChild(projectBtn);
  sidebar.appendChild(notesBtn);

  container.appendChild(sidebar);

  allBtn.addEventListener('click', () => {
    clearContent();
    tabAll();//render the page
  })

  todayBtn.addEventListener('click', () => {
    clearContent();
    tabToday();//render the page
  })

  projectBtn.addEventListener('click', () => {
    clearContent();
    tabProject();//render the page
  })

  notesBtn.addEventListener('click', () => {
    clearContent();
    //toggleNotes();
    tabNotes();//render the page
  })

  console.log('tabs')
}

function clearContent() {
  const main = document.querySelector('#main');
  const pageContent = document.querySelector('.page-content')
  if(pageContent){
  main.removeChild(pageContent)
  }
}


function toggleNotes() {
  let notes = document.querySelector('#notes');
  let main = document.querySelector('#main');
  if(notes.style.display === 'none'){
    notes.style.display = 'block';
    main.style.display = 'none'
  }else {
    notes.style.display = 'none'
    main.style.display = 'block'
  }
}


export default tabs;