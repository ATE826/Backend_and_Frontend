const heading = document.getElementById('main-heading')

heading.addEventListener('click', () => {
    alert('Вы кликнули на заголовок - так держать');
});

const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')
const ten = document.getElementById('10')
const eleven = document.getElementById('11')
const twelve = document.getElementById('12')
const thirteen = document.getElementById('13')
const fourteen = document.getElementById('14')
const fifteen = document.getElementById('15')
const sixteen = document.getElementById('16')

const button = document.getElementById('changeTable');

button.addEventListener('click', () => {
    one.textContent = 'Базовое бэкенд-приложение';
    two.textContent = 'HTTP-запросы';
    three.textContent = 'JSON и работа с ним';
    four.textContent = 'HTTP-ответы';
    five.textContent = 'Проектирование API';
    six.textContent = 'Роутинг и его настройка';
    seven.textContent = 'NoSQL базы данных';
    eight.textContent = 'Обеспечение авторизации и доступа пользователей';
    nine.textContent = 'Работа сторонних сервисов уведомления и авторизации';
    ten.textContent = 'Основы ReactJS';
    eleven.textContent = 'Работа с компонентами динамической DOM';
    twelve.textContent = 'Использование хуков в React';
    thirteen.textContent = 'Основы микросервисной архитектуры';
    fourteen.textContent = 'Разработка классических модулей веб-приложений';
    fifteen.textContent = 'Разработка классических модулей веб-приложений';
    sixteen.textContent = 'Курсовая работа';
});