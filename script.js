// grab all equation buttons
const equationBtns =  document.querySelectorAll(".equation-btn");

//grab start button
const start = document.getElementById('Start');

let symArr = [];


for(let i = 0 ; i < equationBtns.length; i++){
    equationBtns[i].addEventListener('click', () =>{

        if(equationBtns[i].classList.contains("active")){
            equationBtns[i].classList.remove('active')
            symArr.splice(equationBtns[i], 1);
            console.log(symArr)
        }

        else{
             equationBtns[i].classList.add("active")
            symArr.push(equationBtns[i])
           
            console.log(symArr)
        }

        
       
        console.log(symArr)
    })
}

