import axios from "axios";
//baseURL: 'https://sheet.best/api/sheets/4d75a8b6-0dbc-44af-8465-9cf163faacf6/'

const instance = axios.create({
    
    baseURL: 'https://script.google.com/macros/s/AKfycby4mo1ga2FHPuJ1aulWASyW0NGuHlVUpWf85lDNiLXc9ZQwO0unDciUMXipmeNzALesog',
  
})
//url https://script.google.com/macros/s/AKfycby4mo1ga2FHPuJ1aulWASyW0NGuHlVUpWf85lDNiLXc9ZQwO0unDciUMXipmeNzALesog/exec
//идентификатор приложения развертывания AKfycby4mo1ga2FHPuJ1aulWASyW0NGuHlVUpWf85lDNiLXc9ZQwO0unDciUMXipmeNzALesog
export const getAllRows = () => {
 
    return instance.get(`/exec`)
        .then((response) => {
        return    response.data.data
        })
        
 
}