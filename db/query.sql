const db = require('./connection');

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
        
    }

    viewDepts(data){

    }

    viewEmployees(data){

    }

    viewRoles(data){
        
    }



}

module.exports = new DBQuery(db);