package ie.ucd.salaryservice.controller;

import ie.ucd.salaryservice.service.SalaryService;
import lombok.AllArgsConstructor;
import ie.ucd.salaryservice.dto.SalaryDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/salaries")
@AllArgsConstructor
public class SalaryController {

    private SalaryService salaryService;

    @GetMapping()
    public ResponseEntity<List<SalaryDto>> getAllSalaries() {
        List<SalaryDto> salaryListDto = salaryService.findAll();
        return new ResponseEntity<>(salaryListDto, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<SalaryDto> saveSalary(@RequestBody SalaryDto salaryDto) {
        SalaryDto savedSalary = salaryService.saveSalary(salaryDto);
        return new ResponseEntity<>(savedSalary, HttpStatus.CREATED);
    }

    @GetMapping("/{employee-id}")
    public ResponseEntity<SalaryDto> getSalary(@PathVariable("employee-id") Long employeeId) {
        SalaryDto salaryDto = salaryService.getSalaryByEmployeeId(employeeId);
        return new ResponseEntity<>(salaryDto, HttpStatus.OK);
    }

    @DeleteMapping("/{employee-id}")
    public ResponseEntity deleteSalary(@PathVariable("employee-id") Long employeeId) {
        salaryService.deleteSalaryByEmployeeId(employeeId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{employee-id}")
    public ResponseEntity<SalaryDto> updateSalary(@RequestBody SalaryDto salaryDto, @PathVariable("employee-id") Long id) {
        SalaryDto savedSalary = salaryService.updateSalary(salaryDto, id);
        return new ResponseEntity<>(savedSalary, HttpStatus.OK);
    }

    @GetMapping("/getCurrentEmp/{email}")
    public ResponseEntity<List<SalaryDto>> getSalaryByEmail(@PathVariable("email") String email) {
        List<SalaryDto> salaryDtoList = new ArrayList<>();
        SalaryDto salaryDto = salaryService.findSalaryByEmail(email);
        if (salaryDto != null) {
            salaryDtoList.add(salaryDto);
        }
        return new ResponseEntity<>(salaryDtoList, HttpStatus.OK);
    }
}
