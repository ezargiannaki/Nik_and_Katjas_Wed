const shell = document.getElementById("shell");

const uploadButton =
  document.getElementById("uploadButton");


shell.addEventListener("click", function (event) {

  if (event.target.closest(".upload-button")) {
    return;
  }

  if (!shell.classList.contains("open")) {

    shell.classList.add("open");

    document.body.classList.add("opened");

  }

});


uploadButton.addEventListener("click", function (event) {

  event.stopPropagation();

});
