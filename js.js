//Создать кнопку button 1, которая будет запускать функцию, при которой элементу div с классом element 
//будет задаваться ширина и высота (размеры произвольные)


//вариант1

let but1 = document.querySelector("#button1")
let div1 = document.querySelector(".element1")

but1.onclick = function(){
  div1.classList.add('app')
}


//вариант1
let but2 = document.querySelector("#button2")

but2.onclick = function(){
  let height = document.getElementById("h").value;
  let width = document.getElementById("w").value;
  let div2 = document.querySelector(".element2")
  height=+height
  width=+width

  div2.style.cssText = `height : ${height}px;width : ${width}px; background-color : red`
}


//Добавить 3 дополнительных класса и написать функцию при нажатии на кнопку 
//эти 3 класса будут присваиваться к 1 элементу (элемент произвольный)

let but3 = document.querySelector("#button3")
let text = document.getElementById("foradd")

but3.onclick= function(){
    text.classList.add('class1', 'class2', 'class3')
}



//Написать функцию, которая при клике по кнопке будет удалять любой из 3 классов, что были присвоены во 2 задаче

function del() {
  let cl = document.getElementById("del").value;
  console.log(cl)
  document.getElementById("foradd").classList.remove(cl)
}

