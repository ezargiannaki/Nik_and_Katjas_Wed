const shell = document.getElementById("shell");

shell.addEventListener("click", (e) => {

  if (e.target.closest(".upload-btn")) {
    return;
  }

  shell.classList.toggle("open");

});
