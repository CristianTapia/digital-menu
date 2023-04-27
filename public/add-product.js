// Display field procedence in the form
let categoryOption = document.getElementById("selectForm-add");
let addProductForm = document.getElementById("add-product");
let procedenceLink = document.getElementById("procedence-link");
let procedenceBox = document.getElementById("procedence-box");

procedenceLink.addEventListener("click", () => {
  procedenceBox.classList.toggle("d-none");
});

addProductForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputName = addProductForm.elements["title"].value;
  let inputPrice = addProductForm.elements["price"].value;
  let inputProcedence = addProductForm.elements["procedence"].value;
  let inputDescription = addProductForm.elements["description"].value;
  let selectedOption = categoryOption.options[categoryOption.selectedIndex];
  let selectedOptionNum = parseInt(selectedOption.value);

  const data = {
    name: inputName,
    price: inputPrice,
    procedence: inputProcedence,
    description: inputDescription,
    categoryId: selectedOptionNum,
  };

  async function postJSON(data) {
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("Success: ", result);
      if (result) {
        alert("Agregado con exito");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  }
  postJSON(data);
});
