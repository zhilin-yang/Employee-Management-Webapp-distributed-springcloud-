CREATE TABLE departments
(
    id                     BIGINT AUTO_INCREMENT UNIQUE NOT NULL,
    department_name        VARCHAR(255),
    department_description VARCHAR(255),
    department_code        VARCHAR(255),
    CONSTRAINT pk_departments PRIMARY KEY (id)
);




