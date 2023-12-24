// let calculator = document.querySelector('.calculator');
// let buttons = document.createElement('div');
// buttons.classList.add('buttons');
// calculator.appendChild(buttons);

function add(a,b)
{
    return a + b;
}
function multiply(a,b)
{
    return a*b;
}
function divison(a,b)
{
    return a/b;
}
function sub(a,b)
{
    return a-b;
}
let firstNum,secondNum,operator;
let result;
function operate(operator,firstNum,secondNum)
{   
    switch (operator) 
    {
        case "+":     result=add(firstNum,secondNum)      
                        break;
        case "/":     result =divison(firstNum,secondNum)      
                        break;
        case "X":     result =multiply(firstNum,secondNum)      
                        break;
        case "-":     result = sub(firstNum,secondNum)      
                        break;
    }
    return result;
}

let screen = document.querySelector('.screen');
let text = document.createElement('div');
text.classList.add('text');
screen.appendChild(text);
let displayed;
let button = document.querySelectorAll('.button');
button.forEach(function (item){
item.addEventListener('click', function ()
{
    if(!firstNum)
    {
    if(!((item.innerText==="+/-")||(item.innerText==="%")||(item.innerText==="/")||(item.innerText==="X")||(item.innerText==="-")||(item.innerText==="+")))
    {
        text.innerText= text.innerText + item.textContent;   
        firstNum = parseInt(text.innerText);
        console.log(firstNum)      
    }
    }
    else
    {
        if(((item.innerText==="+/-")||(item.innerText==="%")||(item.innerText==="/")||(item.innerText==="X")||(item.innerText==="-")||(item.innerText==="+")))
            {
                    console.log(item.innerText)
                    operator = item.innerText;
                    text.innerText = " ";
            }
        else
        {
            text.innerText= text.innerText + item.textContent;   
            secondNum = parseInt(text.innerText);
            console.log(secondNum) 

        }
    }
    if(item.innerText==="=")
    {
        text.innerText = operate(operator,firstNum,secondNum);
    }
     
})
});              