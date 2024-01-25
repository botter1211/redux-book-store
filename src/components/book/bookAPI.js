import api from "../../apiService";

export const fetchBooks = async ({ query, pageNum, limit }) => {
  try {
    let url = `/books?_page=${pageNum}&_limit=${limit}`;
    if (query) url += `&q=${query}`;
    const response = await api.get(url);
    return response;
  } catch (error) {
    return error;
  }
};
