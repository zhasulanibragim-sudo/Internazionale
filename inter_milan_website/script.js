document.addEventListener('DOMContentLoaded', function () {
    // Массив товаров
    const products = [
        { id: 1, name: "Домашняя форма 23/24", category: "kits", price: 95.00, desc: "Классические черно-синие полосы." },
        { id: 2, name: "Гостевая форма 23/24", category: "kits", price: 95.00, desc: "Белая джерси с диагональной полосой." },
        { id: 3, name: "Шарф Inter Fan", category: "accessories", price: 25.00, desc: "Теплый шарф для матчей на Сан-Сиро." }
    ];

    const productContainer = document.getElementById('productContainer');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');

    // Функция отрисовки товаров
    function displayProducts(items) {
        productContainer.innerHTML = '';
        
        if (items.length === 0) {
            productContainer.innerHTML = `
                <div class="col-12 text-center text-muted py-4">
                    <p class="fs-5">По вашему запросу ничего не найдено</p>
                </div>`;
            return;
        }

        items.forEach(product => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col-md-4 mb-4';
            
            colDiv.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <div class="card-body text-center d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.desc}</p>
                        <p class="fw-bold mt-auto text-inter-blue">€ ${product.price.toFixed(2)}</p>
                        <button class="btn btn-inter mt-2 add-to-cart" data-id="${product.id}">В корзину</button>
                    </div>
                </div>
            `;
            productContainer.appendChild(colDiv);
        });

        initCartButtons();
    }

    // Функция фильтрации
    function filterProducts() {
        const searchText = searchInput.value.toLowerCase().trim();
        const selectedCategory = categoryFilter.value;

        const filtered = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchText) || 
                                  product.desc.toLowerCase().includes(searchText);
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            
            return matchesSearch && matchesCategory;
        });

        displayProducts(filtered);
    }

    // Обработка кнопки "В корзину"
    function initCartButtons() {
        const buttons = document.querySelectorAll('.add-to-cart');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = e.target.getAttribute('data-id');
                const product = products.find(p => p.id == productId);
                alert(`Товар "${product.name}" добавлен в корзину!`);
            });
        });
    }

    if (searchInput && categoryFilter) {
        searchInput.addEventListener('input', filterProducts);
        categoryFilter.addEventListener('change', filterProducts);
    }

    displayProducts(products);
});