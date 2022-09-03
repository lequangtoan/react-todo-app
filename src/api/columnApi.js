import axiosClient from "./axiosClient";

const columnApi = {
  getColumnLists: (params) => {
    const url = "/column";
    return axiosClient.get(url, { params });
  },
};

export default columnApi;
