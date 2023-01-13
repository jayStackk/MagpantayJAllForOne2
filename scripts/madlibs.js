
let adj1 = document.getElementById('adj1'); 
let noun1 = document.getElementById('noun1');
let verb1 = document.getElementById('verb1');
let nounPlural = document.getElementById('nounPlural');
let noun2 = document.getElementById('noun2');
let place = document.getElementById('place');
let verb2 = document.getElementById('verb2');
let vehicle = document.getElementById('vehicle');
let adj2 = document.getElementById('adj2');
let noun3 = document.getElementById('noun3');
let submitbtn = document.getElementById('submitbtn');
let result = document.getElementById('result');



submitbtn.addEventListener('click', function(){

    let newModel = {
        fname: "John",
        adj1: adj1.value,
        noun1: noun1.value,
        verb1: verb1.value,
        nounPlural: nounPlural.value,
        noun2: noun2.value,
        place: place.value,
        verb2: verb2.value,
        vehicle: vehicle.value,
        adj2: adj2.value,
        noun3: noun3.value
    };
    newMethod2(newModel);
});


function newMethod2(Model)
{


    fetch(`https://magpantayjallforoneapi.azurewebsites.net/MiniChallenge/MiniCh5/${Model.fname}/${Model.adj1}/${Model.noun1}/${Model.verb1}/${Model.nounPlural}/${Model.noun2}/${Model.place}/${Model.verb2}/${Model.vehicle}/${Model.adj2}/${Model.noun3}`)
    .then(response => response.text())
    .then(data => result.textContent = data);

    console.log(data)

    
}