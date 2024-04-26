import { SHOPPING_LIST } from "./js/constants.js";
import { MESSAGES } from "./js/messages.js";

window.onload = function () {
  displayProducts(SHOPPING_LIST);
};

function displayProducts(products) {
  const section = document.getElementById("all");
  section.innerHTML = "";
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
          <img src="${product.imgSrc}" alt="${product.alt}" />
          <i class="fa-solid fa-heart"></i>
          <p>${product.name}</p>
          <p>${product.price.toLocaleString()}</p>
        `;

    productElement.addEventListener("click", function () {
      if (confirm(MESSAGES.ADD_CART_MESSAGE)) {
        addToCart(product);
      }
      return;
    });

    section.appendChild(productElement);
  });
}

const navBtn = document.querySelectorAll(".nav-main li button");
navBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filterProducts(e.target.getAttribute("class"));
  });
});

function filterProducts(category) {
  const filteredProducts = SHOPPING_LIST.filter(
    (product) => product.category === category || category === "all"
  );
  displayProducts(filteredProducts);
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
}

const toggleBtns = document.querySelectorAll(".toggleBtn");
toggleBtns.forEach((btn) => {
  btn.addEventListener("click", toggleMenu);
});
function toggleMenu() {
  const menu = document.getElementById("menu");

  // 현재 메뉴의 위치 확인
  const menuRight = parseInt(getComputedStyle(menu).right);
  if (menuRight < 0) {
    // 메뉴가 숨겨져 있을 때
    menu.style.right = "0";
  } else {
    // 메뉴가 보여져 있을 때
    menu.style.right = "-15rem";
  }
}

const hamburgerMenuUl = document.querySelector(".hamburgerMenuUl");
const menuItems = [
  { text: "관심 상품 목록", link: "#" },
  { text: "관리자 페이지", link: "#" },
  { text: "장바구니", link: "cart.html" },
];

menuItems.forEach((item) => {
  hamburgerMenuUl.innerHTML += `
    <li><a href="${item.link}">${item.text}</a></li>
  `;
});
