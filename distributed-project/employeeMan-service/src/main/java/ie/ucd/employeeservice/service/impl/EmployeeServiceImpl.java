package ie.ucd.employeeservice.service.impl;

import ie.ucd.departmentservice.dto.DepartmentDto;
import ie.ucd.departmentservice.entity.Department;
import ie.ucd.departmentservice.mapper.DepartmentMapper;
import ie.ucd.employeeservice.dto.APIResponseDto;
import ie.ucd.employeeservice.entity.Employee;
import ie.ucd.employeeservice.mapper.EmployeeMapper;
import ie.ucd.employeeservice.repository.EmployeeRepository;
import ie.ucd.employeeservice.service.EmployeeService;
import io.github.resilience4j.retry.annotation.Retry;
import lombok.AllArgsConstructor;
import ie.ucd.employeeservice.dto.EmployeeDto;

import ie.ucd.organizationservice.dto.OrganizationDto;
import ie.ucd.organizationservice.entity.Organization;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import ie.ucd.departmentservice.repository.DepartmentRepository;
import ie.ucd.organizationservice.repository.OrganizationRepository;
import ie.ucd.organizationservice.mapper.OrganizationMapper;



@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private static final Logger LOGGER = LoggerFactory.getLogger(EmployeeServiceImpl.class);

    private EmployeeRepository employeeRepository;
    private DepartmentRepository departmentRepository;
    private OrganizationRepository organizationRepository;


   // private RestTemplate restTemplate;

    @Override
    public EmployeeDto saveEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);

        Employee saveDEmployee = employeeRepository.save(employee);

        EmployeeDto savedEmployeeDto = EmployeeMapper.mapToEmployeeDto(saveDEmployee);

        return savedEmployeeDto;
    }

    //@CircuitBreaker(name = "${spring.application.name}", fallbackMethod = "getDefaultDepartment")
    @Retry(name = "${spring.application.name}", fallbackMethod = "getDefaultDepartment")
    @Override
    public APIResponseDto getEmployeeById(Long employeeId) {
        LOGGER.info("inside getEmployeeById() method");
        Employee employee = employeeRepository.findById(employeeId).get();

          Department department = departmentRepository.findByDepartmentCode(employee.getDepartmentCode());
          DepartmentDto departmentDto= DepartmentMapper.mapToDepartmentDto(department);
          Organization organization=organizationRepository.findByOrganizationCode(employee.getOrganizationCode());
          OrganizationDto organizationDto=OrganizationMapper.mapToOrganizationDto(organization);

        EmployeeDto employeeDto = EmployeeMapper.mapToEmployeeDto(employee);

        APIResponseDto apiResponseDto = new APIResponseDto();
        apiResponseDto.setEmployee(employeeDto);
        apiResponseDto.setDepartmentDto(departmentDto);
        apiResponseDto.setOrganization(organizationDto);
        return apiResponseDto;
    }
    @Override
    public APIResponseDto updateEmploy(Long employeeId,EmployeeDto employeeDto){
        LOGGER.info("inside updateEmploy() method");
        Employee employee = employeeRepository.findById(employeeId).get();
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());
        employee.setDepartmentCode(employeeDto.getDepartmentCode());
        employee.setOrganizationCode(employeeDto.getOrganizationCode());

        Employee updatedEmployee = employeeRepository.save(employee);
        APIResponseDto apiResponseDto = new APIResponseDto();
        apiResponseDto.setEmployee(employeeDto);
        Department department = departmentRepository.findByDepartmentCode(employee.getDepartmentCode());
        DepartmentDto departmentDto=DepartmentMapper.mapToDepartmentDto(department);
        Organization organization=organizationRepository.findByOrganizationCode(employee.getOrganizationCode());
        OrganizationDto organizationDto=OrganizationMapper.mapToOrganizationDto(organization);
        apiResponseDto.setDepartmentDto(departmentDto);
        apiResponseDto.setOrganization(organizationDto);
        return apiResponseDto;
    }
    @Override
    public List<EmployeeDto> findAll() {
        List<Employee> empListEn=new ArrayList<>();
        List<EmployeeDto> empListDto=new ArrayList<>();
        empListEn=employeeRepository.findAll();
        for(int i=0;i<empListEn.size();i++){
            empListDto.add(EmployeeMapper.mapToEmployeeDto(empListEn.get(i)));

        }
        return empListDto;
    }

    public APIResponseDto getDefaultDepartment(Long employeeId, Exception exception) {

        LOGGER.info("inside getDefaultDepartment() method");

        Employee employee = employeeRepository.findById(employeeId).get();

        DepartmentDto departmentDto = new DepartmentDto();
        departmentDto.setDepartmentName("R&D Department");
        departmentDto.setDepartmentCode("RD001");
        departmentDto.setDepartmentDescription("Research and Development Department");

        EmployeeDto employeeDto = EmployeeMapper.mapToEmployeeDto(employee);

        APIResponseDto apiResponseDto = new APIResponseDto();
        apiResponseDto.setEmployee(employeeDto);
        apiResponseDto.setDepartmentDto(departmentDto);
        return apiResponseDto;
    }
    @Override
    public String deleteEmploy(Long employeeId) {

        LOGGER.info("inside getEmployeeById() method");
        Employee employee = employeeRepository.findById(employeeId).get();

        employeeRepository.delete(employee);

        return "OK";
    }

    @Override
    public List<EmployeeDto> findAllByFirstName(String firstNameLike) {
        List<Employee> empListEn=new ArrayList<>();
        List<EmployeeDto> empListDto=new ArrayList<>();
        empListEn=employeeRepository.findByFirstNameLike(firstNameLike);
        for(int i=0;i<empListEn.size();i++){
            empListDto.add(EmployeeMapper.mapToEmployeeDto(empListEn.get(i)));

        }
        return empListDto;

    }

    @Override
    public EmployeeDto getEmployeeByEmail(String email) {
        Employee emp=employeeRepository.findByEmail(email);
        if(emp!=null){
            EmployeeDto empDto=EmployeeMapper.mapToEmployeeDto(emp);
            return empDto;
        }else{
            return null;
        }


    }

}
