// Wait until the page loads to safely access elements
document.addEventListener("DOMContentLoaded", function () {
  // Get the button by its ID
  const helloButton = document.getElementById("helloBtn");

  // Add a click event listener
  helloButton.addEventListener("click", function () {
    alert("This button works!");
  });
});
