CREATE TABLE users
(
    id                BIGINT AUTO_INCREMENT NOT NULL,
    email             VARCHAR(255)          NOT NULL,
    password   VARCHAR(255),
    role   INTEGER,
    CONSTRAINT pk_users PRIMARY KEY (id)
);
INSERT INTO users (email, password, role)
VALUES ('admin@gmail.com', '123456',0),
('David@gmail.com', '123456',1);


