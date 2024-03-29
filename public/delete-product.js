let deleteBtn = document.getElementsByClassName("delete-btn");

for (let i = 0; i < deleteBtn.length; i++) {
  let deleteBtnArray = deleteBtn[i];
  deleteBtnArray.addEventListener("click", (event) => {
    let buttonClicked = event.target;
    let id = buttonClicked.value;
    async function deleteProductCard(id) {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
        if (response) {
          alert("Eliminado con éxito");
          location.reload();
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    }
    deleteProductCard(id);
  });
}