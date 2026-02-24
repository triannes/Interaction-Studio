const groups = document.querySelectorAll(".group");
let currentGroupIndex = 0;

groups[0].classList.add("fade-in");

document.addEventListener("click", () => {

  if (currentGroupIndex === groups.length - 1) return;

  groups[currentGroupIndex].classList.remove("fade-in");
  groups[currentGroupIndex].classList.add("fade-out");

  currentGroupIndex++;

  groups[currentGroupIndex].classList.remove("fade-out");
  groups[currentGroupIndex].classList.add("fade-in");

});
