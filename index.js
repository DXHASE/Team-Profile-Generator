const inquirer = require('inquirer');
const fs = require('fs');



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
}
addTeamMember();