// grab all equation buttons
const equationBtns = document.querySelectorAll(".equation-btn");

//grab start button
const start = document.getElementById('Start');

//grab integer value containers 
const int1 = document.getElementById("int1")
const int2 = document.getElementById("int2")
const sym = document.getElementById("symbol")

let symArr = [];

function equbuttons(arr) {

    for (let i = 0; i < equationBtns.length; i++) {
        equationBtns[i].addEventListener('click', () => {

            if (!equationBtns[i].classList.contains("active")) {
                equationBtns[i].classList.add("active")
                arr.push(equationBtns[i])
            } else {
                for (let j = 0; j <= arr.length; j++) {
                    if (arr[j] == equationBtns[i]) {
                        equationBtns[i].classList.remove("active")
                        arr.splice(j, 1);
                    };
                };
            };
        });
    };

    return arr
}
const buttonSelect = equbuttons(symArr);

function startGame(arr) {
    start.addEventListener("click", () => {
      
        let numberOne = int1.innerHTML = Math.floor(Math.random() * 13);
        let numberTwo = int2.innerHTML = Math.floor(Math.random() * 13);
        let equationSymb;
        let checkEs; 

        if (symArr.length > 0) {
            equationSymb = arr[Math.floor(Math.random() * symArr.length)];
            sym.innerHTML = equationSymb.innerHTML;
           
        } else {

             sym.innerHTML = "";

            alert("Choose a symbol");
        }


       let answer =  checkAnswer(numberOne, numberTwo, equationSymb);
       console.log(answer);
    })
}

startGame(buttonSelect);


function checkAnswer(num1, num2, es){

    switch(es.id){
        case "times":
            return num1 * num2 ;
            break;
        case "divide":
            return num1 / num2 ;
            break;
        case "addition":
            return num1 + num2 ;
            break;
        case "minus":
            return num1 - num2;
    }; 


}


