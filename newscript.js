'Use strict';

globalThis["title"] = "Заголовок";

alert(title);

{
    globalThis["in_title"] = "Глобальная переменная внутри блока)))"
}

if (alert(in_title) == true) console.log("Вау, глобальная переменная вызвалась и вне блока!")

function factorial(a)
{
    let i = 1;
    let res;
    var PromRes = 1;

    for (i; i <= a; i++) 
    {

        PromRes *= i;

        let PromResLet = PromRes;
    }

    //console.log(PromResLet); //error, так как let видна только внутри блока for в данном случае

    res = PromRes;
    return res;
}

let x = "24";

console.log("тип функции  факториал - ", typeof factorial(4));
console.log("тип переменной х - ", typeof x);

if(x == (factorial(4))) console.log("Ура, == работает со строкой и числом!");

if(x === factorial(4)) console.log("Хм, === сработало со строкой и числом..."); else console.log("Фух, === сработало верно - для строки и числа результат false");


console.log("Давайте теперь поработаем с массивом!");

let massive = [1,2,3,4,5,6,7,8,9];

function nechet()
{
    for (let i in massive) 
    {
        if((massive[i] % 2) == 0) massive[i] += 1;
        console.log(massive[i]);
    }
}

nechet();

console.log("Нечетные числа");

chet = (massive) => 
{
    for (let i in massive) 
    {
        if((massive[i] % 2) !== 0) massive[i] += 1;
        console.log(massive[i]);
    }
}

chet(massive);

console.log("Четные числа");

let min = Math.min(1,5,0,10);
console.log("Минимальное число в массиве: ", min);


let [a, b, c, ...z] = [1, 2, 3, 26];

console.log("Номер последней буквы в английском алфавите z = ", z);


console.log("А попробуем удалить глобальные переменные?");

delete(title);
delete(in_title);

//alert(title); error, так как после удаления переменной нет, что выводить на вспывающем окне-то...
//alert(in_title); error, так как после удаления переменной нет, что выводить на вспывающем окне-то...(даже если удалить глобальную переменную вне блока кода, где она была инициализирована)







