const inquirer = require('inquirer');
const mysql = require('mysql2');
const sql = require('./db/query');
const choiceHelper = require('./lib/choiceHelper');
const consoleTable = require('console.table');

// 'Add Department'
const newDept = async () => {
    const department = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Department?',
            validate: (name) => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter a Department name')
                    return false;
                }
            },
        },
    ]);

    await sql.newDept(department);
    mainQuestions();
}

//'Add Employee'
const newEmployee = async () => {
    const roleArr = await choiceHelper.roleChoices();
    const employee = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is Employees first name?',
            validate: (first) => {
                if (first && isNaN(first)) {
                    return true;
                } else {
                    console.log('Please enter a name')
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is Employees last name?',
            validate: (last) => {
                if (last && isNaN(last)) {
                    return true;
                } else {
                    console.log('Please enter a last name')
                    return false;
                }
            },
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'What is the Employee role?',
            choices: roleArr,
            loop: false,
        }
    ]);

    await sql.newEmployee(employee);
    mainQuestions();
}



//'Add Role'
const newRole = async () => {
    const choicesArr = await choiceHelper.deptChoices();

    const role = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the Role?',
            validate: (title) => {
                if (title) {
                    return true;
                } else {
                    console.log('Please enter a Role name')
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter Role Salary',
            validate: (salary) => {
                if (salary && !isNaN(salary)) {
                    return true;
                } else {
                    console.log('Please enter a Role salary');
                    return false;
                }
            },
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'What Department is the role associated with?',
            choices: choicesArr,
            loop: false,
        }
    ]);

    await sql.newRole(role);
    mainQuestions();
}


//'Update Employee Role'
const updateEmpRole = async () => {
    const roleArr = await choiceHelper.roleChoices();
    const employeeArr = await choiceHelper.employeeChoices();

    const employee = await inquirer.prompt([
        {
            type: 'list',
            name: 'employee_id',
            message: 'What Employee do you want to update?',
            choices: employeeArr,
            loop: false,
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'What is Employee Role?',
            choices: roleArr,
            loop: false,
        }
    ]);

    await sql.updateEmpRole(employee);
    mainQuestions();
}


//'View all Departments'
const viewDepts = () => {
    sql.viewDepts1()

        .then(([rows]) => {
            console.log('/n');
            console.log(consoleTable.getTable(rows));
        })

        .then(() => {
            mainQuestions();
        })
}


//'View all Employees'
const viewEmployees = () => {
    sql.viewEmployees()

        .then(([rows]) => {
            console.log('/n');
            console.log(consoleTable.getTable(rows));
        })

        .then(() => {
            mainQuestions();
        })
}


//'View all Roles'
const viewRoles = () => {
    sql.viewRoles()

        .then(([rows]) => {
            console.log('/n');
            console.log(consoleTable.getTable(rows));
        })

        .then(() => {
            mainQuestions();
        })
}

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
}

mainQuestions();