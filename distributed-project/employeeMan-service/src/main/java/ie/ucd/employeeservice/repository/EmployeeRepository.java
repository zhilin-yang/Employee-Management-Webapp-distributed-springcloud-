package ie.ucd.employeeservice.repository;

import feign.Param;
import ie.ucd.employeeservice.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    @Query("SELECT e FROM Employee e WHERE e.firstName LIKE %:firstNameCheck%")
    List<Employee> findByFirstNameLike(@Param("firstName") String firstNameCheck);
}
