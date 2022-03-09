import axios from 'axios';

// --------------------  userlogin api call --------------------------//
export const userdata = async (username,password) =>{
    console.log(username,password)
    const url = 'http://192.168.1.13:3008/';
    return axios.post(url,{username,password}).then(res=>res.data).catch(err=>console.log(err))
}