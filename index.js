const inquirer = require('inquirer');

const questions = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'request',
                message: 'What would you like to do?',
                choices: ['Add Department',
                    'Add Employee',
                    'Add Role',
                    'Update Employee Role',
                    'View all Departments',
                    'View all Employees',
                    'View all Roles',
                    // 'Delete Employee',
                    // 'Update Employees Manager',
                    // 'View Department Budget',
                    // 'View Employees by Department',
                    // 'View Employees by Manager',
                ],
                loop: false,
            },
        ])

        .then((data) => {
            const { req } = data;
            console.log(req);


        })
}