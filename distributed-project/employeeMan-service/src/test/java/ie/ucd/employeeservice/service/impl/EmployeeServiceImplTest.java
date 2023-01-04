package ie.ucd.employeeservice.service.impl;

import  ie.ucd.employeeservice.dto.APIResponseDto;
import ie.ucd.employeeservice.dto.EmployeeDto;
import org.junit.jupiter.api.*;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import javax.annotation.Resource;

import java.util.List;

@SpringBootTest
@TestPropertySource(properties = {"application-test.properties"})
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class EmployeeServiceImplTest {
    @Resource
    private EmployeeServiceImpl employeeServiceImpl;

    @Test
    @Order(1)
    void saveEmployee() {
        EmployeeDto employeeDto = new EmployeeDto();
        employeeDto.setFirstName("John");
        employeeDto.setLastName("Smith");
        employeeDto.setEmail("admin@gmail.com");
        employeeDto.setOrganizationCode("HR");
        employeeDto.setDepartmentCode("HR001");
        EmployeeDto savedEmployee = this.employeeServiceImpl.saveEmployee(employeeDto);
        Assertions.assertEquals("John", savedEmployee.getFirstName());
        Assertions.assertEquals("Smith", savedEmployee.getLastName());
        Assertions.assertEquals("admin@gmail.com", savedEmployee.getEmail());
        Assertions.assertEquals("HR001", savedEmployee.getDepartmentCode());
        Assertions.assertEquals("HR", savedEmployee.getOrganizationCode());
    }

    @Test
    @Order(2)
    void getEmployeeById() {
        APIResponseDto apiResponseDto = this.employeeServiceImpl.getEmployeeById(1L);
        EmployeeDto employeeDto = apiResponseDto.getEmployee();
        Assertions.assertEquals("John", employeeDto.getFirstName());
        Assertions.assertEquals("Smith", employeeDto.getLastName());
        Assertions.assertEquals("admin@gmail.com", employeeDto.getEmail());
        Assertions.assertEquals("HR001", employeeDto.getDepartmentCode());
        Assertions.assertEquals("HR", employeeDto.getOrganizationCode());
    }

//    @Test
//    @Order(3)
//    void findAll() {
//        List<EmployeeDto> employeeDtos =  this.employeeServiceImpl.findAll();
//        Assertions.assertEquals(1, employeeDtos.size());
//    }
//
//    @Test
//    @Order(4)
//    void getDefaultDepartment() {
//        APIResponseDto apiResponseDto =  this.employeeServiceImpl.getDefaultDepartment(1L, new Exception());
//
//        Assertions.assertEquals("R&D Department", apiResponseDto.getDepartmentDto().getDepartmentName());
//        Assertions.assertEquals("RD001", apiResponseDto.getDepartmentDto().getDepartmentCode());
//        Assertions.assertEquals("Research and Development Department", apiResponseDto.getDepartmentDto().getDepartmentDescription());
//    }
}