function createCard(product) {
  return `
    <div class="card">
      <img src="${product.image}" alt="${product.name}">
      <div class="card-body">
        <h3>${product.name}</h3>
        <p class="description">${product.description || ''}</p>
        <p>Белки: ${product.proteins}</p>
        <p>Жиры: ${product.fats}</p>
        <p>Углеводы: ${product.carbs}</p>
        <p>Ккал: ${product.calories}</p>
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
