import { addProductTemplate, deleteProductTemplate, editProductTemplate } from "./templates/forms.js";
import { cardsTemplate } from "./templates/cards.js";
import { sidebarBigTemplate, sidebarSmallTemplate } from "./templates/sidebar.js";
import { headerTemplate } from "./templates/header.js";

/*-----------------------------------------------------------
-                     SIDEBAR SELECTION                     - 
-----------------------------------------------------------*/

// Toggle sidebar when hamburger is clicked
let hamburgerIcon = document.getElementById('hamburger');
hamburgerIcon.addEventListener('click', () => {
  $('#sidebar-small').toggle();
  $('#sidebar-big').toggle();
});

/*------------------------
-    Cart view option    -
------------------------*/
// Dispay card view as default
$("#add-product, #delete-product, #edit-product, #sidebar-small, #sidebar-big, .procedence").hide();

let cardView = document.getElementById("card-view");
cardView.addEventListener("click", () => {
  $(".cards").show();
  $("#add-product, #delete-product, #edit-product").hide();
});

/*------------------------
-    Menu edit option    -
------------------------*/
// Add product
let addProductOption = document.getElementById("new-product");
addProductOption.addEventListener("click", () => {
  $("#add-product").show();
  $(".cards, #delete-product, #edit-product").hide();
});

// Display procedence in form
let categoryOption = document.getElementsByClassName("form-select")[0];
categoryOption.addEventListener("change", () => {
  let optionSelected = categoryOption.value;
  if (optionSelected == 1 || optionSelected == 2) {
    $(".procedence").show();
  } else {
    $(".procedence").hide();
  }
});

// Delete product
let deleteProductOption = document.getElementById("del-product");
deleteProductOption.addEventListener("click", () => {
  $("#delete-product").show();
  $(".cards, #add-product, #edit-product").hide();
});

// Edit product
let editProductOption = document.getElementById("change-product");
editProductOption.addEventListener("click", () => {
  $("#edit-product").show();
  $(".cards, #add-product, #delete-product").hide();
});

