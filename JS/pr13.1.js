const avatar = document.getElementById('myAvatar');

avatar.addEventListener('mouseover', () => {
    avatar.style.width = '250px'; // Увеличиваем на 10%
    avatar.style.height = 'auto'; // Сохраняем пропорции
});

avatar.addEventListener('mouseout', () => {
    avatar.style.width = '200px'; // Возвращаем исходный размер
    avatar.style.height = 'auto'; // Сохраняем пропорции
});

const text = document.getElementById('Text');

avatar.addEventListener('click', ()=>{
    avatar.src = 'https://cdn1.tenchat.ru/static/vbc-gostinder/user-picture/200e6eda-6c38-4bff-99d4-e20d4f78fe30.jpeg';
    text.textContent = 'Мой любимый преподаватель.';
});

avatar.addEventListener('dblclick', ()=>{alert('Не налегай, у меня не так много любимых преподавателей.')});