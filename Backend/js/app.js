import { addProductTemplate } from "./templates/forms.js";
import { deleteProductTemplate } from "./templates/forms.js";
import { cardsTemplate } from "./templates/cards.js";

// Default behavior
$('#add-product, #delete-product').hide();

/*---------------------
-      Card view      -
---------------------*/

let cardView = document.getElementById('card-view');
cardView.addEventListener('click', () => {
    $('.cards').show();
    $('#add-product, #delete-product').hide();
});

/*---------------------
-      Menu edit      -
---------------------*/

let addProductOption = document.getElementById('new-product');
addProductOption.addEventListener('click', () => {
    $('#add-product').show();
    $('.cards, #delete-product').hide();
});

let deleteProductOption = document.getElementById('del-product');
deleteProductOption.addEventListener('click', () => {
    $('#delete-product').show();
    $('.cards, #add-product').hide();
});