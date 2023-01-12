let numOne = document.getElementById('numOne');
let newWord = document.getElementById('newWord');
let submitbtn1 = document.getElementById('submitbtn1');
let submitbtn2 = document.getElementById('submitbtn2');
let result = document.getElementById('result');
let result2 = document.getElementById('result2');

submitbtn.addEventListener('click',function(){
    if(parseInt(numOne.value)){
        getData(numOne, newWord);
    }else{
        result.textContent="Enter in a whole number!";
    }
    
});


function getData(){
    fetch(`https://magpantayjallforoneapi.azurewebsites.net/MiniChallenge/MiniCh7/${numOne.value}`)
    .then(response => response.text())
    .then(data => {
        result.textContent =data;
    });
}

submitbtn2.addEventListener('click',function(e){
            getData1(numOne, newWord);
});


function getData1(){
    fetch(`https://magpantayjallforoneapi.azurewebsites.net/MiniChallenge/MiniCh7/${newWord.value}`)
    .then(response => response.text())
    .then(data => {
        result2.textContent = data;
    });
}