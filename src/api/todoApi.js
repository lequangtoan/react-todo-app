import axiosClient from "./axiosClient";

const todoApi = {
  getTodoLists: (params) => {
    const url = "/todo";
    return axiosClient.get(url, { params });
  },

  getCards: (id) => {
    const url = "/todo" + id;
    return axiosClient.get(url);
  },

  plusCard: (data) => {
    const url = "/todo/";
    return axiosClient.post(url, data);
  },

  updateCard(data) {
    const url = `/todo/${data.id}`;
    return axiosClient.patch(url, data);
  },

  removeCard(id) {
    const url = `/todo/${id}`;
    return axiosClient.delete(url);
  },
};

export default todoApi;
