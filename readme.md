# Microservices with Spring Cloud 
Architecture Video[architecture](https://drive.google.com/file/d/1y10ZdWjItVAnzWC8hqi5O5cdl221SERl/view?usp=sharing) 
demo Video[demo](https://drive.google.com/file/d/1b6caDbK4_kTz51xVr1h77Jb3D7NL1KnN/view?usp=sharing) 



## Architecture

Our project consists of the following modules:
- **gateway-service** - a module that Spring Cloud Gateway for running Spring Boot application that acts as a proxy/gateway in our architecture.
- **config-service** - a module that uses Spring Cloud Config Server for running configuration server in the `native` mode. The configuration files are placed on the classpath.
- **service-registry** - a module that depending on the example it uses Spring Cloud Netflix Eureka as an embedded discovery server.
- **employeeman-service** - a module containing the first of our sample microservices that allows to perform CRUD operation on employees
- **salary-service** - a module containing the second of our sample microservices that allows to perform CRUD operation on  salary-service. 
- **user-service** - a module containing the third of our sample microservices that allows to user to login and sign up. 

