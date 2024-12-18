
function submitForm(){
    const formData = new FormData();
    
    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let phone = document.getElementById("Phone").value;
    let country = document.getElementById("Country").value;
    let date = document.getElementById("Date").value;
    let comment = document.getElementById("Comment").value;

    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Phone", phone);
    formData.append("Country", country);
    formData.append("Date", date);
    formData.append("Comment", comment);

    for (pair of formData.entries()){
        console.log(`${pair[0]}: ${pair[1]}`);
    }
}

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
document.addEventListener("DOMContentLoaded", () => {
    function sentForm(){
        const formBg = document.getElementById('myForm');
        const btn = document.getElementById('submitBtn');
        const mod = document.getElementById('modal');

        // Предотвращаем стандартную отправку формы
        btn.addEventListener('click', (event) => {
            event.preventDefault();

            // Сначала вызываем alert с задержкой
            setTimeout(() => {
                alert('Заявка отправлена!');

                // Закрытие формы после того, как пользователь закроет alert
                mod.style.display = "none";  // Прячем форму
            }, 300);  // Задержка в 300 мс

            // Меняем фон сразу после клика
            formBg.style.backgroundColor = "#000";
        });

        // Теперь отображаем блок с текстом
        document.getElementById("Text").style.display = "block";
    }

    // Вызов функции, чтобы привязать обработчик событий
    sentForm();
});



// Закрываем модальное окно при клике вне его области
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
// Уведомление об отправке

