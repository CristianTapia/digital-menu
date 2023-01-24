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
-       Orders        -
---------------------*/

$(document).ready(function(){
  $('.product').click(function(){
      $('#floating-cart').show();
  });
});

/*---------------------
-    Floating cart    -
---------------------*/

// Cart content
$(document).ready(function(){
  $("#floating-cart").click(function(){
    $("#cart-content, #checkout").toggle();
  });
});

// Remove product
let removeProductFromCart = document.getElementsByClassName('remove');
for (let i = 0; i < removeProductFromCart.length; i++) {
  let binButton = removeProductFromCart[i];
  binButton.addEventListener('click', function(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
    updateCartTotal();
  })
}

// Update cart total
function updateCartTotal() {
  let cartContent = document.getElementById('cart-content');
  let productContent = cartContent.getElementsByClassName('product-content');
  let total = 0;
  for (let i = 0; i < productContent.length; i++) {
    let cartProducts = productContent[i];
    let productPrice = cartProducts.getElementsByClassName('product-price')[0];
    let ProductQuantity = cartProducts.getElementsByClassName('quantity')[0];
    let price = parseInt(productPrice.innerText.replace('Pinta: $', ' '));
    let quantity = ProductQuantity.value;
    total = total + (price * quantity);
  }
  if (total == 0) {
    let totalPrice = document.getElementById("checkout").innerHTML = `Total: $${total}`;
  } else {
    let totalPrice = document.getElementById("checkout").innerHTML = `Total: $${total}.000`;
  }
}