import axios from 'axios';

const URL = ''; 

export const addUser = async (data) => {
    try{
        await axios.post(`${URL}/add`, data)
    } catch(e) {
        console.log("Error while calling add user api", e); 
    }
}