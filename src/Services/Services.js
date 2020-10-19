import * as axios from 'axios';

const url = "http://localhost:9999/";

export const textUpdated = async (text)=>{
    return await axios.post(url, {text});
}

export const callNoApi = async (no)=>{
    return await axios.get(`http://numbersapi.com/${no}`)
}