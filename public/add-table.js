let tableForm = document.getElementById("add-table");
let tableCard = document.getElementById('tableCard');

// Change the color when the card is selected
tableCard.classList.add('bg-primary', 'bg-gradient', 'text-white');

// Send data after the button is clicked
tableForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputNumber = tableForm.elements["table"].value;

  const data = { number: inputNumber };

  if (inputNumber == '') {
    alert('Llenar campos');
  } else {
    async function postJSON(data) {
      try {
        const response = await fetch("http://localhost:3000/tables/:id", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log("Success: ", result);
        if (result) {
          alert('Agregado con exito');
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    postJSON(data);
  }
});