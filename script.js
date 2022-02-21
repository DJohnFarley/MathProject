// grab all equation buttons
const equationBtns =  document.querySelectorAll(".equation-btn");

//grab start button
const start = document.getElementById('Start');

//grab integer value containers 
const int1 = document.getElementById("int1")
const int2 = document.getElementById("int2")
const sym = document.getElementById("symbol")




let symArr = [];

function equbuttons(arr){

    for(let i = 0 ; i < equationBtns.length; i++){
        equationBtns[i].addEventListener('click', () =>{
    
            if(equationBtns[i].classList.contains("active")){
                equationBtns[i].classList.remove('active')
                arr.splice(equationBtns[i], 1);
                
            }
    
            else{
                 equationBtns[i].classList.add("active")
                arr.push(equationBtns[i])
            }; 
        });
    };
    return arr
}

equbuttons(symArr);

 function startGame(arr){

    start.addEventListener("click", () => {

        console.log(symArr)
        let numberOne = int1.innerHTML = Math.floor(Math.random() * 13)
        let numberTwo =  int2.innerHTML = Math.floor(Math.random() * 13)

       if (symArr.length > 0 ){
        const equationSymb =  sym.innerHTML = arr[Math.floor(Math.random() * symArr.length)].innerHTML;
       }
       else{
        const equationSymb =  sym.innerHTML = ""
        alert("Choose a symbol")
       }
             
              
        
    })
 }


 startGame(symArr);


