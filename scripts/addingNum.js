let userNum1 = document.getElementById("userNum1");
let userNum2 = document.getElementById("userNum2");
let enterbtn = document.getElementById("enterbtn");
let result = document.getElementById("result");


// submitbtn.addEventListener('click',function(e){
//     if(parseInt(num1.value) && (parseInt(num2.value))){
//         getData();
//     }else{
//         result.textContent= "Enter in a whole number!";
//     }
    
// });


enterbtn.addEventListener('click', function(){
    if(parseInt(userNum1.value) && (parseInt(userNum2.value))){
                getData(userNum1.value, userNum2.value);
            }else{
                result.textContent= "Has to be a number!";
            }
            
        });

// function urlCall(url){
//     fetch(url).then(
//     response => response.text()
//     ).then(
//         data => 
//         {
//             helloReturn.textContent = data
//             console.log(data)
//         }
//     )
// }

// function helloApi(nameInput){
//     var letters = /^[A-Za-z]+$/;
//     if(nameInput.value.match(letters)){
//         savedInput = nameInput.value;
//         sayHelloUrl = "https://scottsallforone.azurewebsites.net/AllForOne/miniCh1/" + savedInput
//         urlCall(sayHelloUrl)
//     }else{
//         helloReturn.textContent = "Enter a valid response";
//     }
// }


function getData(num1, num2){
    fetch(`https://magpantayjallforoneapi.azurewebsites.net/MiniChallenge/MiniCh2/${num1}/${num2}`)
    .then(response => response.text())
    .then(data => {
        result.textContent = data;
        console.log(data)
        
    })
}