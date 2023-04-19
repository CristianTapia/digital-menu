let waiterForm = document.getElementById("add-waiter");
let waiterCard = document.getElementById('waiterCard');

// Change the color when the card is selected
waiterCard.classList.add('bg-primary', 'bg-gradient', 'text-white');

// Send data after the button is clicked
waiterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputName = waiterForm.elements["name"].value;
  let inputLastName = waiterForm.elements["last-name"].value;
  const data = { name: inputName, lastName: inputLastName };
  
  if (inputName == '' || inputLastName == '') {
    alert('Llenar campos');
  } else {
    async function postJSON(data) {
      try {
        const response = await fetch("http://localhost:3000/waiters", {
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