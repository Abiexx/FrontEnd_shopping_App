import axios from "axios";

const usersApi = 'http://localhost:8080/api/v1/users';
// const rolesApi = 'http://localhost:8080/api/v1/roles';

const getUsers = () => axios.get(`${usersApi}`);

const getUserById = (userId) => axios.get(`${usersApi}/${userId}`);

const saveUser = (userData) => axios.post(`${usersApi}/addUser`, userData);

const deleteUserById = (userId) => axios.delete(`${usersApi}/${userId}`);

const registerUserwithRole =(userData,role) => {axios.post(`${usersApi}/addUser/${role}`, userData);console.log("jjjjjj",userData, role);}




const userService = {
    getUsers, 
    getUserById, 
    deleteUserById, 
    saveUser,
    registerUserwithRole
};

export default userService;