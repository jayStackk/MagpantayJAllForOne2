let namebtn =  document.getElementById('namebtn');
let lastbtn = document.getElementById('lastbtn');

let slackbtn = document.getElementById('slackbtn');

let emailbtn = document.getElementById('emailbtn');

// let hobbiesbtn = document.getElementById('hobbiesbtn');

let result = document.getElementById('result');

let nameInput = document.getElementById('nameInput');

let directory8firstNameURL = `https://magpantayjallforoneapi.azurewebsites.net/StudentDirectory/GetStudentByFirstName/firstName`;
let directory8lastNameURL = `https://magpantayjallforoneapi.azurewebsites.net/StudentDirectory/GetStudentByFirstName/lastName`;
let directory8slackNameURL = `https://magpantayjallforoneapi.azurewebsites.net/StudentDirectory/GetStudentByFirstName/slackName`;
let directory8emailURL = `https://magpantayjallforoneapi.azurewebsites.net/StudentDirectory/GetStudentByFirstName/email`;


namebtn.addEventListener('click', function(){
    let StudentListModel = {
        firstName: nameInput.value
    };
    newMethod(directory8firstNameURL, StudentListModel);
});


lastbtn.addEventListener('click',function(){
    let StudentListModel = {
        lastName: nameInput.value
    }
    newMethod(directory8lastNameURL, StudentListModel);
});
emailbtn.addEventListener('click',function(){
    let StudentListModel ={
        email: nameInput.value
    };
    newMethod(directory8emailURL, StudentListModel);
});


slackbtn.addEventListener('click',function(){
    let StudentListModel ={
        slackName: nameInput.value
    }
    newMethod(directory8slackNameURL, StudentListModel);
});





function newMethod(URL, Model)
{
    fetch(`https://magpantayjallforoneapi.azurewebsites.net/StudentDirectory/GetStudentByFirstName/firstName`)
    .then(response => response.json())
    .then(data => result.innerHTML = `First Name: ${data.firstName} </br> Last Name: ${data.lastName} </br> Slack Name: ${data.slackName} </br> Email: ${data.email}`);
    console.log(URL, Model)

}