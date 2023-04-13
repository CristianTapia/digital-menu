let waiterForm = document.getElementById("add-waiter");

waiterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = waiterForm.elements["name"].value;
  let lastName = waiterForm.elements["last-name"].value;
  console.log("name", name);
  console.log("last name", lastName);
});