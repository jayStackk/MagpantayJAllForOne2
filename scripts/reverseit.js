let numOne = document.getElementById('numOne');
let newWord = document.getElementById('newWord');
let submitbtn1 = document.getElementById('submitbtn1');
let submitbtn2 = document.getElementById('submitbtn2');
let result = document.getElementById('result');
let result2 = document.getElementById('result2');

submitbtn.addEventListener('click',function(){
    if(parseInt(numOne.value)){
        getData();
    }else{
        result.textContent="Enter in a whole number!";
    }
    
});


function getData(){
    fetch(`https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh7/int/${num.value}`)
    .then(response => response.text())
    .then(data => {
        result.textContent =data;
    });
}

submitbtn2.addEventListener('click',function(e){
            getData1();
});


function getData1(){
    fetch(`https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh7/string/${word.value}`)
    .then(response => response.text())
    .then(data => {
        result2.textContent =data;
    });
}