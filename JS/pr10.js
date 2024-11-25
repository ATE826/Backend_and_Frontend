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

for (let i = 1; i < 11; i++){
    console.log(i)
}

let i = 10;
while(i > 0){
    console.log(i);
    i--;
}

const lectures = [];
const practices = [];

lectures.push("Фронтэнд");
lectures.unshift("Обман");
practices.push("СПО");
practices.push("Индустриалка");

lectures.forEach(element => {
    console.log(element);
});
practices.forEach(element => {
    console.log(element);
});


function FindO(lectures){
    let c = [];
    lectures.forEach(element => {
        if (lectures[element][0] == "О"){
            c.push(lectures[element]);
        }
    });

    c.forEach(element => {
        console.log(c[element]);
    });
}