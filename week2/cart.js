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

function buyBtnClick() {
    
}

function goHome() {
  window.location.href = "index.html";
}
