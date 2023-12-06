


function page() {
  const container = document.querySelector('#container');
  const header = document.createElement('div');
  const sidebar = document.createElement('div');
  const main = document.createElement('div');

  /*Header Div*/
  header.setAttribute('id', 'header');
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = 'Header';
  headerTitle.setAttribute('id', 'header-title');
  header.appendChild(headerTitle);

  /*Main Div*/
  main.setAttribute('id', 'main');
  //main.textContent = 'main'


  /*SideBar Div */
  sidebar.setAttribute('id','sidebar');
  sidebar.textContent = 'sidebar'
  

  container.appendChild(header);
  container.appendChild(main);
  container.appendChild(sidebar);

} 


export default page;