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
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);  
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
let buttons  = document.querySelector('.buttons')
let screen = document.querySelector('.screen');
let text = document.createElement('div');
text.classList.add('text');
screen.appendChild(text);
let displayed;
let button = document.querySelectorAll('.button');
button.forEach(function (item){
item.addEventListener('click', function ()
{  
    if(item.innerText==="AC")
    {
        text.innerText = "";
        firstNum = 0;
        secondNum = 0;
        operator = " ";
    }
    if((item.innerText==="."))
    {
        if(!(text.textContent.includes(".")))
        text.innerText= text.innerText + item.textContent; 
    }
    if((item.innerText==="C"))
    {
      //  console.log("kundi")
      text.innerText = text.innerText.substring(0,text.innerText.length-1);
      console.log(text.innerText)
      return;
    }
    if((!firstNum)&&(!(item.innerText==="."))) //
    {
        if(!((item.innerText==="+/-")||(item.innerText==="%")||(item.innerText==="/")||(item.innerText==="X")||(item.innerText==="-")||(item.innerText==="+")||(item.innerText==="=")||(item.innerText==="AC")))
        {
       // console.log("fuck")
        text.innerText= text.innerText+ item.textContent;       
        }
        else
        {
            if(((item.innerText==="+/-")||(item.innerText==="%")||(item.innerText==="/")||(item.innerText==="X")||(item.innerText==="-")||(item.innerText==="+")))
            {
              //  console.log("mansi")
                firstNum = parseFloat(text.innerText);
                operator = item.innerText;
                text.innerText = " ";
            }
            else if(item.innerText==="=")
            {
            }
            else if(item.innerText!=="AC")
            {       
            
                text.innerText= text.innerText + item.textContent;   
                secondNum = parseFloat(text.innerText);
            }
        }
    } 
    else if(!secondNum)
    {   
        if(((item.innerText==="+/-")||(item.innerText==="%")||(item.innerText==="/")||(item.innerText==="X")||(item.innerText==="-")||(item.innerText==="+")))
            {         
                     
                    firstNum = parseFloat(text.innerText);
                    operator = item.innerText;
                    text.innerText = " ";
            }
            else if(item.innerText==="0"||item.innerText==="00") 
            {
                 
                

                text.innerText = 0;
                secondNum = parseFloat(text.innerText); 
            }
        else if(!(item.innerText==="="))//
        {
            if(parseInt(firstNum)&&operator)
            {         
              //  console.log("kundi")
            text.innerText=" ";               
           text.innerText= text.innerText + item.textContent;   
            secondNum = parseFloat(text.innerText); //
            text.innerText=" "; 
            }           
        }    
       
    }
    if((item.innerText==="="))
    {
        if((secondNum===0)&&(operator==="/"))
        {
            text.innerText = "Error";
        }
        if(parseInt(firstNum)&&parseInt(secondNum))
        {
        text.innerText = operate(operator,firstNum,secondNum);
        firstNum=  text.innerText;
        secondNum=0;
        }
    }
    if(parseInt(firstNum)&&parseInt(secondNum))
    {
        if(((item.innerText==="+/-")||(item.innerText==="%")||(item.innerText==="/")||(item.innerText==="X")||(item.innerText==="-")||(item.innerText==="+")))
            {        
                    text.innerText = operate(operator,firstNum,secondNum);
                    firstNum = text.innerText;
                    secondNum=0;
                    operator=item.innerText;    
            }
      else
      {       
        if(!(text.textContent.includes(".")))
        {
         text.innerText= text.innerText + item.innerText ;    
         return;
        }
        if(item.textContent.includes(".")&&(!result))
        {               
            text.innerText= text.innerText  + " " ; 
        }
         if(text.textContent.includes(".")&&(item.textContent!=="."))
        {
            text.innerText= text.innerText + item.innerText ; 
            secondNum = parseFloat(text.textContent)
        }   
      }     
    }
    else{
        firstNum = parseFloat(firstNum);
    }
   
})
});     

document.addEventListener('keydown', function (e)
{
    let keyy = document.querySelector(`button[data-key] = "${e.keyCode}"]`);
    if(!keyy)
    {
        return;
    }
    else
    keyy.click();
});