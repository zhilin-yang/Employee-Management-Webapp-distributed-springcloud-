package ie.ucd.salaryservice.mapper;

import ie.ucd.salaryservice.dto.SalaryDto;
import ie.ucd.salaryservice.entity.Salary;

public class SalaryMapper {

    public static SalaryDto mapToSalaryDto(Salary salary){
        SalaryDto salaryDto = new SalaryDto(
                salary.getId(),
                salary.getEmployeeId(),
                salary.getFirstName(),
                salary.getLastName(),
                salary.getBaseSalary(),
                salary.getOvertimePay(),
                salary.getBonus(),
                salary.getCreatedDate()
        );
        return salaryDto;
    }

    public static Salary mapToSalary(SalaryDto salaryDto){
        Salary salary = new Salary(
                salaryDto.getId(),
                salaryDto.getEmployeeId(),
                salaryDto.getFirstName(),
                salaryDto.getLastName(),
                salaryDto.getBaseSalary(),
                salaryDto.getOvertimePay(),
                salaryDto.getBonus(),
                salaryDto.getCreatedDate()
        );
        return salary;
    }
}
