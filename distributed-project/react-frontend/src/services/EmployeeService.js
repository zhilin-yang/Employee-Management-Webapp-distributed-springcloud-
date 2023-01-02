import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9191/api/employeeman/employees";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employeeDto, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId,employeeDto);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
    searchEm(firstName){
        return axios.get(EMPLOYEE_API_BASE_URL + '/searchEmp/' + firstName);

    }
}

export default new EmployeeService()