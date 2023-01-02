package ie.ucd.departmentservice.service;

import ie.ucd.departmentservice.dto.DepartmentDto;

import java.util.List;

public interface DepartmentService {
    DepartmentDto saveDepartment(DepartmentDto departmentDto);

    DepartmentDto getDepartmentByCode(String code);
    List<DepartmentDto> findAll();

    DepartmentDto getDepById(Long depId);
    DepartmentDto updateDep(Long depId,DepartmentDto depDto);
    String deleteDep(Long depId);

}
