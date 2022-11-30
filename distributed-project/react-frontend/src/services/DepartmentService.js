import axios from 'axios';

const DEPARTMENT_API_BASE_URL = "http://localhost:9191/api/departments";

class DepartmentService {

    getDeps(){
        return axios.get(DEPARTMENT_API_BASE_URL);
    }
    createDep(dep){
        alert(123)
        return axios.post(DEPARTMENT_API_BASE_URL, dep);
    }

    getDepById(depId){
        return axios.get(DEPARTMENT_API_BASE_URL + '/' + depId);
    }

    updateDep(depDto, depId){
        return axios.put(DEPARTMENT_API_BASE_URL + '/' + depId,depDto);
    }

    deleteDep(depId){
        return axios.delete(DEPARTMENT_API_BASE_URL + '/' + depId);
    }
}

export default new DepartmentService()