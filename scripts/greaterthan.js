let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let submitbtn = document.getElementById('submitbtn');
let result = document.getElementById('result');


submitbtn.addEventListener('click', function(){
    if(parseInt(num1.value) && (parseInt(num2.value))){
        getData(num1, num2);
    }else{
        result.textContent="Enter in a whole number!";
    }
    
});


function getData(num1, num2){
    fetch(`https://magpantayjallforoneapi.azurewebsites.net/MiniChallenge/MiniCh4/${num1.value}/${num2.value}`)
    .then(response => response.text())
    .then(data => {
        result.innerHTML = data;

        console.log(data)
    });
}