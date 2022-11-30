package net.javaguides.departmentservice.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.departmentservice.dto.DepartmentDto;
import net.javaguides.departmentservice.entity.Department;
import net.javaguides.departmentservice.mapper.DepartmentMapper;
import net.javaguides.departmentservice.repository.DepartmentRepository;
import net.javaguides.departmentservice.service.DepartmentService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    private DepartmentRepository departmentRepository;

    @Override
    public DepartmentDto saveDepartment(DepartmentDto departmentDto) {

        // convert department dto to department jpa entity
        Department department = DepartmentMapper.mapToDepartment(departmentDto);

        Department savedDepartment = departmentRepository.save(department);

        DepartmentDto savedDepartmentDto = DepartmentMapper.mapToDepartmentDto(savedDepartment);

        return savedDepartmentDto;
    }

    @Override
    public DepartmentDto getDepartmentByCode(String departmentCode) {

        Department department = departmentRepository.findByDepartmentCode(departmentCode);

        DepartmentDto departmentDto = DepartmentMapper.mapToDepartmentDto(department);

        return departmentDto;
    }
    @Override
    public List<DepartmentDto> findAll() {
        List<Department> devListEn=new ArrayList<>();
        List<DepartmentDto> devListDto=new ArrayList<>();
        devListEn=departmentRepository.findAll();
        for(int i=0;i<devListEn.size();i++){
            devListDto.add(DepartmentMapper.mapToDepartmentDto(devListEn.get(i)));

        }
        return devListDto;
    }
    @Override
    public DepartmentDto getDepById(Long depId) {
        Department dep = departmentRepository.findById(depId).get();

        DepartmentDto depDto = DepartmentMapper.mapToDepartmentDto(dep);


        return depDto;
    }
    @Override
    public DepartmentDto updateDep(Long depId,DepartmentDto depDto){
        Department dep = departmentRepository.findById(depId).get();
        dep.setDepartmentCode(depDto.getDepartmentCode());
        dep.setDepartmentDescription(depDto.getDepartmentDescription());
        dep.setDepartmentName(depDto.getDepartmentName());

        Department updatedDep = departmentRepository.save(dep);

        return depDto;
    }
    @Override
    public String deleteDep(Long depId) {
        Department dep = departmentRepository.findById(depId).get();

        departmentRepository.delete(dep);

        return "OK";
    }
}
