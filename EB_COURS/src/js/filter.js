const list = document.querySelector(".list");
const items = document.querySelectorAll(".catalog-catalog__item");
const listItems = document.querySelectorAll(".list__item");
function filter() {
  list.addEventListener("click", (event) => {
    const targetId = event.target.dataset.id;
    const target = event.target;

    if (target.classList.contains("list__item")) {
      listItems.forEach((listItem) => listItem.classList.remove("active"));
      target.classList.add("active");
    }

    switch (targetId) {
      case "all":
        showAllItems();
        break;
      case "fiction":
      case "non-fiction":
      case "child":
      case "business":
      case "images":
      case "games":
      case "stationery":
        filterItems(targetId);
        break;
    }
  });
}

function showAllItems() {
  items.forEach((item) => {
    item.style.display = "block";
  });
}

function filterItems(className) {
  const itemsArray = Array.from(items); // Преобразуем NodeList в массив
  itemsArray.forEach((item) => {
    if (item.classList.contains(className)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

filter();


// поиск по товарам
const inputSearch = document.querySelector(".search");
inputSearch.addEventListener("input", search);

function search() {
  const input = inputSearch.value.toLowerCase();
  const products = document.querySelectorAll(".catalog-catalog__item");

  products.forEach((product) => {
    const searchTitle = product.querySelector(".prodTitle").textContent.toLowerCase();
    const searchFirm = product.querySelector(".firm").textContent.toLowerCase();

    if (searchTitle.includes(input) || searchFirm.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
