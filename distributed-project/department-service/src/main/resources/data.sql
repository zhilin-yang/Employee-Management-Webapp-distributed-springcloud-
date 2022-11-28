CREATE TABLE departments
(
    id                     BIGINT AUTO_INCREMENT NOT NULL,
    department_name        VARCHAR(255),
    department_description VARCHAR(255),
    department_code        VARCHAR(255),
    CONSTRAINT pk_departments PRIMARY KEY (id)
);

INSERT INTO departments ( id, department_Name, department_Description, department_Code)
VALUES ('1','a', 'a', 'a'),
       ('2','b', 'b', 'b'),
       ('3','c', 'c', 'c'),
       ('4','d', 'd', 'd'),
       ('5','e', 'e', 'e'),
       ('6','f', 'f', 'f'),
       ('7','g', 'g', 'g'),
       ('8','h', 'h', 'h'),
       ('9','i', 'i', 'i'),
       ('10','j', 'j', 'j'),
       ('11','k', 'k', 'k'),
       ('12','l', 'l', 'l'),
       ('13','m', 'm', 'm'),
       ('14','n', 'n', 'n'),
       ('15','o', 'o', 'o'),
       ('16','p', 'p', 'p'),
       ('17','q', 'q', 'q'),
       ('18','r', 'r', 'r'),
       ('19','s', 's', 's'),
       ('20','t', 't', 't'),
       ('21','u', 'u', 'u'),
       ('22','v', 'v', 'v'),
       ('23','w', 'w', 'w'),
       ('24','x', 'x', 'x'),
       ('25','y', 'y', 'y'),
       ('26','z', 'z', 'z');