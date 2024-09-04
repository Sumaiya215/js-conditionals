var age = 12;
var ticketPrice = 800;
if(age<10){
    console.log('Free');
}
else if(age>= 15 && age<=30){
    var discount = ticketPrice*50/100;
    var discountPrice = ticketPrice - discount;
    console.log('50% discount price:',discountPrice);
}
else if(age>=60){
    var discount = ticketPrice*15/100;
    var discountPrice = ticketPrice - discount;
    console.log('15% discount price:',discountPrice);
}
else{
    console.log('Regular ticket price:',ticketPrice);
}