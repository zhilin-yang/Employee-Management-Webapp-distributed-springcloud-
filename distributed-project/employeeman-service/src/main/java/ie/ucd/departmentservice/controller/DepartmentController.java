package ie.ucd.departmentservice.controller;

import ie.ucd.departmentservice.dto.DepartmentDto;
import lombok.AllArgsConstructor;
import ie.ucd.departmentservice.service.DepartmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/employeeman/departments")
@AllArgsConstructor
public class DepartmentController {

    private DepartmentService departmentService;
    @GetMapping()
    public ResponseEntity <List<DepartmentDto>> getAllDevs(){
        List <DepartmentDto> devListDto=departmentService.findAll();
        return new ResponseEntity<>(devListDto, HttpStatus.OK);
    }

    // Build save department REST API
    @PostMapping
    public ResponseEntity<DepartmentDto> saveDep(@RequestBody DepartmentDto departmentDto){
        DepartmentDto savedDepartment = departmentService.saveDepartment(departmentDto);
        return new ResponseEntity<>(savedDepartment, HttpStatus.CREATED);
    }

    // Build get department rest api
    @GetMapping("/getDepByCode/{department-code}")
    public ResponseEntity<DepartmentDto> getDepartment(@PathVariable("department-code") String departmentCode){
        DepartmentDto departmentDto = departmentService.getDepartmentByCode(departmentCode);
        return new ResponseEntity<>(departmentDto, HttpStatus.OK
        );
    }

    // Build Get Employee REST API
    @GetMapping("/{id}")
    public ResponseEntity<DepartmentDto> getDep(@PathVariable("id") Long depId){
        DepartmentDto depDto = departmentService.getDepById(depId);
        return new ResponseEntity<>(depDto, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DepartmentDto> updateDep(@RequestBody DepartmentDto depDto,@PathVariable("id") Long depId){
        DepartmentDto depDtoNew = departmentService.updateDep(depId,depDto);
        return new ResponseEntity<>(depDtoNew, HttpStatus.OK);

    }
    // delete employee rest api
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteDep(@PathVariable Long id){
        String req = departmentService.deleteDep(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
