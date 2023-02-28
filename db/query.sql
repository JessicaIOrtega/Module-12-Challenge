const db = require('../db/connection');

class DBQuery {
   
    constructor(db){
        this.db = db;
    }

    newDept(data){
        const values = [data.name];
        return this.db
        .promise()
        .query(`INSERT INTO department (department_name) VALUES(?)`,
        values
        );
    }

    newEmployee(data){
        const values = [data.first_name, data.last_name, data.role_id, data.manager_id];
        return this.db
        .promise()
        .query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)`,
        values
        );
    }

    newRole(data){
        const values = [data.title, data.department_name, data.salary];
        return this.db
        .promise()
        .query (`INSERT INTO role (title, department_name, salary) VALUES(?,?,?)`, 
        values        
        );
    }

    updateEmpRole(data){
        const values = [data.role_id, data.employee_id];
        return this.db
        .promise()
        .query(`UPDATE employee SET role_id = ? WHERE id = ?`,
        values
        )
    }

    viewDepts(data){
        return this.db
        .promise()
        .query( `SELECT * FROM department`);
    }

    viewEmployees(data){
        const values = [data.department_id]
        return this.db
        .promise()
        .query(`SELECT employee.first_name AS "First Name", employee.last_name AS "Last Name", department_department_name AS Department FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department on role.department_id = department.id WHERE department.id = ? `,
        values
        );
    }

    viewRoles(data){
        return this.db
        .promise()
        .query(`SELECT role.title AS Title, role.salary AS Salary, department.department_name AS Department FROM role LEFT JOIN department ON role.department_id = department.id ORDER BY Department, role.id ASC`);
    }

};

module.exports = new DBQuery(db);