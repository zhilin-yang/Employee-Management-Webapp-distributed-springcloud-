package ie.ucd.salaryservice.service.impl;

import ie.ucd.salaryservice.dto.EmployeeDto;
import ie.ucd.salaryservice.feign.EmployeeManClient;
import ie.ucd.salaryservice.service.SalaryService;
import lombok.AllArgsConstructor;
import ie.ucd.salaryservice.dto.SalaryDto;
import ie.ucd.salaryservice.entity.Salary;
import ie.ucd.salaryservice.mapper.SalaryMapper;
import ie.ucd.salaryservice.repository.SalaryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
@Transactional
public class SalaryServiceImpl implements SalaryService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SalaryServiceImpl.class);

    private SalaryRepository salaryRepository;
    private EmployeeManClient employeeManClient;

    @Override
    public SalaryDto saveSalary(SalaryDto salaryDto) {

        Salary salary = SalaryMapper.mapToSalary(salaryDto);

        Salary savedSalary = salaryRepository.save(salary);

        SalaryDto savedSalaryDto = SalaryMapper.mapToSalaryDto(savedSalary);

        return savedSalaryDto;
    }

    @Override
    public SalaryDto getSalaryByEmployeeId(Long employeeId) {
        LOGGER.info("inside getSalaryById() method");
        Salary salary = salaryRepository.findByEmployeeId(employeeId);
        SalaryDto salaryDto = SalaryMapper.mapToSalaryDto(salary);
        return salaryDto;
    }

    @Override
    public void deleteSalaryByEmployeeId(Long employeeId) {
        salaryRepository.deleteByEmployeeId(employeeId);
    }

    @Override
    public SalaryDto updateSalary(SalaryDto salaryDto, Long employeeId) {
        Salary salary = salaryRepository.findByEmployeeId(employeeId);
        salary.setBaseSalary(salaryDto.getBaseSalary());
        salary.setOvertimePay(salaryDto.getOvertimePay());
        salary.setBonus(salaryDto.getBonus());

        Salary updatedSalary = salaryRepository.save(salary);
        SalaryDto updatedSalaryDto = SalaryMapper.mapToSalaryDto(updatedSalary);

        return updatedSalaryDto;
    }

    @Override
    public List<SalaryDto> findAll() {
        List<SalaryDto> salaryListDto=new ArrayList<>();
        List<Salary> salaryListEn = salaryRepository.findAll();
        for(int i=0;i<salaryListEn.size();i++){
            salaryListDto.add(SalaryMapper.mapToSalaryDto(salaryListEn.get(i)));
        }
        return salaryListDto;
    }

    @Override
    public SalaryDto findSalaryByEmail(String email) {
        EmployeeDto employeeDto = employeeManClient.getEmployee(email);
        if(employeeDto!=null){
            Long employeeId = employeeDto.getId();

            SalaryDto salaryDto = getSalaryByEmployeeId(employeeId);
            return salaryDto;
        }else{
            return null;
        }

    }
}
