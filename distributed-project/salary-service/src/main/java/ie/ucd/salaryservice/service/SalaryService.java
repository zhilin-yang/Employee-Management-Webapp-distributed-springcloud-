package ie.ucd.salaryservice.service;

import ie.ucd.salaryservice.dto.SalaryDto;

import java.util.List;

public interface SalaryService {
    SalaryDto saveSalary(SalaryDto salaryDto);
    SalaryDto getSalaryByEmployeeId(Long employeeId);
    void deleteSalaryByEmployeeId(Long employeeId);
    SalaryDto updateSalary(SalaryDto salaryDto, Long employeeId);
    List<SalaryDto> findAll();
}
