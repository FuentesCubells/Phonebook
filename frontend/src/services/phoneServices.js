import axios from "axios";

const baseUrl = "http://localhost:3001/";

const getAll = async () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const add = async (formData) => {
  const request = axios.post(baseUrl + "add", formData);
  return request.then((response) => response.data);
};

const edit = async (formData, id) => {
    
    const request = axios.put(baseUrl + `edit/${id}`, formData)
    return request.then((response) => response.data);
};

const deleteContact = async (id, deleteData) => {
  try {
    const response = await axios.delete(baseUrl + `delete/${id}`, deleteData);

    return response.data;
  } catch (error) {
    // Handle errors here
    console.error('Error:', error);
    throw error; // Re-throw the error if needed
  }
};

export default {
  get: getAll,
  add: add,
  edit: edit,
  deleteContact : deleteContact,
};
