function countdown(num){
 let counter = num;

 let timer = setInterval(function(){
  counter--;
  if(counter===0){
    console.log("DONE!");
    clearInterval(timer);
  }else {
    console.log(counter);
  }
 }, 1000);
}

function randomGame(){
  let counter = 0;
  let random = function(){
    let randNum = Math.floor(Math.random()*100)/100;
//    console.log(randNum);
  
    if(randNum > .75){
      console.log(`It took ${counter} tries`);
      clearInterval(ID);
    }

    counter++;
  }
  let ID = setInterval(random, 1000);
}

