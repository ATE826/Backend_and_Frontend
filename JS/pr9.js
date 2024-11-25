console.log("Введите имя: ");
let _name = prompt();
console.log("Введите Ваш возраст: ");
let _age = prompt();
alert("Здравствейте, " + _name + ". Ваш возраст: " + _age);

if(_name >= 18){
    console.log("Вы совершеннолетний");
}
else{
    console.log("Вы несовершеннолетний");
}

const randNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log("Введите число от 1 до 10: ");
let _num = prompt();

if(_num == randNum){
    console.log("Поздравляем! Вы угадали число.");
}
else{
    console.log("Вы не угадали число.");

    if(_num < 5){
        console.log("Ваше число меньше 5.");       
    }
    else{
        console.log("Ваше число больше либо равно 5.");
    }
}

console.log("Введите пароль: ");
let firstPass = prompt();
console.log("Повторно введите пароль: ");
let secPass = prompt();
if (firstPass != "" || secPass != ""){
    if (firstPass == secPass){
        console.log("Доступ разрешён.");
    }
    else{
        console.log("Доступ запрещён.");
    }
}
else{
    console.log("Первый или второй пароль пустые!");
}

console.log("Введите первое число: ");
let a = prompt();
console.log("Введите знак операции: ");
let s = prompt();

if (s == "+"){
    console.log("Введите второе число: ");
    let b = prompt();
    let res = a + b;
    console.log(res);
}
else if (s == "-"){
    console.log("Введите второе число: ");
    let b = prompt();
    let res = a - b;
    console.log(res);
}
else if (s == "/"){
    console.log("Введите второе число: ");
    let b = prompt();
    if (b == 0){
        console.log("Деление на 0 невозможно.")
    }
    else{
        let res = a / b;
        console.log(res);
    }   
}
else if (s == "*"){
    console.log("Введите второе число: ");
    let b = prompt();
    let res = a * b;
    console.log(res);
}
else{
    console.log("Неизвестная операция.")
}

