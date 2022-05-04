import axios from "axios";


const instance = axios.create({
    baseURL: 'https://sheet.best/api/sheets/4d75a8b6-0dbc-44af-8465-9cf163faacf6/'
})

export const getAllRows = (id) => {

    return instance.get(`/${id}`)
        .then((response) => {
        return    response.data
        })
        .then((data) => {
            console.log(data);
        })
 
}