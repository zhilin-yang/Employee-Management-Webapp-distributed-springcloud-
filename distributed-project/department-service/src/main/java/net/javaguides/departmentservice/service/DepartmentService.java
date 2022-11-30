package net.javaguides.departmentservice.service;

import net.javaguides.departmentservice.dto.DepartmentDto;

import java.util.List;

public interface DepartmentService {
    DepartmentDto saveDepartment(DepartmentDto departmentDto);

    DepartmentDto getDepartmentByCode(String code);
    List<DepartmentDto> findAll();

    DepartmentDto getDepById(Long depId);
    DepartmentDto updateDep(Long depId,DepartmentDto depDto);
    String deleteDep(Long depId);

}
