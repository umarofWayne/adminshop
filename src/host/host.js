import axios from 'axios';
export const host = "http://shop.abrorjonaxmadov.uz";
export const access_token =localStorage.getItem('token')
export const lang =(localStorage.getItem('lang')==null?("en"):(localStorage.getItem('lang')));


export function httpRequest(config){
    return axios({
      ...config,
    }); 
   
  };