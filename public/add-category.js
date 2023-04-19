let categoryForm = document.getElementById("add-category");
let categoryCard = document.getElementById('categoryCard');

// Change the color when the card is selected
categoryCard.classList.add('bg-primary', 'bg-gradient', 'text-white');

// Send data after the button is clicked
categoryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputName = categoryForm.elements["category"].value;
  const data = { name: inputName };
  
  if (inputName == '') {
    alert('Llenar campos');
  } else {
    async function postJSON(data) {
      try {
        const response = await fetch("http://localhost:3000/categories", {
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

