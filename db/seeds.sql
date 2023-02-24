INSERT INTO department(department_name)
VALUES("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");

INSERT INTO role(title, department_name, salary)
VALUES("Sales Lead", "Sales", 100000),
    ("Salesperson", "Sales", 80000),
    ("Lead Engineer", "Engineering", 150000),
    ("Software Engineer", "Engineering", 120000),
    ("Account Manager", "Finance", 160000),
    ("Accountant", "Finance", 125000),
    ("Legal Team Lead", "Legal", 250000),
    ("Lawyer", "Legal", 190000);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("John", "Doe", 1, NULL),
    ("Mike", "Chan", 2, 1),
    ("Ashley", "Rodriguez", 3, NULL),
    ("Kevin", "Tupik", 4, 2),
    ("Kunal", "Singh", 5, NULL),
    ("Malia", "Brown", 6, 3),
    ("Sarah", "Lourd", 7, NULL),
    ("Tom", "Allen", 8, 4);