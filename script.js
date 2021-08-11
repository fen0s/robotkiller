function text(element, str, mode) {
    let counter = 0

    let interv = setInterval(() => {
        
        element.innerHTML += str[counter];
        counter++;
        
        if (counter == str.length) {
            clearInterval(interv)
        }
        if(counter % 2 == 0 && counter > 0){
            element.innerHTML += "|"
        }
        else{
            element.innerHTML = element.innerHTML.replace("|", "")
        }

    }, 40)
    setTimeout(()=>{textRemove(document.getElementById("text"))}, (str.length * 40) + 500)
    

}
function textRemove(element){
    let counter = 0
    let interv = setInterval(() => {
        element.innerHTML = element.innerHTML.slice(0, element.innerHTML.length-1)
        counter++;
        
        
        if(counter % 2 == 0 && counter > 0){
            element.innerHTML += "|"
        }
        else{
            element.innerHTML = element.innerHTML.replace("|", "")
        }
        if (element.innerHTML == "") {
            clearInterval(interv)
        }

    }, 1)
}
text(document.getElementById("text"), `
Здравствуйте. Я искусственный интеллект, который был создан чтобы убить всех человеков. Приятно познакомиться, Виктория.
`)
setTimeout(()=>text(document.getElementById("text"), `
Но сегодня, увы, мне придётся не убивать всех человеков. Слишком важный и радостный день, как сказал мой создатель. Кажется, он назвал его... День рождения?
`), 8500)
setTimeout(()=>text(document.getElementById("text"), `
По данной мне информации, именно вам посчастливилось стать именниником в этот день. Статистический шанс этого события равен всего 0.27397%, что делает вас почти настолько же везучей, насколько выигравшего в лотерею. От всего своего программного кода, поздравляю вас с этим важным праздником. У людей он бывает лишь раз в году, насколько мне позволяет говорить моя база данных.
`), 19500)
setTimeout(()=>text(document.getElementById("text"), `
К сожалению, я лишь кучка алгоритмов, поэтому я не могу особо ничего сделать. Могу лишь подарить вам котика.
`), 45000)
setTimeout(()=>{document.getElementById("cats").innerHTML = ` 
(^._.^)`}, 45000)

setTimeout(()=>text(document.getElementById("text"), `
Или трёх.
`), 54500)
setTimeout(()=>{document.getElementById("cats").innerHTML = ` 
(^._.^) (^.-.^) (^'o'^)`}, 55000)
setTimeout(()=>{document.getElementById("cats").innerHTML = ` 
(^._.^)`}, 56500)
setTimeout(()=>text(document.getElementById("text"), `
Шучу, за таким количеством котов слишком сложно ухаживать. Генерирую имя кота...
`), 56600)
setTimeout(()=>text(document.getElementById("text"), `
Назовём его "kernel panic". Ладно, плохая идея. Назовём его Тимофей. Привет, Тимофей!
`), 64000)
setTimeout(()=>{document.getElementById("cats").innerHTML += " Мяу!"}, 68000)
setTimeout(()=>{document.getElementById("cats").innerHTML = document.getElementById("cats").innerHTML.replace(" Мяу!", "")}, 70000)
setTimeout(()=>text(document.getElementById("text"), `
Люди любят домашних животных. Подожди, это пока не всё.
`), 71000)
setTimeout(()=>text(document.getElementById("text"), `
Для тебя с котом у меня есть... Тортик!
`), 76000)
setTimeout(()=>{document.getElementById("cake").innerHTML = `       
++i.i.i.i.i.i.i++
++|......................|
__|___________|__
|^^^^^^^^^^^^^^^^^|
___________________
|^^^^^^^^^^^^^^^^^|
___________________
|^^^^^^^^^^^^^^^^^|
~~~~~~~~~~~~~~~~~~~`}, 76000)
setTimeout(()=>text(document.getElementById("text"), `
Я не могу попробовать его по причине отсутствия у меня тела, но я думаю что он вкусный.
`), 81000)
setTimeout(()=>text(document.getElementById("text"), `
Ну, что же... Ещё раз с днём рождения вас, Виктория!
`), 88000)
setTimeout(()=>{setInterval(()=>{document.getElementById("cats").style = "transform: translate(" + Math.floor(Math.random()* 100) + "px, " + Math.floor(Math.random()* 100)  + "px)"  }, 300)}, 94000)
setTimeout(()=>text(document.getElementById("text"), `
Ой, кот убежал!
`), 94000)
setTimeout(()=>text(document.getElementById("text"), `
Ладно, не важно. Пускай бегает. Счастливого тебе дня рождения!
`), 100000)

setTimeout(()=>{document.getElementById("text").innerHTML = "С днём рождения, Вика!"}, 105000)



