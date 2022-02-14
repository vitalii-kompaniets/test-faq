// ---------- DropDown answer -----------

document.querySelectorAll(".dropdown-toggle").forEach((elem) => {
  elem.addEventListener("click", () => {
    document.querySelector(".question-item-answer").classList.toggle("show");
  });
});


// -------- Search -----------

document.querySelector("#faq-search").oninput = function () {
  let val = this.value.trim();
  let searchItems = document.querySelectorAll(".questions-list li div");
  if (val != "") {
    searchItems.forEach((elem) => {
      let findElem = elem.innerText.search(val);
      if (findElem == -1) {
        elem.classList.add("hide");
      } else {
        elem.classList.remove("hide");
      }
    });
  } else {
    searchItems.forEach(function (elem) {
      elem.classList.remove("hide");
    });
  }
};


// ------------ faq-menu ------------

let faqMenu = document.getElementById("faq-nav-menu");
let btns = faqMenu.getElementsByClassName("faq-nav-menu-link");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    let current = document.getElementsByClassName("faq-nav-menu-link");
    console.log(current[i]);
    if (current[i].classList.contains("active")) {
      current[i].classList.remove("active");
    } else {
      current[i].classList.add("active");
    }
  });
}
