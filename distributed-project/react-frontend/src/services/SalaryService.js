import axios from 'axios';

const Salary_API_BASE_URL = "http://localhost:9191/api/salaries";

class SalaryService {

    getSalaries(role, email) {
        if (role == 0) {
            return axios.get(Salary_API_BASE_URL);

        } else {
            return axios.get(Salary_API_BASE_URL + '/getCurrentEmp/' + email);
        }

    }

    createSalary(salary) {
        return axios.post(Salary_API_BASE_URL, salary);
    }

    getSalaryById(employeeId) {

        return axios.get(Salary_API_BASE_URL + '/' + employeeId);
    }

    updateSalary(salaryDto, employeeId) {
        return axios.put(Salary_API_BASE_URL + '/' + employeeId, salaryDto);
    }

    deleteSalary(employeeId) {
        return axios.delete(Salary_API_BASE_URL + '/' + employeeId);
    }
}

export default new SalaryService()