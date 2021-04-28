function flipCard(projectStringID) {
  document.getElementById("focus-overlay").classList.remove("hidden");
  document.getElementById(projectStringID).classList.remove("hidden");
}

//PROJECT 1

function unhideProject1Details() {
  flipCard("project1-details");
}

document.getElementById("project1-title").onclick = unhideProject1Details;

//PROJECT 2
function unhideProject2Details() {
  flipCard("project2-details");
}

document.getElementById("project2-title").onclick = unhideProject2Details;

//PROJECT 3
function unhideProject3Details() {
  flipCard("project3-details");
}

document.getElementById("project3-title").onclick = unhideProject3Details;

//PROJECT 4
function unhideProject4Details() {
  flipCard("project4-details");
}

document.getElementById("project4-title").onclick = unhideProject4Details;

//CLOSE BOXES

function closefocus(focusID) {
  document.getElementById("focus-overlay").classList.add("hidden");

  document.getElementById(focusID).classList.add("hidden");
}

function closeAllFocus() {
  varfocusElements = document.getElementsByClassName("focus");

  for (var i = 0; i < varfocusElements.length; i++) {
    var id = varfocusElements[i].id;

    closefocus(id);
  }
}

document.getElementById("focus-overlay").onclick = closeAllFocus;
