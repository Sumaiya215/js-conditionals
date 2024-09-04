let myScore =80;
let friendScore =65;
if(myScore>=80){
    if(friendScore>=80){
        console.log('Go for a lunch');
    }
    else if(friendScore>=60 && friendScore<80){
        console.log('Next time good luck');
    }
    else if(friendScore>=40 && friendScore<60){
        console.log('friend message unseen');
    }
    else{
        console.log('Block Your Friend');
    }
}
else{
    console.log('Go to home and sleep and act sad');
}