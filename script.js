const shell = document.getElementById("shell");

shell.addEventListener("click", function(event) {

  // Αν πατήσει το κουμπί των φωτογραφιών,
  // δεν ξανακλείνουμε το κοχύλι
  if (event.target.closest(".photo-button")) {
    return;
  }

  shell.classList.toggle("open");

});
