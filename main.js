const lists = document.querySelectorAll(".list");
lists.forEach((item) => item.addEventListener("click", activeLink));

function activeLink() {
  lists.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
