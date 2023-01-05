package ie.ucd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class EmployeeManServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeManServiceApplication.class, args);
	}

}