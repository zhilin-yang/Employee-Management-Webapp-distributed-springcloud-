CREATE TABLE departments
(
    id                     BIGINT AUTO_INCREMENT UNIQUE NOT NULL,
    department_name        VARCHAR(255),
    department_description VARCHAR(255),
    department_code        VARCHAR(255),
    CONSTRAINT pk_departments PRIMARY KEY (id)
);
INSERT INTO departments (department_name, department_description, department_code)
VALUES ('Sales', 'Sales Department', 'SALES');




