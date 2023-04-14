let tableForm = document.getElementById("add-table");

tableForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputNumber = tableForm.elements["table"].value;

  if (inputNumber == '') {
    alert('Llenar campos');
  } else {
    let totalTableNumber = inputNumber;
    console.log(totalTableNumber);
  }
});

export { totalTableNumber };