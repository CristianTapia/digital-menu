
let editButton = document.getElementsByClassName("edit-btn");
let doneButton = document.getElementsByClassName("done-btn");

for (let i = 0; i < editButton.length; i++) {
  let editButtonArray = editButton[i];
  editButtonArray.addEventListener("click", (event) => {
    let buttonClicked = event.target;
    let getTitleElement = buttonClicked.closest(".productCard").querySelector('h5.card-title.name');
    let getPriceElement = buttonClicked.closest(".productCard").querySelector('div.price');
    let getProcedenceElement = buttonClicked.closest(".productCard").querySelector('div.procedence');
    let getDescriptionElement = buttonClicked.closest(".productCard").querySelector('div.description');
    let inputTitle = buttonClicked.closest(".productCard").querySelector('h5.card-title.input-title');
    let inputPrice = buttonClicked.closest(".productCard").querySelector('input.form-control.input-price');
    let inputProcedence = buttonClicked.closest(".productCard").querySelector('input.form-control.input-procedence');
    let inputDescription = buttonClicked.closest(".productCard").querySelector('input.form-control.input-description');
    let editButtonClicked = buttonClicked.closest('.productCard').querySelector('button.card-link.edit-btn');
    let doneButtonClicked = buttonClicked.closest(".productCard").querySelector('button.card-link.done-btn');

    getTitleElement.classList.add("d-none");
    getPriceElement.classList.add("d-none");
    getProcedenceElement.classList.add("d-none");
    getDescriptionElement.classList.add("d-none");
    editButtonClicked.classList.add("d-none");
    inputTitle.classList.replace("d-none", "d-block");
    inputPrice.classList.replace("d-none", "d-block");
    inputProcedence.classList.replace("d-none", "d-block");
    inputDescription.classList.replace("d-none", "d-block");
    doneButtonClicked.classList.replace("d-none", "d-block");
  });
}

for (let i = 0; i < doneButton.length; i++) {
  let doneButtonArray = doneButton[i];
  doneButtonArray.addEventListener("click", (event) => {
    let buttonClicked = event.target;
    let inputName = buttonClicked.closest(".productCard").querySelector('input[name="title"]').value;
    let inputPrice = parseInt(buttonClicked.closest(".productCard").querySelector('input[name="price"]').value);
    let inputProcedence = buttonClicked.closest(".productCard").querySelector('input[name="procedence"]').value;
    let inputDescription = buttonClicked.closest(".productCard").querySelector('input[name="description"]').value;
    let doneButtonClicked = buttonClicked.closest(".productCard").querySelector('button.card-link.done-btn');
    let id = parseInt(doneButtonClicked.getAttribute('value'));

    const data = {
      name: inputName,
      price: inputPrice,
      procedence: inputProcedence,
      description: inputDescription,
    };

    async function editProductCard(id, data) {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log("Success: ", result);
        if (result) {
          alert("Editado con exito");
          location.reload();
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    }
    editProductCard(id, data);
  });
}