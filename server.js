const inquirer = require('inquirer');
const sql = require('./db/query');


// 'Add Department'
newDept();


//'Add Employee'
newEmployee();


//'Add Role'
newRole();


//'Update Employee Role'
updateEmpRole();


//'View all Departments'
viewDepts();


//'View all Employees'
viewEmployees();


//'View all Roles'
viewRoles();


const mainQuestions = () => {
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

            switch (req) {
                case 'Add Department': newDept();
                    break;
                case 'Add Employee': newEmployee();
                    break;
                case 'Add Role': newRole();
                    break;
                case 'Update Employee Role': updateEmpRole();
                    break;
                case 'View all Departments': viewDepts();
                    break;
                case 'View all Employees': viewEmployees();
                    break;
                case 'View all Roles': viewRoles();
                    break;

                default:
                    break;
            }
        })
};

mainQuestions();