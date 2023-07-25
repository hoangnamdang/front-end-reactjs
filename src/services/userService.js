import axios from "../axios";
const handleLoginUser = (email, password) => {
  return axios.post("/api-login", { email: email, password: password });
};

const handleGetAllUser = (id) => {
  return axios.get(`/api/get-all-user?id=${id}`);
};

const handleDeleteUser = (id) => {
  return axios.delete("/api/delete-user", { data: { id: id } });
};

const handleAddNewUser = (data) => {
  return axios.post("/api/add-new-user", { data: data });
};

const handleEditUser = (data) => {
  return axios.put("/api/edit-user", { data: data });
};

const handleGetDataAllCodeByType = (type) => {
  return axios.get(`/allcode/?type=${type}`);
};
export {
  handleLoginUser,
  handleGetAllUser,
  handleDeleteUser,
  handleAddNewUser,
  handleEditUser,
  handleGetDataAllCodeByType,
};
