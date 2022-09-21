const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employees = [];

function addTeamMember(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:'What is your team members name'
        },
        {
            type:'checkbox',
            name:'role',
            message: 'What is this team members role?',
            choices:['Intern','Engineer','Manager']
        },
        {
            type:'input',
            name:'id',
            message:'What is this team members ID?'
        },
        {
            type:'input',
            name:'email',
            message:'What is this team members email address?'
        }
])
.then(function({name,role,id,email}){
    var roleInfo = '';
    if(role === 'Engineer'){
        roleInfo = 'Github username';
    }else if(role === 'Intern'){
        roleInfo = 'school name';
    }else{
        roleInfo = 'office number';
    }
    inquirer.prompt([
        {
            type:'input',
            name:'roleInfo',
            message:`What is your team members ${roleInfo}`
        },
        {
            name: 'addMoreMembers',
            type:'checkbox',
            choices:['yes','no'],
            message:'Would you like to add more members?'
        }
    ])
    .then(function({roleInfo,addMoreMembers}){
        var teamMember;
        if(role === 'Engineer'){
            teamMember = new Engineer(name,id,email,roleInfo);
        }else if(role === Intern){
            teamMember = new Intern(name,id,email,roleInfo);
        }else{
            teamMember = new Manager(name,id,email,roleInfo);
        }
        employees.push(teamMember);
    })
})
}

function createHtml(){
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="stylesheet" href = "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <title>Team Member Generator</title>
</head>
<body>
    <header>
        <nav class="navbar">

        </nav>
    </header>
    
</body>
</html>`
}
addTeamMember();