CREATE TABLE employees
(
    id                BIGINT AUTO_INCREMENT NOT NULL,
    first_name        VARCHAR(255),
    last_name         VARCHAR(255),
    email             VARCHAR(255)          NOT NULL,
    department_code   VARCHAR(255),
    organization_code VARCHAR(255),
    CONSTRAINT pk_employees PRIMARY KEY (id)
);

INSERT INTO employees ( id, first_name, last_name, email, department_code, organization_code )
VALUES ('1','a', 'a', 'a', 'a', 'a');