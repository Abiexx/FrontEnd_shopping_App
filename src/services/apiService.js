import axios from "axios";

const usersApi = 'http://localhost:8080/api/v1/users';

const getUsers = () => axios.get(`${usersApi}`);

const getUserById = (userId) => axios.get(`${usersApi}/${userId}`);

const saveUser = (userData) => axios.post(`${usersApi}`, userData);

const deleteUserById = (userId) => axios.delete(`${usersApi}/${userId}`);

const apiService = {
    getUsers, 
    getUserById, 
    deleteUserById, 
    saveUser
};

export default apiService;