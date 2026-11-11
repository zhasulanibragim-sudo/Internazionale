document.addEventListener("DOMContentLoaded", () => {
    // 1. Логика для формы бронирования билетов (tickets.html)
    const ticketForm = document.querySelector("form");
    if (ticketForm) {
        ticketForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Предотвращаем стандартную отправку формы
            
            const match = document.getElementById("matchSelect").value;
            const name = document.getElementById("nameInput").value;
            const count = document.getElementById("ticketCount").value;

            if (name.trim() === "") {
                alert("Пожалуйста, введите ваше Имя и Фамилию.");
                return;
            }

            alert(`Грацие, ${name}! Вы успешно забронировали ${count} билет(ов) на матч:
${match}.

FORZA INTER!`);
            ticketForm.reset();
        });
    }

    // 2. Логика для магазина (store.html)
    const storeButtons = document.querySelectorAll(".card .btn-inter");
    let cartCount = 0;

    storeButtons.forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            const productName = button.parentElement.querySelector(".card-title").innerText;
            alert(`"${productName}" добавлен в корзину!
Всего товаров в корзине: ${cartCount}`);
        });
    });
});