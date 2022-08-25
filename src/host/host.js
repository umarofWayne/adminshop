import axios from 'axios';
export const host = "https://shop.abrorjonaxmadov.uz";
export const  access_token =localStorage.getItem('token')
export const lang =(localStorage.getItem('lang')==null?("ru"):(localStorage.getItem('lang')));


export function httpRequest(config){
    return axios({
      ...config,
    }); 
   
  };
