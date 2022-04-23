import axios from "axios";

const authUrl = 'http://localhost:8080/api/v1/authenticate';

const login = (userName, password) => {
     return axios.post(authUrl, {userName, password});
}

const authService = {
    login
}

export default authService;