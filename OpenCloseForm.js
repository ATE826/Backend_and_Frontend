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
