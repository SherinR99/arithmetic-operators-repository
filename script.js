let num1
let num2

function getNumbers(){
    num1 = Number(document.getElementById("number1").value)
    num2 = Number(document.getElementById("number2").value)
}

function addition(){ 
    getNumbers()
    let answer = num1 + num2
    document.getElementById("result").innerHTML ="Answer is : " + answer
}

function subtraction(){ 
    getNumbers()
    let answer = num1 - num2
    document.getElementById("result").innerHTML ="Answer is : " + answer
}

function divition(){ 
    getNumbers()
    let answer = num1 / num2
    document.getElementById("result").innerHTML ="Answer is : " + answer
}

function multiplication(){ 
    getNumbers()
    let answer = num1 * num2
    document.getElementById("result").innerHTML ="Answer is : " + answer
}