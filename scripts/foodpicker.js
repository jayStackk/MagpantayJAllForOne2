let fastbtn = document.getElementById('fastbtn');

let dinebtn = document.getElementById('dinebtn');

let orderbtn = document.getElementById('orderbtn');

let result = document.getElementById('result');



fastbtn.addEventListener('click',function(){
    {  
         fastBtn(); 
    }


});


dinebtn.addEventListener('click',function(){
    {  
         dineIn(); 
    }


});


orderbtn.addEventListener('click',function(){
    {  
         orderIn(); 
    }


});







function fastBtn(){
    fetch(`https://magpantayjallforoneapi.azurewebsites.net/MiniChallenge/MiniCh9/fastfood`)
    .then(response => response.text())
    .then(data => {
        result.textContent =data;

        console.log(fastBtn)
    });
}
function dineIn(){
    fetch(`https://magpantayjallforoneapi.azurewebsites.net/MiniChallenge/MiniCh9/dinein`)
    .then(response => response.text())
    .then(data => {
        result.textContent =data;
        console.log(dineIn)
    });
}
function orderIn(){
    fetch(`https://magpantayjallforoneapi.azurewebsites.net/MiniChallenge/MiniCh9/delivery`)
    .then(response => response.text())
    .then(data => {
        result.textContent =data;

        console.log(orderIn)
    });
}