let addProductBtn = document.getElementsByClassName('new-product');
for (let i = 0; i < addProductBtn.length; i++) {
    let addProduct = addProductBtn[i];
    addProduct.addEventListener('click', (event) => {
        let buttonClicked = event.target;
        console.log(buttonClicked)

    })
}