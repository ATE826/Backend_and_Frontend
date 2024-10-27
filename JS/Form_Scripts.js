// Проверка валидации формы
function validateForm() {
    const form = document.getElementById("myForm");
    const inputs = form.querySelectorAll("input[required], select[required], textarea[required]");
    const checkbox = form.querySelector("input[type='checkbox']");
    let valid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            valid = false;
        }
    });

    if (!checkbox.checked) {
        valid = false;
    }

    document.getElementById("submitBtn").disabled = !valid;
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");
    form.addEventListener("input", validateForm);
    form.addEventListener("change", validateForm);
    validateForm(); // Initial validation
});

// Открытие/закрытие формы
function openForm_1(){
    const form = document.getElementById("modal");
    const text = document.getElementById("serviceName");
    console.log(text);
    text.innerText = "Сайт-визитка";
    form.style.display = 'block';
}
function openForm_2(){
    const form = document.getElementById("modal");
    const text = document.getElementById("serviceName");
    text.innerText = "Корпоративный сайт";
    form.style.display = 'block';
}
function openForm_3(){
    const form = document.getElementById("modal");
    const text = document.getElementById("serviceName");
    text.innerText = "Интерент-магазин";
    form.style.display = 'block';
}
function closeForm(){
    document.getElementById("modal").style.display = "none";
}
function sentForm(){
    document.getElementById("Text").style.display = "block";
}

// Закрываем модальное окно при клике вне его области
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
// Уведомление об отправке
document.getElementById('submitBtn').addEventListener('click', () => alert('Заявка отправлена!'));
