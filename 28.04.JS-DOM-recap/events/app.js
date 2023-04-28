//scrol, load, unload

let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  //   console.log("scrolled");
  //   console.log(window.scrollY);

  //   window.scrollY > 0
  //     ? header.classList.add("header-scroll")
  //     : header.classList.remove("header-scroll");

  header.classList.toggle("header-scroll", window.scrollY > 0);
});
