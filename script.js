function createCard(product) {
  return `
    <div class="card">
      <img src="${product.image}" alt="${product.name}">
      <div class="card-body">
        <h3>${product.name}</h3>
        <div class="nutrients">
          <div class="nutrient protein">Белки: ${product.proteins}</div>
          <div class="nutrient fat">Жиры: ${product.fats}</div>
          <div class="nutrient carbs">Углеводы: ${product.carbs}</div>
        </div>
        <div class="calories">Калории: ${product.calories}</div>
      </div>
    </div>
  `;
}

function renderProducts(products, category = "Все") {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  const filtered = category === "Все" ? products : products.filter(p => p.category === category);
  filtered.forEach(product => {
    container.innerHTML += createCard(product);
  });
}

function populateCategories(products) {
  const select = document.getElementById("categorySelect");
  const categories = ["Все", ...new Set(products.map(p => p.category))];
  categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });

  select.addEventListener("change", () => {
    renderProducts(products, select.value);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateCategories(products);
  renderProducts(products);
});
