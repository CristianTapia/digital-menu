
let sidebarSmall = document.getElementById('sidebar-small');
let sidebarBig = document.getElementById('sidebar-big');
let offcanvas = document.getElementById('offcanvas');
let editMenu = document.getElementById('edit-menu');

// Change the icon to display when "Editar Menú" is clicked
$('.icon-menu-down').hide();
editMenu.addEventListener('click', () => {
    $('.icon-menu-right, .icon-menu-down').toggle();
});

// Toggle sidebar when hamburger icon is clicked
$('#sidebar-small').hide();
$('#hamburger').click(function() {
  $('#sidebar-big').toggle();
  $('#sidebar-small').toggle();
  $('.icon-menu-down').hide();
});

// // Show offcanvas when mouse hover on small sidebar
sidebarSmall.addEventListener('mouseenter', () => {
  $('#sidebar-big').show();
  $('#sidebar-small').hide();
});

sidebarBig.addEventListener('mouseleave', () => {
  $('#sidebar-big').hide();
  $('#sidebar-small').show();
});