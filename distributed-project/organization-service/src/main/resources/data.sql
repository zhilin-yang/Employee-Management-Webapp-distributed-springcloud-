CREATE TABLE organizations
(
    id                       BIGINT AUTO_INCREMENT NOT NULL,
    organization_name        VARCHAR(255)          NOT NULL,
    organization_description VARCHAR(255),
    organization_code        VARCHAR(255)          NOT NULL,
    created_date             TIMESTAMP,
    CONSTRAINT pk_organizations PRIMARY KEY (id)
);