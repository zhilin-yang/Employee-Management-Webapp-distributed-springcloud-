import axios from 'axios';

const USE_API_BASE_URL = "http://localhost:9191/api/users";


class UserService {
    login(user){
        return axios.post(USE_API_BASE_URL+ '/login' , user);
    }
    signin(user){
        return axios.post(USE_API_BASE_URL+ '/signin' , user);
    }
    getPasswordByEmail(Email){
        return axios.get(USE_API_BASE_URL + '/changeP/' + Email);

    }
    confirmP(user){
        return axios.post(USE_API_BASE_URL+ '/confirmP' , user);

    }
   
}

export default new UserService()