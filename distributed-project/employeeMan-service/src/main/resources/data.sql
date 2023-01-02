CREATE TABLE IF NOT EXISTS employees
(
    id                BIGINT AUTO_INCREMENT NOT NULL,
    first_name        VARCHAR(255),
    last_name         VARCHAR(255),
    email             VARCHAR(255)          NOT NULL,
    department_code   VARCHAR(255),
    organization_code VARCHAR(255),
    CONSTRAINT pk_employees PRIMARY KEY (id)
);
INSERT INTO employees (first_name, last_name, email, department_code, organization_code)
VALUES ('John', 'Smith', 'admin@gmail.com', 'HR001', 'HR'),
('David', 'Jones', 'David@gmail.com', 'IT001', 'IT'),
('Joseph', 'Taylor', 'Joseph@gmail.com', 'IT002', 'IT'),
('Thomas', 'Williams', 'Thomas@gmail.com', 'IT003', 'IT'),
('Mary', 'Brown', 'Mary@gmail.com', 'MKT001', 'MKT'),
('Susan', 'Davies', 'Susan@gmail.com', 'MKT001', 'MKT'),
('Lisa', 'Evans', 'Lisa@gmail.com', 'MKT002', 'MKT');
CREATE TABLE IF NOT EXISTS departments
(
    id                     BIGINT AUTO_INCREMENT UNIQUE NOT NULL,
    department_name        VARCHAR(255),
    department_description VARCHAR(255),
    department_code        VARCHAR(255),
    CONSTRAINT pk_departments PRIMARY KEY (id)
);
INSERT INTO departments (department_name, department_description, department_code)
VALUES ('Human Resources 001', 'The first department of Human Resources.', 'HR001'),
('Information Technology 001', 'The first department of Information Technology.', 'IT001'),
('Information Technology 002', 'The second department of Information Technology.', 'IT002'),
('Information Technology 003', 'The third department of Information Technology.', 'IT003'),
('Marketing 001', 'The first department of Marketing.', 'MKT001'),
('Marketing 002', 'The second department of Marketing.', 'MKT002');
CREATE TABLE IF NOT EXISTS organizations
(
    id                       BIGINT AUTO_INCREMENT NOT NULL,
    organization_name        VARCHAR(255)          NOT NULL,
    organization_description VARCHAR(255),
    organization_code        VARCHAR(255)          NOT NULL,
    created_date             TIMESTAMP,
    CONSTRAINT pk_organizations PRIMARY KEY (id)
);
INSERT INTO organizations (organization_name, organization_description, organization_code, created_date)
VALUES ( 'Human Resources', 'Responsible for recruiting, hiring, firing, and administering benefits.', 'HR', NOW() ),
( 'Information Technology', 'Responsible for the governance technological systems of the company, maintenance of the infrastructure, and functionality of the systems overall.', 'IT', NOW() ),
( 'Marketing', 'Designs marketing strategies and combines the right marketing mix to satisfy customer needs and wants.', 'MKT', NOW() );




