document.addEventListener('DOMContentLoaded', () => {
    const lectures = document.getElementById('lecturesTable');
    const button = document.getElementById('showLectures');

    button.addEventListener('click', () => {
        // Сначала меняем display на block
        lectures.style.display = 'block';
        
        // Добавляем небольшую задержку, чтобы display успел быть обработан браузером
        setTimeout(() => {
            lectures.classList.add('visible'); // Добавляем класс для анимации
        }, 10); // Задержка, чтобы transition сработал

        button.style.display = 'none'; // Скрываем кнопку
    });
});
