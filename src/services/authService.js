import axios from "axios";
import jwt_decode from 'jwt-decode';

const authUrl = 'http://localhost:8080/api/v1/authenticate';
const registerUrl = 'http://localhost:8080/api/v1/users';

const authService = {
    signIn(userDetails, callback) {
        axios.post(authUrl, userDetails).then((response) => {
        console.log(response.data.access_token);
            const token = response.data.access_token
            const userclaims = jwt_decode(token)
            const user = {
                accessToken: response.data.access_token,
                refreshToken: response.data.refresh_token,
                role: userclaims.roles[0],
                username: userclaims.sub
            }

            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('refresh_token', response.data.refresh_token)
            localStorage.setItem('role', userclaims.roles[0])
            localStorage.setItem('username', userclaims.sub)
            
            callback(user);
        })
        .catch((error) => console.log(error));
    },

    signUp(userDetails, callback) {
        console.log(userDetails,"---------");
        axios.post(registerUrl, userDetails).then((response) => {
            const token = response.data.access_token
            const userclaims = jwt_decode(token)
            const user = {
                accessToken: response.data.access_token,
                refreshToken: response.data.refresh_token,
                role: userclaims.roles[0],
                username: userclaims.sub
            }

            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('refresh_token', response.data.refresh_token)
            localStorage.setItem('role', userclaims.roles[0])
            localStorage.setItem('username', userclaims.sub)
            
            callback(user);
        })
        .catch((error) => console.log(error));
    },

    signOut() {

    }
}

export default authService