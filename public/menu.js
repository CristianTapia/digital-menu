/*---------------------
-    Dropdown menu    -
---------------------*/

// Display dropdown when the icon is clicked
// $(document).ready(function() {
//   $(".dropbtn").click(function() {
//     $(this).next().toggle();
//   });
// });

// Close dropdown when click outside of it
// $(document).click(function(event) {
//   let $target = $(event.target);
//   if (!$target.closest('.dropbtn').length) {
//     $('.dropdown-content').hide();
//   }
// })

/*---------------------
-    Read more link   -
---------------------*/

// let readMoreBtn = document.getElementsByClassName('readMoreBtn');

// for (let i = 0; i < readMoreBtn.length; i++) {
//   let readMoreBtnArray = readMoreBtn[i];
//   readMoreBtnArray.addEventListener('click', (event) => {
//     let buttonClicked = event.target;
//     let showMoreElement = buttonClicked.closest('.readMoreBtn');
//     let dots = showMoreElement.previousElementSibling.firstElementChild;
//     switch (showMoreElement.innerText) {
//       case 'Ver más':
//         showMoreElement.previousElementSibling.lastElementChild.classList.add('show-element');
//         showMoreElement.innerText = 'Ver menos';
//         dots.innerText = '';
//         break;
//       case 'Ver menos':
//         showMoreElement.previousElementSibling.lastElementChild.classList.remove('show-element');
//         showMoreElement.innerText = 'Ver más';
//         dots.innerText = '...';
//         break;
//     }
//   });
// }

/*---------------------
-      Modal box      -
---------------------*/

let modalBtn = document.getElementsByClassName('modal-btn');
let modalBox = document.getElementById('modal');
let modalContent = document.getElementsByClassName('modal-content')[0];
let closeButton = document.getElementById('close');

for (let i = 0; i < modalBtn.length; i++) {
  modalBtnArray = modalBtn[i];
  modalBtnArray.addEventListener('click', () => {
    modalBox.classList.replace('hide-element', 'show-element');
    closeButton.addEventListener('click', () => {
      modalBox.classList.replace('show-element', 'hide-element');
    });
  })
}

/*---------------------
-    Floating cart    -
---------------------*/

// Show floating cart when a product is clicked
$(document).ready(function(){
  $('.dropdown-container').click(function(){
      $('#floating-cart, #product-count').show();
  });
});

// Show/hide cart content
$(document).ready(function(){
  $('#floating-cart').click(function(){
    $('#cart-content, #checkout').toggle();
  });
});

// Load HTML page before the JS scripts
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {

  // Select product from dropdown
  // let dropdownItem = document.getElementsByClassName('dropdown-item');
  // for (let i = 0; i < dropdownItem.length; i++) {
  //   let item = dropdownItem[i];
  //   item.addEventListener('click', (event) => {
  //     let buttonClicked = event.target;
  //     let getPictureParent = buttonClicked.closest('div.item3').previousElementSibling.previousElementSibling;
  //     let getTitleParent = buttonClicked.closest('div.item3').previousElementSibling;
  //     let price = buttonClicked.closest('a.dropdown-item').innerText;
  //     let picture = getPictureParent.querySelector('.product-img').src;
  //     let title = getTitleParent.querySelector('.product-title').innerText;
  //     addItemToCart(title, price, picture);
  //   });
  // }

  let dropdownItem = document.getElementsByClassName('dropdown-container');
  for (let i = 0; i < dropdownItem.length; i++) {
    let item = dropdownItem[i];
    item.addEventListener('click', (event) => {
      let buttonClicked = event.target;
      let getPictureParent = buttonClicked.closest('div.item3').previousElementSibling.previousElementSibling;
      let getTitleParent = buttonClicked.closest('div.item3').previousElementSibling;
      let price = buttonClicked.closest('div.item3').firstElementChild.innerText;
      let picture = getPictureParent.querySelector('.product-img').src;
      let title = getTitleParent.querySelector('.product-title').innerText;
      addItemToCart(title, price, picture);
    });
  }

  function addItemToCart(title, price, picture) {
    let cartContainer = document.createElement('div');
    cartContainer.classList.add('product-content');
    let cartContent = document.getElementById('cart-content');
    let productContent = 
      `<div class="left"><img src="${picture}"></div>
        <div>
          <h1 class="product-title resp-txt">${title}</h1>
          <div class="mid">
            Cant.
            <input class="mid product-qty resp-txt" type="number" value="1">
            <a class="remove"><i class="fa-solid fa-trash"></i></a>
          </div>
        </div>
        <div class="right"><p class="product-price resp-txt">${price}</p></div>
      `;
    let productPrice = document.getElementsByClassName('product-price');
    let productTitle = document.getElementsByClassName('product-title');
    for (let i = 0; i < productPrice.length; i++) {
      for(let j = 0; j < productTitle.length; j++) {
        if (productPrice[i].innerText == price && productTitle[j].innerText == title) {
          alert('El producto ya fue ingresado a la comanda');
          return;
        }
      }
    }
    cartContainer.innerHTML = productContent;
    cartContent.append(cartContainer);
    updateCartTotal();
    removeProducts();
    qtyProducts();
  }

  // Remove products from cart
  function removeProducts() {
    let removeProductFromCart = document.getElementsByClassName('remove');
    for (let i = 0; i < removeProductFromCart.length; i++) {
      let binButton = removeProductFromCart[i];

      binButton.addEventListener('click', (event) => {
        let buttonClicked = event.target;
        console.log(buttonClicked)
        buttonClicked.closest('div.product-content').remove();
        updateCartTotal();
      });
    }
  }

  // Accept only quantity products >= 0
  function qtyProducts() {
    let quantityInputs = document.getElementsByClassName('product-qty');
    for (let i = 0; i < quantityInputs.length; i++) {
      let qtyInputs = quantityInputs[i];

      qtyInputs.addEventListener('change', (event) => {
        let qtyInputs = event.target;
        if (isNaN(qtyInputs.value) || qtyInputs.value <= 0) {
          qtyInputs.value = 1;
        }
        updateCartTotal();
      });
    }
  }

  // Update cart total
  function updateCartTotal() {
    let cartContent = document.getElementById('cart-content');
    let productContent = cartContent.getElementsByClassName('product-content');
    let total = 0;
    let count = 0;
    for (let i = 0; i < productContent.length; i++) {
      // Define
      let cartProducts = productContent[i];
      let productPrice = cartProducts.getElementsByClassName('product-price')[0].innerText;
      let productQuantity = cartProducts.getElementsByClassName('product-qty')[0];

      // Math
      let price = parseInt(productPrice.replace(/\D/g,''));
      let quantity = productQuantity.value;
      total = total + (price * quantity);
      count = count + parseInt(quantity);
      let totalCLP = Intl.NumberFormat('es-CL').format(total);

      // Print
      document.getElementById('checkout').innerHTML = `Total: $${totalCLP}`;
      document.getElementById('product-count').innerHTML = `${count}`;
    }
    if (total == 0) {
      
      document.getElementById('checkout').innerHTML = `Total: $${total}`;
      document.getElementById('product-count').innerHTML = `${count}`;
      $('#floating-cart, #product-count, #cart-content, #checkout').hide();
    }
  }
}