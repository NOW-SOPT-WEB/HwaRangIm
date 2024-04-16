const SHOPPING_LIST = [
    {
      id: 1,
      imgSrc: "assets/aieulbag.png",
      alt: "아이엘가방",
      name: "aieul 가방",
      price: 259000,
      category: "clothes",
    },
    {
      id: 2,
      imgSrc: "assets/aieulpants.png",
      alt: "아이엘바지",
      name: "aieul 바지",
      price: 218000,
      category: "clothes",
    },
    {
      id: 3,
      imgSrc: "assets/belt.png",
      alt: "벨트",
      name: "헬스 벨트",
      price: 69000,
      category: "health",
    },
    {
      id: 4,
      imgSrc: "assets/bottle.png",
      alt: "물병",
      name: "쉐이크 물통",
      price: 19000,
      category: "health",
    },
    {
      id: 5,
      imgSrc: "assets/elbowpads.png",
      alt: "팔꿈치보호대",
      name: "팔꿈치 스트랩",
      price: 25000,
      category: "health",
    },
    {
      id: 6,
      imgSrc: "assets/kneepads.png",
      alt: "무릎보호대",
      name: "무릎 스트랩",
      price: 21000,
      category: "health",
    },
    {
      id: 7,
      imgSrc: "assets/minkimho1.png",
      alt: "반팔셔츠",
      name: "반팔셔츠",
      price: 169000,
      category: "clothes",
    },
    {
      id: 8,
      imgSrc: "assets/minkimho2.png",
      alt: "블레이저",
      name: "블레이저 자켓",
      price: 430000,
      category: "clothes",
    },
    {
      id: 9,
      imgSrc: "assets/sleeveless.png",
      alt: "슬리브리스",
      name: "슬리브리스",
      price: 9000,
      category: "health",
    },
    {
      id: 10,
      imgSrc: "assets/desk.png",
      alt: "책상",
      name: "모션데스크",
      price: 688000,
      category: "coding",
    },
    {
      id: 11,
      imgSrc: "assets/mouse.png",
      alt: "마우스",
      name: "마우스",
      price: 76000,
      category: "coding",
    },
    {
      id: 12,
      imgSrc: "assets/magicpad.png",
      alt: "매직패드",
      name: "애플 매직 패드",
      price: 139000,
      category: "coding",
    },
  ];

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
            if (confirm("장바구니에 추가하시겠습니까?")) {
              addToCart(product);
            }
          });
  
      section.appendChild(productElement);
    });
  }
  
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
  