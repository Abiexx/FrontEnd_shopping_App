import axios from "axios";

const authUrl = 'http://localhost:8080/api/v1/authenticate';

const authService = {
    login(userDetails) {
        return axios.post(authUrl, userDetails);
    }
}

export default authService