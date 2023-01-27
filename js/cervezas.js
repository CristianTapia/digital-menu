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

// Load HTML page before the JS scripts
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

let cartContent = document.getElementById('cart-content');
console.log(cartContent)

function ready() {

  // Show floating cart when a product is clicked
  $(document).ready(function(){
    $('.dropdown-item').click(function(){
        $('#floating-cart').show();
    });
  });

  // Show/hide cart content
  $(document).ready(function(){
    $("#floating-cart").click(function(){
      $("#cart-content, #checkout").toggle();
    });
  });

  // Select product from dropdown
  let dropdownItem = document.getElementsByClassName('dropdown-item');
  for (let i = 0; i < dropdownItem.length; i++) {
    let item = dropdownItem[i];
    item.addEventListener('click', addToCart)
  }

  // Function addToCart called in previous lines
  function addToCart(event) {
    let buttonClicked = event.target;
    let picture = document.getElementsByClassName('product-img')[0].src;
    let title = document.getElementsByClassName('product-title')[0].innerText;
    let price = buttonClicked.getAttribute('data-price');
    addItemToCart(title, price, picture);
  }

  function addItemToCart(title, price, picture) {
    let cartContainer = document.createElement('div');
    cartContainer.classList.add('product-content');
    let cartContent = document.getElementById('cart-content');
    let productContent = 
      `<div><img src="${picture}"></div>
        <div>
          <h1 class="resp-txt">${title}</h1>
          <div class="mid">
            <p>Cant.</p>
            <input class="product-qty" type="number" value="1">
            <button class="remove"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
        <div><p class="product-price">${price}</p></div>
      `;
    let productName = document.getElementsByClassName('product-price');
    for (let i = 0; i < productName.length; i++) {
      if (productName[i].innerText == price) {
        alert('El producto ya fue ingresado a la comanda');
        return
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
      binButton.addEventListener('click', removeElement);
    }

    function removeElement(event) {
      let buttonClicked = event.target;
      let removeItem = buttonClicked.closest('div.product-content').remove();
      console.log('remove', removeItem)
      updateCartTotal();
    }
  }

  // Accept only quantity products >= 0
  function qtyProducts() {
    let quantityInputs = document.getElementsByClassName('product-qty');
    for (let i = 0; i < quantityInputs.length; i++) {
      let qtyInputs = quantityInputs[i];
      qtyInputs.addEventListener('change', qtyChange);
    }

    function qtyChange(event) {
      let qtyInputs = event.target;
      if (isNaN(qtyInputs.value) || qtyInputs.value <= 0) {
        qtyInputs.value = 1;
      }
      updateCartTotal();
    }
  }

  // Update cart total
  function updateCartTotal() {
    let cartContent = document.getElementById('cart-content');
    let productContent = cartContent.getElementsByClassName('product-content');
    let total = 0;
    for (let i = 0; i < productContent.length; i++) {
      let cartProducts = productContent[i];
      let productPrice = cartProducts.getElementsByClassName('product-price')[0].innerText;
      let productQuantity = cartProducts.getElementsByClassName('product-qty')[0];
      let price = parseInt(productPrice.replace('.', ''));
      var quantity = productQuantity.value;
      total = total + (price * quantity);
      console.log('total', total)
      console.log('cart content', cartContent)
      console.log('product content', productContent)
        
    }
    document.getElementById("checkout").innerHTML = `Total: $${total}`;
  }
}