let hamburgerMenuList = document.querySelector(".hamburger-menu-items");
let totalItems = document.querySelector(".totalItems");
let totalItems2 = document.querySelector(".amount");
let totalProducts = document.querySelector(".totalProducts");
let cartWrapper = document.querySelector(".cartWrapper");

// INICIO: Comportamiento del Menu Hamburguesa
const openMenu = () => {
  hamburgerMenuList.classList.toggle("remove");
};
// FIN: Comportamiento del Menu Hamburguesa

// INICIO: Comportamiento de los Productos
let products = []

const setCount = () => {
  let totalCount = 0;
  for (const i in products) {
    totalCount += products[i].count;
  }

  totalItems.innerText = totalCount.toString();
  totalItems2.innerText = totalCount.toString();
  return totalCount;
};

const totalPrice = () => {
  let totalCart = 0;
  for (const i in products) {
    totalCart += products[i].price * products[i].count;
  }
  totalProducts.innerHTML = totalCart.toString();
  return totalCart;
};

const productsList = () => {
  cartWrapper.innerHTML = products.map((product) => {
    return `
            <div class="cart-items">
                <div class="product">
                    <p>
                        <span class="product-name">${product.product}</span>
                        x
                        <span class="product-amount">${product.count}</span>
                        : $
                        <span class="product-price">${product.price}</span>
                    </p>
                    <button class="buttonRemove"><i class="far fa-times-circle"></i></button>
                </div>
            </div>
        `;
  });
};

const addStorage = () => {
  localStorage.setItem("productos", JSON.stringify(products))
}

const loadStorage = () => {
  if (localStorage.getItem("productos")) {
    let productos = JSON.parse(localStorage.getItem("productos"))
    console.log(productos);
    products.push(...productos)
    setCount()
    totalPrice()
    console.log(products);
    cartWrapper.innerHTML = products.map((product => {
      return `
        <div class="cart-items">
          <div class="product">
            <p>
              <span class="product-name">${product.product}</span>
              x
              <span class="product-amount">${product.count}</span>
              : $
              <span class="product-price">${product.price}</span>
            </p>
            <button class="buttonRemove"><i class="far fa-times-circle"></i></button>
          </div>
        </div>
      `
    }))
  }
}


const addProduct = (product, price, count) => {
  for (const i in products) {
    if (products[i].product === product) {
      products[i].count++;
      setCount();
      totalPrice();
      productsList();
      addStorage();
      return;
    }
  }

  products.push({ product, price, count });
  setCount();
  totalPrice();
  productsList();
  addStorage();
};

loadStorage()
