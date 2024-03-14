import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  console.log("getAll");
  return axios.get(baseUrl);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const update = (id, newObject) => {
  console.log(id, newObject);
  return axios.put(`${baseUrl}/${id}`, newObject);
};

const remove = (id) => {
  return axios
    .delete(baseUrl + "/" + id)
    .then((response) => response.data)
    .catch((error) => {
      // pass the error upwards to DeleteButton
      throw new Error(error);
    });
};

export default {
  getAll: getAll,
  create: create,
  update: update,
  remove: remove,
};
