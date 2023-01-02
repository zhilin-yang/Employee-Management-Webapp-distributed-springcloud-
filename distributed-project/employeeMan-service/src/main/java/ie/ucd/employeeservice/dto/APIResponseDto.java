package ie.ucd.employeeservice.dto;

import ie.ucd.departmentservice.dto.DepartmentDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ie.ucd.organizationservice.dto.OrganizationDto;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class APIResponseDto {
    private EmployeeDto employee;
    private DepartmentDto departmentDto;
    private OrganizationDto organization;
}
