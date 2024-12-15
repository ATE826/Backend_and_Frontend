document.addEventListener('DOMContentLoaded', () => {
    const text = document.getElementById('heading1');
    const paragraph = document.getElementById('Text');

    text.addEventListener('mouseover', () => {
        text.style.cssText = 'font-size: 38pt !important;';
    });
    text.addEventListener('mouseout', () => {
        text.style.cssText = 'font-size: 24pt !important;';
    });

    paragraph.addEventListener('click', () => {
        paragraph.style.color = '#cd0048';
        paragraph.style.textShadow = '0 0 1px #ffc6c6, 0 0 10px #cd0048';
    });
    
    paragraph.addEventListener('dblclick', () => {
        paragraph.style.color = '#22c4c4';
        paragraph.style.textShadow = '0 0 0 #FFF';

    });

    const ava = document.getElementById('myAvatar');
    ava.addEventListener('mouseover', () => {
        let rotation = 0;

        // Функция для вращения
        intervalId = setInterval(() => {
            rotation += 45;
            ava.style.transform = `rotate(${rotation}deg)`;
        }, 10) // Каждую секунду
    });
    ava.addEventListener('mouseout', () => {
        clearInterval(intervalId);  // Останавливаем вращение
        ava.style.transform = `rotate(0deg)`;
    });
});
