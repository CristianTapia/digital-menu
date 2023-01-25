/*---------------------
-    Dropdown menu    -
---------------------*/

// Show/hide dropdown
function showOptions() {
  document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*---------------------
-      Read more      -
---------------------*/

function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMoreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ver más";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ver menos";
    moreText.style.display = "inline";
  }
}

/*---------------------
-      Modal box      -
---------------------*/

var modal = document.getElementById("modal-box");
var btn = document.getElementById("modal-btn");
var div = document.getElementById("close");
// Open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// Close the modal
div.onclick = function() {
  modal.style.display = "none";
}

var closeModal = function(event) {
  if (event.target == modal) {
        modal.style.display = "none";
  }
}

window.addEventListener('click', closeModal);

  /*---------------------
  -    Floating cart    -
  ---------------------*/

// Show/hide cart content
$(document).ready(function(){
  $("#floating-cart").click(function(){
    $("#cart-content, #checkout").toggle();
  });
  
});

// Load page before JS feature
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {




  // Show floating cart when a product is clicked
  $(document).ready(function(){
    $('.dropdown-a, .dropdown-b, .dropdown-c').click(function(){
        $('#floating-cart').show();
    });
    
  });

  // Select product from dropdown
  let dropdownItemA = document.getElementsByClassName('dropdown-a');
  let dropdownItemB = document.getElementsByClassName('dropdown-b');
  let dropdownItemC = document.getElementsByClassName('dropdown-c');
  for (let i = 0; i < dropdownItemA.length; i++) {
    let itemA = dropdownItemA[i];
    let itemB = dropdownItemB[i];
    let itemC = dropdownItemC[i];
    itemA.addEventListener('click', addToCart);
    itemB.addEventListener('click', addToCart);
    itemC.addEventListener('click', addToCart);
    updateCartTotal();
  }


// Function addToCart called by '// Select product from dropdown'
function addToCart(event) {
  let buttonClicked = event.target;
  let title = buttonClicked.parentElement.parentElement.parentElement.previousElementSibling.querySelector('.product-title').innerText;
  let price = buttonClicked.innerText;
  var picture = buttonClicked.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.querySelector('.product-img').src;
  console.log(title)
  console.log(price)
  console.log(picture)
  addItemToCart(title, price, picture);
}

function addItemToCart(title, price, picture) {
  let itemContainer = document.createElement('div');
  itemContainer.classList.add('product-content');
  let item = document.getElementById('cart-content');
  let itemContent = 
    `
    <div><img src="${picture}"></div>
    <div>
      <h1 class="resp-txt">${title}</h1>
      <div class="mid">
        <p>Cant.</p>
        <input class="quantity" type="number" value="1">
        <button class="remove"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
    <div><p class="product-price">${price}</p></div>
    `;
  itemContainer.innerHTML = itemContent;
  item.append(itemContainer);
  console.log('container product', itemContainer)
  qtyProducts();
  removeProducts();
  updateCartTotal();
}

// Update cart total
function updateCartTotal() {
  let cartContent = document.getElementById('cart-content');
  let productContent = cartContent.getElementsByClassName('product-content');
  let total = 0;
  for (let i = 0; i < productContent.length; i++) {
    let cartProducts = productContent[i];
    let productPrice = cartProducts.getElementsByClassName('product-price')[0];
    let productQuantity = cartProducts.getElementsByClassName('quantity')[0];
    let price = parseInt(productPrice.innerText.replace('Pinta: $', ' '));
    let quantity = productQuantity.value;
    // console.log(quantity)
    total = total + (price * quantity);
  }
  if (total == 0) {
    let totalPrice = document.getElementById("checkout").innerHTML = `Total: $${total}`;
  } else {
    let totalPrice = document.getElementById("checkout").innerHTML = `Total: $${total}.000`;
  }
}

// Remove products from cart
function removeProducts() {
  let removeProductFromCart = document.getElementsByClassName('remove');
  for (let i = 0; i < removeProductFromCart.length; i++) {
  let binButton = removeProductFromCart[i];
  binButton.addEventListener('click', removeProduct);
  updateCartTotal();
  }

  function removeProduct(event) {
    let buttonClicked = event.target;
    let removeItem = buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
    console.log('remove', removeItem)
    updateCartTotal();
  }
}

// Accept only quantity products >= 0
function qtyProducts() {
  let quantityInputs = document.getElementsByClassName('quantity');
  for (let i = 0; i < quantityInputs.length; i++) {
    let qtyInputs = quantityInputs[i];
    console.log(qtyInputs)
    qtyInputs.addEventListener('change', qtyChange);
    updateCartTotal();
  }

  function qtyChange(event) {
    let qtyInputs = event.target;
    if (isNaN(qtyInputs.value) || qtyInputs.value <= 0) {
      qtyInputs.value = 1;
    }
    updateCartTotal();
  }
}

}


