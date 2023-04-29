let editBtn = document.getElementsByClassName("edit-btn");
let inputTitle = document.getElementById("input-title");
let inputPrice = document.getElementById("input-price");
let inputProcedence = document.getElementById("input-procedence");
let inputDescription = document.getElementById("input-description");
let editButton = document.getElementById("edit-btn");
let doneButton = document.getElementById("done-btn");

for (let i = 0; i < editBtn.length; i++) {
  let editBtnArray = editBtn[i];
  editBtnArray.addEventListener("click", (event) => {
    let buttonClicked = event.target;
    let getTitleElement = buttonClicked
      .closest(".productCard")
      .querySelector("#name");
    let getPriceElement = buttonClicked
      .closest(".productCard")
      .querySelector("#price");
    let getProcedenceElement = buttonClicked
      .closest(".productCard")
      .querySelector("#procedence");
    let getDescriptionElement = buttonClicked
      .closest(".productCard")
      .querySelector("#description");

    getTitleElement.classList.add("d-none");
    getPriceElement.classList.add("d-none");
    getProcedenceElement.classList.add("d-none");
    getDescriptionElement.classList.add("d-none");
    editButton.classList.add("d-none");
    inputTitle.classList.replace("d-none", "d-block");
    inputPrice.classList.replace("d-none", "d-block");
    inputProcedence.classList.replace("d-none", "d-block");
    inputDescription.classList.replace("d-none", "d-block");
    doneButton.classList.replace("d-none", "d-block");
  });
}

doneButton.addEventListener("click", () => {
  let inputName = document.querySelector('input[name="title"]').value;
  let inputPrice = document.querySelector('input[name="price"]').value;
  let inputProcedence = document.querySelector('input[name="procedence"]').value;
  let inputDescription = document.querySelector('input[name="description"]').value;
  let id = parseInt(doneButton.getAttribute('value'));

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
