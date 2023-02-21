// for navbar
let ham = document.getElementById('ham');
let nav = document.getElementById('navbar');
let close = document.getElementById('close')

ham.addEventListener('click',() => {
        nav.classList.add('active');
})

close.addEventListener('click',() => {
    nav.classList.remove('active');
})




function getbmi(w,h){
let hunit= document.getElementById('selecth');
let wtunit= document.getElementById('selectw');

let hunitis= hunit.options[hunit.selectedIndex].text;
let wtunitis= wtunit.options[wtunit.selectedIndex].text;

if(hunitis==='feet') {
    h=h*30.48;
}
if(wtunitis === 'pounds'){
    w=w*0.453592;
}

return w / (h*h);
}

	
// BMI Categories:
// Underweight = <18.5
// Normal weight = 18.5–24.9
// Overweight = 25–29.9
// Obesity = BMI of 30 or greater

function calculateBmi(){
    let h= document.getElementById("height").value;
    let w= document.getElementById("weight").value;
    
    let result = document.getElementById('ans');
    let bmi = 10000* getbmi(w,h);

    let status = document.getElementById('status');

    result.innerText=bmi.toPrecision(3);
    

    if(bmi<= 18.5) {
        status.innerText = "You are Underweight !";
    }else if(bmi<=24.9) status.innerText = "You have Normal Weight";
    else if(bmi<=29.9) status.innerText = "You are Overweight !";
    else if(bmi>=30)status.innerText = "You have Obesity !!";
    else status.innerText = "Fill the fields correctly";

    
}

