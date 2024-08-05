

//Создать произвольную кнопку. Создать массив произвольный больше 10 элементов и при нажатии на кнопку возвращать 5 элемент этого массива с выводом на странице

let m =['до','1', 'ре','2','ми','3','фа','4','соль','5','ля','6','си','7']
let but1 = document.querySelector("#button1")
let but2 = document.querySelector("#button2")

but1.onclick = function(){
  but2.innerHTML= m[4]
}

//Создать еще одну кнопку и массив из которого нужно вывести все четные числа (для перебора используйте массив)

let numbers =['1','18', '34','11','268','353','9','89','45','54','7','6612','100','756']
let evenArray= [];
let oddArray = [];

let but3 = document.querySelector("#button3")
let but4 = document.querySelector("#button4")
let even = document.getElementById("even")
let odd = document.getElementById("odd")

but3.onclick = function(){
  for(let i=0; i<= numbers.length; i++){
    if (i%2==0){
      evenArray.push(i)
    }
  }
  even.innerHTML = evenArray
}


//Аналогично 2 задаче, только уже наоборот вывести все нечетные числа

but4.onclick = function(){
  for(let i=0; i<= numbers.length; i++){
    if (i%2!=0){
      oddArray.push(i)
    }
  }
  odd.innerHTML = oddArray
}


//Создать двумерный массив, создать кнопку, чтобы по клику вывести все элементы вложенного массива в обратном порядке

let arrayDtwo = [
  [1, 2, 5],
  [7, 10, 78],
  [16, 72,9]
];

console.log(arrayDtwo)

function reverse(){
  let mr = document.querySelector("#reverse");
  let newarray =[]

  for (let i = arrayDtwo.length-1; i >= 0; i-- ){
    console.log(i)
    for (let y = arrayDtwo[i].length-1; y >= 0; y-- ){
      console.log(y)
      newarray.push(arrayDtwo[i][y])
      console.log(arrayDtwo[i][y])
    }
  }
  mr.innerHTML = newarray;
    
}