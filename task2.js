
var weight = 50;
const foot = 12;
var inch = (5*12)+3;
var inches = inch;
var height =inches*0.0254;
var heightSquare =height*height;
let BMI = weight/heightSquare;
console.log('BMI:',BMI.toFixed(1));

if(BMI<18.5){
    console.log("You are underweight");
}
else if(BMI>=18.5 && BMI<=24.9)
{
    console.log("You are normal");
}
else if(BMI>=25 && BMI<=29.9){
    console.log("you are overweight");
}
else{
    console.log("you are obese");
}