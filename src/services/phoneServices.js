import axios from "axios";

const baseUrl = "http://localhost:3001/";

const getAll = () => {
    
    const request = axios.get(baseUrl)
    return( request.then(response => response.data) );

}

const add = (formData) => {
   
    const request = axios.post(baseUrl + 'add', formData);
    return ( request.then(response => response.data) );

}

export default  {
    get: getAll,
    add: add,
}