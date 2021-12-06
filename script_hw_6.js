{ 
    let element = document.createElement("p");

    element.innerHTML = "НИКОГДА ТАКОГО НЕ БЫЛО, И ВОТ ОПЯТЬ...";
    let sect_1 = document.getElementById("sect_1");
    sect_1.appendChild(element);        //добавляем в конец сект_1


    let udal = document.createElement("p");

    udal.innerHTML = "для удаления";
    sect_2.appendChild(udal);
    sect_2.removeChild(udal);


    for (let i = 0; i < document.body.childNodes.length; i++)
    {
        console.log("%d: %s", i, document.body.childNodes[i]);
        alert(document.body.childNodes[i].attributes);
    }


    console.log ("ну че, народ, погнали, *****");

    console.log(document.body.lastElementChild);
    console.log(document.lastChild);

    console.log(document.getElementById("sect_1").previousElementSibling);

    let picha = document.createElement("img");
    picha.src = "durak.jpg";
    let pic = document.getElementsByTagName("p");
    let roditel = pic.parentNode;
    roditel.insertBefore(picha, pic.nextSibling);

    let sel_p = document.querySelectorAll("p");
    console.log(sel_p);


    let a_side = document.getElementsByTagName("aside");
    a_side.classList.replace('cls_2', 'cls_1');


    window.addEventListener('scroll',(event) => 
    {
        console.log('ХЫХЫ, прокрутка');
    });


    let listen = function(event) 
    {
        print("А что это ты такое кушаешь???? А, это же контент, созданный для этой странички!!!"); //не побоюсь использовать принт, ибо все рвно удаляю событие :)
    }
    document.body.addEventListener('click', listen, false); 
    document.body.removeEventListener('click', listen, false); //добавили и сразу делитнули

    let tabl = document.querySelector('ul');
    let audio = new Audio("victory.mp3");

    tabl.addEventListener("click", func, false);

    function func()
    {
        audio.play();
    }


    function modifyText() 
    {
        var li = document.getElementsByTagName("li");
        li.nodeValue = "!!!!!";
    }

    tabl.addEventListener("click", modifyText, false);

}