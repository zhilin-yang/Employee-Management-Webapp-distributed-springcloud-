package ie.ucd.salaryservice.feign;

import ie.ucd.salaryservice.dto.EmployeeDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient("EMPLOYEEMAN-SERVICE")
public interface EmployeeManClient {
    @GetMapping("api/employeeman/employees/getEmpByEmail/{email}")
    EmployeeDto getEmployee(@PathVariable("email") String email);
}
