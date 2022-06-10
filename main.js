const userInput = document.getElementById("userInput");
let expression = '';

function press_E(num){
    userInput.value = expression + "E";
    expression +=num;
}

function press_Pi(num){
    userInput.value = expression + "π";
    expression +=num;
}

function press(num){
    expression +=num;
    userInput.value = expression;
}

function equal(){
    userInput.value = eval(expression);
    expression ='';
}

function eras(){
    expression='';
    userInput.value=expression;
}