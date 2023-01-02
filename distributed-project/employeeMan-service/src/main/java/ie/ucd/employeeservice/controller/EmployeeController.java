package ie.ucd.employeeservice.controller;

import ie.ucd.employeeservice.dto.APIResponseDto;
import ie.ucd.employeeservice.service.EmployeeService;
import lombok.AllArgsConstructor;
import ie.ucd.employeeservice.dto.EmployeeDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/employeeman/employees")
@AllArgsConstructor
public class EmployeeController {

    private EmployeeService employeeService;

    // Build Save Employee REST API
    // get all employees
    @GetMapping()
    public ResponseEntity <List<EmployeeDto>> getAllEmployees(){
        List <EmployeeDto> empListDto=employeeService.findAll();
        return new ResponseEntity<>(empListDto, HttpStatus.OK);
    }
    @GetMapping("/searchEmp/{firstNamecheck}")
    public ResponseEntity <List<EmployeeDto>> getAllEmployeesByFN(@PathVariable("firstNamecheck") String firstNamecheck){
        List <EmployeeDto> empListDto=new ArrayList<>();
        System.out.print(firstNamecheck);
        if(firstNamecheck.equals("")){
            empListDto=employeeService.findAll();
        }else{
            empListDto=employeeService.findAllByFirstName(firstNamecheck);
        }

        return new ResponseEntity<>(empListDto, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<EmployeeDto> saveEmployee(@RequestBody EmployeeDto employeeDto){
        EmployeeDto savedEmployee = employeeService.saveEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
    @GetMapping("/{id}")
    public ResponseEntity<APIResponseDto> getEmployee(@PathVariable("id") Long employeeId){
        APIResponseDto apiResponseDto = employeeService.getEmployeeById(employeeId);
        return new ResponseEntity<>(apiResponseDto, HttpStatus.OK);
    }


    @PutMapping("/{id}")
    public ResponseEntity<APIResponseDto> updateEmployee(@RequestBody EmployeeDto employeeDto,@PathVariable("id") Long employeeId){
        APIResponseDto apiResponseDto = employeeService.updateEmploy(employeeId,employeeDto);
        return new ResponseEntity<>(apiResponseDto, HttpStatus.OK);

    }
    // delete employee rest api
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
        String req = employeeService.deleteEmploy(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
