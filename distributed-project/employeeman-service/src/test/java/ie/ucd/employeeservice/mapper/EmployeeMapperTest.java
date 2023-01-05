package ie.ucd.employeeservice.mapper;


import ie.ucd.employeeservice.dto.EmployeeDto;
import ie.ucd.employeeservice.entity.Employee;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class EmployeeMapperTest {

    @Test
    void mapToEmployeeDto() {
        EmployeeMapper employeeMapper = new EmployeeMapper();
        Employee employee = new Employee(1L, "Jack", "Smith", "abcd@gmail.com", "MKT001", "MKT");
        EmployeeDto employeeDto = employeeMapper.mapToEmployeeDto(employee);
        Assertions.assertEquals("Jack", employeeDto.getFirstName());
        Assertions.assertEquals("Smith", employeeDto.getLastName());
        Assertions.assertEquals("abcd@gmail.com", employeeDto.getEmail());
        Assertions.assertEquals("MKT001", employeeDto.getDepartmentCode());
        Assertions.assertEquals("MKT", employeeDto.getOrganizationCode());
    }

    @Test
    void mapToEmployee() {
        EmployeeMapper employeeMapper = new EmployeeMapper();
        EmployeeDto employeeDto = new EmployeeDto(1L, "Jack", "Smith", "abcd@gmail.com", "MKT001", "MKT");
        Employee employee = employeeMapper.mapToEmployee(employeeDto);
        Assertions.assertEquals("Jack", employee.getFirstName());
        Assertions.assertEquals("Smith", employee.getLastName());
        Assertions.assertEquals("abcd@gmail.com", employee.getEmail());
        Assertions.assertEquals("MKT001", employee.getDepartmentCode());
        Assertions.assertEquals("MKT", employee.getOrganizationCode());
    }
}