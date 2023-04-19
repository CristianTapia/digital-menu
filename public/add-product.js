// Display field procedence in the form
// let categoryOption = document.getElementById("selectForm-add");
let addProductForm = document.getElementById("add-product");

// if (categoryOption.value == 1) {
//   $(".procedence").hide();
// }
// categoryOption.addEventListener("change", () => {
//   let optionSelected = categoryOption.value;
//   if (optionSelected == 2 || optionSelected == 3) {
//     $(".procedence").show();
//   } else {
//     $(".procedence").hide();
//   }
// });

addProductForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputName = addProductForm.elements["title"].value;
  let inputPrice = addProductForm.elements["price"].value;
  let inputProcedence = addProductForm.elements["procedence"].value;
  let inputDescription = addProductForm.elements["description"].value;
  let selectedOption = categoryOption.options[categoryOption.selectedIndex].text;

  const data = { name: inputName, price: inputPrice, procedence: inputProcedence, description: inputDescription, category: selectedOption };
  
  if (inputName == '' || inputPrice == '' || inputDescription == '' || selectedOption == 'Selecciona una opción') {
    alert('Llenar campos');
  } else {
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
          alert('Agregado con exito');
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    }
    postJSON(data);
  }
});