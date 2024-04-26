import { MESSAGES } from "./js/messages.js";

function createLogoElement() {
  return `
    <a href="index.html">
      <i class="fa-solid fa-shop"></i>
    </a>
    <h2>장바구니 페이지</h2>
      <button id="hamburgerBtn">
        <i class="fa-solid fa-bars"></i>
      </button>
  `;
}

const logoHTML = createLogoElement();
const header = document.querySelector("header");
header.innerHTML += logoHTML;

function renderCartItems() {
  // 로컬 스토리지에서 장바구니 데이터 가져오기
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // 장바구니 테이블의 tbody 가져오기
  const tbody = document.querySelector("#cartTable tbody");
  tbody.innerHTML = "";

  // 장바구니 데이터를 테이블에 추가
  cartItems.forEach((item) => {
    // 새로운 행(tr) 요소 생성
    const row = `
      <tr>
        <td class="checkbox"><input type="checkbox" ${
          item.isChecked ? "checked" : ""
        }></td>
        <td><img src="${item.imgSrc}" alt="${item.alt}"></td>
        <td>${item.name}</td>
        <td>${item.price.toLocaleString()}</td>
        <td>${item.category}</td>
        <td><button class="deleteBtn">삭제</button></td>
      </tr>
    `;

    tbody.innerHTML += row;

    const deleteBtns = document.querySelectorAll(".deleteBtn");
    deleteBtns.forEach((deleteBtn, i) => {
      deleteBtn.addEventListener("click", () =>
        handleDeleteButtonClick(i, cartItems)
      );
    });
  });
}

window.onload = function () {
  renderCartItems();
};

function handleDeleteButtonClick(index, cartItems) {
  const updatedCart = cartItems.filter((item, i) => i !== index);
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  renderCartItems();
}

const buyBtn = document.querySelector(".buyBtn");
buyBtn.addEventListener("click", buyBtnClick);

// 장바구니 페이지 구매하기 버튼
function buyBtnClick() {
  //구매하기 버튼 비활성화를 통해 중복 제거
  buyBtn.disabled = true;

  const modalDiv = document.querySelector(".modalDiv");
  modalDiv.style.display = "block";

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const itemListDiv = document.querySelector(".itemListDiv");
  const itemUl = document.querySelector(".itemUl");

  //총 가격을 계산하기 위한 변수
  let totalPrice = 0;

  const selectedItems = cartItems.filter((item) => item.isChecked);

  selectedItems.forEach((item) => {
    const itemLi = document.createElement("li");
    itemLi.classList.add("itemLi");

    // 상품 이미지 생성
    const img = document.createElement("img");
    img.src = item.imgSrc;
    img.alt = item.alt;
    itemLi.appendChild(img);

    // 상품 정보 열(td) 생성
    const name = document.createElement("div");
    name.textContent = item.name;
    itemLi.appendChild(name);

    // 상품 가격 열(td) 생성
    const price = document.createElement("div");
    totalPrice += parseInt(item.price);
    price.textContent = item.price.toLocaleString();
    itemLi.appendChild(price);

    itemUl.appendChild(itemLi);
  });

  //총 가격 값 추가
  const totalPriceDiv = document.querySelector(".totalPrice");
  totalPriceDiv.innerText = `총 금액 : ${totalPrice.toLocaleString()}`;

  itemListDiv.appendChild(itemUl);
}

const goHomeBtn = document.querySelector(".homeBtn");
goHomeBtn.addEventListener("click", goHome);
//홈으로 가는 버튼
function goHome() {
  window.location.href = "index.html";
}

const modalCloseBtn = document.querySelector(".closeBtn");
modalCloseBtn.addEventListener("click", modalClose);
//모달을 닫는 버튼
function modalClose() {
  const modalDiv = document.querySelector(".modalDiv");
  modalDiv.style.display = "none";

  //모달이 닫히면 구매할 아이템들도 삭제되어야 함
  const itemUl = document.querySelector(".itemUl");
  while (itemUl.firstChild) {
    itemUl.removeChild(itemUl.firstChild);
  }

  //구매하기 버튼 활성화
  buyBtn.disabled = false;
}

const finalCheckBuyBtn = document.querySelector(".finalCheckBuyBtn");
finalCheckBuyBtn.addEventListener("click", finalBuyBtnClick);

//모달 내 최종 주문 버튼
function finalBuyBtnClick() {
  alert(MESSAGES.ORDER_COMPLETE_MESSAGE);
  // 장바구니 데이터 가져오기
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  //구매하지 않은 상품들 (체크되지 않은 상품)
  let notCheckedCartItems = cartItems.filter(
    (item) => item.isChecked === false || item.isChecked === undefined
  );
  localStorage.setItem("cart", JSON.stringify(notCheckedCartItems));
  renderCartItems();

  const modalDiv = document.querySelector(".modalDiv");
  modalDiv.style.display = "none";
}

//전체 체크박스
const mainCheckbox = document.querySelector("#tableHead .checkbox input");
mainCheckbox.addEventListener("change", () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.forEach((item) => {
    item.isChecked = mainCheckbox.checked;
  });
  localStorage.setItem("cart", JSON.stringify(cartItems));

  // 모든 체크박스의 상태를 전체 체크박스의 상태로 업데이트합니다.
  const tbodyCheckboxes = document.querySelectorAll(".checkbox input");
  tbodyCheckboxes.forEach((checkbox) => {
    checkbox.checked = mainCheckbox.checked;
  });
});
