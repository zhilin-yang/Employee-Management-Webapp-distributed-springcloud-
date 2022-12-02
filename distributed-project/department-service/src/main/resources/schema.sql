CREATE TABLE IF NOT EXISTS departments
(
    id                     BIGINT AUTO_INCREMENT,
    department_name        VARCHAR(255) NOT NULL,
    department_description VARCHAR(255),
    department_code        VARCHAR(255) UNIQUE,
    CONSTRAINT pk_departments PRIMARY KEY (id)
);
