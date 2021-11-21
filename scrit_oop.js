'use strict';

class letters
{
    constructor (a, b, c, e, f, t, u)
    {
        this.a = a;
        this.b = b;
        this.c = c;
        this.e = e;
        this.f = f;
        this.t = t;
        this.u = u;
    }

}

let word = new letters('y', 'o', 'u', 'c', 'u', 't', 'e');

console.log("У word есть свойства, например word.a = %s, word.t = %s и так далее", word.a, word.t);

let bukvi = 
{
        x: "x",
        y: "y",
        z: "z",
}

console.log("sss", bukvi, bukvi.y);

let coordinate = Object.create(bukvi);

coordinate.x = 0; coordinate.y = 0; coordinate.z = 0;

console.log("Начало координат: ", coordinate.x, coordinate.y, coordinate.z);



if(Object.getPrototypeOf(coordinate) === bukvi) console.log ("Получение прототипа работает");

class slogi
{   
    constrictor(slog)
    {
        slog = aa;
    }
}

Object.setPrototypeOf(slogi, letters);


console.log("Взятие назначенного прототипа у слогов:", Object.getPrototypeOf(slogi));


class colors
{
    constructor(yellow, blue)
    {
        this.yellow = yellow;
        this.blue = blue;
    }
}

class green extends colors
{
    constructor(green)
    {
        super(green, green);
    }
}

let trava = new green('temmiy-green');
console.log("Я не знаю, что придумать, пусть будет так, трава - ", trava);

let options = {one:1};
console.log("options = ", options);
console.log("Свойство one в начале: ", options.one);

Object.defineProperty(options, 'enum', {enumerable: false, value: 'nevidimoe'});
Object.defineProperty(options, 'udalenie', {configurable: false, value: 'ne udalish)))'});
Object.defineProperty(options, 'izm', {set: function(value) {this.one = 'one'}});

console.log("Ну го посмотрим options.enum = ", options.enum);

console.log("Перечислим свойства:", Object.keys(options));

//options.udalenie = 'udal';

console.log("options.udalenie = ", options.udalenie);

options.izm = "enyaemoe";

console.log("Свойство oneв конце: ", options.one);

//print(letters.one);

String.prototype.alert = function ()
{
    alert(this);
}

let str = "stroka";

str.alert();


class dop
{

    constructor(zero, chislo)
    {
        this._zero = zero;
        this.chislo = chislo;
    }


    #maxInt = 65535;

get(value)
    {console.log("ыыыы", this.#maxInt); }
}



let test = new dop(5, 9); //уже не zero

console.log(test.chislo);
console.log(test.zero);
console.log(test._zero);

test.chislo = 2;
test.zero = 4;


console.log(test.chislo);
console.log(test.zero);
console.log(test._zero);

test._zero = 1;

console.log(test.chislo);
console.log(test.zero);
console.log(test._zero);


//test.#maxInt = 0;

let message = 
{
    try()
    {
        alert(this._zero);
    }
}

Object.assign(dop.prototype, message);

new dop(8, 7).try();

console.log("Используем приватку, онли для фанов, так сказатб");
test.get(8);
console.log("Ура, получилось!");


















