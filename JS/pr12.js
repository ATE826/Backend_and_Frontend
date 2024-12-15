

function showMessage(text){
    console.log(text);
}

function changeBackgroundColor(color1, color2){
    document.body.style.backgroundColor = color1;
    document.body.style.color = color2;
}

function toggleVisibility(selector) {
    const paragraph = document.querySelector(selector);
    if (paragraph.style.display !== 'none') {
        paragraph.style.display = 'none';
    } else {
        paragraph.style.display = 'block';
    }
}

function UpdateH1WithUTM() {
    // Получение параметров из URL
    const url = new URLSearchParams(window.location.search);

    // Извлекаем значение utm_term
    const utmTerm = url.get('utm_term');
    console.log('utmTerm:', utmTerm); // Проверка того, что параметр получен

    const H1Element = document.getElementById('main-heading');
    console.log('H1 Element:', H1Element); // Проверка наличия элемента

    // Если параметр utm_term присутствует, заменяем текст H1
    if (utmTerm) {
      H1Element.textContent = utmTerm;
    } else {
      console.log('Параметр utm_term не найден');
    }
}

function logCurrentTime(){
    const currentDate = new Date();
    const hh = currentDate.getHours();
    const mm = currentDate.getMinutes();
    const ss  =currentDate.getSeconds()
    const time = currentDate.getTime();
    console.log(`${hh}:${mm}:${ss}`);
}

function resetBackground(){
    document.body.style.backgroundColor = '#FFF';
}

window.addEventListener('load', function() {
    const performanceData = window.performance.getEntriesByType("navigation")[0];
    const pageLoadTime = performanceData.loadEventEnd - performanceData.startTime;
    console.log(`Время до полной загрузки страницы: ${pageLoadTime} миллисекунд`);
});


// Используем событие DOMContentLoaded для гарантированной загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
    resetBackground();
    UpdateH1WithUTM();
    changeBackgroundColor('#E6E6FA', '#000');
    logCurrentTime();
    this.addEventListener();
});