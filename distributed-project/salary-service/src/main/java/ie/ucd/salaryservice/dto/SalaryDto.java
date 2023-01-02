package ie.ucd.salaryservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SalaryDto {
    private Long id;
    private Long employeeId;
    private String firstName;
    private String lastName;
    private Double baseSalary;
    private Double overtimePay;
    private Double bonus;
    private LocalDateTime createdDate;
}
