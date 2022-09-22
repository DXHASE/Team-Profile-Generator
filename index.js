const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employees = [];

function runFunctions(){
    createHtml();
    addTeamMember();
}


function addTeamMember(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:'What is your team members name'
        },
        {
            type:'list',
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
    var roleInfo = " ";
    if(role === "Engineer"){
        roleInfo = "Github username";
    }else if(role === "Intern"){
        roleInfo = "school name";
    }else{
        roleInfo = "office number";
    }
    inquirer.prompt([
        {
            type:'input',
            name:'roleInfo',
            message:`What is your team members ${roleInfo}`
        },
        {
            name: 'addMoreMembers',
            type:'list',
            choices:['yes','no'],
            message:'Would you like to add more members?'
        }
    ])
    .then(function({roleInfo,addMoreMembers}){
        var teamMember;
        if (role === "Engineer"){
            teamMember = new Engineer(name,id,email,roleInfo);
        }else if (role === "Intern"){
            teamMember = new Intern(name,id,email,roleInfo);
        }else{
            teamMember = new Manager(name,id,email,roleInfo);
        }
        employees.push(teamMember);
        newHtml(teamMember)
        .then(function(){
            if(addMoreMembers === 'yes'){
                addTeamMember();
            }else{
                endHtml();
            }
        });
    });
});
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
        <header class="hero is-info">
            <h1 class= "title is-1 hero-body-padding-small">My Team</h1>
        </header>
        <section class= "columns">
            <div class= "column is-one-third">`;

fs.writeFile('./dist/index.html',html,function(err){
        if(err){
            console.log(err);
        }
    });
}

function newHtml(teamMember){
    return new Promise(function(resolve,reject){
        const name = teamMember.getName();
        const role = teamMember.getRole();
        const id = teamMember.getId();
        const email = teamMember.getEmail();
        var html = " ";
        if(role === "Engineer"){
            const github = teamMember.getGithub();
            html = `
            <div class = "card">
                <h3 class="card-header title is-4">${name}<h3>
                <ul>
                    <li>ID:${id}<li>
                    <li>Email: ${email}<li>
                    <li>Github: ${github}<li>
                <ul>
            </div>
            `;
        }else if(role === "Intern"){
            const school = teamMember.getSchool();
            html = `
            <div class = "card">
                <h3 class="card-header title is-4">${name}<h3>
                <ul>
                    <li>ID:${id}<li>
                    <li>Email: ${email}<li>
                    <li>School Name: ${school}<li>
                <ul>
            </div>
            `;
        }else{
            const officeNumber = teamMember.getOfficeNumber();
            html =  `
            <div class = "card">
                <h3 class="card-header title is-4">${name}<h3>
                <ul>
                    <li>ID:${id}<li>
                    <li>Email: ${email}<li>
                    <li>Office Number: ${officeNumber}<li>
                <ul>
            </div>
            `;
        }

        fs.appendFile('./dist/index.html',html,function(err){
            if(err){
                return reject(err);
            }else{
            return resolve();
            }
        });
    });
}
function endHtml(){
    const html = `
        </div>

    </body>
    </html>
    `;
    fs.appendFile("./dist/index.html",html,function(err){
        if(err){
            console.log(err);
        }
    })
}

runFunctions();