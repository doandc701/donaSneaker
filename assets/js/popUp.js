const modals = document.querySelector(".modal");
const btn = document.querySelector(".btn-add");
btn.onclick = function (e) {
  modals.classList.add("active");
  setTimeout(function () {
    location.href = "./index.html";
  }, 1500);
};
