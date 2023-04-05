// Display field procedence in the form
let categoryOption = document.getElementById("selectForm-add");
if (categoryOption.value == 1) {
  $(".procedence").hide();
}
categoryOption.addEventListener("change", () => {
  let optionSelected = categoryOption.value;
  if (optionSelected == 2 || optionSelected == 3) {
    $(".procedence").show();
  } else {
    $(".procedence").hide();
  }
});