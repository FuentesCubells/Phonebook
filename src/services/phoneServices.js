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


const edit = async (formData, nameParam) => {
    const formattedName = encodeURIComponent(nameParam);
    const request = await axios.put(baseUrl + `edit/${formattedName}`, formData);
};

const deleteContact = async (nameParam, deleteData) => {
  try {
    const formattedName = encodeURIComponent(nameParam);
    const response = await axios.delete(baseUrl + `delete/${formattedName}`, deleteData);

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
