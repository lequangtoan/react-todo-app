import axiosClient from "./axiosClient";

const todoApi = {
  getTodoLists: (params) => {
    const url = "/todo";
    return axiosClient.get(url, { params });
  },

  getTask: (id) => {
    const url = "/todo" + id;
    return axiosClient.get(url);
  },

  plusTask: (data) => {
    const url = "/todo/";
    return axiosClient.post(url, data);
  },

  updateTask(data) {
    const url = `/todo/${data.id}`;
    return axiosClient.put(url, data);
  },

  removeTask(id) {
    const url = `/todo/${id}`;
    return axiosClient.delete(url);
  },
};

export default todoApi;
