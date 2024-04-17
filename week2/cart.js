window.onload = function () {
  // 로컬 스토리지에서 장바구니 데이터 가져오기
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // 장바구니 테이블의 tbody 가져오기
  const tbody = document.querySelector("#cartTable tbody");

  // 장바구니 데이터를 테이블에 추가
  cartItems.forEach((item) => {
    // 새로운 행(tr) 요소 생성
    const row = document.createElement("tr");

    // 체크박스 열(td) 생성
    const checkboxCell = document.createElement("td");
    checkboxCell.classList.add("checkbox");
    checkboxCell.innerHTML = '<input type="checkbox" >';
    row.appendChild(checkboxCell);

    // 상품 이미지 열(td) 생성
    const imgCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = item.imgSrc;
    img.alt = item.alt;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    // 상품 정보 열(td) 생성
    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    // 상품 가격 열(td) 생성
    const priceCell = document.createElement("td");
    priceCell.textContent = item.price.toLocaleString();
    row.appendChild(priceCell);

    // 상품 카테고리 열(td) 생성
    const categoryCell = document.createElement("td");
    categoryCell.textContent = item.category;
    row.appendChild(categoryCell);

    // 삭제 버튼 열(td) 생성
    const deleteCell = document.createElement("td");
    deleteCell.innerHTML = `
        <button class="deleteBtn">삭제</button>
      `;
    row.appendChild(deleteCell);

    const deleteBtn = deleteCell.querySelector(".deleteBtn");

    deleteBtn.addEventListener("click", () => {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      const updatedCart = cartItems.filter(
        (cartItem) => cartItem.id !== item.id
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      row.remove();
    });

    // 테이블에 행 추가
    tbody.appendChild(row);
  });
};

const buyBtn = document.querySelector(".buyBtn");

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

  cartItems.forEach((item) => {
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
  totalPriceDiv.innerText = `총 금액 : ${totalPrice}`;

  itemListDiv.appendChild(itemUl);
}

//홈으로 가는 버튼
function goHome() {
  window.location.href = "index.html";
}

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

function finalBuyBtnClick() {
  alert("주문 완료");
  localStorage.removeItem("cart");

  // 주문완료 후 장바구니 비우기
  const tbody = document.querySelector("#cartTable tbody");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }


  const modalDiv = document.querySelector(".modalDiv");
  modalDiv.style.display = "none";
}
