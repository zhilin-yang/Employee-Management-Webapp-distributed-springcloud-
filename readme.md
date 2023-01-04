# Microservices with Spring Cloud 
Video[demo](https://drive.google.com/file/d/1b6caDbK4_kTz51xVr1h77Jb3D7NL1KnN/view?usp=sharing) 
Video[architecture](https://drive.google.com/file/d/1y10ZdWjItVAnzWC8hqi5O5cdl221SERl/view?usp=sharing) 


## Architecture

Our project consists of the following modules:
- **gateway-service** - a module that Spring Cloud Gateway for running Spring Boot application that acts as a proxy/gateway in our architecture.
- **config-service** - a module that uses Spring Cloud Config Server for running configuration server in the `native` mode. The configuration files are placed on the classpath.
- **discovery-service** - a module that depending on the example it uses Spring Cloud Netflix Eureka as an embedded discovery server.
- **employee-service** - a module containing the first of our sample microservices that allows to perform CRUD operation on employees
- **department-service** - a module containing the second of our sample microservices that allows to perform CRUD operation on  departments. It communicates with employee-service. 
- **organization-service** - a module containing the third of our sample microservices that allows to perform CRUD operation on organizations. It communicates with both employee-service and department-service.

