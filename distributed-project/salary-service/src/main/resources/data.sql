CREATE TABLE IF NOT EXISTS salaries
(
    id BIGINT AUTO_INCREMENT NOT NULL,
    employee_id BIGINT NOT NULL UNIQUE,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    base_salary DOUBLE,
    overtime_pay DOUBLE,
    bonus DOUBLE,
    created_date TIMESTAMP,
    CONSTRAINT pk_salaries PRIMARY KEY (id)
);
INSERT INTO salaries (employee_id,first_name,last_name,base_salary,overtime_pay,bonus,created_date)
VALUES(1,'John', 'Smith',2230.0,50.0,1000.0,NOW()),
(2,'David', 'Jones',3230.0,50.0,800.0,NOW());
