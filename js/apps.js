//* incrementBtn
let incrementBtn= document.querySelector(`.increment`);

let output= document.querySelector(`.output`)

function incrementNum(){
    let newValue= Number(output.value);
    newValue= newValue+1;
    output.value= newValue

}


incrementBtn.addEventListener(`click`,incrementNum);



//* decrementBtn
let decrementBtn= document.querySelector(`.decrement`);


function decrementNum(){
 let newValue= Number(output.value)

 if(newValue== 0){
    return false
}
   newValue= newValue -1;
   output.value= newValue

}



decrementBtn.addEventListener(`click`, decrementNum)

//* rangeSlider
let slider = document.querySelector(".slider");
let result= document.querySelector(`.rangeSlider .output h2 span`)

function updatePrice(){
let newValue= slider.value;
  result.innerHTML = newValue 
}



slider.addEventListener(`input`, updatePrice)

















0