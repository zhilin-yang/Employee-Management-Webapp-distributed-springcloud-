CREATE TABLE IF NOT EXISTS organizations
(
    id                       BIGINT AUTO_INCREMENT,
    organization_name        VARCHAR(255) NOT NULL,
    organization_description VARCHAR(255),
    organization_code        VARCHAR(255) UNIQUE,
    created_date             TIMESTAMP,
    CONSTRAINT pk_organizations PRIMARY KEY (id)
);
-- INSERT INTO organizations (id, organization_Name, organization_Code, organization_Description, created_Date)
-- VALUES ('1','a', 'a', 'a', NOW());