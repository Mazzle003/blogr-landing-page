const handleMenuOPen1 = function () {
  const myLink = document.querySelector("#link-1");
  myLink.classList.toggle("close");

  const arrow = document.querySelector(".list-items div span img");
  console.log(arrow);
  arrow.classList.toggle("rotate");
};
const handleMenuOPen2 = function () {
  const myLink = document.querySelector("#link-2");
  myLink.classList.toggle("close");

  const arrow2 = document.querySelector(".list-items1 div span img");
  arrow2.classList.toggle("rotate");
};
const handleMenuOPen3 = function () {
  const myLink = document.querySelector("#link-3");
  myLink.classList.toggle("close");

  const arrow3 = document.querySelector(".list-items2 div span img");
  arrow3.classList.toggle("rotate");
};



const handleMobileMenu = () => {
    menu.style.display = "block";
    menu_open.style.display = 'none';
    menu_close.style.display = "block";

};

const handleMobileMenuClose = () => {
    menu.style.display = "none";
    menu_close.style.display = "none";
    menu_open.style.display = "block";

};