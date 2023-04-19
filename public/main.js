
let sidebar = document.getElementById('sidebar');
let editMenu = document.getElementById('edit-menu');
let editMenuIcon = document.getElementById('edit-menu-icon');
let collapsedItems = document.getElementsByClassName('collapse')[0];
let newProduct = document.getElementById('new-product');
let delProduct = document.getElementById('del-product');
let editProduct = document.getElementById('edit-product');
let hamburger = document.getElementById('hamburger');
let adminIcon = document.getElementById('admin-icon');
let cardView = document.getElementById('card-view');
let floorplan = document.getElementById('floorplan');
let tableAsign = document.getElementById('table-asign');
let tableConfig = document.getElementById('table-config');

let url = window.location.pathname;

switch (url) {
  case '/vista-bloques':
    cardView.classList.replace('link-dark', 'active');
    break;
  case '/vista-planta':
    floorplan.classList.replace('link-dark', 'active');
    break;
  case '/agregar-producto':
    editMenu.classList.remove('collapsed');
    collapsedItems.classList.add('show');
    editMenuIcon.classList.replace('bi-caret-right', 'bi-caret-down');
    newProduct.classList.replace('link-dark', 'active');
    break;
  case '/eliminar-producto':
    editMenu.classList.remove('collapsed');
    collapsedItems.classList.add('show');
    editMenuIcon.classList.replace('bi-caret-right', 'bi-caret-down');
    delProduct.classList.replace('link-dark', 'active');
    break;
  case '/editar-producto':
    editMenu.classList.remove('collapsed');
    collapsedItems.classList.add('show');
    editMenuIcon.classList.replace('bi-caret-right', 'bi-caret-down');
    editProduct.classList.replace('link-dark', 'active');
    break;
  case '/asignar-mesa':
    tableAsign.classList.replace('link-dark', 'active');
  break;
  case '/configuraciones':
    tableConfig.classList.replace('link-dark', 'active');
  break;
  case '/configuraciones/meseros':
    tableConfig.classList.replace('link-dark', 'active');
  break;
  case '/configuraciones/categorias':
    tableConfig.classList.replace('link-dark', 'active');
  break;
  case '/configuraciones/mesas':
    tableConfig.classList.replace('link-dark', 'active');
  break;
}

// "Menú" option clicked
editMenu.addEventListener('click', () => {
    editMenuIcon.classList.toggle('bi-caret-right');
    editMenuIcon.classList.toggle('bi-caret-down');
});

/* Toggle sidebar when hamburger icon is clicked
and extend sidebar when mouse is above it */
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('sb-big');
  sidebar.classList.toggle('sb-small');
  sidebar.classList.toggle('text-center');
  adminIcon.classList.toggle('ms-3');
  $('.sb-text').toggle();

  if (sidebar.classList.contains('sb-small')) {
    sidebar.addEventListener('mouseenter', () => {
      sidebar.classList.remove('sb-small');
      sidebar.classList.add('sb-big');
      sidebar.classList.remove('text-center');
      adminIcon.classList.add('ms-3');
      $('.sb-text').show();
    });
      
    // sidebar.addEventListener('mouseleave', leave);
    // function leave() {
    //   sidebar.classList.remove('sb-big');
    //   sidebar.classList.add('sb-small');
    //   sidebar.classList.add('text-center');
    //   adminIcon.classList.remove('ms-3');
    //   $('.sb-text').hide();
    // }
  }
});