package ie.ucd.salaryservice.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "salaries")
public class Salary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private Long employeeId;
    private String firstName;
    private String lastName;

    @Column(nullable = false)
    private Double baseSalary;
    private Double overtimePay;
    private Double bonus;

    @CreationTimestamp
    private LocalDateTime createdDate;
}
