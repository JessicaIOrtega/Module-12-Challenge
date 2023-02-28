const sql = require('./db/query.sql');

const deptChoices = async () => {
    const tempArr = await sql.viewDepts();
    const choices = tempArr[0];
    let choicesArr = [];

    choices.forEach(element => {
        let valueObject = {
            name: element.department_name,
            value: element.id
        }
        choicesArr.push(valueObject);
    });

    return choicesArr;
}

const roleChoices = async () => {
    const tempArr = await sql.viewRoles();
    const choices = tempArr[0];
    let choicesArr = [];

    choices.forEach(element => {
        let valueObject = {
            name: element.title,
            value: element.id
        }
        choicesArr.push(valueObject);
    });

    return choicesArr;
}

const employeeChoices = async () => {
    const tempArr = await sql.viewEmployees();
    const choices = tempArr[0];
    let choicesArr = [];

    choices.forEach(element => {
        let valueObject = {
            name: element.first_name + ' ' + element.last_name,
            value: element.id
        }
        choicesArr.push(valueObject);
    });
    return choicesArr;
}

module.exports = { deptChoices, roleChoices, employeeChoices };