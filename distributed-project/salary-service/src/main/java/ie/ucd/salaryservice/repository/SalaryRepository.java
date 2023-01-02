package ie.ucd.salaryservice.repository;

import ie.ucd.salaryservice.entity.Salary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SalaryRepository extends JpaRepository<Salary, Long> {
    Salary findByEmployeeId(Long employeeId);
    void deleteByEmployeeId(Long employeeId);
}
