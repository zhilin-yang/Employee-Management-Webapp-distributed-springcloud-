package ie.ucd.employeeservice.service;

import ie.ucd.employeeservice.dto.APIResponseDto;
import ie.ucd.employeeservice.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto saveEmployee(EmployeeDto employeeDto);

    APIResponseDto getEmployeeById(Long employeeId);
    List<EmployeeDto> findAll();
    APIResponseDto updateEmploy(Long employeeId,EmployeeDto employeeDto);
    String deleteEmploy(Long employeeId);
    List<EmployeeDto>findAllByFirstName(String firstNameLike);
    EmployeeDto getEmployeeByEmail(String email);
}
