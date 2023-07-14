// stabilire come la calcolatrice dovrrà eseguire le operazioni

//l'utente seleziona il primo operatore  cliccando i numeri che compongono (evento = segnale che da il browser)
let operator1 = 0
let operation
let operator2 = 0
const display = document.querySelector("#display")

window.onload = function() {
    const numberButtons = document.querySelectorAll("button:not(.operation)")
    
    for(const button of numberButtons){
        button.addEventListener("click", function(event){
            console.log(event.target.innerText)
            if(operation){
                operator2 += event.target.innerText
                operator2 = parseInt(operator2)
                display.innerHTML = operator2 
            } else {
            operator1 += event.target.innerText
            operator1 = parseInt(operator1)
            display.innerHTML = operator1
            }
        })
    }
// l'utente seleziona l'operatore (+ - * /)
    const operationButtons = document.querySelectorAll("button.operation")
    for (const button of operationButtons){
        button.addEventListener("click", function(event) {
            let result;
            if(event.target.innerText === "="){
                switch(operation){
                    case "+":
                        result = operator1 + operator2
                        break
                    case "-":
                        result = operator1 - operator2 
                        break
                    case "*":
                        result = operator1 * operator2 
                        break
                    case "/":
                        result = operator1 / operator2 
                        break
                    default:
                        alert("EEE MACARENA")
                        break
                } 

                display.innerHTML = result
                operator1 = result
                operator2 = 0
                operation = "";



            } else if(event.target.innerText === "C"){  //reset
                operator1 = 0
                operation = undefined
                operator2 = 0
                display.innerHTML = 0
                
            } else {
                operation = event.target.innerText
            }
        })
    }


    // console.log(numberButton)
}

function log(){
    console.table({
        operator1, operation, operator2
    })
}

// aggiungere un'altra operazione DA FARE PER CASA