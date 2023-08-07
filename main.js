const display= document.querySelector(".display");
const buttons= document.querySelectorAll("button");
const operand_btns = document.querySelectorAll("button[data-type=operand]");
const operator_btns = document.querySelectorAll("button[data-type=operator]");
const specialChar =["%","/","+","*","-","="];
let output="";
let negativeNumber=false;
function calculate(btnValue){ 
    if(btnValue==="=" && output !==""){
        output =eval(output.replace('%','/100'));
    }else if(btnValue==="+/-"){
      output =eval(output);
      output*=-1;
    }else if(btnValue==="AC"){
        output="";
    }else{
        if(output==="" && specialChar.includes(btnValue)) return;
        output+=btnValue;
    }
    
    display.value=output;
    
  }
buttons.forEach((button) =>{
    button.addEventListener('click',(e) => calculate(e.target.dataset.value));
})